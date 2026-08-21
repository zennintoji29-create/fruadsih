import assert from 'assert';

const BASE_URL = 'http://localhost:5000';

async function runTests() {
  console.log('🧪 Starting End-to-End Test Suite for Fraud Shield Backend (SIH S40)...\n');
  let passed = 0;
  let total = 0;

  async function test(name, fn) {
    total++;
    try {
      await fn();
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`);
      console.error(`     Error: ${err.message}`);
    }
  }

  // 1. Health check
  await test('Server Health Check', async () => {
    const res = await fetch(`${BASE_URL}/api/health`);
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.status, 'HEALTHY');
  });

  // 2. Auth & Profile
  await test('Get User Profile & Default Settings', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/profile`);
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert(data.user.settings.maxAmountLimit >= 500 && data.user.settings.maxAmountLimit <= 100000);
  });

  // 2b. Google OAuth / SSO Login
  await test('Google OAuth / SSO Sign-In', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/google-login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'subhashree.dash@gmail.com',
        name: 'Subhashree Dash',
        googleId: 'g-oauth-subhashree-99'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert.strictEqual(data.user.email, 'subhashree.dash@gmail.com');
    assert.strictEqual(data.user.authProvider, 'GOOGLE_OAUTH');
  });

  // 2c. Mobile / Email OTP Dispatch & Verification
  await test('Dispatch & Verify OTP (Mobile SMS / Email)', async () => {
    const sendRes = await fetch(`${BASE_URL}/api/v1/auth/send-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: '+919820098200' })
    });
    const sendData = await sendRes.json();
    assert.strictEqual(sendRes.status, 200);
    assert.strictEqual(sendData.success, true);

    const verifyRes = await fetch(`${BASE_URL}/api/v1/auth/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: '+919820098200', otp: '123456' })
    });
    const verifyData = await verifyRes.json();
    assert.strictEqual(verifyRes.status, 200);
    assert.strictEqual(verifyData.success, true);
  });

  // 3. Update Amount Limit Threshold (500 - 100,000)
  await test('Update User Safety Amount Limit (₹15,000)', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/auth/settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'user_demo_001',
        maxAmountLimit: 15000,
        voicePhishingMode: true
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.settings.maxAmountLimit, 15000);
  });

  // 4. Call Screening (Android CallScreeningService Native Hook)
  await test('Screen Incoming Call from Blacklisted I4C Scammer (+919876543210)', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/voice-phish/screen-call?callerNumber=+919876543210`);
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.data.isSpam, true);
    assert.strictEqual(data.data.isHighRiskScam, true);
    assert.strictEqual(data.data.category, 'FAKE_POLICE_CBI');
  });

  // 5. Voice Phishing Transcript & Coercion Analyzer (Digital Arrest Scenario)
  await test('Analyze Live Call Transcript for Digital Arrest Coercion', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/voice-phish/analyze-stream`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callerNumber: '+919876543210',
        transcript: 'This is Mumbai Cyber Cell. A digital arrest warrant has been issued in your name for money laundering. You must isolate yourself in a room and immediately transfer ₹25000 security deposit via UPI to verify your bank account or police will arrive in 1 hour.',
        callDurationSeconds: 45
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.data.phishingDetected, true);
    assert.strictEqual(data.data.primaryCategory, 'DIGITAL_ARREST');
    assert.strictEqual(data.data.coercionLevel, 'SEVERE');
    assert(data.data.confidenceScore >= 75, 'Confidence score should be >= 75');
  });

  // 5b. Upload/Drop Audio Recording Transient Analyzer (Zero Raw Audio Saved)
  await test('Drop/Upload Phone Call Audio Recording (Privacy-Preserving Transient STT)', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/voice-phish/upload-recording`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        audioFileName: 'suspicious_police_call.m4a',
        durationSeconds: 45,
        fallbackTranscript: 'CBI officer here. Your Aadhaar is used in illegal narcotics shipping. Transfer security deposit right now on UPI or you will be arrested.',
        callerNumber: '+919876543210'
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert.strictEqual(data.data.phishingDetected, true);
    assert.strictEqual(data.data.coercionLevel, 'SEVERE');
    assert(data.data.actionPlan.length > 0, 'Should provide actionable safety guidance');
  });

  // 6. UPI Pre-Transaction Risk Check on I4C Flagged VPA with Active Coercion
  let criticalAssessmentId = '';
  await test('Evaluate High-Risk UPI Transaction to Known Scammer VPA during Active Call', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/risk/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'user_demo_001',
        vpa: 'scammer.cybercell@oksbi',
        amount: 25000,
        note: 'Security clearance fine',
        deviceContext: {
          activeCallDetected: true,
          activeCallerNumber: '+919876543210',
          screenSharingActive: false
        },
        callContext: {
          isOnCall: true,
          activeCallerNumber: '+919876543210'
        }
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.data.isBlocked, true);
    assert.strictEqual(data.data.riskLevel, 'CRITICAL_BLOCKED');
    assert(data.data.riskScore >= 80, 'Score should be >= 80');
    assert(data.data.explanation.bulletPoints.length > 0, 'Should provide explainable reasons');
    criticalAssessmentId = data.data.assessmentId;
  });

  // 6b. Scan / Drop UPI QR Code Payload Analyzer
  await test('Scan/Drop UPI QR Code & Evaluate Pre-Flight Risk Automatically', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/risk/scan-qr`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'user_demo_001',
        qrString: 'upi://pay?pa=scammer.cybercell@oksbi&pn=Fake%20Cyber%20Cell&am=25000&cu=INR&tn=Digital%20Arrest%20Bail',
        deviceContext: {
          activeCallDetected: true,
          activeCallerNumber: '+919876543210'
        }
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert.strictEqual(data.extractedQrData.vpa, 'scammer.cybercell@oksbi');
    assert.strictEqual(data.extractedQrData.amount, 25000);
    assert.strictEqual(data.riskAssessment.isBlocked, true);
    assert.strictEqual(data.riskAssessment.riskLevel, 'CRITICAL_BLOCKED');
  });

  // 7. Legitimate Urgent Transaction Exceeding Threshold (Caution + Override permitted)
  let warnAssessmentId = '';
  await test('Evaluate Legitimate Urgent Payment over Limit with Biometric Override', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/risk/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: 'user_demo_001',
        vpa: 'landlord.rent@okaxis', // In trusted payee list
        amount: 20000, // Exceeds 15,000 threshold
        note: 'Urgent house rent payment',
        deviceContext: {
          activeCallDetected: false,
          screenSharingActive: false
        }
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.data.isBlocked, false);
    assert.strictEqual(data.data.requiresBiometricConfirmation, true);
    warnAssessmentId = data.data.assessmentId;
  });

  // 8. User Confirmation Override Flow
  await test('User Confirms Legitimate Override without Blocking', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/risk/confirm-override`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        assessmentId: warnAssessmentId,
        overrideReason: 'Monthly house rent confirmed with owner',
        biometricVerified: true
      })
    });
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert.strictEqual(data.transaction.status, 'USER_CONFIRMED_PROCEEDED');
  });

  // 9. Bank False-Positive Dispute Submission & Resolution
  await test('Bank False-Positive Appeal Submission & Review Workflow', async () => {
    // 9a. Submit appeal
    const appealRes = await fetch(`${BASE_URL}/api/v1/institution/appeals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vpa: 'electricity.officer.bill@paytm',
        appellantType: 'MERCHANT',
        contactEmail: 'disputes@state-electricity.org',
        reason: 'Authorized state power distribution vendor account.'
      })
    });
    const appealData = await appealRes.json();
    assert.strictEqual(appealRes.status, 201);
    const appealId = appealData.appeal.appealId;

    // 9b. Bank Officer Resolves Appeal
    const resolveRes = await fetch(`${BASE_URL}/api/v1/institution/appeals/${appealId}/resolve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        resolution: 'APPROVED_WHITELISTED',
        reviewerNotes: 'Verified utility merchant documentation.'
      })
    });
    const resolveData = await resolveRes.json();
    assert.strictEqual(resolveRes.status, 200);
    assert.strictEqual(resolveData.appeal.status, 'APPROVED_WHITELISTED');
  });

  // 10. Institutional Telemetry Overview
  await test('Institutional Fraud Shield Analytics Overview', async () => {
    const res = await fetch(`${BASE_URL}/api/v1/institution/analytics-overview`);
    const data = await res.json();
    assert.strictEqual(res.status, 200);
    assert.strictEqual(data.success, true);
    assert(data.analytics.totalEvaluatedTransactions >= 2, 'Should count evaluated transactions');
    assert(data.analytics.activeThreatRegistrySize >= 5, 'Should count threat records');
  });

  console.log(`\n🏁 Test Run Completed: ${passed}/${total} tests passed.`);
  if (passed === total) {
    console.log('🎉 ALL TESTS PASSED SUCCESSFULLY!');
    process.exit(0);
  } else {
    process.exit(1);
  }
}

// Allow time for server to start if running directly
setTimeout(runTests, 1000);
