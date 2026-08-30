import { db } from '../config/db.js';
import { SEED_THREAT_RECORDS, SEED_DEFAULT_USER } from '../seeds/threatData.js';
import { supabase, getSupabaseThreat } from '../config/supabase.js';

export class ThreatDbService {
  static async initialize() {
    await db.init();
    
    // Seed default threat intelligence records if empty
    if (db.threatRegistry.size === 0) {
      SEED_THREAT_RECORDS.forEach(record => {
        db.threatRegistry.set(record.identifier.toLowerCase(), record);
      });
      console.log(`[ThreatDbService] Seeded ${SEED_THREAT_RECORDS.length} threat intelligence entries in memory.`);
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

    // 1. Fast sub-2ms check in Memory Threat Registry (RAM Cache)
    if (db.threatRegistry.has(identifier)) {
      return db.threatRegistry.get(identifier);
    }

    // 2. Query Supabase PostgreSQL Database if online
    const cloudThreat = await getSupabaseThreat(identifier);
    if (cloudThreat) {
      const formatted = {
        id: cloudThreat.id,
        type: cloudThreat.type,
        identifier: cloudThreat.identifier,
        name: `Flagged (${cloudThreat.category})`,
        category: cloudThreat.category,
        riskScore: cloudThreat.threat_score || 85,
        isBlacklisted: cloudThreat.status === 'ACTIVE' || (cloudThreat.threat_score >= 70),
        source: 'SUPABASE_CLOUD_REGISTRY',
        reportCount: cloudThreat.reported_count || 1,
        details: cloudThreat.details?.description || 'Found in Supabase Fraud Database.',
        tags: ['supabase', cloudThreat.category?.toLowerCase()]
      };
      // Populate memory cache for future instant lookups
      db.threatRegistry.set(identifier, formatted);
      return formatted;
    }

    // 3. Normalized phone lookup (Exact 10-digit match for Indian/Intl numbers)
    const cleanPhone = identifier.replace(/[^0-9]/g, '');
    if (cleanPhone && cleanPhone.length >= 10) {
      const last10Input = cleanPhone.slice(-10);
      for (const [key, record] of db.threatRegistry.entries()) {
        if (record.type === 'PHONE') {
          const recordClean = key.replace(/[^0-9]/g, '');
          const last10Record = recordClean.slice(-10);
          if (last10Record.length === 10 && last10Input === last10Record) {
            return record;
          }
        }
      }
    }

    // 4. Fuzzy VPA Typosquatting / Impersonation check
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

  static async reportScammer({ identifier, type, category, details, reportedBy = 'USER_COMMUNITY', source = 'USER_REPORT', riskScore = 85 }) {
    if (!identifier) throw new Error('Identifier is required');
    const key = identifier.trim().toLowerCase();
    const effectiveScore = Number(riskScore) || 85;

    let record = db.threatRegistry.get(key);
    if (record) {
      record.reportCount += 1;
      record.details = `${record.details} | Update: ${details}`;
      record.riskScore = Math.max(record.riskScore, effectiveScore);
      if (record.riskScore >= 50 || record.reportCount >= 2) {
        record.isBlacklisted = true;
      }
    } else {
      record = {
        id: `threat-${Date.now()}-${Math.floor(Math.random()*1000)}`,
        type: type || (identifier.includes('@') ? 'VPA' : 'PHONE'),
        identifier: identifier.trim(),
        name: `Reported ${category || 'Fraud'} Target`,
        category: category || 'SOCIAL_ENGINEERING',
        riskScore: effectiveScore,
        isBlacklisted: effectiveScore >= 50,
        source: source,
        reportCount: 1,
        details: details || 'Reported by user as fraud / spam.',
        tags: ['user_reported', category?.toLowerCase() || 'scam'],
        reportedAt: new Date().toISOString()
      };
    }

    db.threatRegistry.set(key, record);
    db.save();

    // Also persist to Supabase PostgreSQL table if connected
    if (supabase) {
      try {
        await supabase
          .from('threat_registry')
          .upsert([{
            identifier: record.identifier,
            type: record.type,
            threat_score: record.riskScore,
            category: record.category,
            reported_count: record.reportCount,
            status: record.isBlacklisted ? 'ACTIVE' : 'UNDER_INVESTIGATION',
            details: { description: record.details, reported_by: reportedBy, source: source }
          }], { onConflict: 'identifier' });
        console.log('[Supabase] Persisted threat record to cloud database:', record.identifier);
      } catch (cloudErr) {
        console.warn('[Supabase] Could not sync threat record to cloud:', cloudErr.message);
      }
    }

    return record;
  }

  static async getAllThreats() {
    return Array.from(db.threatRegistry.values());
  }
}

