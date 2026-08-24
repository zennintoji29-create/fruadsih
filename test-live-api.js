async function runTests() {
  const BASE_URL = 'https://fruadsih.onrender.com';
  console.log('--- TESTING LIVE BACKEND AT ' + BASE_URL + ' ---');

  // 1. Health
  try {
    const res = await fetch(`${BASE_URL}/api/health`);
    const data = await res.json();
    console.log('✅ 1. Health API:', data);
  } catch (e) {
    console.error('❌ 1. Health API Error:', e.message);
  }

  // 2. Risk Check
  try {
    const res = await fetch(`${BASE_URL}/api/v1/risk/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vpa: 'scammer.cybercell@oksbi',
        amount: 25000,
        note: 'Digital arrest police bail payment'
      })
    });
    const data = await res.json();
    console.log('✅ 2. Risk Assessment API: Risk Score =', data.data?.riskScore, '| Action =', data.data?.recommendedAction);
  } catch (e) {
    console.error('❌ 2. Risk API Error:', e.message);
  }

  // 3. Screen Call
  try {
    const res = await fetch(`${BASE_URL}/api/v1/voice-phish/screen-call?callerNumber=%2B919876543210`);
    const data = await res.json();
    console.log('✅ 3. Call Screening API: isSpam =', data.data?.isSpam, '| Badge =', data.data?.callerBadge);
  } catch (e) {
    console.error('❌ 3. Call Screening API Error:', e.message);
  }

  // 4. Threat Intel Stats
  try {
    const res = await fetch(`${BASE_URL}/api/v1/threat-intel/stats`);
    const data = await res.json();
    console.log('✅ 4. Threat Intel Registry: Total Threats =', data.stats?.totalThreats);
  } catch (e) {
    console.error('❌ 4. Threat Stats API Error:', e.message);
  }

  // 5. Institution Appeals
  try {
    const res = await fetch(`${BASE_URL}/api/v1/institution/appeals`);
    const data = await res.json();
    console.log('✅ 5. Bank Institution Appeals: Total Appeals =', data.appeals?.length);
  } catch (e) {
    console.error('❌ 5. Institution Appeals API Error:', e.message);
  }
}

runTests();
