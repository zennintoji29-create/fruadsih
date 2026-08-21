import { db } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

export class InstitutionController {
  /**
   * Submit a False Positive dispute/appeal (by User or Merchant)
   */
  static async submitAppeal(req, res) {
    try {
      const { assessmentId, vpa, appellantType, contactEmail, reason, evidenceDescription } = req.body;

      if (!assessmentId && !vpa) {
        return res.status(400).json({
          success: false,
          message: 'Either assessmentId or vpa must be provided to dispute.'
        });
      }

      const appealId = `appeal-${uuidv4()}`;
      const newAppeal = {
        appealId,
        assessmentId: assessmentId || null,
        vpa: vpa ? vpa.trim().toLowerCase() : null,
        appellantType: appellantType || 'CONSUMER', // 'CONSUMER' | 'MERCHANT' | 'BENEFICIARY'
        contactEmail: contactEmail || 'user@example.com',
        reason: reason || 'Transaction was legitimate and flagged by mistake.',
        evidenceDescription: evidenceDescription || '',
        status: 'PENDING_REVIEW', // 'PENDING_REVIEW' | 'APPROVED_WHITELISTED' | 'REJECTED'
        submittedAt: new Date().toISOString(),
        reviewerNotes: null,
        resolvedAt: null
      };

      db.falsePositiveAppeals.set(appealId, newAppeal);
      db.save();

      return res.status(201).json({
        success: true,
        message: 'False positive appeal submitted. Bank compliance team will review within 24 hours.',
        appeal: newAppeal
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Get all False Positive Appeals (for Bank Fraud Review Dashboard)
   */
  static async getAppeals(req, res) {
    try {
      const appeals = Array.from(db.falsePositiveAppeals.values()).reverse();
      return res.status(200).json({
        success: true,
        count: appeals.length,
        appeals
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Bank Officer Resolves Appeal (Approve / Reject & update threat DB)
   */
  static async resolveAppeal(req, res) {
    try {
      const { appealId } = req.params;
      const { resolution, reviewerNotes, officerId = 'BANK_OFFICER_042' } = req.body;

      if (!['APPROVED_WHITELISTED', 'REJECTED'].includes(resolution)) {
        return res.status(400).json({
          success: false,
          message: 'Resolution must be either APPROVED_WHITELISTED or REJECTED.'
        });
      }

      const appeal = db.falsePositiveAppeals.get(appealId);
      if (!appeal) {
        return res.status(404).json({ success: false, message: 'Appeal ticket not found.' });
      }

      appeal.status = resolution;
      appeal.reviewerNotes = reviewerNotes || `Reviewed and ${resolution} by Officer ${officerId}`;
      appeal.resolvedBy = officerId;
      appeal.resolvedAt = new Date().toISOString();

      // If approved, un-blacklist the VPA in threat DB
      if (resolution === 'APPROVED_WHITELISTED' && appeal.vpa) {
        const record = db.threatRegistry.get(appeal.vpa.toLowerCase());
        if (record) {
          record.isBlacklisted = false;
          record.riskScore = 15;
          record.details = `False Positive Approved: Verified legitimate merchant by Bank Officer ${officerId}.`;
          db.threatRegistry.set(appeal.vpa.toLowerCase(), record);
        }
      }

      db.falsePositiveAppeals.set(appealId, appeal);
      db.save();

      return res.status(200).json({
        success: true,
        message: `Appeal successfully resolved: ${resolution}`,
        appeal
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Institutional Analytics & Fraud Shield Telemetry
   */
  static async getAnalyticsOverview(req, res) {
    try {
      const transactions = Array.from(db.transactionLogs.values());
      const calls = Array.from(db.callReports.values());
      const appeals = Array.from(db.falsePositiveAppeals.values());
      const threats = Array.from(db.threatRegistry.values());

      const totalBlocked = transactions.filter(t => t.isBlocked).length;
      const totalWarned = transactions.filter(t => t.requiresBiometricConfirmation).length;
      const totalVoicePhishCaught = calls.filter(c => c.phishingDetected).length;
      const totalVolumeProtected = transactions
        .filter(t => t.isBlocked || t.riskScore >= 70)
        .reduce((sum, t) => sum + (t.amount || 0), 0);

      return res.status(200).json({
        success: true,
        analytics: {
          totalEvaluatedTransactions: transactions.length,
          totalBlockedTransactions: totalBlocked,
          totalWarnedTransactions: totalWarned,
          totalVoiceCallsScreened: calls.length,
          totalVoicePhishingCaught: totalVoicePhishCaught,
          totalVolumeProtectedINR: totalVolumeProtected,
          activeThreatRegistrySize: threats.length,
          pendingFalsePositiveAppeals: appeals.filter(a => a.status === 'PENDING_REVIEW').length,
          resolvedAppeals: appeals.filter(a => a.status !== 'PENDING_REVIEW').length
        }
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
}
