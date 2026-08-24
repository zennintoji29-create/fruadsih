async function testUpiRiskWithPhone() {
  const BASE_URL = 'https://fruadsih.onrender.com';
  console.log('Testing UPI Check with 9477530475...');
  const res = await fetch(`${BASE_URL}/api/v1/risk/check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      vpa: '9477530475',
      amount: 15000,
      note: 'Urgent Police Bail'
    })
  });
  const data = await res.json();
  console.log('Result:', JSON.stringify(data, null, 2));
}

testUpiRiskWithPhone();
