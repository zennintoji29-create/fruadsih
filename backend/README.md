# 🛡️ FraudShield Core Risk & Threat Engine (SIH Problem S40)
**Explainable Real-Time Fraud Shield for UPI, Voice Phishing, and Social Engineering**

---

## 📌 Features & Architecture Overview

1. **Pre-Transaction UPI Risk Engine (`/api/v1/risk/check`)**:
   - Evaluates recipient VPA against NPCI, Sanchar Saathi, and I4C databases.
   - Computes multi-factor risk score (0–100) combining VPA reputation, transaction velocity vs user limit (₹500–₹1,00,000), and device coercion signals.
   - Emits explainable factors and recommended action (`ALLOW`, `WARN_WITH_CONFIRMATION`, `RESTRICT_BLOCK`).

2. **Voice Phishing & Live Call Screening (`/api/v1/voice-phish`)**:
   - Native hook for Android `CallScreeningService` and iOS `CallKit`.
   - Real-time transcript & audio stream coercion classifier (detects Digital Arrest, Fake CBI/Police, KYC expiration threats, and AnyDesk/APK demands).

3. **User Confirmation & Legitimate Payment Bypass (`/api/v1/risk/confirm-override`)**:
   - Ensures legitimate urgent payments are **never falsely blocked**, allowing biometric or user override with clear audit trail.

4. **Bank & Institutional Review Portal (`/api/v1/institution`)**:
   - False-positive dispute submission and bank officer resolution.
   - Threat registry management and real-time fraud telemetry analytics.

---

## 🚀 Quick Start

### 1. Install & Run Server
```bash
cd backend
npm install
npm start
```
Server runs at `http://localhost:5000`.

### 2. Run Automated Test Suite
```bash
npm test
```

---

## 📡 Key API Endpoints & Payloads

### 1. Evaluate UPI Pre-Transaction Risk
`POST /api/v1/risk/check`
```json
{
  "userId": "user_demo_001",
  "vpa": "scammer.cybercell@oksbi",
  "amount": 25000,
  "note": "Security deposit",
  "deviceContext": {
    "activeCallDetected": true,
    "activeCallerNumber": "+919876543210",
    "screenSharingActive": false
  },
  "callContext": {
    "isOnCall": true,
    "activeCallerNumber": "+919876543210"
  }
}
```

### 2. Live Call Screening (Android `CallScreeningService`)
`GET /api/v1/voice-phish/screen-call?callerNumber=+919876543210`

### 3. Voice Phishing Coercion Analysis
`POST /api/v1/voice-phish/analyze-stream`
```json
{
  "callerNumber": "+919876543210",
  "transcript": "This is Mumbai Cyber Cell. A digital arrest warrant has been issued in your name. Immediately transfer ₹25000 security deposit via UPI.",
  "callDurationSeconds": 45
}
```

### 4. Bank False-Positive Appeal & Resolution
`POST /api/v1/institution/appeals`
`POST /api/v1/institution/appeals/:appealId/resolve`
