import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'db_store.json');

// In-Memory Database Store with file snapshot persistence
class MemoryDatabase {
  constructor() {
    this.users = new Map();
    this.threatRegistry = new Map();
    this.transactionLogs = new Map();
    this.callReports = new Map();
    this.falsePositiveAppeals = new Map();
    this.initialized = false;
  }

  async init() {
    if (this.initialized) return;

    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      if (fs.existsSync(DATA_FILE)) {
        const raw = fs.readFileSync(DATA_FILE, 'utf-8');
        const data = JSON.parse(raw);
        
        if (data.users) Object.entries(data.users).forEach(([k, v]) => this.users.set(k, v));
        if (data.threatRegistry) Object.entries(data.threatRegistry).forEach(([k, v]) => this.threatRegistry.set(k, v));
        if (data.transactionLogs) Object.entries(data.transactionLogs).forEach(([k, v]) => this.transactionLogs.set(k, v));
        if (data.callReports) Object.entries(data.callReports).forEach(([k, v]) => this.callReports.set(k, v));
        if (data.falsePositiveAppeals) Object.entries(data.falsePositiveAppeals).forEach(([k, v]) => this.falsePositiveAppeals.set(k, v));
        console.log(`[DB] Restored snapshot from disk. Threat records: ${this.threatRegistry.size}, Users: ${this.users.size}`);
      }
    } catch (err) {
      console.warn('[DB] Could not load persisted data file, starting fresh:', err.message);
    }

    this.initialized = true;
  }

  save() {
    try {
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      const dump = {
        users: Object.fromEntries(this.users),
        threatRegistry: Object.fromEntries(this.threatRegistry),
        transactionLogs: Object.fromEntries(this.transactionLogs),
        callReports: Object.fromEntries(this.callReports),
        falsePositiveAppeals: Object.fromEntries(this.falsePositiveAppeals),
        lastSaved: new Date().toISOString()
      };

      fs.writeFileSync(DATA_FILE, JSON.stringify(dump, null, 2), 'utf-8');
    } catch (err) {
      console.error('[DB] Failed to persist data snapshot:', err.message);
    }
  }
}

export const db = new MemoryDatabase();
