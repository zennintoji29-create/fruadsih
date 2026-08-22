import { ThreatDbService } from '../services/threatDbService.js';
import { db } from '../config/db.js';

export class ThreatIntelController {
  /**
   * Search / Lookup any VPA or Phone against threat registry
   */
  static async lookup(req, res) {
    try {
      const query = req.query.query || req.query.vpa || req.query.phone;
      if (!query) {
        return res.status(400).json({
          success: false,
          message: 'Query parameter (VPA or Phone) is required.'
        });
      }

      const threat = await ThreatDbService.lookupIdentifier(query);
      return res.status(200).json({
        success: true,
        isThreat: Boolean(threat),
        data: threat || {
          identifier: query,
          status: 'CLEAN',
          riskScore: 0,
          details: 'No fraudulent records found.'
        }
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Report new Scammer VPA or Phone (Item 5 of Verix Spec)
   */
  static async report(req, res) {
    try {
      const { vpa, amount, threatType, evidenceNote, reportedBy, identifier, type, category, details } = req.body;
      const targetIdentifier = vpa || identifier;

      if (!targetIdentifier) {
        return res.status(400).json({ success: false, message: 'Recipient UPI ID (vpa or identifier) is required.' });
      }

      const effectiveType = type || (targetIdentifier.includes('@') ? 'VPA' : 'PHONE');
      const effectiveCategory = threatType || category || 'EXTORTION_FRAUD';
      const effectiveDetails = evidenceNote || details || `Reported amount ₹${amount || 0}`;

      const record = await ThreatDbService.reportScammer({
        identifier: targetIdentifier,
        type: effectiveType,
        category: effectiveCategory,
        details: effectiveDetails,
        reportedBy: reportedBy || 'admin@verix.gov.in'
      });

      const reportId = `I4C-REP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      return res.status(201).json({
        success: true,
        reportId,
        blacklisted: true,
        message: 'Incident reported to 1930 Cyber Fraud Database',
        data: record
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Get Threat Intelligence Stats
   */
  static async getStats(req, res) {
    try {
      const threats = await ThreatDbService.getAllThreats();
      const totalThreats = threats.length;
      const blacklistedCount = threats.filter(t => t.isBlacklisted).length;
      const vpaCount = threats.filter(t => t.type === 'VPA').length;
      const phoneCount = threats.filter(t => t.type === 'PHONE').length;

      const categoryDistribution = threats.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
      }, {});

      return res.status(200).json({
        success: true,
        stats: {
          totalThreats,
          blacklistedCount,
          vpaCount,
          phoneCount,
          categoryDistribution,
          sourceBreakdown: {
            'I4C_NATIONAL_CYBER_CRIME_PORTAL': threats.filter(t => t.source?.includes('I4C')).length,
            'SANCHAR_SAATHI_CHAKSHU': threats.filter(t => t.source?.includes('SANCHAR')).length,
            'NPCI_MULE_ACCOUNT_REGISTRY': threats.filter(t => t.source?.includes('NPCI')).length,
            'CROWDSOURCED_COMMUNITY': threats.filter(t => t.source?.includes('USER') || t.source?.includes('CROWD')).length
          }
        },
        threats
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
}
