import { RiskScoringService } from '../services/riskScoringService.js';
import { db } from '../config/db.js';

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
        deviceContext,
        callContext
      } = req.body;

      if (!vpa) {
        return res.status(400).json({
          success: false,
          message: 'Target recipient UPI ID (VPA) is required.'
        });
      }

      const result = await RiskScoringService.evaluateTransactionRisk({
        userId,
        vpa,
        amount,
        note,
        deviceContext,
        callContext
      });

      return res.status(200).json({
        success: true,
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
   * User Confirmation Override for Legitimate Urgent Transactions
   */
  static async confirmOverride(req, res) {
    try {
      const { assessmentId, overrideReason, biometricVerified = true } = req.body;

      if (!assessmentId) {
        return res.status(400).json({
          success: false,
          message: 'Assessment ID is required for confirmation override.'
        });
      }

      const log = db.transactionLogs.get(assessmentId);
      if (!log) {
        return res.status(404).json({
          success: false,
          message: 'Transaction evaluation record not found.'
        });
      }

      log.userOverride = {
        overridden: true,
        overrideReason: overrideReason || 'User confirmed recipient identity after review.',
        biometricVerified: Boolean(biometricVerified),
        confirmedAt: new Date().toISOString()
      };
      log.status = 'USER_CONFIRMED_PROCEEDED';

      db.transactionLogs.set(assessmentId, log);
      db.save();

      return res.status(200).json({
        success: true,
        message: 'Transaction verified and approved to proceed to UPI payment gateway.',
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
