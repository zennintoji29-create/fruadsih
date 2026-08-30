import { RiskScoringService } from '../services/riskScoringService.js';
import { db } from '../config/db.js';

export const liveIntentQueue = [];

export class RiskController {
  /**
   * Pre-Transaction Risk Check
   */
  static async evaluateRisk(req, res) {
    try {
      const {
        userId,
        vpa,
        amount,
        note,
        contextNote,
        message,
        recipientName,
        language,
        deviceContext,
        callContext
      } = req.body;

      if (!vpa) {
        return res.status(400).json({
          success: false,
          message: 'Target recipient UPI ID (VPA) is required.'
        });
      }

      const effectiveNote = note || contextNote || message || '';

      const result = await RiskScoringService.evaluateTransactionRisk({
        userId,
        vpa,
        amount,
        note: effectiveNote,
        language,
        deviceContext: deviceContext || {},
        callContext: callContext || (deviceContext?.activeCallDetected ? { isOnCall: true } : {})
      });

      const isApproved = result.riskScore < 60 && !result.isBlocked;
      const triggers = result.explanation?.bulletPoints?.map(bp => `${bp.title}: ${bp.description}`) || [];
      const recommendedAction = isApproved ? 'PROCEED_PAYMENT' : 'BLOCK_TRANSFER';
      const action = isApproved ? 'APPROVE' : 'REJECT';

      // Push to live real-time intent queue for Web Dashboard (verix-web.onrender.com)
      const liveIntent = {
        id: result.assessmentId || `intent-${Date.now()}`,
        vpa: vpa.trim(),
        amount: Number(amount) || 0,
        note: note ? note.trim() : '',
        recipientName: recipientName || vpa.trim(),
        riskScore: result.riskScore,
        riskLevel: result.riskLevel,
        action: action,
        isApproved: isApproved,
        triggers: triggers,
        recommendedAction: recommendedAction,
        deviceContext: deviceContext || {},
        timestamp: new Date().toISOString()
      };
      // Store in memory queue
      liveIntentQueue.unshift(liveIntent);
      if (liveIntentQueue.length > 50) liveIntentQueue.pop();

      return res.status(200).json({
        success: true,
        riskScore: result.riskScore,
        isApproved,
        action,
        triggers,
        recommendedAction,
        data: result
      });
    } catch (error) {
      console.error('[RiskController] Evaluation Error:', error);
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * Scan / Drop UPI QR Code & Evaluate Risk Automatically
   * Parses standard NPCI UPI QR string: `upi://pay?pa=...&pn=...&am=...&tn=...`
   */
  static async scanQr(req, res) {
    try {
      const { qrString, qrImageBase64, userId, deviceContext, callContext } = req.body;

      if (!qrString && !qrImageBase64) {
        return res.status(400).json({
          success: false,
          message: 'QR payload string (upi://pay?...) or QR image is required.'
        });
      }

      let rawPayload = qrString;
      if (!rawPayload && qrImageBase64) {
        // Mock / fallback QR image payload parser
        rawPayload = 'upi://pay?pa=scammer.cybercell@oksbi&pn=Cyber%20Police%20Fine&am=25000&cu=INR&tn=Digital%20Arrest%20Bail';
      }

      // Parse NPCI UPI URI Query parameters
      let vpa = '';
      let payeeName = '';
      let amount = 0;
      let note = '';

      if (rawPayload.startsWith('upi://pay') || rawPayload.includes('?')) {
        const queryStr = rawPayload.includes('?') ? rawPayload.split('?')[1] : rawPayload;
        const params = new URLSearchParams(queryStr);
        vpa = params.get('pa') || '';
        payeeName = decodeURIComponent(params.get('pn') || '');
        amount = Number(params.get('am')) || 0;
        note = decodeURIComponent(params.get('tn') || params.get('note') || '');
      } else {
        // Plain VPA string passed inside QR
        vpa = rawPayload.trim();
      }

      if (!vpa) {
        return res.status(400).json({
          success: false,
          message: 'Unable to extract valid UPI ID (pa parameter) from QR payload.'
        });
      }

      const riskResult = await RiskScoringService.evaluateTransactionRisk({
        userId,
        vpa,
        amount,
        note,
        deviceContext,
        callContext
      });

      return res.status(200).json({
        success: true,
        extractedQrData: {
          vpa,
          payeeName: payeeName || vpa,
          amount,
          note,
          rawPayload
        },
        riskAssessment: riskResult
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * User / Supervisor Confirmation Override for Legitimate Urgent Transactions (Item 4 of Verix Spec)
   */
  static async confirmOverride(req, res) {
    try {
      const { assessmentId, vpa, amount, officerToken, justification, overrideReason, biometricVerified = true } = req.body;

      const generatedAuditId = `OVR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const targetId = assessmentId || generatedAuditId;

      const log = db.transactionLogs.get(targetId) || {
        assessmentId: targetId,
        vpa: vpa || 'n/a',
        amount: Number(amount) || 0,
        status: 'USER_CONFIRMED_PROCEEDED'
      };

      log.userOverride = {
        overridden: true,
        officerToken: officerToken || 'BIOMETRIC_PASS',
        justification: justification || overrideReason || 'Manual branch/user clearance.',
        biometricVerified: Boolean(biometricVerified),
        confirmedAt: new Date().toISOString()
      };
      log.status = 'USER_CONFIRMED_PROCEEDED';

      db.transactionLogs.set(targetId, log);
      db.save();

      return res.status(200).json({
        success: true,
        status: 'OVERRIDE_RECORDED',
        auditId: targetId.startsWith('OVR-') ? targetId : generatedAuditId,
        timestamp: new Date().toISOString(),
        message: 'Supervisor override recorded successfully',
        transaction: log
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * Get Transaction History & Risk Audit Logs
   */
  static async getHistory(req, res) {
    try {
      const logs = Array.from(db.transactionLogs.values()).reverse();
      return res.status(200).json({
        success: true,
        count: logs.length,
        transactions: logs
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}
