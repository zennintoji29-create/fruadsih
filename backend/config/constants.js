export const RISK_LEVELS = {
  SAFE: 'SAFE',
  LOW: 'LOW',
  CAUTION: 'CAUTION',
  HIGH_RISK: 'HIGH_RISK',
  CRITICAL_BLOCKED: 'CRITICAL_BLOCKED'
};

export const ACTIONS = {
  ALLOW: 'ALLOW',
  WARN_CONFIRMATION: 'WARN_WITH_CONFIRMATION',
  DELAY_VERIFICATION: 'DELAY_VERIFICATION',
  RESTRICT_BLOCK: 'RESTRICT_BLOCK'
};

export const SCAM_CATEGORIES = {
  DIGITAL_ARREST: 'DIGITAL_ARREST',
  FAKE_POLICE_CBI: 'FAKE_POLICE_CBI',
  ELECTRICITY_BILL: 'ELECTRICITY_BILL',
  PART_TIME_JOB: 'PART_TIME_JOB',
  APK_SCREEN_SHARE: 'APK_SCREEN_SHARE',
  LOTTERY_PRIZE: 'LOTTERY_PRIZE',
  KYC_EXPIRY: 'KYC_EXPIRY',
  CUSTOMS_PARCEL: 'CUSTOMS_PARCEL',
  LOAN_EXTORTION: 'LOAN_EXTORTION',
  SEXTORTION_THREAT: 'SEXTORTION_THREAT',
  UPI_REFUND_TRICK: 'UPI_REFUND_TRICK'
};

export const PHISHING_KEYWORDS = {
  URGENCY: [
    'immediate', 'urgent', 'right now', 'within 10 minutes', 'within 1 hour', 
    'police coming', 'arrest warrant', 'account suspended', 'sim block', 
    'bijli kat jayegi', 'power cut', 'jail', 'court order', 'digital arrest'
  ],
  AUTHORITY_IMPERSONATION: [
    'cbi', 'cyber cell', 'mumbai police', 'delhi police', 'rbi officer', 
    'trai', 'customs officer', 'narcotics', 'ed', 'income tax department', 
    'bank manager', 'sbi card department', 'electricity board officer'
  ],
  COERCION_TECH: [
    'anydesk', 'teamviewer', 'rustdesk', 'quicksupport', 'download apk', 
    'screen share', 'do not disconnect', 'stay on video call', 'isolate yourself in room'
  ],
  FINANCIAL_EXTRACTION: [
    'security deposit', 'verification fee', 'clearance charge', 'refundable fine', 
    'transfer to safe account', 'send via upi', 'scan qr code', 'enter pin to receive refund',
    'enter otp', 'share 6 digit pin'
  ]
};

export const DEFAULT_THRESHOLDS = {
  MIN_AMOUNT_LIMIT: 500,
  MAX_AMOUNT_LIMIT: 100000,
  DEFAULT_WARNING_LIMIT: 5000,
  NEW_PAYEE_COOLING_PERIOD_MINUTES: 60
};
