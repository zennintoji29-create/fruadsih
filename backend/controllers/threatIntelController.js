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
   * Report new Scammer VPA or Phone
   */
  static async report(req, res) {
    try {
      const { identifier, type, category, details, reportedBy } = req.body;
      if (!identifier) {
        return res.status(400).json({ success: false, message: 'Identifier (VPA or Phone) is required.' });
      }

      const record = await ThreatDbService.reportScammer({
        identifier,
        type,
        category,
        details,
        reportedBy
      });

      return res.status(201).json({
        success: true,
        message: 'Threat reported successfully',
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
