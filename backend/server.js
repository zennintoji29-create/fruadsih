import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { ThreatDbService } from './services/threatDbService.js';

import authRoutes from './routes/authRoutes.js';
import riskRoutes from './routes/riskRoutes.js';
import voicePhishRoutes from './routes/voicePhishRoutes.js';
import threatRoutes from './routes/threatRoutes.js';
import institutionRoutes from './routes/institutionRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-user-id']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Root Health & Metadata
app.get('/', (req, res) => {
  res.json({
    status: 'ONLINE',
    project: 'Explainable Real-Time Fraud Shield (SIH S40)',
    version: '1.0.0',
    capabilities: [
      'Pre-Transaction UPI Risk Engine (0-100 score + Explainability)',
      'Voice Phishing & Live Audio Transcript Coercion Classifier',
      'Android CallScreeningService & iOS CallKit native lookup API',
      'NPCI / Sanchar Saathi / I4C Indian Cyber Threat Registry',
      'Bank False-Positive Review & Appeal Dispute Workflow'
    ],
    timestamp: new Date().toISOString()
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'HEALTHY', timestamp: new Date().toISOString() });
});

// Mount Modular API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/risk', riskRoutes);
app.use('/api/v1/voice-phish', voicePhishRoutes);
app.use('/api/v1/threat-intel', threatRoutes);
app.use('/api/v1/institution', institutionRoutes);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route not found: ${req.method} ${req.originalUrl}`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: err.message
  });
});

// Initialize Datastore & Start Server
async function startServer() {
  try {
    await ThreatDbService.initialize();
    app.listen(PORT, () => {
      console.log(`=======================================================`);
      console.log(`🛡️  FRAUD SHIELD RISK ENGINE RUNNING ON PORT ${PORT}`);
      console.log(`📡 Base URL: http://localhost:${PORT}`);
      console.log(`🔍 Health Check: http://localhost:${PORT}/api/health`);
      console.log(`=======================================================`);

      // 💓 Render 10-Minute Anti-Sleep Keep-Alive Heartbeat (Zero Cold Starts)
      const PING_INTERVAL = 10 * 60 * 1000; // 10 minutes
      const serviceUrl = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
      
      console.log(`[Keep-Alive] Initializing 10-minute anti-sleep heartbeat for: ${serviceUrl}`);
      setInterval(async () => {
        try {
          const res = await fetch(`${serviceUrl}/api/health`);
          const data = await res.json();
          console.log(`[Keep-Alive Ping] 💓 Pinged ${serviceUrl}/api/health - Status: ${data.status} at ${new Date().toLocaleTimeString()}`);
        } catch (pingErr) {
          console.warn('[Keep-Alive Notice]:', pingErr.message);
        }
      }, PING_INTERVAL);
    });
  } catch (error) {
    console.error('Failed to initialize server:', error);
    process.exit(1);
  }
}

startServer();

export default app;
