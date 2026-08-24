async function registerAllVariations() {
  const BASE_URL = 'https://fruadsih.onrender.com';
  const variations = [
    '+919477530475',
    '9477530475',
    '+91 94775 30475',
    '09477530475'
  ];

  for (const num of variations) {
    await fetch(`${BASE_URL}/api/v1/threat-intel/report`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        identifier: num,
        type: 'PHONE',
        category: 'VOICE_PHISHING',
        details: 'Suspected Digital Arrest / Fake Police Extortion Call',
        reportedBy: 'Zennin Toji'
      })
    }).catch(() => {});
    console.log(`✅ Registered variation: "${num}"`);
  }

  // Verify screening lookup with 10-digit number
  const check = await fetch(`${BASE_URL}/api/v1/voice-phish/screen-call?callerNumber=9477530475`);
  const data = await check.json();
  console.log('\nLookup check for 9477530475:');
  console.log(JSON.stringify(data, null, 2));
}

registerAllVariations();
