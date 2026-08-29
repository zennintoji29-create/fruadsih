export const SEED_THREAT_RECORDS = [
  {
    id: 'threat-vpa-001',
    type: 'VPA',
    identifier: 'scammer.cybercell@oksbi',
    name: 'Fake Cyber Police Verification',
    category: 'DIGITAL_ARREST',
    riskScore: 98,
    isBlacklisted: true,
    source: 'I4C_NATIONAL_CYBER_CRIME_PORTAL',
    reportCount: 142,
    details: 'Impersonates Delhi Police / CBI requesting urgent security clearance fee.',
    tags: ['digital_arrest', 'fake_police', 'cbi_impersonation'],
    reportedAt: '2026-08-10T10:30:00.000Z'
  },
  {
    id: 'threat-vpa-002',
    type: 'VPA',
    identifier: 'electricity.officer.bill@paytm',
    name: 'State Electricity Bill Helpdesk',
    category: 'ELECTRICITY_BILL',
    riskScore: 95,
    isBlacklisted: true,
    source: 'SANCHAR_SAATHI_CHAKSHU',
    reportCount: 89,
    details: 'Sends SMS claiming power connection will be disconnected tonight at 9:30 PM.',
    tags: ['power_cut', 'bijli_bill', 'urgent_utility'],
    reportedAt: '2026-08-15T14:15:00.000Z'
  },
  {
    id: 'threat-vpa-003',
    type: 'VPA',
    identifier: 'telegram.task.rewards@ybl',
    name: 'Global Review Merchant Task',
    category: 'PART_TIME_JOB',
    riskScore: 92,
    isBlacklisted: true,
    source: 'NPCI_MULE_ACCOUNT_REGISTRY',
    reportCount: 67,
    details: 'Offers ₹3000/day for liking YouTube videos/Google maps; demands prepaid recharge deposits.',
    tags: ['job_scam', 'telegram_task', 'prepaid_crypto'],
    reportedAt: '2026-08-18T09:00:00.000Z'
  },
  {
    id: 'threat-vpa-004',
    type: 'VPA',
    identifier: 'customs.fedex.clearance@icici',
    name: 'FedEx Customs Clearance Officer',
    category: 'CUSTOMS_PARCEL',
    riskScore: 96,
    isBlacklisted: true,
    source: 'I4C_NATIONAL_CYBER_CRIME_PORTAL',
    reportCount: 114,
    details: 'Claims parcel containing contraband/passport is held at Mumbai airport customs.',
    tags: ['customs', 'parcel_drugs', 'mumbai_airport'],
    reportedAt: '2026-08-05T16:45:00.000Z'
  },
  {
    id: 'threat-phone-001',
    type: 'PHONE',
    identifier: '+919876543210',
    name: 'Scam Caller - Fake CBI Dept',
    category: 'FAKE_POLICE_CBI',
    riskScore: 99,
    isBlacklisted: true,
    source: 'I4C_1930_HELPLINE',
    reportCount: 310,
    details: 'Robocall/Live caller claiming Supreme Court arrest warrant for money laundering.',
    tags: ['cbi_scam', 'virtual_arrest', 'skype_video'],
    reportedAt: '2026-08-01T12:00:00.000Z'
  },
  {
    id: 'threat-phone-002',
    type: 'PHONE',
    identifier: '+918800112233',
    name: 'Fake SBI KYC Support',
    category: 'KYC_EXPIRY',
    riskScore: 94,
    isBlacklisted: true,
    source: 'SANCHAR_SAATHI_CHAKSHU',
    reportCount: 95,
    details: 'Urgent call demanding AnyDesk APK install to update PAN card / Aadhaar link.',
    tags: ['kyc_fraud', 'anydesk_apk', 'sbi_fake'],
    reportedAt: '2026-08-12T11:20:00.000Z'
  },
  {
    id: 'threat-phone-003',
    type: 'PHONE',
    identifier: '+917711223344',
    name: 'Spam Loan Harassment Bot',
    category: 'LOAN_EXTORTION',
    riskScore: 88,
    isBlacklisted: true,
    source: 'CROWDSOURCED_USER_REPORTS',
    reportCount: 54,
    details: 'Automated extortion calls with morphed photo threats.',
    tags: ['loan_app', 'extortion', 'harassment'],
    reportedAt: '2026-08-16T18:10:00.000Z'
  },
  {
    id: 'threat-phone-004',
    type: 'PHONE',
    identifier: '+919477530475',
    name: 'Flagged Extortionist - Digital Arrest Syndicate',
    category: 'DIGITAL_ARREST',
    riskScore: 99,
    isBlacklisted: true,
    source: 'I4C_NATIONAL_CYBERCRIME_PORTAL_1930',
    reportCount: 245,
    details: 'Impersonates Mumbai Cyber Crime & Narcotics bureau demanding money transfer under arrest threat.',
    tags: ['digital_arrest', 'fake_police', 'cbi_extortion'],
    reportedAt: '2026-08-20T10:00:00.000Z'
  },
  {
    id: 'threat-phone-005',
    type: 'PHONE',
    identifier: '9477530475',
    name: 'Flagged Extortionist - Digital Arrest Syndicate',
    category: 'DIGITAL_ARREST',
    riskScore: 99,
    isBlacklisted: true,
    source: 'I4C_NATIONAL_CYBERCRIME_PORTAL_1930',
    reportCount: 245,
    details: 'Impersonates Mumbai Cyber Crime & Narcotics bureau demanding money transfer under arrest threat.',
    tags: ['digital_arrest', 'fake_police', 'cbi_extortion'],
    reportedAt: '2026-08-20T10:00:00.000Z'
  },
  {
    id: 'threat-phone-006',
    type: 'PHONE',
    identifier: '+91 94775 30475',
    name: 'Flagged Extortionist - Digital Arrest Syndicate',
    category: 'DIGITAL_ARREST',
    riskScore: 99,
    isBlacklisted: true,
    source: 'I4C_NATIONAL_CYBERCRIME_PORTAL_1930',
    reportCount: 245,
    details: 'Impersonates Mumbai Cyber Crime & Narcotics bureau demanding money transfer under arrest threat.',
    tags: ['digital_arrest', 'fake_police', 'cbi_extortion'],
    reportedAt: '2026-08-20T10:00:00.000Z'
  }
];

export const SEED_DEFAULT_USER = {
  id: 'user_demo_001',
  phone: '+919820098200',
  name: 'Subhashree Dash',
  email: 'subhashree@example.com',
  isVerified: true,
  riskProfileScore: 15, // Baseline low risk
  settings: {
    maxAmountLimit: 10000,
    voicePhishingMode: true,
    callScreeningEnabled: true,
    highRiskAutoHold: true,
    language: 'en' // 'en', 'hi', 'or', etc.
  },
  trustedPayees: [
    { vpa: 'landlord.rent@okaxis', name: 'Landlord Rent', addedOn: '2026-01-10' },
    { vpa: 'mom@okhdfcbank', name: 'Mom Personal', addedOn: '2026-01-01' },
    { vpa: 'grocery.mart@upi', name: 'Local Grocery', addedOn: '2026-02-15' }
  ],
  knownDevices: [
    { deviceId: 'device-samsung-s23-01', model: 'Samsung Galaxy S23', lastSeen: new Date().toISOString() }
  ]
};
