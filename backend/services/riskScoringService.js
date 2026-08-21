import { RISK_LEVELS, ACTIONS } from '../config/constants.js';
import { ThreatDbService } from './threatDbService.js';
import { ExplainabilityService } from './explainabilityService.js';
import { db } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

export class RiskScoringService {
  /**
   * Pre-Transaction Fraud Risk Evaluation for UPI
   */
  static async evaluateTransactionRisk({
    userId = 'user_demo_001',
    vpa,
    amount = 0,
    note = '',
    deviceContext = {},
    callContext = {}
  }) {
    if (!vpa) {
      throw new Error('Recipient UPI ID (VPA) is required.');
    }

    const cleanVpa = vpa.trim().toLowerCase();
    const numAmount = Number(amount) || 0;
    
    // Fetch User Profile & Preferences
    const user = db.users.get(userId) || db.users.get('user_demo_001');
    const userLimit = user?.settings?.maxAmountLimit || 10000;
    const userLang = user?.settings?.language || 'en';

    // 1. Threat Database Lookup
    const threatRecord = await ThreatDbService.lookupIdentifier(cleanVpa);

    // 2. Check if Payee is in Trusted List
    const isTrustedPayee = user?.trustedPayees?.some(p => p.vpa.toLowerCase() === cleanVpa) || false;

    // 3. Multi-Factor Risk Calculation
    let score = 0;
    const factorDetections = [];

    // Factor A: VPA Threat History (Weight: 45%)
    if (threatRecord) {
      if (threatRecord.isBlacklisted) {
        score += 55;
        factorDetections.push(`Known malicious VPA registered in ${threatRecord.source}`);
      } else {
        score += (threatRecord.riskScore * 0.4);
        factorDetections.push(`Suspicious VPA characteristics (${threatRecord.name})`);
      }
    } else if (isTrustedPayee) {
      score -= 20; // Trust bonus
    }

    // Factor B: Coercive Context / Live Call During Payment (Weight: 25%)
    const isOnActiveCall = Boolean(callContext.isOnCall || deviceContext.activeCallDetected);
    const activeCallerNumber = callContext.activeCallerNumber || deviceContext.activeCallerNumber;
    let callerThreat = null;

    if (isOnActiveCall) {
      score += 25;
      factorDetections.push('Active voice call detected concurrent with UPI transaction flow');
      
      if (activeCallerNumber) {
        callerThreat = await ThreatDbService.lookupIdentifier(activeCallerNumber);
        if (callerThreat?.isBlacklisted) {
          score += 20;
          factorDetections.push(`Active call is from high-risk flagged number: ${activeCallerNumber}`);
        }
      }
    }

    // Factor C: Device Anomalies & Screen Sharing (Weight: 20%)
    if (deviceContext.screenSharingActive || deviceContext.remoteControlAppDetected) {
      score += 35;
      factorDetections.push('Screen sharing or remote desktop app (AnyDesk/TeamViewer) active on device');
    }

    if (deviceContext.isNewDevice) {
      score += 15;
      factorDetections.push('Transaction initiated from newly enrolled unrecognized device');
    }

    // Factor D: Amount & Velocity Anomalies (Weight: 15%)
    const amountExceeded = numAmount > userLimit;
    if (amountExceeded) {
      const overageRatio = numAmount / userLimit;
      const overageScore = Math.min(25, Math.round(overageRatio * 8));
      score += overageScore;
      factorDetections.push(`Amount ₹${numAmount} exceeds configured safety threshold of ₹${userLimit}`);
    }

    // Factor E: Note / Description NLP Checks
    if (note) {
      const noteLower = note.toLowerCase();
      if (noteLower.includes('refund') || noteLower.includes('reward') || noteLower.includes('task') || noteLower.includes('fine') || noteLower.includes('bail')) {
        score += 15;
        factorDetections.push(`Payment description contains high-frequency social engineering trigger word`);
      }
    }

    // Clamp score to 0 - 100
    const finalScore = Math.min(100, Math.max(0, Math.round(score)));

    // Categorize Risk Level & Action Recommendation
    let riskLevel = RISK_LEVELS.SAFE;
    let action = ACTIONS.ALLOW;

    if (finalScore >= 80 || threatRecord?.isBlacklisted) {
      riskLevel = threatRecord?.isBlacklisted ? RISK_LEVELS.CRITICAL_BLOCKED : RISK_LEVELS.HIGH_RISK;
      action = threatRecord?.isBlacklisted ? ACTIONS.RESTRICT_BLOCK : ACTIONS.WARN_CONFIRMATION;
    } else if (finalScore >= 50) {
      riskLevel = RISK_LEVELS.HIGH_RISK;
      action = ACTIONS.WARN_CONFIRMATION;
    } else if (finalScore >= 25 || amountExceeded) {
      riskLevel = RISK_LEVELS.CAUTION;
      action = ACTIONS.WARN_CONFIRMATION;
    } else if (finalScore >= 10) {
      riskLevel = RISK_LEVELS.LOW;
      action = ACTIONS.ALLOW;
    }

    // Generate Explainability Engine Output
    const explanation = ExplainabilityService.generateExplanation({
      riskScore: finalScore,
      riskLevel,
      reasons: factorDetections,
      threatData: threatRecord,
      coercionDetected: isOnActiveCall,
      amountExceeded,
      amount: numAmount,
      maxLimit: userLimit,
      language: userLang
    });

    const assessmentResult = {
      assessmentId: `risk-eval-${uuidv4()}`,
      vpa: cleanVpa,
      amount: numAmount,
      riskScore: finalScore,
      riskLevel,
      recommendedAction: action,
      isBlocked: action === ACTIONS.RESTRICT_BLOCK,
      requiresBiometricConfirmation: action === ACTIONS.WARN_CONFIRMATION,
      factorBreakdown: {
        vpaRisk: threatRecord ? threatRecord.riskScore : (isTrustedPayee ? 0 : 10),
        coercionRisk: isOnActiveCall ? (callerThreat ? 95 : 60) : 0,
        deviceRisk: (deviceContext.screenSharingActive || deviceContext.remoteControlAppDetected) ? 80 : 0,
        amountRisk: amountExceeded ? 65 : 0
      },
      explanation,
      threatDetails: threatRecord || null,
      deviceContext: {
        isOnActiveCall,
        activeCallerNumber: activeCallerNumber || null,
        screenSharingActive: Boolean(deviceContext.screenSharingActive)
      },
      timestamp: new Date().toISOString()
    };

    // Save transaction log into memory/audit DB
    db.transactionLogs.set(assessmentResult.assessmentId, assessmentResult);
    db.save();

    return assessmentResult;
  }
}
