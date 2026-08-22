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

import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Serve Static Swagger & API Explorer
app.use(express.static(path.join(__dirname, 'public')));

// Dedicated Lightweight Health-Check Route (Item 2 of Verix Spec)
const healthHandler = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'verix-fraud-detection-api',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime())
  });
};

app.get('/api/v1/health', healthHandler);
app.get('/api/health', healthHandler);

// Interactive Swagger / Endpoint Explorer Routes
app.get(['/docs', '/swagger', '/api-docs', '/string', '/explorer'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
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
