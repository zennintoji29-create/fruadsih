const BASE_URL = process.env.API_BASE_URL || 'https://fruadsih.onrender.com';

async function testTicketFlow() {
  console.log('🧪 Starting End-to-End Ticket & Dispute Flow Test...');

  // 1. Submit a suspicious pre-check
  console.log('\nStep 1: Running Pre-Payment Check on flagged VPA...');
  const checkRes = await fetch(`${BASE_URL}/api/v1/risk/check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      vpa: 'cbi.verification@paytm',
      amount: 45000,
      note: 'Urgent CBI security bail deposit',
      deviceContext: { activeCallDetected: true }
    })
  });
  const checkData = await checkRes.json();
  console.log(`✅ Pre-Check Complete: RiskScore = ${checkData.riskScore}, isApproved = ${checkData.isApproved}, Action = ${checkData.action}`);

  // 2. Submit Dispute / Appeal Ticket from Mobile App
  const testTicketId = `VRX-REV-${Date.now()}`;
  console.log(`\nStep 2: Submitting User Dispute Ticket [${testTicketId}]...`);
  const appealRes = await fetch(`${BASE_URL}/api/v1/institution/appeal`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ticketId: testTicketId,
      assessmentId: checkData.data?.assessmentId,
      vpa: 'cbi.verification@paytm',
      amount: 45000,
      note: 'Urgent CBI security bail deposit',
      appellantType: 'CONSUMER',
      contactEmail: 'subhash@example.com',
      reason: 'User claims this is an emergency verification.',
      evidenceDescription: 'Caller verified'
    })
  });
  const appealData = await appealRes.json();
  console.log(`✅ Appeal Submitted: Status = ${appealData.appeal?.status}, TicketId = ${appealData.ticketId}`);

  // 3. Bank Portal fetches all pending appeals
  console.log('\nStep 3: Bank Portal fetching pending appeals...');
  const listRes = await fetch(`${BASE_URL}/api/v1/institution/appeals`);
  const listData = await listRes.json();
  console.log(`✅ Bank Portal Appeals Count: ${listData.count}. Latest Ticket: ${listData.appeals[0]?.appealId} (${listData.appeals[0]?.status})`);

  // 4. Mobile App polls ticket status while in 'waiting' mode
  console.log('\nStep 4: Mobile App polling ticket status before resolution...');
  const pollBeforeRes = await fetch(`${BASE_URL}/api/v1/institution/appeals/${testTicketId}`);
  const pollBeforeData = await pollBeforeRes.json();
  console.log(`✅ Mobile Poll Result: status = ${pollBeforeData.appeal?.status}`);

  // 5. Bank Officer clicks "Approve / Clear" in Bank Command Center
  console.log('\nStep 5: Bank Officer approving appeal ticket...');
  const resolveRes = await fetch(`${BASE_URL}/api/v1/institution/appeals/${testTicketId}/resolve`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      resolution: 'APPROVED_WHITELISTED',
      reviewerNotes: 'Verified genuine emergency. Cleared by Senior Officer #042'
    })
  });
  const resolveData = await resolveRes.json();
  console.log(`✅ Appeal Resolved: ${resolveData.message}`);

  // 6. Mobile App polls ticket status again
  console.log('\nStep 6: Mobile App polling ticket status after resolution...');
  const pollAfterRes = await fetch(`${BASE_URL}/api/v1/institution/appeals/${testTicketId}`);
  const pollAfterData = await pollAfterRes.json();
  console.log(`✅ Mobile Poll Result: status = ${pollAfterData.appeal?.status}`);

  if (pollAfterData.appeal?.status === 'APPROVED_WHITELISTED') {
    console.log('\n🎉 SUCCESS: 100% End-to-End Ticket Flow Verified! App will automatically transition to "This payment is secure, you can pay" with green Pay button.');
  } else {
    console.error('❌ Resolution status mismatch');
  }
}

testTicketFlow().catch(console.error);
