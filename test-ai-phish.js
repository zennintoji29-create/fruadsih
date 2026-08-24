async function testAiVoicePhishing() {
  const BASE_URL = 'https://fruadsih.onrender.com';
  console.log('--- TESTING LIVE GROQ AI COERCION & NUMBER SCREENING ---');

  // Test 1: Caller Screening
  try {
    const res = await fetch(`${BASE_URL}/api/v1/voice-phish/screen-call?callerNumber=%2B919876543210`);
    const data = await res.json();
    console.log('1. Caller Number Screening Response:');
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Test 1 Error:', e.message);
  }

  console.log('\n--------------------------------------------------\n');

  // Test 2: AI Voice Phishing Analysis on Coercive Scam Call
  try {
    const res = await fetch(`${BASE_URL}/api/v1/voice-phish/upload-recording`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callerNumber: '+919988776655',
        fallbackTranscript: 'Hello, this is Inspector Rathore from Mumbai Cyber Crime Branch. A parcel with contraband items was seized in your name under your Aadhaar number. A digital arrest warrant is active. You must stay on this video call and immediately transfer ₹25,000 security verification deposit to clearance account scammer.cybercell@oksbi or local police will raid your house.',
        durationSeconds: 45
      })
    });
    const data = await res.json();
    console.log('2. Live Groq AI Scam Evaluation:');
    console.log(JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Test 2 Error:', e.message);
  }
}

testAiVoicePhishing();
