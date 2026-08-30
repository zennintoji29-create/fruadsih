import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from '../routes/authRoutes.js';
import riskRoutes from '../routes/riskRoutes.js';
import voicePhishRoutes from '../routes/voicePhishRoutes.js';
import threatRoutes from '../routes/threatRoutes.js';
import institutionRoutes from '../routes/institutionRoutes.js';
import { ThreatDbService } from '../services/threatDbService.js';
import { analyzeScamTranscriptWithGroq } from '../services/groqAiService.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/api/health', (req, res) => res.json({ status: 'healthy', timestamp: new Date().toISOString() }));
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/risk', riskRoutes);
app.use('/api/v1/voice-phish', voicePhishRoutes);
app.use('/api/v1/threat-intel', threatRoutes);
app.use('/api/v1/institution', institutionRoutes);

const TEST_PORT = 5055;

async function runEndToEndVerification() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('🛡️  VERIX DEEP FULL-STACK SYSTEM AUDIT & INTEGRATION VERIFICATION');
  console.log('═══════════════════════════════════════════════════════════════\n');

  await ThreatDbService.initialize();
  const server = app.listen(TEST_PORT);
  const baseUrl = `http://127.0.0.1:${TEST_PORT}`;

  let passed = 0;
  let failed = 0;

  async function check(name, fn) {
    try {
      process.stdout.write(`⏳ Testing [${name}]... `);
      await fn();
      console.log('✅ PASS');
      passed++;
    } catch (e) {
      console.log(`❌ FAIL: ${e.message}`);
      failed++;
    }
  }

  try {
    // 1. Health Endpoint
    await check('1. API Health Check', async () => {
      const res = await fetch(`${baseUrl}/api/health`);
      const data = await res.json();
      if (data.status !== 'healthy') throw new Error('Health check status not healthy');
    });

    // 2. Threat Intel Lookup / Stats
    await check('2. Threat Intelligence Registry Stats', async () => {
      const res = await fetch(`${baseUrl}/api/v1/threat-intel/stats`);
      const data = await res.json();
      if (!data.success || typeof data.data?.totalThreats !== 'number') {
        throw new Error('Threat stats returned invalid structure');
      }
    });

    // 3. Database Search Query Filter (+91 94775 30475)
    await check('3. Threat Identifier Lookup (+91 94775 30475)', async () => {
      const res = await fetch(`${baseUrl}/api/v1/threat-intel/lookup?identifier=%2B919477530475`);
      const data = await res.json();
      if (!data.success || !data.data || (!data.data.isBlacklisted && data.data.riskScore < 80)) {
        throw new Error(`Database lookup failed or not flagged: ${JSON.stringify(data)}`);
      }
    });

    // 4. Pre-Payment Evaluation: Flagged Scammer UPI (/api/v1/risk/check)
    await check('4. Pre-Payment Risk Engine (Flagged Scammer VPA)', async () => {
      const res = await fetch(`${baseUrl}/api/v1/risk/check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vpa: 'scammer.cybercell@oksbi',
          amount: 15000,
          userLocation: 'Mumbai',
          deviceRiskScore: 0.1
        })
      });
      const data = await res.json();
      if (!data.success || data.data.riskScore < 85 || !data.data.isBlocked) {
        throw new Error(`Expected blocked high risk, got: ${JSON.stringify(data.data)}`);
      }
    });

    // 5. Pre-Payment Evaluation: Clean Merchant UPI (/api/v1/risk/check)
    await check('5. Pre-Payment Risk Engine (Clean Merchant VPA)', async () => {
      const res = await fetch(`${baseUrl}/api/v1/risk/check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vpa: 'kirana.store@okhdfcbank',
          amount: 450,
          userLocation: 'Mumbai',
          deviceRiskScore: 0.05
        })
      });
      const data = await res.json();
      if (!data.success || data.data.riskScore > 35 || data.data.isBlocked) {
        throw new Error(`Expected clean low risk, got: ${JSON.stringify(data.data)}`);
      }
    });

    // 6. Pre-Payment Evaluation: Extortion NLP Trigger in Note
    await check('6. Deep NLP Coercion Detection in Transaction Note', async () => {
      const res = await fetch(`${baseUrl}/api/v1/risk/check`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vpa: 'officer.verify@okicici',
          amount: 25000,
          contextNote: 'CBI Delhi arrest warrant penalty verification deposit do not disconnect',
          isOnCall: true
        })
      });
      const data = await res.json();
      if (!data.success || data.data.riskScore < 70) {
        throw new Error(`Expected high risk for extortion note, got: ${data.data?.riskScore}`);
      }
    });

    // 7. Telephony Call Screening Endpoint
    await check('7. Telephony In-Call Screening Engine', async () => {
      const res = await fetch(`${baseUrl}/api/v1/voice-phish/screen-call?callerNumber=%2B919477530475`);
      const data = await res.json();
      if (!data.success || !data.data.isHighRiskScam) {
        throw new Error(`Expected high risk caller: ${JSON.stringify(data)}`);
      }
    });

    // 8. Voice Recording Upload & Auto-Threat Indexing
    await check('8. Voice Recording Analysis & Threat DB Auto-Save', async () => {
      const res = await fetch(`${baseUrl}/api/v1/voice-phish/upload-recording`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          callerNumber: '+91 99999 88888',
          durationSeconds: 35,
          fallbackTranscript: 'This is Crime Branch officer. You have illegal parcel under Aadhaar. Pay ₹20,000 security bail now.'
        })
      });
      const data = await res.json();
      if (!data.success || !data.data.phishingDetected || data.data.confidenceScore < 80) {
        throw new Error('Expected phishingDetected: true with score >= 80');
      }
      if (!data.data.fileMetadata?.savedToThreatRegistry) {
        throw new Error('Expected caller number to be registered in Threat DB');
      }
    });

    // 9. Bank Admin Dispute Ticket Lifecycle
    let createdTicketId = null;
    await check('9. Bank Admin Dispute Ticket Lifecycle', async () => {
      // Create ticket
      const createRes = await fetch(`${baseUrl}/api/v1/institution/tickets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vpa: 'honest.merchant@okhdfcbank',
          amount: 5000,
          reason: 'Legitimate grocery vendor wrongly blocked'
        })
      });
      const createData = await createRes.json();
      createdTicketId = createData.appeal?.appealId || createData.data?.appealId || createData.ticketId;
      if (!createData.success || !createdTicketId) {
        throw new Error(`Failed to create bank dispute ticket: ${JSON.stringify(createData)}`);
      }

      // Fetch tickets
      const fetchRes = await fetch(`${baseUrl}/api/v1/institution/tickets`);
      const fetchData = await fetchRes.json();
      const ticketList = Array.isArray(fetchData.data) ? fetchData.data : (Array.isArray(fetchData.appeals) ? fetchData.appeals : (Array.isArray(fetchData.tickets) ? fetchData.tickets : null));
      if (!fetchData.success || !ticketList) {
        throw new Error(`Failed to fetch tickets list: ${JSON.stringify(fetchData)}`);
      }

      // Resolve ticket
      const patchRes = await fetch(`${baseUrl}/api/v1/institution/tickets/${createdTicketId}/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: 'RESOLVED',
          resolution: 'WHITELISTED',
          officerNotes: 'Verified physical KYC and store GSTIN'
        })
      });
      const patchData = await patchRes.json();
      if (!patchData.success) {
        throw new Error('Failed to resolve ticket');
      }
    });

    // 10. Live Groq LLM Inference
    await check('10. Live Groq LLaMA 3.3 Extortion Classifier', async () => {
      const groqOutput = await analyzeScamTranscriptWithGroq(
        'Electricity board notice: Power connection will be cut tonight at 9:30 PM. Pay bill ₹1500 immediately to officer UPI.'
      );
      if (!groqOutput || !groqOutput.phishingDetected) {
        throw new Error('Groq failed to detect electricity bill scam intent');
      }
    });

  } finally {
    server.close();
  }

  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`📊 FINAL AUDIT VERDICT: ${passed} / ${passed + failed} TESTS PASSED`);
  if (failed === 0) {
    console.log('🌟 100% PRODUCTION READY FOR TOMORROW\'S JURY DEMO!');
  } else {
    console.log(`⚠️ ${failed} ISSUES REQUIRE ATTENTION`);
  }
  console.log('═══════════════════════════════════════════════════════════════\n');
}

runEndToEndVerification().catch(console.error);
