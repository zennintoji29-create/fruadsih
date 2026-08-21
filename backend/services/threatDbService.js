import { db } from '../config/db.js';
import { SEED_THREAT_RECORDS, SEED_DEFAULT_USER } from '../seeds/threatData.js';

export class ThreatDbService {
  static async initialize() {
    await db.init();
    
    // Seed default threat intelligence records if empty
    if (db.threatRegistry.size === 0) {
      SEED_THREAT_RECORDS.forEach(record => {
        db.threatRegistry.set(record.identifier.toLowerCase(), record);
      });
      console.log(`[ThreatDbService] Seeded ${SEED_THREAT_RECORDS.length} threat intelligence entries.`);
    }

    // Seed default demo user if not present
    if (!db.users.has(SEED_DEFAULT_USER.id)) {
      db.users.set(SEED_DEFAULT_USER.id, SEED_DEFAULT_USER);
      db.users.set(SEED_DEFAULT_USER.phone, SEED_DEFAULT_USER);
    }
  }

  static async lookupIdentifier(rawIdentifier) {
    if (!rawIdentifier) return null;
    const identifier = rawIdentifier.trim().toLowerCase();

    // Exact match in Threat Registry
    if (db.threatRegistry.has(identifier)) {
      return db.threatRegistry.get(identifier);
    }

    // Normalized phone lookup (+91 format)
    const cleanPhone = identifier.replace(/[^0-9]/g, '');
    if (cleanPhone && cleanPhone.length >= 7) {
      for (const [key, record] of db.threatRegistry.entries()) {
        if (record.type === 'PHONE') {
          const recordClean = key.replace(/[^0-9]/g, '');
          if (recordClean.endsWith(cleanPhone) || cleanPhone.endsWith(recordClean)) {
            return record;
          }
        }
      }
    }

    // Fuzzy VPA Typosquatting / Impersonation check
    if (identifier.includes('@')) {
      const suspiciousPrefixes = ['cbi', 'police', 'cybercell', 'customs', 'electricity', 'refund', 'sbi_support', 'helpdesk'];
      const vpaPrefix = identifier.split('@')[0];
      for (const prefix of suspiciousPrefixes) {
        if (vpaPrefix.includes(prefix)) {
          return {
            id: `heuristic-${Date.now()}`,
            type: 'VPA',
            identifier: rawIdentifier,
            name: `Suspicious Pattern (${prefix.toUpperCase()})`,
            category: 'HEURISTIC_IMPERSONATION',
            riskScore: 78,
            isBlacklisted: false,
            source: 'HEURISTIC_PATTERN_ANALYZER',
            reportCount: 3,
            details: `VPA uses high-risk authority prefix '${prefix}' often associated with impersonation scams.`,
            tags: ['suspicious_prefix', 'impersonation_risk']
          };
        }
      }
    }

    return null;
  }

  static async reportScammer({ identifier, type, category, details, reportedBy = 'USER_COMMUNITY', source = 'USER_REPORT' }) {
    if (!identifier) throw new Error('Identifier is required');
    const key = identifier.trim().toLowerCase();

    let record = db.threatRegistry.get(key);
    if (record) {
      record.reportCount += 1;
      record.details = `${record.details} | Update: ${details}`;
      record.riskScore = Math.min(100, record.riskScore + 5);
      if (record.reportCount >= 3) {
        record.isBlacklisted = true;
      }
    } else {
      record = {
        id: `threat-${Date.now()}`,
        type: type || (identifier.includes('@') ? 'VPA' : 'PHONE'),
        identifier: identifier.trim(),
        name: `Reported ${category || 'Fraud'} Target`,
        category: category || 'SOCIAL_ENGINEERING',
        riskScore: 85,
        isBlacklisted: true,
        source: source,
        reportCount: 1,
        details: details || 'Reported by user as fraud / spam.',
        tags: ['user_reported', category?.toLowerCase() || 'scam'],
        reportedAt: new Date().toISOString()
      };
    }

    db.threatRegistry.set(key, record);
    db.save();
    return record;
  }

  static async getAllThreats() {
    return Array.from(db.threatRegistry.values());
  }
}
