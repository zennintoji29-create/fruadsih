async function reportFriendNumber() {
  const BASE_URL = 'https://fruadsih.onrender.com';
  const targetNumber = '+919477530475';

  console.log(`Reporting ${targetNumber} as scammer to live database...`);

  const res = await fetch(`${BASE_URL}/api/v1/threat-intel/report`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      identifier: targetNumber,
      type: 'PHONE',
      category: 'VOICE_PHISHING',
      details: 'Suspected Digital Arrest / Fake Police Extortion Call',
      reportedBy: 'Zennin Toji'
    })
  });

  const data = await res.json();
  console.log('Report result:', JSON.stringify(data, null, 2));

  // Now verify live screening lookup
  console.log(`\nVerifying live screening lookup for ${targetNumber}...`);
  const checkRes = await fetch(`${BASE_URL}/api/v1/voice-phish/screen-call?callerNumber=%2B919477530475`);
  const checkData = await checkRes.json();
  console.log('Screening lookup result:');
  console.log(JSON.stringify(checkData, null, 2));
}

reportFriendNumber();
