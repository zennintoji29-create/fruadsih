async function testVpaPhoneVariations() {
  const BASE_URL = 'https://fruadsih.onrender.com';
  const testInputs = [
    '9477530475',
    '9477530475@paytm',
    '9477530475@ybl',
    '9477530475@okaxis',
    '+919477530475'
  ];

  console.log('--- TESTING UPI INPUT DETECTION FOR PHONE-BASED VPAs ---');

  for (const input of testInputs) {
    const res = await fetch(`${BASE_URL}/api/v1/risk/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        vpa: input,
        amount: 5000,
        note: 'Payment'
      })
    });
    const data = await res.json();
    console.log(`\nInput: "${input}"`);
    console.log(`  -> Risk Level: ${data.data?.riskLevel}`);
    console.log(`  -> Risk Score: ${data.data?.riskScore}`);
    console.log(`  -> Recommended Action: ${data.data?.recommendedAction}`);
    console.log(`  -> Matched Scammer: ${data.data?.threatDetails?.name || 'None'}`);
  }
}

testVpaPhoneVariations();
