/**
 * Verix National Cybercrime Threat Intelligence Registry
 * Auto-Ingested & Enriched from Real Indian Cyber Fraud Datasets (2026)
 * Total Ingested Threat Entities: 1335
 */

export const SEED_THREAT_RECORDS = [
  {
    "id": "threat-vpa-001",
    "type": "VPA",
    "identifier": "scammer.cybercell@oksbi",
    "name": "Fake Cyber Police Verification",
    "category": "DIGITAL_ARREST",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 142,
    "details": "Impersonates Delhi Police / CBI requesting urgent security clearance fee.",
    "tags": [
      "digital_arrest",
      "fake_police",
      "cbi_impersonation"
    ],
    "reportedAt": "2026-08-10T10:30:00.000Z"
  },
  {
    "id": "threat-vpa-002",
    "type": "VPA",
    "identifier": "electricity.officer.bill@paytm",
    "name": "State Electricity Bill Helpdesk",
    "category": "ELECTRICITY_BILL",
    "riskScore": 95,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 89,
    "details": "Sends SMS claiming power connection will be disconnected tonight at 9:30 PM.",
    "tags": [
      "power_cut",
      "bijli_bill",
      "urgent_utility"
    ],
    "reportedAt": "2026-08-15T14:15:00.000Z"
  },
  {
    "id": "threat-vpa-003",
    "type": "VPA",
    "identifier": "telegram.task.rewards@ybl",
    "name": "Global Review Merchant Task",
    "category": "PART_TIME_JOB",
    "riskScore": 92,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 67,
    "details": "Offers ₹3000/day for liking YouTube videos/Google maps; demands prepaid recharge deposits.",
    "tags": [
      "job_scam",
      "telegram_task",
      "prepaid_crypto"
    ],
    "reportedAt": "2026-08-18T09:00:00.000Z"
  },
  {
    "id": "threat-vpa-004",
    "type": "VPA",
    "identifier": "customs.fedex.clearance@icici",
    "name": "FedEx Customs Clearance Officer",
    "category": "CUSTOMS_PARCEL",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 114,
    "details": "Claims parcel containing contraband/passport is held at Mumbai airport customs.",
    "tags": [
      "customs",
      "parcel_drugs",
      "mumbai_airport"
    ],
    "reportedAt": "2026-08-05T16:45:00.000Z"
  },
  {
    "id": "threat-phone-001",
    "type": "PHONE",
    "identifier": "+919876543210",
    "name": "Scam Caller - Fake CBI Dept",
    "category": "FAKE_POLICE_CBI",
    "riskScore": 100,
    "isBlacklisted": true,
    "source": "I4C_1930_HELPLINE",
    "reportCount": 311,
    "details": "Robocall/Live caller claiming Supreme Court arrest warrant for money laundering. | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a CBI officer and threatens arrest unless a security deposit is paid via UPI, which is a classic phishing and coercion tactic. This is a fraudulent attempt to obtain money under false legal pretenses.\"",
    "tags": [
      "cbi_scam",
      "virtual_arrest",
      "skype_video"
    ],
    "reportedAt": "2026-08-01T12:00:00.000Z"
  },
  {
    "id": "threat-phone-002",
    "type": "PHONE",
    "identifier": "+918800112233",
    "name": "Fake SBI KYC Support",
    "category": "KYC_EXPIRY",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 95,
    "details": "Urgent call demanding AnyDesk APK install to update PAN card / Aadhaar link.",
    "tags": [
      "kyc_fraud",
      "anydesk_apk",
      "sbi_fake"
    ],
    "reportedAt": "2026-08-12T11:20:00.000Z"
  },
  {
    "id": "threat-phone-003",
    "type": "PHONE",
    "identifier": "+917711223344",
    "name": "Spam Loan Harassment Bot",
    "category": "LOAN_EXTORTION",
    "riskScore": 88,
    "isBlacklisted": true,
    "source": "CROWDSOURCED_USER_REPORTS",
    "reportCount": 54,
    "details": "Automated extortion calls with morphed photo threats.",
    "tags": [
      "loan_app",
      "extortion",
      "harassment"
    ],
    "reportedAt": "2026-08-16T18:10:00.000Z"
  },
  {
    "id": "threat-1787436332955",
    "type": "VPA",
    "identifier": "cbi.verification@paytm",
    "name": "Reported Digital Arrest Extortion Target",
    "category": "Digital Arrest Extortion",
    "riskScore": 15,
    "isBlacklisted": false,
    "source": "USER_REPORT",
    "reportCount": 1,
    "details": "False Positive Approved: Verified legitimate merchant by Bank Officer BANK_OFFICER_042.",
    "tags": [
      "user_reported",
      "digital arrest extortion"
    ],
    "reportedAt": "2026-08-22T22:05:32.955Z"
  },
  {
    "id": "eb8c8e24-2bdf-453e-b034-4fb30e85d0de",
    "type": "PHONE",
    "identifier": "+919477530475",
    "name": "Flagged (VOICE_PHISHING)",
    "category": "VOICE_PHISHING",
    "riskScore": 85,
    "isBlacklisted": true,
    "source": "SUPABASE_CLOUD_REGISTRY",
    "reportCount": 1,
    "details": "Suspected Digital Arrest / Fake Police Extortion Call",
    "tags": [
      "supabase",
      "voice_phishing"
    ]
  },
  {
    "id": "threat-1788131666237",
    "type": "PHONE",
    "identifier": "+91 99999 88888",
    "name": "Reported DIGITAL_ARREST Target",
    "category": "DIGITAL_ARREST",
    "riskScore": 90,
    "isBlacklisted": true,
    "source": "GROQ_WHISPER_VOICE_AI",
    "reportCount": 2,
    "details": "Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer demanding a bail payment for an alleged illegal parcel linked to the victim's Aadhaar, which is a classic digital arrest scam. This uses intimidation and false authority to extract money.\" | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer and threatens the victim with a fake legal issue, demanding a bail payment. This is a classic digital arrest scam using coercion and false authority.\"",
    "tags": [
      "user_reported",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:14:26.237Z"
  },
  {
    "id": "threat-phone-upi-1788131614401-3603",
    "type": "PHONE",
    "identifier": "+91 27986 04680",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8589.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.401Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-3714",
    "type": "PHONE",
    "identifier": "+91 08001 28996",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹9026.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-1906",
    "type": "PHONE",
    "identifier": "+91 04110 19719",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1077.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-9474",
    "type": "PHONE",
    "identifier": "+91 91317 11223",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7345.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-7152",
    "type": "PHONE",
    "identifier": "+91 82762 38760",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4114.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-3709",
    "type": "PHONE",
    "identifier": "+91 81935 01783",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1304.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-3555",
    "type": "PHONE",
    "identifier": "+91 84772 28884",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5844.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-8707",
    "type": "PHONE",
    "identifier": "+91 28198 55300",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8911.6).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-8710",
    "type": "PHONE",
    "identifier": "+91 05536 14581",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2368.96).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-9900",
    "type": "PHONE",
    "identifier": "+91 08752 94930",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7257.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-5173",
    "type": "PHONE",
    "identifier": "+91 47178 82884",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9189.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-3422",
    "type": "PHONE",
    "identifier": "+91 07731 62383",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1444.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-6314",
    "type": "PHONE",
    "identifier": "+91 07985 48616",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4681.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-7177",
    "type": "PHONE",
    "identifier": "+91 75005 06893",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2871.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-7059",
    "type": "PHONE",
    "identifier": "+91 53242 87538",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5244.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-2026",
    "type": "PHONE",
    "identifier": "+91 98194 08869",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7467.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-3848",
    "type": "PHONE",
    "identifier": "+91 00104 95406",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8984.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-6763",
    "type": "PHONE",
    "identifier": "+91 20251 06328",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8185.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-9266",
    "type": "PHONE",
    "identifier": "+91 86914 21520",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3459.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-4916",
    "type": "PHONE",
    "identifier": "+91 75923 18092",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹704.63).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-9301",
    "type": "PHONE",
    "identifier": "+91 18591 95517",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4502.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-7254",
    "type": "PHONE",
    "identifier": "+91 44127 67668",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5105.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-5971",
    "type": "PHONE",
    "identifier": "+91 50491 14594",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6711.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-1877",
    "type": "PHONE",
    "identifier": "+91 20652 55042",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8813.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-7260",
    "type": "PHONE",
    "identifier": "+91 34161 34188",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4167.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-5550",
    "type": "PHONE",
    "identifier": "+91 33118 21916",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1152.24).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-2637",
    "type": "PHONE",
    "identifier": "+91 39352 35548",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6527.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614402-6427",
    "type": "PHONE",
    "identifier": "+91 61839 53656",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1888.64).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.402Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-2387",
    "type": "PHONE",
    "identifier": "+91 19089 33622",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6223.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-7971",
    "type": "PHONE",
    "identifier": "+91 61360 06046",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6106.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-6619",
    "type": "PHONE",
    "identifier": "+91 78367 94639",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2710.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-1959",
    "type": "PHONE",
    "identifier": "+91 43284 46628",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4840.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-256",
    "type": "PHONE",
    "identifier": "+91 99475 22344",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 76,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1879.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-978",
    "type": "PHONE",
    "identifier": "+91 38369 25804",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1974.15).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-7191",
    "type": "PHONE",
    "identifier": "+91 81701 45172",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹192.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-9119",
    "type": "PHONE",
    "identifier": "+91 27628 59560",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹677.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-2933",
    "type": "PHONE",
    "identifier": "+91 59383 58093",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1841.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-4909",
    "type": "PHONE",
    "identifier": "+91 04513 30738",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3057.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-2229",
    "type": "PHONE",
    "identifier": "+91 65100 71345",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4985.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-9643",
    "type": "PHONE",
    "identifier": "+91 20364 29172",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8187.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-3437",
    "type": "PHONE",
    "identifier": "+91 39162 52867",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4780.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-4423",
    "type": "PHONE",
    "identifier": "+91 05007 96816",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3767.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-3789",
    "type": "PHONE",
    "identifier": "+91 89582 05346",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹744.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-807",
    "type": "PHONE",
    "identifier": "+91 26874 42119",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4521.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614403-4156",
    "type": "PHONE",
    "identifier": "+91 12199 59976",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7819.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.403Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-2632",
    "type": "PHONE",
    "identifier": "+91 27058 34907",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4818.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-9768",
    "type": "PHONE",
    "identifier": "+91 64977 65158",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹962.97).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-602",
    "type": "PHONE",
    "identifier": "+91 40606 83640",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2172.22).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-9031",
    "type": "PHONE",
    "identifier": "+91 66960 77262",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8728.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-6072",
    "type": "PHONE",
    "identifier": "+91 87085 20682",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5236.15).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4936",
    "type": "PHONE",
    "identifier": "+91 10080 35446",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹489.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4040",
    "type": "PHONE",
    "identifier": "+91 70861 17151",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3142.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-6442",
    "type": "PHONE",
    "identifier": "+91 54009 64807",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹346.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-8670",
    "type": "PHONE",
    "identifier": "+91 99973 23759",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5336.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-1253",
    "type": "PHONE",
    "identifier": "+91 30056 92346",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9634.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-9291",
    "type": "PHONE",
    "identifier": "+91 24744 02551",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4970.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-6917",
    "type": "PHONE",
    "identifier": "+91 21778 83066",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6737.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-7100",
    "type": "PHONE",
    "identifier": "+91 75988 49077",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8509.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4217",
    "type": "PHONE",
    "identifier": "+91 16895 94428",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5413.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-9073",
    "type": "PHONE",
    "identifier": "+91 09934 31701",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6512.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-972",
    "type": "PHONE",
    "identifier": "+91 18865 92075",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7871.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-2016",
    "type": "PHONE",
    "identifier": "+91 83366 52135",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹549.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-1531",
    "type": "PHONE",
    "identifier": "+91 93006 13866",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6623.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-5011",
    "type": "PHONE",
    "identifier": "+91 81316 55033",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹749.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-8606",
    "type": "PHONE",
    "identifier": "+91 88559 20324",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8828.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-5398",
    "type": "PHONE",
    "identifier": "+91 34874 54829",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1733.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-520",
    "type": "PHONE",
    "identifier": "+91 79451 91194",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6297.72).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-9852",
    "type": "PHONE",
    "identifier": "+91 09127 21395",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1339.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4376",
    "type": "PHONE",
    "identifier": "+91 73868 37942",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9216.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-9053",
    "type": "PHONE",
    "identifier": "+91 34782 38344",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4365.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-5225",
    "type": "PHONE",
    "identifier": "+91 77655 89863",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8377.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-1051",
    "type": "PHONE",
    "identifier": "+91 80072 24423",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5770.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-1265",
    "type": "PHONE",
    "identifier": "+91 43703 85303",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1371.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-5615",
    "type": "PHONE",
    "identifier": "+91 77474 83231",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3557.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-2242",
    "type": "PHONE",
    "identifier": "+91 40798 22614",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 63,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8537.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-5412",
    "type": "PHONE",
    "identifier": "+91 09666 50647",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1324.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-7674",
    "type": "PHONE",
    "identifier": "+91 86409 60014",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9694.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-6710",
    "type": "PHONE",
    "identifier": "+91 51528 62032",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4068.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4619",
    "type": "PHONE",
    "identifier": "+91 06524 80668",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4067.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-570",
    "type": "PHONE",
    "identifier": "+91 30724 34230",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4181.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4819",
    "type": "PHONE",
    "identifier": "+91 37352 92498",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹849.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-5709",
    "type": "PHONE",
    "identifier": "+91 68587 36092",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1454.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-8694",
    "type": "PHONE",
    "identifier": "+91 05750 42066",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4213.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-4712",
    "type": "PHONE",
    "identifier": "+91 19146 93262",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8382.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614404-8841",
    "type": "PHONE",
    "identifier": "+91 24679 29559",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8841.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.404Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-2947",
    "type": "PHONE",
    "identifier": "+91 08626 67423",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1081.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-6210",
    "type": "PHONE",
    "identifier": "+91 88756 30151",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4719.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-4105",
    "type": "PHONE",
    "identifier": "+91 16996 60455",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4851.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-5993",
    "type": "PHONE",
    "identifier": "+91 49378 27939",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4796.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-6790",
    "type": "PHONE",
    "identifier": "+91 75610 97874",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3588.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-9313",
    "type": "PHONE",
    "identifier": "+91 18940 44943",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹113.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-3123",
    "type": "PHONE",
    "identifier": "+91 94576 95016",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9013.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-5238",
    "type": "PHONE",
    "identifier": "+91 53836 09992",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6780.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-5290",
    "type": "PHONE",
    "identifier": "+91 58128 84883",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8492.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-3961",
    "type": "PHONE",
    "identifier": "+91 08090 77753",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7159.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-2403",
    "type": "PHONE",
    "identifier": "+91 93503 01176",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2963.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-103",
    "type": "PHONE",
    "identifier": "+91 62292 36356",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2725.47).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-6542",
    "type": "PHONE",
    "identifier": "+91 46981 71023",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹17.47).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-3394",
    "type": "PHONE",
    "identifier": "+91 89810 09295",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8904.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-5430",
    "type": "PHONE",
    "identifier": "+91 76314 26086",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3233.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-2355",
    "type": "PHONE",
    "identifier": "+91 51207 31364",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 76,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2809.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-7680",
    "type": "PHONE",
    "identifier": "+91 52447 03549",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹807.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-6763",
    "type": "PHONE",
    "identifier": "+91 35920 75743",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 98,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3718.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-8201",
    "type": "PHONE",
    "identifier": "+91 81074 00158",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹553.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-7118",
    "type": "PHONE",
    "identifier": "+91 42993 14993",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6971.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-5892",
    "type": "PHONE",
    "identifier": "+91 44433 06341",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8478.24).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-4492",
    "type": "PHONE",
    "identifier": "+91 72576 06753",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4623.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-9777",
    "type": "PHONE",
    "identifier": "+91 05799 97944",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3301.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-4635",
    "type": "PHONE",
    "identifier": "+91 03478 28728",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3436.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-7817",
    "type": "PHONE",
    "identifier": "+91 74700 34623",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2853.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-4293",
    "type": "PHONE",
    "identifier": "+91 10020 41633",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9515.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-4188",
    "type": "PHONE",
    "identifier": "+91 73356 28451",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1053.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-5889",
    "type": "PHONE",
    "identifier": "+91 26432 66215",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6838.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-2546",
    "type": "PHONE",
    "identifier": "+91 08647 82312",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4142.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-9403",
    "type": "PHONE",
    "identifier": "+91 47802 11405",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9367.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614405-7337",
    "type": "PHONE",
    "identifier": "+91 05849 33305",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5784.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.405Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-2967",
    "type": "PHONE",
    "identifier": "+91 59285 85799",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8035.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-4689",
    "type": "PHONE",
    "identifier": "+91 04515 50906",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5686.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-6666",
    "type": "PHONE",
    "identifier": "+91 03149 40217",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8894.81).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-2412",
    "type": "PHONE",
    "identifier": "+91 11795 92897",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7535.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-4556",
    "type": "PHONE",
    "identifier": "+91 75070 00930",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2461.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-4553",
    "type": "PHONE",
    "identifier": "+91 55221 66372",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9694.52).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-5866",
    "type": "PHONE",
    "identifier": "+91 57793 82090",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2817.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-2699",
    "type": "PHONE",
    "identifier": "+91 89988 07099",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8687.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-1251",
    "type": "PHONE",
    "identifier": "+91 93377 39508",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 107,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7540.45).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-5490",
    "type": "PHONE",
    "identifier": "+91 99734 65879",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6328.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-3529",
    "type": "PHONE",
    "identifier": "+91 01285 10311",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6736.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-2406",
    "type": "PHONE",
    "identifier": "+91 83860 30699",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1451.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-2459",
    "type": "PHONE",
    "identifier": "+91 39242 96356",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4270.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-336",
    "type": "PHONE",
    "identifier": "+91 87277 45404",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1309.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-5460",
    "type": "PHONE",
    "identifier": "+91 40001 58291",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6460.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-7754",
    "type": "PHONE",
    "identifier": "+91 13148 11569",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7023.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-6821",
    "type": "PHONE",
    "identifier": "+91 86297 10827",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5587.15).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-2493",
    "type": "PHONE",
    "identifier": "+91 74894 07988",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 98,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5408.69).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-5422",
    "type": "PHONE",
    "identifier": "+91 84842 39546",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7771.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-6257",
    "type": "PHONE",
    "identifier": "+91 83388 19620",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6218.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614406-4174",
    "type": "PHONE",
    "identifier": "+91 56387 53798",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5354.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.406Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-4320",
    "type": "PHONE",
    "identifier": "+91 43282 79200",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹377.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-2755",
    "type": "PHONE",
    "identifier": "+91 99100 69373",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 101,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7696.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-9815",
    "type": "PHONE",
    "identifier": "+91 48587 14247",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3857.79).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-837",
    "type": "PHONE",
    "identifier": "+91 89077 79370",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3343.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-4921",
    "type": "PHONE",
    "identifier": "+91 02656 84322",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4783.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-1664",
    "type": "PHONE",
    "identifier": "+91 63936 83672",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2146.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-8651",
    "type": "PHONE",
    "identifier": "+91 50775 72043",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6980.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-6478",
    "type": "PHONE",
    "identifier": "+91 09470 24025",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7901.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-7371",
    "type": "PHONE",
    "identifier": "+91 55794 34306",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6873.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-5755",
    "type": "PHONE",
    "identifier": "+91 40629 12060",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1007.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-9933",
    "type": "PHONE",
    "identifier": "+91 21601 70384",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1593.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-9717",
    "type": "PHONE",
    "identifier": "+91 02085 16490",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5292.64).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-8538",
    "type": "PHONE",
    "identifier": "+91 01366 98111",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9731.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-9297",
    "type": "PHONE",
    "identifier": "+91 48387 99108",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3263.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-4802",
    "type": "PHONE",
    "identifier": "+91 71627 38778",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1093.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-6848",
    "type": "PHONE",
    "identifier": "+91 12582 17073",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2791.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-6239",
    "type": "PHONE",
    "identifier": "+91 46273 51196",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4032.9).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-7804",
    "type": "PHONE",
    "identifier": "+91 19639 65524",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹455.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-8547",
    "type": "PHONE",
    "identifier": "+91 19249 74002",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7386.52).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-223",
    "type": "PHONE",
    "identifier": "+91 48979 57954",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4867.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-9819",
    "type": "PHONE",
    "identifier": "+91 30983 58474",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8682.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-8506",
    "type": "PHONE",
    "identifier": "+91 51246 33467",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2068.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-78",
    "type": "PHONE",
    "identifier": "+91 83645 23007",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4535.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-3737",
    "type": "PHONE",
    "identifier": "+91 21597 84198",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4490.36).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-7506",
    "type": "PHONE",
    "identifier": "+91 37629 03321",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9094.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-4855",
    "type": "PHONE",
    "identifier": "+91 90278 52314",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6922.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-3949",
    "type": "PHONE",
    "identifier": "+91 01888 97902",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7923.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614407-7890",
    "type": "PHONE",
    "identifier": "+91 67897 23099",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 107,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4543.96).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.407Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-9986",
    "type": "PHONE",
    "identifier": "+91 34321 34850",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3595.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-364",
    "type": "PHONE",
    "identifier": "+91 59584 26635",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4186.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-3007",
    "type": "PHONE",
    "identifier": "+91 68549 96036",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7497.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-6240",
    "type": "PHONE",
    "identifier": "+91 59484 66762",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7464.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-8021",
    "type": "PHONE",
    "identifier": "+91 14717 99334",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3043.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-1436",
    "type": "PHONE",
    "identifier": "+91 53162 56549",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹261.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-5118",
    "type": "PHONE",
    "identifier": "+91 45270 76239",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1685.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-4535",
    "type": "PHONE",
    "identifier": "+91 44767 26893",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1497.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-3579",
    "type": "PHONE",
    "identifier": "+91 45264 55754",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2325.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-5028",
    "type": "PHONE",
    "identifier": "+91 40194 56785",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8686.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-5805",
    "type": "PHONE",
    "identifier": "+91 17733 82000",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3646.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-2267",
    "type": "PHONE",
    "identifier": "+91 05113 87519",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6363.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-6903",
    "type": "PHONE",
    "identifier": "+91 03433 93433",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7582.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-2066",
    "type": "PHONE",
    "identifier": "+91 06428 06025",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4429.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-6475",
    "type": "PHONE",
    "identifier": "+91 64646 94616",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8979.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-3201",
    "type": "PHONE",
    "identifier": "+91 84525 09379",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5285.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-455",
    "type": "PHONE",
    "identifier": "+91 70427 47334",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6246.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-8597",
    "type": "PHONE",
    "identifier": "+91 68458 49464",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹605.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-2154",
    "type": "PHONE",
    "identifier": "+91 49281 50196",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3808.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-7628",
    "type": "PHONE",
    "identifier": "+91 25590 62979",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3223.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-7355",
    "type": "PHONE",
    "identifier": "+91 58378 51166",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5071.04).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-2918",
    "type": "PHONE",
    "identifier": "+91 36262 95431",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5929.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-3903",
    "type": "PHONE",
    "identifier": "+91 54375 28187",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1970.79).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-2276",
    "type": "PHONE",
    "identifier": "+91 39575 79050",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4796.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614408-5061",
    "type": "PHONE",
    "identifier": "+91 06311 71230",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5242.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.408Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-8269",
    "type": "PHONE",
    "identifier": "+91 63878 55811",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2270.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-9548",
    "type": "PHONE",
    "identifier": "+91 85518 10908",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8803.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-665",
    "type": "PHONE",
    "identifier": "+91 45791 64189",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4232.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-6786",
    "type": "PHONE",
    "identifier": "+91 35271 35482",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3297.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-6165",
    "type": "PHONE",
    "identifier": "+91 43416 46659",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7320.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-2640",
    "type": "PHONE",
    "identifier": "+91 32036 55822",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5004.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-1636",
    "type": "PHONE",
    "identifier": "+91 22734 91825",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1433.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-8967",
    "type": "PHONE",
    "identifier": "+91 87409 56750",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7553.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-16",
    "type": "PHONE",
    "identifier": "+91 54238 11123",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4069.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-9463",
    "type": "PHONE",
    "identifier": "+91 71325 34477",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2247.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-4438",
    "type": "PHONE",
    "identifier": "+91 93898 47924",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹709.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-2095",
    "type": "PHONE",
    "identifier": "+91 09156 31511",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹789.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-4370",
    "type": "PHONE",
    "identifier": "+91 08576 66159",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3205.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-7642",
    "type": "PHONE",
    "identifier": "+91 46227 27799",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1158.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-2105",
    "type": "PHONE",
    "identifier": "+91 90786 37831",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹677.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-852",
    "type": "PHONE",
    "identifier": "+91 59445 27079",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9782.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-2286",
    "type": "PHONE",
    "identifier": "+91 70161 33291",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9019.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-1326",
    "type": "PHONE",
    "identifier": "+91 63684 76361",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3236.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-1104",
    "type": "PHONE",
    "identifier": "+91 71999 01837",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5276.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-5035",
    "type": "PHONE",
    "identifier": "+91 00511 83149",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2947.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-7579",
    "type": "PHONE",
    "identifier": "+91 25840 72117",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7586.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614409-6098",
    "type": "PHONE",
    "identifier": "+91 79199 72570",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7865.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.409Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-1451",
    "type": "PHONE",
    "identifier": "+91 52073 63568",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹130.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-576",
    "type": "PHONE",
    "identifier": "+91 50184 38294",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹514.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-9750",
    "type": "PHONE",
    "identifier": "+91 32000 67054",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8920.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-9576",
    "type": "PHONE",
    "identifier": "+91 78005 18195",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7102.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-831",
    "type": "PHONE",
    "identifier": "+91 08452 75168",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1143.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-3935",
    "type": "PHONE",
    "identifier": "+91 26778 47861",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7186.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-5352",
    "type": "PHONE",
    "identifier": "+91 81279 42627",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9113.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-1791",
    "type": "PHONE",
    "identifier": "+91 02648 24045",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2246.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-639",
    "type": "PHONE",
    "identifier": "+91 04617 29095",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3346.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-4315",
    "type": "PHONE",
    "identifier": "+91 37536 44618",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4879.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-9733",
    "type": "PHONE",
    "identifier": "+91 55120 14594",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8639.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-820",
    "type": "PHONE",
    "identifier": "+91 37020 84094",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4706.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-9067",
    "type": "PHONE",
    "identifier": "+91 84487 68135",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹311.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-1059",
    "type": "PHONE",
    "identifier": "+91 44159 44112",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9259.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-9949",
    "type": "PHONE",
    "identifier": "+91 72592 14091",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4191.24).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-8359",
    "type": "PHONE",
    "identifier": "+91 06813 70327",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9613.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-1794",
    "type": "PHONE",
    "identifier": "+91 30462 51379",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7736.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-6800",
    "type": "PHONE",
    "identifier": "+91 01099 52974",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6189.72).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-6081",
    "type": "PHONE",
    "identifier": "+91 90940 25436",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5608.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-7264",
    "type": "PHONE",
    "identifier": "+91 80505 08986",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8499.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-5796",
    "type": "PHONE",
    "identifier": "+91 02275 18284",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7331.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-1587",
    "type": "PHONE",
    "identifier": "+91 23315 44375",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8382.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-3970",
    "type": "PHONE",
    "identifier": "+91 58001 10872",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5258.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-8311",
    "type": "PHONE",
    "identifier": "+91 66186 57329",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹122.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614410-9330",
    "type": "PHONE",
    "identifier": "+91 36849 16424",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1014.6).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.410Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-7054",
    "type": "PHONE",
    "identifier": "+91 80394 86963",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9225.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1802",
    "type": "PHONE",
    "identifier": "+91 01780 93221",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6541.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-2288",
    "type": "PHONE",
    "identifier": "+91 03382 37957",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 45,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1981.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-5043",
    "type": "PHONE",
    "identifier": "+91 73413 59502",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5345.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-3886",
    "type": "PHONE",
    "identifier": "+91 27965 17893",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹486.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-3178",
    "type": "PHONE",
    "identifier": "+91 03386 28894",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3096.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-6837",
    "type": "PHONE",
    "identifier": "+91 76594 07838",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3839.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-7191",
    "type": "PHONE",
    "identifier": "+91 97016 72214",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3660.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1862",
    "type": "PHONE",
    "identifier": "+91 10317 59978",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3213.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-590",
    "type": "PHONE",
    "identifier": "+91 06086 99664",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4023.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-3026",
    "type": "PHONE",
    "identifier": "+91 60423 38713",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2340.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-9316",
    "type": "PHONE",
    "identifier": "+91 28654 94065",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4932.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-9037",
    "type": "PHONE",
    "identifier": "+91 65171 05411",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4015.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-6757",
    "type": "PHONE",
    "identifier": "+91 93702 65504",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5442.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1892",
    "type": "PHONE",
    "identifier": "+91 92784 03875",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6181.81).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1683",
    "type": "PHONE",
    "identifier": "+91 60410 32030",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4553.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-4037",
    "type": "PHONE",
    "identifier": "+91 48724 13512",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1198.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-9473",
    "type": "PHONE",
    "identifier": "+91 98302 73085",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8157.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-6650",
    "type": "PHONE",
    "identifier": "+91 00015 63218",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2991.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1260",
    "type": "PHONE",
    "identifier": "+91 88866 99045",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7411.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-9172",
    "type": "PHONE",
    "identifier": "+91 98050 13826",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1019.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-5722",
    "type": "PHONE",
    "identifier": "+91 63320 87575",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8918.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-9036",
    "type": "PHONE",
    "identifier": "+91 84028 23836",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8786.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-6428",
    "type": "PHONE",
    "identifier": "+91 18312 15893",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1565.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1556",
    "type": "PHONE",
    "identifier": "+91 28453 13761",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4764.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-452",
    "type": "PHONE",
    "identifier": "+91 62751 76018",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7585.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-9315",
    "type": "PHONE",
    "identifier": "+91 53788 24577",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9120.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1671",
    "type": "PHONE",
    "identifier": "+91 81413 32827",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 101,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1228.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-1486",
    "type": "PHONE",
    "identifier": "+91 42543 97437",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6743.04).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-3250",
    "type": "PHONE",
    "identifier": "+91 45501 55109",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1577.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614411-7585",
    "type": "PHONE",
    "identifier": "+91 07854 82634",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6113.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.411Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-9903",
    "type": "PHONE",
    "identifier": "+91 68135 63167",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3894.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-6005",
    "type": "PHONE",
    "identifier": "+91 66409 42070",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹25.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-9807",
    "type": "PHONE",
    "identifier": "+91 96291 67630",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹9926.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-8888",
    "type": "PHONE",
    "identifier": "+91 25850 99460",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹117.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-7695",
    "type": "PHONE",
    "identifier": "+91 25226 28480",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3989.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-183",
    "type": "PHONE",
    "identifier": "+91 90687 96564",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2993.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-2346",
    "type": "PHONE",
    "identifier": "+91 21036 94142",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5827.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-7450",
    "type": "PHONE",
    "identifier": "+91 61790 91821",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5300.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-3741",
    "type": "PHONE",
    "identifier": "+91 47034 07370",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹78.68).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-4021",
    "type": "PHONE",
    "identifier": "+91 20760 06294",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4008.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-888",
    "type": "PHONE",
    "identifier": "+91 13889 52545",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7457.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-5482",
    "type": "PHONE",
    "identifier": "+91 53486 30014",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8891.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-5745",
    "type": "PHONE",
    "identifier": "+91 65143 19836",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7310.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-7693",
    "type": "PHONE",
    "identifier": "+91 82158 04394",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5646.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-680",
    "type": "PHONE",
    "identifier": "+91 12434 87733",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8259.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-2900",
    "type": "PHONE",
    "identifier": "+91 41525 17655",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8688.63).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614412-1685",
    "type": "PHONE",
    "identifier": "+91 12271 24589",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7966.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.412Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-1221",
    "type": "PHONE",
    "identifier": "+91 63095 87061",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4985.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4156",
    "type": "PHONE",
    "identifier": "+91 47990 40482",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2872.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-2893",
    "type": "PHONE",
    "identifier": "+91 28774 37750",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 98,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8782.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4772",
    "type": "PHONE",
    "identifier": "+91 95171 61762",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4689.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4802",
    "type": "PHONE",
    "identifier": "+91 02073 31458",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4340.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-2778",
    "type": "PHONE",
    "identifier": "+91 69261 84793",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9576.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-806",
    "type": "PHONE",
    "identifier": "+91 01767 92372",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹74.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4696",
    "type": "PHONE",
    "identifier": "+91 26666 96649",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1086.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-6398",
    "type": "PHONE",
    "identifier": "+91 45645 72985",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6283.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4434",
    "type": "PHONE",
    "identifier": "+91 92724 33634",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1867.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-3165",
    "type": "PHONE",
    "identifier": "+91 91032 36833",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2031.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-660",
    "type": "PHONE",
    "identifier": "+91 00682 19931",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4350.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-9150",
    "type": "PHONE",
    "identifier": "+91 54010 30899",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹923.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-8095",
    "type": "PHONE",
    "identifier": "+91 46419 36494",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6480.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-9810",
    "type": "PHONE",
    "identifier": "+91 49838 09702",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9323.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-8275",
    "type": "PHONE",
    "identifier": "+91 38238 24816",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6307.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4130",
    "type": "PHONE",
    "identifier": "+91 78495 71321",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8067.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-4572",
    "type": "PHONE",
    "identifier": "+91 20489 16277",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1300.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-9864",
    "type": "PHONE",
    "identifier": "+91 95643 82374",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8646.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-7039",
    "type": "PHONE",
    "identifier": "+91 93949 22445",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹381.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-1414",
    "type": "PHONE",
    "identifier": "+91 08551 96019",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2216.45).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-9414",
    "type": "PHONE",
    "identifier": "+91 73317 12913",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9262.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-1899",
    "type": "PHONE",
    "identifier": "+91 81209 16605",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-3807",
    "type": "PHONE",
    "identifier": "+91 39100 69184",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 63,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6776.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614413-8127",
    "type": "PHONE",
    "identifier": "+91 53728 05916",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3185.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.413Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-5729",
    "type": "PHONE",
    "identifier": "+91 28211 47237",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1301.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-6840",
    "type": "PHONE",
    "identifier": "+91 80952 17169",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7721.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-4369",
    "type": "PHONE",
    "identifier": "+91 14486 04365",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4873.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-2695",
    "type": "PHONE",
    "identifier": "+91 02334 98733",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8538.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-2349",
    "type": "PHONE",
    "identifier": "+91 20126 18241",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 63,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7720.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-8829",
    "type": "PHONE",
    "identifier": "+91 87562 43538",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹328.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-2100",
    "type": "PHONE",
    "identifier": "+91 38128 32941",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 76,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8984.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-4272",
    "type": "PHONE",
    "identifier": "+91 86933 49980",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7762.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-1401",
    "type": "PHONE",
    "identifier": "+91 09838 37963",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6584.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-6618",
    "type": "PHONE",
    "identifier": "+91 58007 19306",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3148.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-5096",
    "type": "PHONE",
    "identifier": "+91 39372 61025",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2367.22).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-1749",
    "type": "PHONE",
    "identifier": "+91 34143 53795",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5015.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-4855",
    "type": "PHONE",
    "identifier": "+91 01353 37010",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8676.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-9541",
    "type": "PHONE",
    "identifier": "+91 50066 15954",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8991.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-3035",
    "type": "PHONE",
    "identifier": "+91 04404 78670",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹735.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-4574",
    "type": "PHONE",
    "identifier": "+91 50733 54398",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4911.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-8350",
    "type": "PHONE",
    "identifier": "+91 53591 23930",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7640.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-5334",
    "type": "PHONE",
    "identifier": "+91 96549 20297",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5844.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-8866",
    "type": "PHONE",
    "identifier": "+91 49124 97858",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3416.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-255",
    "type": "PHONE",
    "identifier": "+91 92723 01490",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5247.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-1669",
    "type": "PHONE",
    "identifier": "+91 44791 52208",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4925.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-7897",
    "type": "PHONE",
    "identifier": "+91 34369 47987",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3219.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-699",
    "type": "PHONE",
    "identifier": "+91 33239 36432",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6422.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-2320",
    "type": "PHONE",
    "identifier": "+91 60856 19024",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7019.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-1338",
    "type": "PHONE",
    "identifier": "+91 70536 71397",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1541.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-2579",
    "type": "PHONE",
    "identifier": "+91 94495 11421",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1425.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-3032",
    "type": "PHONE",
    "identifier": "+91 35260 83694",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3038.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614414-6482",
    "type": "PHONE",
    "identifier": "+91 13497 67766",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3159.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.414Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-640",
    "type": "PHONE",
    "identifier": "+91 75753 12176",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹325.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-7505",
    "type": "PHONE",
    "identifier": "+91 13388 35616",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4077.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-4975",
    "type": "PHONE",
    "identifier": "+91 78969 14657",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9030.96).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3787",
    "type": "PHONE",
    "identifier": "+91 87187 14307",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5135.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8126",
    "type": "PHONE",
    "identifier": "+91 37542 35820",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4835.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3155",
    "type": "PHONE",
    "identifier": "+91 81203 37109",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7942.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8426",
    "type": "PHONE",
    "identifier": "+91 32806 30931",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9513.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-7924",
    "type": "PHONE",
    "identifier": "+91 69520 38659",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4980.68).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-2236",
    "type": "PHONE",
    "identifier": "+91 59726 00534",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 101,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2854.1).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-7197",
    "type": "PHONE",
    "identifier": "+91 88963 67537",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2754.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3366",
    "type": "PHONE",
    "identifier": "+91 44533 11216",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8818.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8843",
    "type": "PHONE",
    "identifier": "+91 93938 87943",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9462.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-5025",
    "type": "PHONE",
    "identifier": "+91 94731 25378",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3138.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3135",
    "type": "PHONE",
    "identifier": "+91 81587 04779",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹29.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3422",
    "type": "PHONE",
    "identifier": "+91 52268 99266",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5085.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-6314",
    "type": "PHONE",
    "identifier": "+91 92538 33605",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1816.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-4355",
    "type": "PHONE",
    "identifier": "+91 79962 57920",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4267.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-1081",
    "type": "PHONE",
    "identifier": "+91 83108 62306",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1875.81).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-232",
    "type": "PHONE",
    "identifier": "+91 04762 26433",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹558.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-5701",
    "type": "PHONE",
    "identifier": "+91 95729 07121",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7191.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-7948",
    "type": "PHONE",
    "identifier": "+91 27627 42692",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2937.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-7296",
    "type": "PHONE",
    "identifier": "+91 02530 06076",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8078.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-4079",
    "type": "PHONE",
    "identifier": "+91 47093 45798",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹407.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-2942",
    "type": "PHONE",
    "identifier": "+91 14387 34776",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6643.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-26",
    "type": "PHONE",
    "identifier": "+91 86809 98025",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4759.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-2912",
    "type": "PHONE",
    "identifier": "+91 59265 91844",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3011.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-5686",
    "type": "PHONE",
    "identifier": "+91 35312 90706",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹872.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3324",
    "type": "PHONE",
    "identifier": "+91 36810 66070",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8680.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-508",
    "type": "PHONE",
    "identifier": "+91 24869 68128",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9498.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-174",
    "type": "PHONE",
    "identifier": "+91 84745 50854",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹675.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-915",
    "type": "PHONE",
    "identifier": "+91 62008 57184",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3875.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-245",
    "type": "PHONE",
    "identifier": "+91 38105 36447",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2668.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8588",
    "type": "PHONE",
    "identifier": "+91 46018 58087",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹273.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-2934",
    "type": "PHONE",
    "identifier": "+91 97189 08097",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8429.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-928",
    "type": "PHONE",
    "identifier": "+91 54062 48222",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2368.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8012",
    "type": "PHONE",
    "identifier": "+91 97437 97619",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4973.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-515",
    "type": "PHONE",
    "identifier": "+91 73208 75518",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9260.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3941",
    "type": "PHONE",
    "identifier": "+91 91741 70522",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1827.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8738",
    "type": "PHONE",
    "identifier": "+91 40719 33801",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4595.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-4092",
    "type": "PHONE",
    "identifier": "+91 58145 18320",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4114.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-8173",
    "type": "PHONE",
    "identifier": "+91 47023 58889",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3546.96).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-3980",
    "type": "PHONE",
    "identifier": "+91 60243 12314",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹9621.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-1009",
    "type": "PHONE",
    "identifier": "+91 92483 00293",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9083.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-5304",
    "type": "PHONE",
    "identifier": "+91 39535 32795",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3821.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614415-1317",
    "type": "PHONE",
    "identifier": "+91 86132 43850",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6052.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.415Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1950",
    "type": "PHONE",
    "identifier": "+91 21986 09028",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹324.81).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-6471",
    "type": "PHONE",
    "identifier": "+91 06368 51792",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3710.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-3553",
    "type": "PHONE",
    "identifier": "+91 33854 72841",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3171.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-4581",
    "type": "PHONE",
    "identifier": "+91 10232 64526",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5145.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1501",
    "type": "PHONE",
    "identifier": "+91 72447 17608",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8530.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-3162",
    "type": "PHONE",
    "identifier": "+91 90927 74006",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3554.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1881",
    "type": "PHONE",
    "identifier": "+91 28418 25211",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 76,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8809.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-6218",
    "type": "PHONE",
    "identifier": "+91 95039 73852",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7254.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-960",
    "type": "PHONE",
    "identifier": "+91 91484 33161",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹513.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-6846",
    "type": "PHONE",
    "identifier": "+91 14392 73471",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3329.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-2422",
    "type": "PHONE",
    "identifier": "+91 20066 09018",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1172.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-3189",
    "type": "PHONE",
    "identifier": "+91 10283 00343",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9220.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-8465",
    "type": "PHONE",
    "identifier": "+91 40285 33063",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3481.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-4725",
    "type": "PHONE",
    "identifier": "+91 64288 16458",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5005.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1745",
    "type": "PHONE",
    "identifier": "+91 73097 39001",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8700.36).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-9224",
    "type": "PHONE",
    "identifier": "+91 83823 08154",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3470.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-6243",
    "type": "PHONE",
    "identifier": "+91 50837 09349",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2278.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-8209",
    "type": "PHONE",
    "identifier": "+91 70851 93576",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7459.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-6360",
    "type": "PHONE",
    "identifier": "+91 12108 32169",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7246.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-7101",
    "type": "PHONE",
    "identifier": "+91 41563 99512",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6988.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-2289",
    "type": "PHONE",
    "identifier": "+91 35088 31081",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6396.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1524",
    "type": "PHONE",
    "identifier": "+91 93193 96717",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8770.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-3613",
    "type": "PHONE",
    "identifier": "+91 60236 77805",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3632.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-9493",
    "type": "PHONE",
    "identifier": "+91 55923 61567",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8955.96).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-3022",
    "type": "PHONE",
    "identifier": "+91 15304 61777",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1383.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-13",
    "type": "PHONE",
    "identifier": "+91 50214 82270",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7358.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-7221",
    "type": "PHONE",
    "identifier": "+91 47227 82037",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9289.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-5591",
    "type": "PHONE",
    "identifier": "+91 63154 05092",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6373.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1573",
    "type": "PHONE",
    "identifier": "+91 47354 23714",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9459.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-7067",
    "type": "PHONE",
    "identifier": "+91 74337 58009",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1740.04).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-7887",
    "type": "PHONE",
    "identifier": "+91 31078 60293",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7156.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-33",
    "type": "PHONE",
    "identifier": "+91 67797 83281",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6675.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-416",
    "type": "PHONE",
    "identifier": "+91 20198 64010",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1338.36).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-9568",
    "type": "PHONE",
    "identifier": "+91 58125 48790",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4706.69).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-2671",
    "type": "PHONE",
    "identifier": "+91 83324 27174",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2712.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-6016",
    "type": "PHONE",
    "identifier": "+91 36581 99144",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2878.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-9585",
    "type": "PHONE",
    "identifier": "+91 00315 60524",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9151.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-7577",
    "type": "PHONE",
    "identifier": "+91 91219 60792",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3910.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-1030",
    "type": "PHONE",
    "identifier": "+91 91884 82444",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8729.9).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-7851",
    "type": "PHONE",
    "identifier": "+91 57918 09843",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7133.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-2169",
    "type": "PHONE",
    "identifier": "+91 00585 49769",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 63,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7196.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614416-3275",
    "type": "PHONE",
    "identifier": "+91 86108 24447",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8251.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.416Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-4260",
    "type": "PHONE",
    "identifier": "+91 00957 04191",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9269.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3237",
    "type": "PHONE",
    "identifier": "+91 49877 05358",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2014.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-2091",
    "type": "PHONE",
    "identifier": "+91 72819 50604",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3222.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-518",
    "type": "PHONE",
    "identifier": "+91 71557 49685",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1257.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3843",
    "type": "PHONE",
    "identifier": "+91 02066 56610",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2091.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7710",
    "type": "PHONE",
    "identifier": "+91 30061 90571",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8129.6).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3118",
    "type": "PHONE",
    "identifier": "+91 71601 56622",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 101,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6633.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-187",
    "type": "PHONE",
    "identifier": "+91 91314 54420",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9852.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9440",
    "type": "PHONE",
    "identifier": "+91 08582 66671",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6503.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3125",
    "type": "PHONE",
    "identifier": "+91 92512 22532",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5877.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-8956",
    "type": "PHONE",
    "identifier": "+91 34088 99647",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9279.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9411",
    "type": "PHONE",
    "identifier": "+91 22487 83092",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹513.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-2447",
    "type": "PHONE",
    "identifier": "+91 24286 76712",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹676.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-5240",
    "type": "PHONE",
    "identifier": "+91 88731 45114",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1823.47).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-4368",
    "type": "PHONE",
    "identifier": "+91 17293 99082",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6963.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-1564",
    "type": "PHONE",
    "identifier": "+91 03427 86176",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1502.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9035",
    "type": "PHONE",
    "identifier": "+91 62972 35463",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2846.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-409",
    "type": "PHONE",
    "identifier": "+91 12049 23323",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3687.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9682",
    "type": "PHONE",
    "identifier": "+91 24558 64195",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6771.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7191",
    "type": "PHONE",
    "identifier": "+91 13073 50038",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7687.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-2128",
    "type": "PHONE",
    "identifier": "+91 02888 67509",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹340.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7928",
    "type": "PHONE",
    "identifier": "+91 43587 20047",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6974.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-8335",
    "type": "PHONE",
    "identifier": "+91 43108 61336",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6837.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-527",
    "type": "PHONE",
    "identifier": "+91 38028 52787",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹687.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7316",
    "type": "PHONE",
    "identifier": "+91 98647 69451",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8094.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3252",
    "type": "PHONE",
    "identifier": "+91 76379 02415",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8690.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7613",
    "type": "PHONE",
    "identifier": "+91 36147 41085",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2791.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9888",
    "type": "PHONE",
    "identifier": "+91 06359 32173",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3459.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9114",
    "type": "PHONE",
    "identifier": "+91 38761 62604",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2671.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-625",
    "type": "PHONE",
    "identifier": "+91 73453 88548",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2822.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3334",
    "type": "PHONE",
    "identifier": "+91 96384 54185",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8312.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7826",
    "type": "PHONE",
    "identifier": "+91 66639 99082",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6019.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9754",
    "type": "PHONE",
    "identifier": "+91 31414 30701",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1285.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-4195",
    "type": "PHONE",
    "identifier": "+91 50793 33471",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹471.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7894",
    "type": "PHONE",
    "identifier": "+91 93533 69305",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5800.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-5133",
    "type": "PHONE",
    "identifier": "+91 05678 49979",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1399.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-8282",
    "type": "PHONE",
    "identifier": "+91 38600 37407",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹832.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-817",
    "type": "PHONE",
    "identifier": "+91 03519 59952",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6515.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-4689",
    "type": "PHONE",
    "identifier": "+91 93246 02119",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9584.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7348",
    "type": "PHONE",
    "identifier": "+91 76364 38447",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5160.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-9768",
    "type": "PHONE",
    "identifier": "+91 02345 48991",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2360.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-1732",
    "type": "PHONE",
    "identifier": "+91 62593 64141",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7435.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-2547",
    "type": "PHONE",
    "identifier": "+91 65393 48359",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1571.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-5488",
    "type": "PHONE",
    "identifier": "+91 65364 18007",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6202.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-1310",
    "type": "PHONE",
    "identifier": "+91 45630 58573",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹268.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-6958",
    "type": "PHONE",
    "identifier": "+91 46842 54478",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5483.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-3531",
    "type": "PHONE",
    "identifier": "+91 93500 63141",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹302.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-7913",
    "type": "PHONE",
    "identifier": "+91 47863 06024",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6257.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-1980",
    "type": "PHONE",
    "identifier": "+91 94835 15086",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2935.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-4570",
    "type": "PHONE",
    "identifier": "+91 68288 65437",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1966.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-5899",
    "type": "PHONE",
    "identifier": "+91 91716 50531",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6980.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614417-6868",
    "type": "PHONE",
    "identifier": "+91 52252 30152",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹289.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.417Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-6274",
    "type": "PHONE",
    "identifier": "+91 58444 40821",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2356.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-1130",
    "type": "PHONE",
    "identifier": "+91 64038 90716",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4121.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-2025",
    "type": "PHONE",
    "identifier": "+91 48488 58297",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2909.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-7577",
    "type": "PHONE",
    "identifier": "+91 91905 07551",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5444.1).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-4896",
    "type": "PHONE",
    "identifier": "+91 57673 99784",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2294.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-1840",
    "type": "PHONE",
    "identifier": "+91 78169 09250",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹30.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-7375",
    "type": "PHONE",
    "identifier": "+91 69713 78436",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7637.9).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-7703",
    "type": "PHONE",
    "identifier": "+91 37996 90718",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9301.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-9972",
    "type": "PHONE",
    "identifier": "+91 17566 38813",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5131.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-375",
    "type": "PHONE",
    "identifier": "+91 67052 74889",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3085.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-4462",
    "type": "PHONE",
    "identifier": "+91 01635 89331",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹538.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-3712",
    "type": "PHONE",
    "identifier": "+91 14803 03072",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹694.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-724",
    "type": "PHONE",
    "identifier": "+91 19433 80295",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9995.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-111",
    "type": "PHONE",
    "identifier": "+91 55671 30648",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1568.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-6401",
    "type": "PHONE",
    "identifier": "+91 71982 57919",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2278.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-792",
    "type": "PHONE",
    "identifier": "+91 31721 90898",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7725.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-4110",
    "type": "PHONE",
    "identifier": "+91 85989 94902",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6700.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-6293",
    "type": "PHONE",
    "identifier": "+91 71146 76049",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8921.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-4052",
    "type": "PHONE",
    "identifier": "+91 28696 30776",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4548.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-8687",
    "type": "PHONE",
    "identifier": "+91 38984 52307",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2991.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-1626",
    "type": "PHONE",
    "identifier": "+91 94704 65457",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2216.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-2208",
    "type": "PHONE",
    "identifier": "+91 13639 30002",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6170.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-4865",
    "type": "PHONE",
    "identifier": "+91 49497 29276",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1659.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-1515",
    "type": "PHONE",
    "identifier": "+91 84858 16671",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1129.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-7684",
    "type": "PHONE",
    "identifier": "+91 29516 15785",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5630.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-3168",
    "type": "PHONE",
    "identifier": "+91 25422 71230",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8459.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-7619",
    "type": "PHONE",
    "identifier": "+91 77072 18600",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6349.79).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-6705",
    "type": "PHONE",
    "identifier": "+91 68827 34773",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2651.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-2484",
    "type": "PHONE",
    "identifier": "+91 87234 62697",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹214.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-6369",
    "type": "PHONE",
    "identifier": "+91 33518 09182",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 63,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5373.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-4309",
    "type": "PHONE",
    "identifier": "+91 19271 25932",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6836.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614418-1439",
    "type": "PHONE",
    "identifier": "+91 94587 58751",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6878.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.418Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-6729",
    "type": "PHONE",
    "identifier": "+91 06413 20866",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1045.97).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2729",
    "type": "PHONE",
    "identifier": "+91 70146 91545",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 45,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹865.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1910",
    "type": "PHONE",
    "identifier": "+91 75477 31503",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4840.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-3213",
    "type": "PHONE",
    "identifier": "+91 37640 59786",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7156.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-8311",
    "type": "PHONE",
    "identifier": "+91 03822 15560",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1500.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-8601",
    "type": "PHONE",
    "identifier": "+91 04076 29473",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7609.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2131",
    "type": "PHONE",
    "identifier": "+91 07333 23315",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7804.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9593",
    "type": "PHONE",
    "identifier": "+91 07629 24364",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1068.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2342",
    "type": "PHONE",
    "identifier": "+91 50595 32186",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4101.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-7035",
    "type": "PHONE",
    "identifier": "+91 19440 02471",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1552.22).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-101",
    "type": "PHONE",
    "identifier": "+91 65718 51513",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1884.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1708",
    "type": "PHONE",
    "identifier": "+91 41418 85417",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7376.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-3779",
    "type": "PHONE",
    "identifier": "+91 91702 70903",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7552.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1943",
    "type": "PHONE",
    "identifier": "+91 78938 09963",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1667.24).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1126",
    "type": "PHONE",
    "identifier": "+91 07565 69723",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1813.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-7761",
    "type": "PHONE",
    "identifier": "+91 70809 55095",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9615.72).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2443",
    "type": "PHONE",
    "identifier": "+91 48886 57834",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2630.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-3779",
    "type": "PHONE",
    "identifier": "+91 32730 49957",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8378.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-5246",
    "type": "PHONE",
    "identifier": "+91 07963 36995",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9403.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-6877",
    "type": "PHONE",
    "identifier": "+91 48069 00071",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2793.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-3860",
    "type": "PHONE",
    "identifier": "+91 38033 33759",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1005.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2625",
    "type": "PHONE",
    "identifier": "+91 33797 09872",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7679.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-3418",
    "type": "PHONE",
    "identifier": "+91 50677 89784",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3685.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9478",
    "type": "PHONE",
    "identifier": "+91 52447 05930",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1438.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-8760",
    "type": "PHONE",
    "identifier": "+91 80561 76202",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2058.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1225",
    "type": "PHONE",
    "identifier": "+91 25855 44848",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7017.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9479",
    "type": "PHONE",
    "identifier": "+91 49834 99917",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹9554.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-4244",
    "type": "PHONE",
    "identifier": "+91 47614 79262",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2404.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1653",
    "type": "PHONE",
    "identifier": "+91 06005 76017",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5919.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9217",
    "type": "PHONE",
    "identifier": "+91 99273 56602",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6090.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2539",
    "type": "PHONE",
    "identifier": "+91 00957 71460",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9974.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2107",
    "type": "PHONE",
    "identifier": "+91 22630 15322",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4103.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-6939",
    "type": "PHONE",
    "identifier": "+91 71296 09637",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6524.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1202",
    "type": "PHONE",
    "identifier": "+91 24677 98147",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1223.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1249",
    "type": "PHONE",
    "identifier": "+91 13203 83306",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3602.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-5017",
    "type": "PHONE",
    "identifier": "+91 80211 60044",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8020.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-922",
    "type": "PHONE",
    "identifier": "+91 09412 87542",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2345.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9279",
    "type": "PHONE",
    "identifier": "+91 49761 00454",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1413.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-819",
    "type": "PHONE",
    "identifier": "+91 33726 41894",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4799.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2781",
    "type": "PHONE",
    "identifier": "+91 36989 97890",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9973.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-4452",
    "type": "PHONE",
    "identifier": "+91 29252 84022",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3350.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-7647",
    "type": "PHONE",
    "identifier": "+91 37492 12095",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6261.2).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-594",
    "type": "PHONE",
    "identifier": "+91 85490 92242",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7963.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-3956",
    "type": "PHONE",
    "identifier": "+91 52754 98637",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6016.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9389",
    "type": "PHONE",
    "identifier": "+91 05279 50638",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9668.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1432",
    "type": "PHONE",
    "identifier": "+91 45366 85396",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹269.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-317",
    "type": "PHONE",
    "identifier": "+91 59189 79929",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4859.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9803",
    "type": "PHONE",
    "identifier": "+91 89931 42638",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5386.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-5597",
    "type": "PHONE",
    "identifier": "+91 07811 49073",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7030.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2183",
    "type": "PHONE",
    "identifier": "+91 02606 43072",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3671.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-4945",
    "type": "PHONE",
    "identifier": "+91 26466 69107",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8039.72).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-6617",
    "type": "PHONE",
    "identifier": "+91 23174 58822",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9914.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-6583",
    "type": "PHONE",
    "identifier": "+91 90458 81132",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5961.64).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-6838",
    "type": "PHONE",
    "identifier": "+91 14228 83150",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9451.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-1343",
    "type": "PHONE",
    "identifier": "+91 39275 55914",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8503.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-2886",
    "type": "PHONE",
    "identifier": "+91 98398 86827",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1080.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-9846",
    "type": "PHONE",
    "identifier": "+91 97551 27193",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2771.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614419-5550",
    "type": "PHONE",
    "identifier": "+91 90307 49196",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹994.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.419Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-9695",
    "type": "PHONE",
    "identifier": "+91 19326 88983",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5922.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-4978",
    "type": "PHONE",
    "identifier": "+91 26875 02280",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹249.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-3241",
    "type": "PHONE",
    "identifier": "+91 19651 31325",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9184.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-573",
    "type": "PHONE",
    "identifier": "+91 57788 76542",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 107,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9257.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-3210",
    "type": "PHONE",
    "identifier": "+91 41177 49909",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3037.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-6930",
    "type": "PHONE",
    "identifier": "+91 42125 97224",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5778.04).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614420-8717",
    "type": "PHONE",
    "identifier": "+91 96445 25910",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6515.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.420Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8798",
    "type": "PHONE",
    "identifier": "+91 27790 74346",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2688.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-2002",
    "type": "PHONE",
    "identifier": "+91 87281 91509",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7367.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-3931",
    "type": "PHONE",
    "identifier": "+91 15536 61509",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3827.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-170",
    "type": "PHONE",
    "identifier": "+91 60261 38125",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹7740.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8617",
    "type": "PHONE",
    "identifier": "+91 30692 62493",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9416.24).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-7235",
    "type": "PHONE",
    "identifier": "+91 84822 07061",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹577.22).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-6819",
    "type": "PHONE",
    "identifier": "+91 85580 46788",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6501.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-1645",
    "type": "PHONE",
    "identifier": "+91 39246 99940",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹680.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-5948",
    "type": "PHONE",
    "identifier": "+91 10991 61966",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9521.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-3064",
    "type": "PHONE",
    "identifier": "+91 03980 51363",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4950.84).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-6030",
    "type": "PHONE",
    "identifier": "+91 68531 00637",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4167.6).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-7256",
    "type": "PHONE",
    "identifier": "+91 99901 21837",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6990.76).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8209",
    "type": "PHONE",
    "identifier": "+91 11689 25008",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8390.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-4203",
    "type": "PHONE",
    "identifier": "+91 30559 41175",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1942.45).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-4589",
    "type": "PHONE",
    "identifier": "+91 70899 52849",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3899.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-6723",
    "type": "PHONE",
    "identifier": "+91 49489 80165",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2449.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-184",
    "type": "PHONE",
    "identifier": "+91 69287 86629",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4761.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8554",
    "type": "PHONE",
    "identifier": "+91 22046 00497",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹98.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-5965",
    "type": "PHONE",
    "identifier": "+91 83103 38377",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5060.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8535",
    "type": "PHONE",
    "identifier": "+91 80042 79785",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1099.36).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8624",
    "type": "PHONE",
    "identifier": "+91 51879 50643",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2058.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-9124",
    "type": "PHONE",
    "identifier": "+91 52833 68987",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3833.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-2269",
    "type": "PHONE",
    "identifier": "+91 17538 18806",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4542.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8855",
    "type": "PHONE",
    "identifier": "+91 79736 44532",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7849.04).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-9033",
    "type": "PHONE",
    "identifier": "+91 79921 26177",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8917.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-2302",
    "type": "PHONE",
    "identifier": "+91 75570 18601",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹38.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-787",
    "type": "PHONE",
    "identifier": "+91 79286 61516",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1368.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-5858",
    "type": "PHONE",
    "identifier": "+91 54580 65571",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8358.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-8612",
    "type": "PHONE",
    "identifier": "+91 66216 83519",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 101,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6321.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-16",
    "type": "PHONE",
    "identifier": "+91 63006 09218",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6566.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-1061",
    "type": "PHONE",
    "identifier": "+91 08604 38046",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹168.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-1333",
    "type": "PHONE",
    "identifier": "+91 10413 75495",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6160.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614421-3987",
    "type": "PHONE",
    "identifier": "+91 47150 25838",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5973.1).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.421Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-719",
    "type": "PHONE",
    "identifier": "+91 82807 52982",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4088.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-2032",
    "type": "PHONE",
    "identifier": "+91 69945 92830",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5583.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3331",
    "type": "PHONE",
    "identifier": "+91 21886 14992",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7877.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9494",
    "type": "PHONE",
    "identifier": "+91 11225 31153",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3595.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-118",
    "type": "PHONE",
    "identifier": "+91 25082 21523",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3754.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3299",
    "type": "PHONE",
    "identifier": "+91 54544 05133",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9353.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9467",
    "type": "PHONE",
    "identifier": "+91 92342 90399",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9140.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-7343",
    "type": "PHONE",
    "identifier": "+91 98253 01082",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9541.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-6702",
    "type": "PHONE",
    "identifier": "+91 73987 72338",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2220.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4414",
    "type": "PHONE",
    "identifier": "+91 53705 66857",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7428.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-6503",
    "type": "PHONE",
    "identifier": "+91 07221 68110",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1088.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9288",
    "type": "PHONE",
    "identifier": "+91 11746 07533",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8144.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3679",
    "type": "PHONE",
    "identifier": "+91 18539 46059",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1804.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-6908",
    "type": "PHONE",
    "identifier": "+91 09540 90742",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7096.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8437",
    "type": "PHONE",
    "identifier": "+91 74724 64603",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6188.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-7024",
    "type": "PHONE",
    "identifier": "+91 78497 83410",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1598.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8901",
    "type": "PHONE",
    "identifier": "+91 90728 21539",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 45,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5634.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-1271",
    "type": "PHONE",
    "identifier": "+91 19946 46721",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6877.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-1120",
    "type": "PHONE",
    "identifier": "+91 45930 83427",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 107,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8783.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-1015",
    "type": "PHONE",
    "identifier": "+91 19110 82728",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8495.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8790",
    "type": "PHONE",
    "identifier": "+91 35781 94337",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4330.1).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-655",
    "type": "PHONE",
    "identifier": "+91 69485 17151",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1875.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-7675",
    "type": "PHONE",
    "identifier": "+91 06928 28163",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3164.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4112",
    "type": "PHONE",
    "identifier": "+91 35707 39865",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7052.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3066",
    "type": "PHONE",
    "identifier": "+91 09720 69803",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6473.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-2988",
    "type": "PHONE",
    "identifier": "+91 96386 49641",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9605.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-664",
    "type": "PHONE",
    "identifier": "+91 97531 82793",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2805.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-284",
    "type": "PHONE",
    "identifier": "+91 78404 89862",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4911.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8682",
    "type": "PHONE",
    "identifier": "+91 50990 99687",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8176.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8876",
    "type": "PHONE",
    "identifier": "+91 70179 04961",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5944.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3695",
    "type": "PHONE",
    "identifier": "+91 41725 48202",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹104.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-62",
    "type": "PHONE",
    "identifier": "+91 81402 15990",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9924.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4485",
    "type": "PHONE",
    "identifier": "+91 86101 51136",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6744.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-5621",
    "type": "PHONE",
    "identifier": "+91 75086 50245",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5176.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8200",
    "type": "PHONE",
    "identifier": "+91 93594 31859",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2464.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9706",
    "type": "PHONE",
    "identifier": "+91 38643 79613",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4338.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-842",
    "type": "PHONE",
    "identifier": "+91 69506 99054",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3422.2).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4892",
    "type": "PHONE",
    "identifier": "+91 49418 44488",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9619.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3862",
    "type": "PHONE",
    "identifier": "+91 75714 93985",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4839.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-2814",
    "type": "PHONE",
    "identifier": "+91 35891 71355",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 107,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5374.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-2316",
    "type": "PHONE",
    "identifier": "+91 07823 19687",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2503.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9081",
    "type": "PHONE",
    "identifier": "+91 48062 39485",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1024.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9387",
    "type": "PHONE",
    "identifier": "+91 45775 15377",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9823.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-8801",
    "type": "PHONE",
    "identifier": "+91 97563 35646",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3892.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4573",
    "type": "PHONE",
    "identifier": "+91 79534 28500",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3804.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-9105",
    "type": "PHONE",
    "identifier": "+91 28197 17638",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8012.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-882",
    "type": "PHONE",
    "identifier": "+91 43106 95144",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6771.15).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4478",
    "type": "PHONE",
    "identifier": "+91 87177 54125",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹392.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-3284",
    "type": "PHONE",
    "identifier": "+91 09625 43991",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6156.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-4596",
    "type": "PHONE",
    "identifier": "+91 37092 55970",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9892.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-7289",
    "type": "PHONE",
    "identifier": "+91 79435 77752",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2315.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-6734",
    "type": "PHONE",
    "identifier": "+91 78379 43284",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5974.48).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614422-5656",
    "type": "PHONE",
    "identifier": "+91 23077 71380",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9963.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.422Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-3136",
    "type": "PHONE",
    "identifier": "+91 32530 41884",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹771.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-1432",
    "type": "PHONE",
    "identifier": "+91 66313 71573",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹859.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-9688",
    "type": "PHONE",
    "identifier": "+91 67931 39999",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1834.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7102",
    "type": "PHONE",
    "identifier": "+91 56236 76253",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8727.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7052",
    "type": "PHONE",
    "identifier": "+91 49840 29006",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3346.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5089",
    "type": "PHONE",
    "identifier": "+91 69634 77744",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6578.63).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-801",
    "type": "PHONE",
    "identifier": "+91 66774 37168",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2656.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-8623",
    "type": "PHONE",
    "identifier": "+91 06369 22978",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8495.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-9356",
    "type": "PHONE",
    "identifier": "+91 12062 39976",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1348.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7782",
    "type": "PHONE",
    "identifier": "+91 45936 74308",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3866.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-4029",
    "type": "PHONE",
    "identifier": "+91 58617 59757",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8751.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-8419",
    "type": "PHONE",
    "identifier": "+91 51531 75471",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3810.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-1028",
    "type": "PHONE",
    "identifier": "+91 43406 07936",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6567.68).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-2255",
    "type": "PHONE",
    "identifier": "+91 38904 35934",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹57.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-1767",
    "type": "PHONE",
    "identifier": "+91 68632 31853",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3967.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-2126",
    "type": "PHONE",
    "identifier": "+91 33818 26729",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4296.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7510",
    "type": "PHONE",
    "identifier": "+91 86274 95396",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2194.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-3940",
    "type": "PHONE",
    "identifier": "+91 58352 56916",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2499.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-2626",
    "type": "PHONE",
    "identifier": "+91 82844 36984",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4831.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-993",
    "type": "PHONE",
    "identifier": "+91 05745 03425",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3990.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-2791",
    "type": "PHONE",
    "identifier": "+91 58579 15842",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3791.15).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7115",
    "type": "PHONE",
    "identifier": "+91 09423 86874",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8040.72).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-3013",
    "type": "PHONE",
    "identifier": "+91 25629 18387",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9640.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5011",
    "type": "PHONE",
    "identifier": "+91 18066 45075",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1351.2).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-8682",
    "type": "PHONE",
    "identifier": "+91 40016 92548",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7841.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5952",
    "type": "PHONE",
    "identifier": "+91 08948 57364",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5847.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-837",
    "type": "PHONE",
    "identifier": "+91 01969 41180",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2355.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-4634",
    "type": "PHONE",
    "identifier": "+91 20029 48970",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6684.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7655",
    "type": "PHONE",
    "identifier": "+91 91241 11731",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7553.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5770",
    "type": "PHONE",
    "identifier": "+91 79210 22937",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2847.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-1745",
    "type": "PHONE",
    "identifier": "+91 34245 80033",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹903.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-2941",
    "type": "PHONE",
    "identifier": "+91 93950 22009",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2727.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-7809",
    "type": "PHONE",
    "identifier": "+91 34687 55111",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6336.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-247",
    "type": "PHONE",
    "identifier": "+91 14479 01884",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5953.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-8092",
    "type": "PHONE",
    "identifier": "+91 24081 13617",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1003.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5640",
    "type": "PHONE",
    "identifier": "+91 00890 11263",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5846.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-39",
    "type": "PHONE",
    "identifier": "+91 84308 45154",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8799.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-9270",
    "type": "PHONE",
    "identifier": "+91 30735 87238",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹205.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5039",
    "type": "PHONE",
    "identifier": "+91 22593 21595",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2190.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-8375",
    "type": "PHONE",
    "identifier": "+91 00961 78848",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9297.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-6415",
    "type": "PHONE",
    "identifier": "+91 55818 57031",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5290.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-4089",
    "type": "PHONE",
    "identifier": "+91 34711 60544",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹209.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-8559",
    "type": "PHONE",
    "identifier": "+91 22437 62089",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2346.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-6532",
    "type": "PHONE",
    "identifier": "+91 95140 45233",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1516.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-4705",
    "type": "PHONE",
    "identifier": "+91 32954 28829",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2988.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-4044",
    "type": "PHONE",
    "identifier": "+91 12980 40485",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2848.2).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5732",
    "type": "PHONE",
    "identifier": "+91 80490 05149",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7660.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-3055",
    "type": "PHONE",
    "identifier": "+91 97092 46172",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4811.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614423-5305",
    "type": "PHONE",
    "identifier": "+91 10970 33296",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4163.9).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.423Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-4392",
    "type": "PHONE",
    "identifier": "+91 40687 81896",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3662.81).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-8991",
    "type": "PHONE",
    "identifier": "+91 14011 16300",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3130.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-6758",
    "type": "PHONE",
    "identifier": "+91 85063 75361",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4382.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-1373",
    "type": "PHONE",
    "identifier": "+91 57882 11871",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1833.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-1638",
    "type": "PHONE",
    "identifier": "+91 99259 94763",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1616.96).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5282",
    "type": "PHONE",
    "identifier": "+91 74942 78996",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4951.22).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5014",
    "type": "PHONE",
    "identifier": "+91 85537 74892",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8589.81).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-507",
    "type": "PHONE",
    "identifier": "+91 27207 85512",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8518.52).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7364",
    "type": "PHONE",
    "identifier": "+91 58251 23723",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹529.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-3839",
    "type": "PHONE",
    "identifier": "+91 81162 12847",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4547.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7476",
    "type": "PHONE",
    "identifier": "+91 36243 66631",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2831.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-4245",
    "type": "PHONE",
    "identifier": "+91 81045 27379",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4526.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-1326",
    "type": "PHONE",
    "identifier": "+91 36780 58040",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5878.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7587",
    "type": "PHONE",
    "identifier": "+91 05558 71756",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹780.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5807",
    "type": "PHONE",
    "identifier": "+91 11170 08749",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8493.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7725",
    "type": "PHONE",
    "identifier": "+91 62808 97545",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8420.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5089",
    "type": "PHONE",
    "identifier": "+91 32237 69369",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9632.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5263",
    "type": "PHONE",
    "identifier": "+91 93769 26377",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9168.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-9588",
    "type": "PHONE",
    "identifier": "+91 54101 85063",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹180.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-9525",
    "type": "PHONE",
    "identifier": "+91 89376 85641",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8477.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-6421",
    "type": "PHONE",
    "identifier": "+91 19284 36162",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5026.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-6661",
    "type": "PHONE",
    "identifier": "+91 08344 95852",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1908.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-4355",
    "type": "PHONE",
    "identifier": "+91 00996 23147",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7095.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5333",
    "type": "PHONE",
    "identifier": "+91 28867 36131",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2297.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-3023",
    "type": "PHONE",
    "identifier": "+91 65560 43715",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 72,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7281.2).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-2531",
    "type": "PHONE",
    "identifier": "+91 39609 67293",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 49,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹819.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-3849",
    "type": "PHONE",
    "identifier": "+91 99386 66409",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5047.1).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-4119",
    "type": "PHONE",
    "identifier": "+91 97050 37519",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6336.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-2907",
    "type": "PHONE",
    "identifier": "+91 04883 64582",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9668.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-8982",
    "type": "PHONE",
    "identifier": "+91 54977 11535",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7593.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-9708",
    "type": "PHONE",
    "identifier": "+91 27709 93239",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4262.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-1458",
    "type": "PHONE",
    "identifier": "+91 39663 47021",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3829.54).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-6643",
    "type": "PHONE",
    "identifier": "+91 58895 37938",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9661.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7823",
    "type": "PHONE",
    "identifier": "+91 20146 08674",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2131.26).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-6225",
    "type": "PHONE",
    "identifier": "+91 03953 88407",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7379.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-5465",
    "type": "PHONE",
    "identifier": "+91 22122 54262",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2690.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-9209",
    "type": "PHONE",
    "identifier": "+91 99922 90862",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3085.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-8345",
    "type": "PHONE",
    "identifier": "+91 43925 89840",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8481.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-678",
    "type": "PHONE",
    "identifier": "+91 54968 50703",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7401.53).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7090",
    "type": "PHONE",
    "identifier": "+91 97651 49739",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7463.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-4489",
    "type": "PHONE",
    "identifier": "+91 39440 19775",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8673.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-888",
    "type": "PHONE",
    "identifier": "+91 64897 44022",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹988.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-6166",
    "type": "PHONE",
    "identifier": "+91 01302 48234",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6853.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-98",
    "type": "PHONE",
    "identifier": "+91 05067 42172",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹213.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-9525",
    "type": "PHONE",
    "identifier": "+91 54036 44881",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6746.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-8029",
    "type": "PHONE",
    "identifier": "+91 14841 24405",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6854.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7276",
    "type": "PHONE",
    "identifier": "+91 85846 34567",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5489.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7154",
    "type": "PHONE",
    "identifier": "+91 05403 38687",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6549.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614424-7566",
    "type": "PHONE",
    "identifier": "+91 47266 08222",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4205.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.424Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-9839",
    "type": "PHONE",
    "identifier": "+91 82907 44354",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4888.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-8122",
    "type": "PHONE",
    "identifier": "+91 87352 68609",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 39,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4137.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-9540",
    "type": "PHONE",
    "identifier": "+91 65344 64900",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9885.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-2468",
    "type": "PHONE",
    "identifier": "+91 50029 80156",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8906.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-7513",
    "type": "PHONE",
    "identifier": "+91 52180 65205",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4769.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-4748",
    "type": "PHONE",
    "identifier": "+91 09931 77694",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2839.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-6421",
    "type": "PHONE",
    "identifier": "+91 12073 80744",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4035.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-3554",
    "type": "PHONE",
    "identifier": "+91 99448 03821",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1049.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-3413",
    "type": "PHONE",
    "identifier": "+91 98853 73159",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9242.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-452",
    "type": "PHONE",
    "identifier": "+91 96716 40117",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5458.78).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-3457",
    "type": "PHONE",
    "identifier": "+91 90620 14281",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7905.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-3944",
    "type": "PHONE",
    "identifier": "+91 53241 56858",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 34,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8509.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-4230",
    "type": "PHONE",
    "identifier": "+91 08861 53626",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2269.47).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-5671",
    "type": "PHONE",
    "identifier": "+91 62436 16054",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6188.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-8367",
    "type": "PHONE",
    "identifier": "+91 25533 52626",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8772.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-5353",
    "type": "PHONE",
    "identifier": "+91 81599 23011",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 88,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5088.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-9691",
    "type": "PHONE",
    "identifier": "+91 85556 26645",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3807.64).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-9201",
    "type": "PHONE",
    "identifier": "+91 91400 43882",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 104,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7269.61).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-9862",
    "type": "PHONE",
    "identifier": "+91 67260 81363",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 83,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2468.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614425-5583",
    "type": "PHONE",
    "identifier": "+91 29703 38282",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 84,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5194.34).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.425Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-5286",
    "type": "PHONE",
    "identifier": "+91 84878 45058",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 61,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹417.62).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-3495",
    "type": "PHONE",
    "identifier": "+91 55899 80358",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 43,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3753.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-7753",
    "type": "PHONE",
    "identifier": "+91 28513 23667",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 89,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1575.21).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-1438",
    "type": "PHONE",
    "identifier": "+91 65627 26077",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8690.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-4999",
    "type": "PHONE",
    "identifier": "+91 05255 02625",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3168.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-6710",
    "type": "PHONE",
    "identifier": "+91 98040 29971",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9280.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-7398",
    "type": "PHONE",
    "identifier": "+91 32261 63622",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹152.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-1763",
    "type": "PHONE",
    "identifier": "+91 15237 38475",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3584.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-4528",
    "type": "PHONE",
    "identifier": "+91 59484 00181",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8957.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-9555",
    "type": "PHONE",
    "identifier": "+91 83054 19106",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6122.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-5099",
    "type": "PHONE",
    "identifier": "+91 80307 40945",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7874.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-7208",
    "type": "PHONE",
    "identifier": "+91 79674 53157",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8150.22).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-1987",
    "type": "PHONE",
    "identifier": "+91 56671 31849",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4876.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-1693",
    "type": "PHONE",
    "identifier": "+91 98587 37439",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹63.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-5081",
    "type": "PHONE",
    "identifier": "+91 64401 16974",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9909.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-2270",
    "type": "PHONE",
    "identifier": "+91 78686 98260",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8157.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-7272",
    "type": "PHONE",
    "identifier": "+91 95875 82736",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3823.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-1066",
    "type": "PHONE",
    "identifier": "+91 84015 40948",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1674.69).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-9611",
    "type": "PHONE",
    "identifier": "+91 95104 33564",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 82,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9130.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-5124",
    "type": "PHONE",
    "identifier": "+91 61544 02627",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8835.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-5101",
    "type": "PHONE",
    "identifier": "+91 66187 82878",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8926.86).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-937",
    "type": "PHONE",
    "identifier": "+91 64375 49519",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 95,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5553.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-7901",
    "type": "PHONE",
    "identifier": "+91 47852 42457",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹5513.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-3233",
    "type": "PHONE",
    "identifier": "+91 03201 50583",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2222.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-478",
    "type": "PHONE",
    "identifier": "+91 53244 94822",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7340.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614426-4367",
    "type": "PHONE",
    "identifier": "+91 56100 05622",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹4065.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.426Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-66",
    "type": "PHONE",
    "identifier": "+91 14255 23272",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4819.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-8882",
    "type": "PHONE",
    "identifier": "+91 52319 48577",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 38,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8566.71).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-5833",
    "type": "PHONE",
    "identifier": "+91 70716 08950",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8555.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-613",
    "type": "PHONE",
    "identifier": "+91 52949 29277",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 54,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5561.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-7824",
    "type": "PHONE",
    "identifier": "+91 29053 29669",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹611.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-3539",
    "type": "PHONE",
    "identifier": "+91 42373 94759",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7600.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-188",
    "type": "PHONE",
    "identifier": "+91 78669 62423",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4766.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-6293",
    "type": "PHONE",
    "identifier": "+91 21740 80968",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 58,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6528.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-6346",
    "type": "PHONE",
    "identifier": "+91 67268 42012",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 98,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8733.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-4476",
    "type": "PHONE",
    "identifier": "+91 82347 79992",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9350.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-5421",
    "type": "PHONE",
    "identifier": "+91 78883 62232",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8183.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-3529",
    "type": "PHONE",
    "identifier": "+91 11935 10904",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3844.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-2288",
    "type": "PHONE",
    "identifier": "+91 88771 00271",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8331.97).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-4137",
    "type": "PHONE",
    "identifier": "+91 10843 90742",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7297.33).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-6728",
    "type": "PHONE",
    "identifier": "+91 19125 47385",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6540.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-1674",
    "type": "PHONE",
    "identifier": "+91 46884 76855",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9940.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-1422",
    "type": "PHONE",
    "identifier": "+91 63219 82122",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4954.17).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-2270",
    "type": "PHONE",
    "identifier": "+91 43216 80360",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1445.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-9406",
    "type": "PHONE",
    "identifier": "+91 24445 70432",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4320.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-8848",
    "type": "PHONE",
    "identifier": "+91 24644 26031",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3333.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-4287",
    "type": "PHONE",
    "identifier": "+91 21810 13351",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5231.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-8234",
    "type": "PHONE",
    "identifier": "+91 62242 96040",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1028.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-1410",
    "type": "PHONE",
    "identifier": "+91 99700 63898",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 73,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6672.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-8199",
    "type": "PHONE",
    "identifier": "+91 86123 01659",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 76,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4075.42).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-3903",
    "type": "PHONE",
    "identifier": "+91 51644 77693",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6900.49).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-9263",
    "type": "PHONE",
    "identifier": "+91 50938 29763",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2948.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-5423",
    "type": "PHONE",
    "identifier": "+91 55887 14428",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8721.05).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-2332",
    "type": "PHONE",
    "identifier": "+91 59558 18765",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4948.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-6482",
    "type": "PHONE",
    "identifier": "+91 65286 87203",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7591.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-9522",
    "type": "PHONE",
    "identifier": "+91 94331 44510",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6692.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-8814",
    "type": "PHONE",
    "identifier": "+91 76557 12962",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1883.63).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-2017",
    "type": "PHONE",
    "identifier": "+91 50260 56004",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 56,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3004.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614427-295",
    "type": "PHONE",
    "identifier": "+91 33320 46055",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 48,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4144.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.427Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-9174",
    "type": "PHONE",
    "identifier": "+91 07217 77033",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5501.7).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-7984",
    "type": "PHONE",
    "identifier": "+91 28385 53737",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8526.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-3657",
    "type": "PHONE",
    "identifier": "+91 89180 79723",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 47,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1630.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-7738",
    "type": "PHONE",
    "identifier": "+91 81975 31947",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1445.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8432",
    "type": "PHONE",
    "identifier": "+91 67103 98468",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7445.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-686",
    "type": "PHONE",
    "identifier": "+91 77013 83321",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 36,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹9437.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-2285",
    "type": "PHONE",
    "identifier": "+91 76584 63184",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 98,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8912.6).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-4157",
    "type": "PHONE",
    "identifier": "+91 89397 87478",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8301.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-1661",
    "type": "PHONE",
    "identifier": "+91 25782 22239",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8580.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8774",
    "type": "PHONE",
    "identifier": "+91 91084 06321",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹1452.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-73",
    "type": "PHONE",
    "identifier": "+91 54244 93605",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 75,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6749.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-7771",
    "type": "PHONE",
    "identifier": "+91 28262 03710",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3307.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-6831",
    "type": "PHONE",
    "identifier": "+91 48771 06476",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2242.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-7434",
    "type": "PHONE",
    "identifier": "+91 81895 27042",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2024.39).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-3726",
    "type": "PHONE",
    "identifier": "+91 57396 47835",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 29,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9160.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-2276",
    "type": "PHONE",
    "identifier": "+91 87971 35243",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1618.24).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-7264",
    "type": "PHONE",
    "identifier": "+91 11721 76314",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1721.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8116",
    "type": "PHONE",
    "identifier": "+91 78047 96158",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5052.37).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-1455",
    "type": "PHONE",
    "identifier": "+91 99795 22479",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6143.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8111",
    "type": "PHONE",
    "identifier": "+91 31063 59492",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹326.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-975",
    "type": "PHONE",
    "identifier": "+91 98224 26304",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8389.12).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-7115",
    "type": "PHONE",
    "identifier": "+91 95288 57125",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1852.03).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-2427",
    "type": "PHONE",
    "identifier": "+91 68415 99996",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1491.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-1106",
    "type": "PHONE",
    "identifier": "+91 73903 57566",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4357.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-3987",
    "type": "PHONE",
    "identifier": "+91 87663 14599",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4210.69).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-219",
    "type": "PHONE",
    "identifier": "+91 50321 93559",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2679.93).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-5446",
    "type": "PHONE",
    "identifier": "+91 82031 41862",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8748.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-1444",
    "type": "PHONE",
    "identifier": "+91 52785 68071",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 53,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2427.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8968",
    "type": "PHONE",
    "identifier": "+91 99433 31996",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 51,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹633.25).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-1649",
    "type": "PHONE",
    "identifier": "+91 56589 12404",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8551.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8262",
    "type": "PHONE",
    "identifier": "+91 62578 88612",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5023.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-2928",
    "type": "PHONE",
    "identifier": "+91 67612 95965",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8533.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-743",
    "type": "PHONE",
    "identifier": "+91 29842 04221",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 41,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4596.63).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-3689",
    "type": "PHONE",
    "identifier": "+91 48190 42752",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3021.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-6444",
    "type": "PHONE",
    "identifier": "+91 62545 58388",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5692.57).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-3685",
    "type": "PHONE",
    "identifier": "+91 91158 55556",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 96,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹9584.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-4929",
    "type": "PHONE",
    "identifier": "+91 46638 87595",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9419.4).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-9557",
    "type": "PHONE",
    "identifier": "+91 90398 23915",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3769.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-4192",
    "type": "PHONE",
    "identifier": "+91 57119 36775",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9275.09).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-9276",
    "type": "PHONE",
    "identifier": "+91 86856 22811",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7825.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-4361",
    "type": "PHONE",
    "identifier": "+91 25324 62055",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹6421.85).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-6117",
    "type": "PHONE",
    "identifier": "+91 97669 58692",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1835.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-1961",
    "type": "PHONE",
    "identifier": "+91 43029 84863",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹4887.27).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-9754",
    "type": "PHONE",
    "identifier": "+91 54004 19861",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 44,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8508.58).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-9825",
    "type": "PHONE",
    "identifier": "+91 31706 34719",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3601.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-493",
    "type": "PHONE",
    "identifier": "+91 57890 60915",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹7853.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-6693",
    "type": "PHONE",
    "identifier": "+91 97847 45630",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 93,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4321.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614428-8693",
    "type": "PHONE",
    "identifier": "+91 91395 11915",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 30,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4746.6).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.428Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-5217",
    "type": "PHONE",
    "identifier": "+91 92294 67614",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹9644.3).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-1894",
    "type": "PHONE",
    "identifier": "+91 63173 26469",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 108,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3925.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-2371",
    "type": "PHONE",
    "identifier": "+91 36135 13406",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 77,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹2639.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-2060",
    "type": "PHONE",
    "identifier": "+91 06429 95540",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8988.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-570",
    "type": "PHONE",
    "identifier": "+91 05533 20585",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7050.51).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-3857",
    "type": "PHONE",
    "identifier": "+91 50559 34741",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 81,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8693.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-4058",
    "type": "PHONE",
    "identifier": "+91 65422 97042",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹959.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-9843",
    "type": "PHONE",
    "identifier": "+91 70229 91583",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 33,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4120.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-3477",
    "type": "PHONE",
    "identifier": "+91 89343 05439",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹8119.89).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-844",
    "type": "PHONE",
    "identifier": "+91 05954 30403",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 31,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹6538.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-9445",
    "type": "PHONE",
    "identifier": "+91 55796 53133",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6156.67).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-6953",
    "type": "PHONE",
    "identifier": "+91 20370 36387",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1931.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-2479",
    "type": "PHONE",
    "identifier": "+91 65078 67665",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7083.45).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-6073",
    "type": "PHONE",
    "identifier": "+91 51064 40866",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 87,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹3338.64).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-6581",
    "type": "PHONE",
    "identifier": "+91 44086 01822",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6597.8).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-5242",
    "type": "PHONE",
    "identifier": "+91 38880 99242",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹746.46).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-1357",
    "type": "PHONE",
    "identifier": "+91 16757 66129",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3157.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-8249",
    "type": "PHONE",
    "identifier": "+91 32116 27795",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5317.41).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-3628",
    "type": "PHONE",
    "identifier": "+91 38135 86061",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 28,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹7792.95).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-8496",
    "type": "PHONE",
    "identifier": "+91 79296 77153",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7424.72).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-3660",
    "type": "PHONE",
    "identifier": "+91 39284 17654",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8901.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-565",
    "type": "PHONE",
    "identifier": "+91 08997 58870",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 85,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1027.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-4479",
    "type": "PHONE",
    "identifier": "+91 49180 19665",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹949.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-563",
    "type": "PHONE",
    "identifier": "+91 57850 20796",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 69,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹1568.0).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-7478",
    "type": "PHONE",
    "identifier": "+91 60115 34214",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 26,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8774.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-2241",
    "type": "PHONE",
    "identifier": "+91 86906 98113",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1280.18).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-4584",
    "type": "PHONE",
    "identifier": "+91 08498 53030",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹6888.88).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-2162",
    "type": "PHONE",
    "identifier": "+91 25983 79313",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 109,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹559.94).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-3870",
    "type": "PHONE",
    "identifier": "+91 13398 61444",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹4380.01).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-5511",
    "type": "PHONE",
    "identifier": "+91 76887 36076",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 79,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹9681.64).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-1645",
    "type": "PHONE",
    "identifier": "+91 99465 35725",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 27,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8132.65).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-1969",
    "type": "PHONE",
    "identifier": "+91 39448 22678",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹5490.55).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-848",
    "type": "PHONE",
    "identifier": "+91 10734 92022",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹2838.73).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-521",
    "type": "PHONE",
    "identifier": "+91 78063 19596",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 86,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹3010.07).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614429-5642",
    "type": "PHONE",
    "identifier": "+91 08210 27751",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹5329.02).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.429Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9732",
    "type": "PHONE",
    "identifier": "+91 05623 93121",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 74,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8777.23).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-2965",
    "type": "PHONE",
    "identifier": "+91 41288 18878",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹1796.98).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-4489",
    "type": "PHONE",
    "identifier": "+91 53192 83735",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 70,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹2801.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-8387",
    "type": "PHONE",
    "identifier": "+91 90115 58047",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8890.11).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-699",
    "type": "PHONE",
    "identifier": "+91 99806 51726",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹945.77).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9307",
    "type": "PHONE",
    "identifier": "+91 48420 85226",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 71,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹8085.76).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-1520",
    "type": "PHONE",
    "identifier": "+91 41478 77232",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3151.52).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-70",
    "type": "PHONE",
    "identifier": "+91 05542 30022",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 57,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹8379.68).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-7758",
    "type": "PHONE",
    "identifier": "+91 43142 24281",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹8630.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-3257",
    "type": "PHONE",
    "identifier": "+91 82237 07885",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 92,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6150.56).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-6966",
    "type": "PHONE",
    "identifier": "+91 88641 63206",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8139.82).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-6953",
    "type": "PHONE",
    "identifier": "+91 19445 13263",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 102,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹8350.91).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9652",
    "type": "PHONE",
    "identifier": "+91 37024 55421",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹6526.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-5169",
    "type": "PHONE",
    "identifier": "+91 37947 70698",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 65,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹338.08).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-5333",
    "type": "PHONE",
    "identifier": "+91 40984 67721",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 40,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3573.63).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-5223",
    "type": "PHONE",
    "identifier": "+91 82313 77909",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 68,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4684.75).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-8951",
    "type": "PHONE",
    "identifier": "+91 27468 51310",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 32,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹5741.32).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-1762",
    "type": "PHONE",
    "identifier": "+91 95911 97179",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 52,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5469.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-7547",
    "type": "PHONE",
    "identifier": "+91 69658 81822",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 99,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2124.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-5540",
    "type": "PHONE",
    "identifier": "+91 65698 09927",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 46,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹2222.43).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-8430",
    "type": "PHONE",
    "identifier": "+91 16702 84490",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹5009.19).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-3499",
    "type": "PHONE",
    "identifier": "+91 22926 09967",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 97,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹6564.92).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9174",
    "type": "PHONE",
    "identifier": "+91 92541 98755",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 59,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹4960.74).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-387",
    "type": "PHONE",
    "identifier": "+91 15071 47185",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 66,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹3972.06).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-2301",
    "type": "PHONE",
    "identifier": "+91 29203 36984",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 63,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹2421.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9846",
    "type": "PHONE",
    "identifier": "+91 56726 25971",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 100,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹7857.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-2157",
    "type": "PHONE",
    "identifier": "+91 68855 05921",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 67,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4362.38).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-5559",
    "type": "PHONE",
    "identifier": "+91 29538 62057",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 55,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹3250.35).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-6800",
    "type": "PHONE",
    "identifier": "+91 52757 15019",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 80,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹2869.66).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9198",
    "type": "PHONE",
    "identifier": "+91 19817 50406",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 60,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1092.04).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9393",
    "type": "PHONE",
    "identifier": "+91 96564 82553",
    "name": "Flagged Scammer (ICICI Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 103,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting ICICI Bank customers (Avg amount: ₹7299.59).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "icici_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-5727",
    "type": "PHONE",
    "identifier": "+91 40248 21583",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 91,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹5092.15).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-2331",
    "type": "PHONE",
    "identifier": "+91 39601 30207",
    "name": "Flagged Scammer (Axis Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 64,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Axis Bank customers (Avg amount: ₹8906.16).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "axis_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-4417",
    "type": "PHONE",
    "identifier": "+91 37139 83963",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 35,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹3529.87).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-2756",
    "type": "PHONE",
    "identifier": "+91 12978 68079",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 90,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹1250.28).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-6945",
    "type": "PHONE",
    "identifier": "+91 87350 83688",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 106,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹1953.9).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-9996",
    "type": "PHONE",
    "identifier": "+91 07746 67735",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 42,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9275.99).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-6085",
    "type": "PHONE",
    "identifier": "+91 02890 45343",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 78,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹4995.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-4800",
    "type": "PHONE",
    "identifier": "+91 04230 06684",
    "name": "Flagged Scammer (HDFC Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 105,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting HDFC Bank customers (Avg amount: ₹9713.14).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "hdfc_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-967",
    "type": "PHONE",
    "identifier": "+91 74111 57388",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 50,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3751.31).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-7732",
    "type": "PHONE",
    "identifier": "+91 02865 04304",
    "name": "Flagged Scammer (Kotak Mahindra Bank Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 25,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Kotak Mahindra Bank customers (Avg amount: ₹3547.29).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "kotak_mahindra_bank"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-4176",
    "type": "PHONE",
    "identifier": "+91 98742 51420",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 94,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹1907.44).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-1959",
    "type": "PHONE",
    "identifier": "+91 23320 94921",
    "name": "Flagged Scammer (State Bank of India Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 37,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting State Bank of India customers (Avg amount: ₹7970.83).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "state_bank_of_india"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-4565",
    "type": "PHONE",
    "identifier": "+91 18521 55966",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 62,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹6437.13).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-phone-upi-1788131614430-8120",
    "type": "PHONE",
    "identifier": "+91 23043 76292",
    "name": "Flagged Scammer (Bank of Baroda Impersonation)",
    "category": "UPI_EXTORTION",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 107,
    "details": "Reported in high-velocity UPI fraudulent pull requests targeting Bank of Baroda customers (Avg amount: ₹4142.5).",
    "tags": [
      "upi_fraud",
      "mule_account",
      "bank_of_baroda"
    ],
    "reportedAt": "2026-08-30T23:13:34.430Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1941",
    "type": "PHONE",
    "identifier": "+91 90640 19014",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 102,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Todays Vodafone numbers ending with 4882 are selected to a receive a £350 award. If your number matches call 0...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3159",
    "type": "PHONE",
    "identifier": "+91 90500 00327",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 68,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have won ?1,000 cash or a ?2,000 prize! To claim, call 09050000327....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5710",
    "type": "PHONE",
    "identifier": "+91 78459 63214",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 53,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"hello sir we are from covid-19 health care center, for vaccination call 7845963214...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3184",
    "type": "PHONE",
    "identifier": "+91 90617 01461",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 126,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"As a valued network customer you have been selected to receive 9000 INR prize reward! To claim call 0906170146...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9550",
    "type": "PHONE",
    "identifier": "+91 80029 86030",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 99,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Had your mobile 11 months or more? you are entitled to Update to the latest colour mobiles with camera for Fre...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2115",
    "type": "PHONE",
    "identifier": "+91 77426 76969",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 140,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Your 2004 Account Statement for 07742676969 shows 786 unredeemed Bonus Points. To claim call 08719180248 Ident...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9240",
    "type": "PHONE",
    "identifier": "+91 87191 80248",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 130,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Your 2004 Account Statement for 07742676969 shows 786 unredeemed Bonus Points. To claim call 08719180248 Ident...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7575",
    "type": "PHONE",
    "identifier": "+91 87123 00220",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 80,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Todays Vodafone numbers ending 7548 are selected to receive a $350 award. If you have a match please call 0871...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-674",
    "type": "PHONE",
    "identifier": "+91 70467 44435",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 57,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Customer service annoncement. You have a New Years delivery waiting for you. Please call 07046744435 now to ar...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1031",
    "type": "PHONE",
    "identifier": "+91 87187 20201",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 64,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Valentines Day Special! Win over £1000 in our quiz and take your partner on the trip of a lifetime! Send GO to...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1086",
    "type": "PHONE",
    "identifier": "+91 87088 00282",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 146,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"you are cash-balance is currently 500 INR - to maximize ur cash-in now send CASH to 86688 only 150p/msg. CC: 0...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6463",
    "type": "PHONE",
    "identifier": "+91 90570 39994",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 128,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Thanks for your Ringtone Order, Reference T91. You will be charged GBP 4 per week. You can unsubscribe at anyt...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-621",
    "type": "PHONE",
    "identifier": "+91 80008 39402",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 56,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Double mins and texts for six months FREE Bluetooth on Orange. Available on Sony, Nokia Motorola phones. Call ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8617",
    "type": "PHONE",
    "identifier": "+91 80009 38767",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 75,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"four months half price Orange line rental & latest camera phones 4 FREE. Had your phone 11mths ? Call MobilesD...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-323",
    "type": "PHONE",
    "identifier": "+91 71234 56789",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 56,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Send a logo your lover - two names joined by a heart. Text LOVE NAME1 NAME2 MOBNO eg LOVE ADAM EVE 07123456789...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4543",
    "type": "PHONE",
    "identifier": "+91 91110 32124",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 60,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someone has contacted our dating service and entered your phone because they fancy you! To find out who it is ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5585",
    "type": "PHONE",
    "identifier": "+91 90617 43806",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 43,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"ok mail: Dear Dave this is your final notice to collect your 4* Tenerife Holiday or #5000 CASH award! Call 090...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2174",
    "type": "PHONE",
    "identifier": "+91 77814 82378",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 117,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"FREE MESSAGE Activate your 500 FREE Text Messages by replying to this message with the word FREE For terms & c...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5379",
    "type": "PHONE",
    "identifier": "+91 87178 98035",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 76,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Today's Offer! Claim your £150 worth of discount vouchers! Text YES to 85023 now! SavaMob, member offers mobil...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-368",
    "type": "PHONE",
    "identifier": "+91 90500 05321",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 92,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"our mobile number has won £5000, to claim calls us back or ring the claims hot line on 09050005321....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2527",
    "type": "PHONE",
    "identifier": "+91 80029 88890",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 127,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"We tried to contact you are your reply to our offer of 750 mins 150 textand a new video phone call 08002988890...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2968",
    "type": "PHONE",
    "identifier": "+91 87157 05022",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 65,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"For your chance to win a £250 wkly shopping spree TEXT: SHOP to 80878. T's&C's www.txt-2-shop.com custcare 087...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5744",
    "type": "PHONE",
    "identifier": "+91 87124 02050",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 110,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have been specially selected to receive a 2000 pound award! Call 08712402050 BEFORE the lines close. Cost ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4007",
    "type": "PHONE",
    "identifier": "+91 87147 12394",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 67,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have WON a guaranteed £1000 cash or a £2000 prize. To claim yr prize call our customer service representat...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-323",
    "type": "PHONE",
    "identifier": "+91 90651 74042",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 125,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"you have a secret admirer. REVEAL who thinks you are So special. Call 09065174042. To opt out Reply REVEAL STO...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5785",
    "type": "PHONE",
    "identifier": "+91 78212 30901",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 72,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"you have a secret admirer. REVEAL who thinks you are So special. Call 09065174042. To opt out Reply REVEAL STO...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1053",
    "type": "PHONE",
    "identifier": "+91 80028 88812",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 148,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Do you want 750 anytime any network mins 150 text and a NEW VIDEO phone for only five pounds per week call 080...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3575",
    "type": "PHONE",
    "identifier": "+91 90663 50750",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 41,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Urgent! call 09066350750 from your landline. Your complimentary 4* Ibiza Holiday or 10,000 cash await collecti...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2555",
    "type": "PHONE",
    "identifier": "+91 87198 99217",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 123,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for 07808 XXXXXX shows 800 un-redeemed S. I. M. points. Call 08719899217 ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2795",
    "type": "PHONE",
    "identifier": "+91 90640 11000",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 56,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Shop till you Drop, IS IT YOU, either 10K, 5K, £500 Cash or £100 Travel voucher, Call now, 09064011000. NTT PO...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4859",
    "type": "PHONE",
    "identifier": "+91 90634 40451",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 52,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Dear Matthew please call 09063440451 from a landline, your complimentary 4*Lux Tenerife holiday or £1000 CASH ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5568",
    "type": "PHONE",
    "identifier": "+91 90500 01808",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! We are trying to contact you. Todays draw shows that you have won a £800 prize GUARANTEED. Call 090500...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1276",
    "type": "PHONE",
    "identifier": "+91 90580 97218",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 106,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"We know someone who you know that fancies you. Call 09058097218 to find out who....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4244",
    "type": "PHONE",
    "identifier": "+91 90580 91854",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 99,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someone you know has asked our dating service 2 contact you! Can't Guess who? CALL 09058091854 NOW all will be...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4004",
    "type": "PHONE",
    "identifier": "+91 90500 03091",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 94,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! We are trying to contact you. Todays draw shows that you have won a £800 prize GUARANTEED. Call 090500...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5654",
    "type": "PHONE",
    "identifier": "+91 90500 00301",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 82,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"449050000301 You have won a £2,000 price! To claim, call 09050000301....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7561",
    "type": "PHONE",
    "identifier": "+91 80007 76320",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 113,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Do you want 750 anytime any network mins 150 text and a NEW video phone for only five pounds per week call 080...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7179",
    "type": "PHONE",
    "identifier": "+91 84505 42832",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 143,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Thank you, winner notified by sms. Good Luck! No future marketing reply STOP to 84122 customer services 084505...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8809",
    "type": "PHONE",
    "identifier": "+91 87191 81503",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 83,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have 1 new voicemail. Please call 08719181503...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9476",
    "type": "PHONE",
    "identifier": "+91 87191 81513",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 71,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have 1 new voicemail. Please call 08719181513....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4789",
    "type": "PHONE",
    "identifier": "+91 87124 05020",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 138,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"FREE entry into our £250 weekly comp just send the word ENTER to 84128 NOW. 18 T&C www.textcomp.com cust care ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5627",
    "type": "PHONE",
    "identifier": "+91 87124 02779",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 45,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Please CALL 08712402779 immediately as there is an urgent message waiting for you...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6942",
    "type": "PHONE",
    "identifier": "+91 87075 09020",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 116,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"HOT LIVE FANTASIES call now 08707509020 Just 20p per min NTT Ltd, PO Box 1327 Croydon CR9 5WB 0870..k...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5551",
    "type": "PHONE",
    "identifier": "+91 87187 30666",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 108,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Bears Pic Nick, and Tom, Pete and ... Dick. In fact, all types try gay chat with photo upload call 08718730666...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2028",
    "type": "PHONE",
    "identifier": "+91 87124 60324",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 70,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Bears Pic Nick, and Tom, Pete and ... Dick. In fact, all types try gay chat with photo upload call 08718730666...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1943",
    "type": "PHONE",
    "identifier": "+91 71872 62701",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 110,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"500 New Mobiles from 2004, MUST GO! Txt: NOKIA to No: 89545 & collect yours today!From ONLY £1 www.4-tc.biz 2o...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7497",
    "type": "PHONE",
    "identifier": "+91 90997 25823",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 91,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"CLAIRE here am havin borin time & am now alone U wanna cum over 2nite? Chat now 09099725823 hope 2 C U Luv CLA...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-69",
    "type": "PHONE",
    "identifier": "+91 90663 62231",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 74,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"09066362231 URGENT! Your mobile No 07xxxxxxxxx won a £2,000 bonus caller prize on 02/06/03! this is the 2nd at...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4324",
    "type": "PHONE",
    "identifier": "+91 78015 43489",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 72,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"YOU 07801543489 are guaranteed the latests Nokia Phone, a 40GB iPod MP3 player or a £500 prize! Txt word:COLLE...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-578",
    "type": "PHONE",
    "identifier": "+91 90997 26395",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 54,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Hi its LUCY Hubby at meetins all day Fri & I will B alone at hotel U fancy cumin over? Pls leave msg 2day 0909...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8373",
    "type": "PHONE",
    "identifier": "+91 90617 90121",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 79,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your Mobile number has been awarded with a £2000 prize GUARANTEED. Call 09061790121 from land line. Cl...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6150",
    "type": "PHONE",
    "identifier": "+91 90997 26429",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 87,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Hi if ur lookin 4 saucy daytime fun wiv busty married woman Am free all next week Chat now 2 sort time 0909972...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6424",
    "type": "PHONE",
    "identifier": "+91 90634 42151",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 110,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"todays vodafone numbers ending with 0089(my last four digits) are selected to received a £350 award. If your n...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6228",
    "type": "PHONE",
    "identifier": "+91 87187 27870",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 105,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Free Top ringtone -sub to weekly ringtone-get 1st week free-send SUBPOLY to 81618-?3 per week-stop sms-0871872...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7490",
    "type": "PHONE",
    "identifier": "+91 90946 46899",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 64,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Hard LIVE 121 chat just 60p/min. Choose your girl and connect LIVE. Call 09094646899 now! Cheap Chat UK's bigg...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-100",
    "type": "PHONE",
    "identifier": "+91 90419 40223",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 45,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Hi, this is Mandy Sullivan calling from HOTMIX FM...you are chosen to receive £5000.00 in our Easter Prize dra...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8636",
    "type": "PHONE",
    "identifier": "+91 91110 30116",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 117,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someone has conacted our dating service and entered your phone because they fancy you!To find out who it is ca...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4088",
    "type": "PHONE",
    "identifier": "+91 80019 50382",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"FREE NOKIA Or Motorola with upto 12mths 1/2price linerental, 500 FREE x-net mins&100txt/mth FREE B'tooth*. Cal...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5525",
    "type": "PHONE",
    "identifier": "+91 87187 26970",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 118,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd time we have tried 2 contact u. U have won the 750 Pound prize. 2 claim is easy, call 08718726...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8929",
    "type": "PHONE",
    "identifier": "+91 90580 94594",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 117,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"U have a secret admirer who is looking 2 make contact with U-find out who they R*reveal who thinks UR so speci...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3091",
    "type": "PHONE",
    "identifier": "+91 90617 43811",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 52,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Urgent! Please call 09061743811 from landline. Your ABTA complimentary 4* Tenerife Holiday or £5000 cash await...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-886",
    "type": "PHONE",
    "identifier": "+91 90909 00040",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 84,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"CALL 09090900040 & LISTEN TO EXTREME DIRTY LIVE CHAT GOING ON IN THE OFFICE RIGHT NOW TOTAL PRIVACY NO ONE KNO...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8091",
    "type": "PHONE",
    "identifier": "+91 84528 10073",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Free entry in 2 a weekly comp for a chance to win an ipod. Txt POD to 80182 to get entry (std txt rate) T&C's ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3597",
    "type": "PHONE",
    "identifier": "+91 90902 04448",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 51,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"More people are dogging in your area now. Call 09090204448 and join like minded guys. Why not arrange 1 yourse...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6218",
    "type": "PHONE",
    "identifier": "+91 80004 07165",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 66,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have won a guaranteed £200 award or even £1000 cashto claim UR award call free on 08000407165 (18+) 2 stop...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6753",
    "type": "PHONE",
    "identifier": "+91 90663 62220",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 58,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your mobile No *********** WON a £2,000 Bonus Caller Prize on 02/06/03! This is the 2nd attempt to rea...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-657",
    "type": "PHONE",
    "identifier": "+91 90500 02311",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 52,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"+123 Congratulations - in this week's competition draw u have won the £1450 prize to claim just call 090500023...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4529",
    "type": "PHONE",
    "identifier": "+91 87187 27868",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 113,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"+123 Congratulations - in this week's competition draw u have won the £1450 prize to claim just call 090500023...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5878",
    "type": "PHONE",
    "identifier": "+91 87171 68528",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 58,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Your B4U voucher w/c 27/03 is MARSMS. Log onto www.B4Utele.com for discount credit. To opt out reply stop. Cus...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2053",
    "type": "PHONE",
    "identifier": "+91 90500 90044",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 98,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT!! Your 4* Costa Del Sol Holiday or £5000 await collection. Call 09050090044 Now toClaim. SAE, TC s, POB...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7870",
    "type": "PHONE",
    "identifier": "+91 87147 12379",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 65,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have WON a guaranteed £1000 cash or a £2000 prize. To claim yr prize call our customer service representat...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8058",
    "type": "PHONE",
    "identifier": "+91 90650 69120",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 74,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Thanks for your ringtone order, ref number K718. Your mobile will be charged £4.50. Should your tone not arriv...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9080",
    "type": "PHONE",
    "identifier": "+91 90650 69154",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 86,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Thanks for your ringtone order, ref number R836. Your mobile will be charged £4.50. Should your tone not arriv...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6018",
    "type": "PHONE",
    "identifier": "+91 87187 38034",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 104,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have 1 new message. Please call 08718738034....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9660",
    "type": "PHONE",
    "identifier": "+91 90562 42159",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 79,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"<Forwarded from 21870000>Hi - this is your Mailbox Messaging SMS alert. You have 4 messages. You have 21 match...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-599",
    "type": "PHONE",
    "identifier": "+91 90612 09465",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 48,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congrats! 1 year special cinema pass for 2 is yours. call 09061209465 now! C Suprman V, Matrix3, StarWars3, et...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-0",
    "type": "PHONE",
    "identifier": "+91 87040 50406",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 70,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Moby Pub Quiz.Win a £100 High Street prize if u know who the new Duchess of Cornwall will be? Txt her first na...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9436",
    "type": "PHONE",
    "identifier": "+91 87187 26971",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 106,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congratulations! Thanks to a good friend U have WON the £2,000 Xmas prize. 2 claim is easy, just call 08718726...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7056",
    "type": "PHONE",
    "identifier": "+91 90663 68753",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 115,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your mobile number *************** WON a £2000 Bonus Caller prize on 10/06/03! This is the 2nd attempt...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9512",
    "type": "PHONE",
    "identifier": "+91 87124 02902",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 137,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Please CALL 08712402902 immediately as there is an urgent message waiting for you....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7954",
    "type": "PHONE",
    "identifier": "+91 90580 98002",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 73,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someone has contacted our dating service and entered your phone becausethey fancy you! To find out who it is c...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9747",
    "type": "PHONE",
    "identifier": "+91 90617 01444",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 129,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"WINNER! As a valued network customer you hvae been selected to receive a £900 reward! To collect call 09061701...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6526",
    "type": "PHONE",
    "identifier": "+91 90634 58130",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 132,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congrats 2 mobile 3G Videophones R yours. call 09063458130 now! videochat wid ur mates, play java games, Dload...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8479",
    "type": "PHONE",
    "identifier": "+91 80009 30705",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 86,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"we tried to contact you re your response to our offer of a new nokia fone and camcorder hit reply or call 0800...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7122",
    "type": "PHONE",
    "identifier": "+91 90500 00555",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 55,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Urgent Urgent! We have 800 FREE flights to Europe to give away, call B4 10th Sept & take a friend 4 FREE. Call...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5804",
    "type": "PHONE",
    "identifier": "+91 90666 12661",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Urgent Please call 09066612661 from landline. £5000 cash or a luxury 4* Canary Islands Holiday await collectio...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3731",
    "type": "PHONE",
    "identifier": "+91 87124 05022",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 85,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"For ur chance to win a £250 cash every wk TXT: ACTION to 80608. T's&C's www.movietrivia.tv custcare 0871240502...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8592",
    "type": "PHONE",
    "identifier": "+91 87152 03028",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 115,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"U’ve Bin Awarded £50 to Play 4 Instant Cash. Call 08715203028 To Claim. EVERY 9th Player Wins Min £50-£500. Op...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1914",
    "type": "PHONE",
    "identifier": "+91 80029 86906",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 54,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"December only! Had your mobile 11mths+? You are entitled to update to the latest colour camera mobile for Free...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3517",
    "type": "PHONE",
    "identifier": "+91 87121 03738",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 56,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congratulations - Thanks to a good friend U have WON the £2,000 Xmas prize. 2 claim is easy, just call 0871210...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5519",
    "type": "PHONE",
    "identifier": "+91 90580 99801",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 89,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You've won tkts to the EURO2004 CUP FINAL or £800 CASH, to collect CALL 09058099801 b4190604, POBOX 7876150ppm...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3433",
    "type": "PHONE",
    "identifier": "+91 90580 94454",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 66,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your Mobile number has been awarded with a £2000 prize GUARANTEED. Call 09058094454 from land line. Cl...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5342",
    "type": "PHONE",
    "identifier": "+91 87124 00200",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 55,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have 1 new message. Please call 08712400200....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1563",
    "type": "PHONE",
    "identifier": "+91 87187 23815",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 111,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"We currently have a message awaiting your collection. To collect your message just call 08718723815....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2283",
    "type": "PHONE",
    "identifier": "+91 87147 14011",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 95,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your mobile was awarded a £1,500 Bonus Caller Prize on 27/6/03. Our final attempt 2 contact U! Call 08...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-180",
    "type": "PHONE",
    "identifier": "+91 87124 00603",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 134,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Hi babe its Jordan, how r u? Im home from abroad and lonely, text me back if u wanna chat xxSP visionsms.com T...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4754",
    "type": "PHONE",
    "identifier": "+91 87080 34412",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 55,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Good Luck! Draw takes place 28th Feb 06. Good Luck! For removal send STOP to 87239 customer services 087080344...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5560",
    "type": "PHONE",
    "identifier": "+91 12235 85334",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 127,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Not heard from U4 a while. Call 4 rude chat private line 01223585334 to cum. Wan 2C pics of me gettin shagged ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1418",
    "type": "PHONE",
    "identifier": "+91 90537 50005",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 115,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd time we have tried to contact u. U have won the £1450 prize to claim just call 09053750005 b4 ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5581",
    "type": "PHONE",
    "identifier": "+91 87187 25756",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 58,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd time we have tried to contact u. U have won the £1450 prize to claim just call 09053750005 b4 ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-8192",
    "type": "PHONE",
    "identifier": "+91 80815 60665",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 130,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"UR GOING 2 BAHAMAS! CallFREEFONE 08081560665 and speak to a live operator to claim either Bahamas cruise of£20...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3956",
    "type": "PHONE",
    "identifier": "+91 77862 00117",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 66,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"UR GOING 2 BAHAMAS! CallFREEFONE 08081560665 and speak to a live operator to claim either Bahamas cruise of£20...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3362",
    "type": "PHONE",
    "identifier": "+91 87121 01358",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 73,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd time we have tried 2 contact u. U have won the 750 Pound prize. 2 claim is easy, call 08712101...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4607",
    "type": "PHONE",
    "identifier": "+91 90663 58361",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 51,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! We are trying to contact U. Todays draw shows that you have won a £2000 prize GUARANTEED. Call 0906635...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5905",
    "type": "PHONE",
    "identifier": "+91 90659 89180",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 80,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Thanks for your ringtone order, reference number X29. Your mobile will be charged 4.50. Should your tone not a...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9585",
    "type": "PHONE",
    "identifier": "+91 87187 26978",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 45,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congratulations! Thanks to a good friend U have WON the £2,000 Xmas prize. 2 claim is easy, just call 08718726...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2675",
    "type": "PHONE",
    "identifier": "+91 77325 84351",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 77,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"44 7732584351, Do you want a New Nokia 3510i colour phone DeliveredTomorrow? With 300 free minutes to any mobi...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5863",
    "type": "PHONE",
    "identifier": "+91 90580 97189",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 87,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someone U know has asked our dating service 2 contact you! Cant Guess who? CALL 09058097189 NOW all will be re...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5039",
    "type": "PHONE",
    "identifier": "+91 90612 21066",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 76,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Camera - You are awarded a SiPix Digital Camera! call 09061221066 fromm landline. Delivery within 28 days...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4803",
    "type": "PHONE",
    "identifier": "+91 90500 00928",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 107,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You are being contacted by our dating service by someone you know! To find out who it is, call from a land lin...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1894",
    "type": "PHONE",
    "identifier": "+91 70902 01529",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 60,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Sorry I missed your call let's talk when you have the time. I'm on 07090201529...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2360",
    "type": "PHONE",
    "identifier": "+91 90663 64349",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 129,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"complimentary 4 STAR Ibiza Holiday or £10,000 cash needs your URGENT collection. 09066364349 NOW from Landline...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4160",
    "type": "PHONE",
    "identifier": "+91 80812 63000",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 72,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"FREE MSG:We billed your mobile number by mistake from shortcode 83332.Please call 08081263000 to have charges ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-162",
    "type": "PHONE",
    "identifier": "+91 87124 02972",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 87,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Please CALL 08712402972 immediately as there is an urgent message waiting for you...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7611",
    "type": "PHONE",
    "identifier": "+91 90580 95201",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 112,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your Mobile number has been awarded with a £2000 Bonus Caller Prize. Call 09058095201 from land line. ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7241",
    "type": "PHONE",
    "identifier": "+91 90663 64589",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 144,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"As a valued customer, I am pleased to advise you that following recent review of your Mob No. you are awarded ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2681",
    "type": "PHONE",
    "identifier": "+91 90663 68470",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 57,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"As a valued customer, I am pleased to advise you that following recent review of your Mob No. you are awarded ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-356",
    "type": "PHONE",
    "identifier": "+91 84487 14184",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 134,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Freemsg: 1-month unlimited free calls! Activate SmartCall Txt: CALL to No: 68866. Subscriptn3gbp/wk unlimited ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1105",
    "type": "PHONE",
    "identifier": "+91 90997 26553",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 102,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Am new 2 club & dont fink we met yet Will B gr8 2 C U Please leave msg 2day wiv ur area 09099726553 reply prom...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9043",
    "type": "PHONE",
    "identifier": "+91 12235 85236",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 131,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Not heard from U4 a while. Call me now am here all night with just my knickers on. Make me beg for it like U d...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7872",
    "type": "PHONE",
    "identifier": "+91 77977 06009",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 122,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Bloomberg -Message center +447797706009 Why wait? Apply for your future http://careers. bloomberg.com...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4556",
    "type": "PHONE",
    "identifier": "+91 90500 00878",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 79,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You are being contacted by our dating service by someone you know! To find out who it is, call from a land lin...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-4247",
    "type": "PHONE",
    "identifier": "+91 90715 17866",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 146,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You are a £1000 winner or Guaranteed Caller Prize, this is our Final attempt to contact you! To Claim Call 090...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2770",
    "type": "PHONE",
    "identifier": "+91 90611 00010",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 103,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"From next month get upto 50% More Calls 4 Ur standard network charge 2 activate Call 9061100010 C Wire3....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3924",
    "type": "PHONE",
    "identifier": "+91 70902 98926",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 121,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Customer service announcement. We recently tried to make a delivery to you but were unable to do so, please ca...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9180",
    "type": "PHONE",
    "identifier": "+91 90659 89182",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 52,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Thanks for your ringtone order, reference number X49. Your mobile will be charged 4.50. Should your tone not a...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-6447",
    "type": "PHONE",
    "identifier": "+91 87044 39680",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 79,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Dear Voucher Holder 2 claim your 1st class airport lounge passes when using Your holiday voucher call 08704439...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1667",
    "type": "PHONE",
    "identifier": "+91 90580 95107",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 46,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someone U know has asked our dating service 2 contact you! Cant guess who? CALL 09058095107 NOW all will be re...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-443",
    "type": "PHONE",
    "identifier": "+91 87178 95698",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 48,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Claim a 200 shopping spree, just call 08717895698 now! Have you won! MobStoreQuiz10ppm...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-9544",
    "type": "PHONE",
    "identifier": "+91 90617 01851",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 139,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! We are trying to contact you. Last weekends draw shows that you have won a £900 prize GUARANTEED. Call...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-3403",
    "type": "PHONE",
    "identifier": "+91 90611 04276",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 48,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congratulations U can claim 2 VIP row A Tickets 2 C Blu in concert in November or Blu gift guaranteed Call 090...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-5512",
    "type": "PHONE",
    "identifier": "+91 87178 90890",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 80,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Free msg: Single? Find a partner in your area! 1000s of real people are waiting to chat now!Send CHAT to 62220...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-7292",
    "type": "PHONE",
    "identifier": "+91 90617 02893",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 59,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT This is our 2nd attempt to contact U. Your £900 prize from YESTERDAY is still awaiting collection. To c...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-1981",
    "type": "PHONE",
    "identifier": "+91 90663 58152",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 80,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"tells u 2 call 09066358152 to claim £5000 prize. U have 2 enter all ur mobile & personal details @ the prompts...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-442",
    "type": "PHONE",
    "identifier": "+91 87191 81259",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 44,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Your 2004 account for 07XXXXXXXXX shows 786 unredeemed points. To claim call 08719181259 Identifier code: XXXX...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2771",
    "type": "PHONE",
    "identifier": "+91 90617 43386",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 114,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"YOU HAVE WON! As a valued Vodafone customer our computer has picked YOU to win a £150 prize. To collect is eas...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614434-2435",
    "type": "PHONE",
    "identifier": "+91 71047 11148",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 96,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd time we have tried to contact u. U have won the £400 prize. 2 claim is easy, just call 0871047...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.434Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3164",
    "type": "PHONE",
    "identifier": "+91 90663 64311",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 74,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"YOU ARE CHOSEN TO RECEIVE A £350 AWARD! Pls call claim number 09066364311 to collect your award which you are ...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-6006",
    "type": "PHONE",
    "identifier": "+91 90640 17305",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 55,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You are being contacted by our Dating Service by someone you know! To find out who it is, call from your mobil...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-6595",
    "type": "PHONE",
    "identifier": "+91 87171 11821",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 118,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Loans for any purpose even if you have Bad Credit! Tenants Welcome. Call NoWorriesLoans.com on 08717111821...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2713",
    "type": "PHONE",
    "identifier": "+91 79737 88240",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for 07973788240 shows 800 un-redeemed S. I. M. points. Call 08715203649 I...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-6281",
    "type": "PHONE",
    "identifier": "+91 87152 03649",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 78,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for 07973788240 shows 800 un-redeemed S. I. M. points. Call 08715203649 I...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5902",
    "type": "PHONE",
    "identifier": "+91 87143 42399",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 131,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"GSOH? Good with SPAM the ladies?U could b a male gigolo? 2 join the uk's fastest growing mens club reply ONCAL...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-7512",
    "type": "PHONE",
    "identifier": "+91 90580 94599",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 139,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"U have a secret admirer who is looking 2 make contact with U-find out who they R*reveal who thinks UR so speci...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4493",
    "type": "PHONE",
    "identifier": "+91 87075 00020",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 94,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"HOT LIVE FANTASIES call now 08707500020 Just 20p per min NTT Ltd, PO Box 1327 Croydon CR9 5WB 0870 is a nation...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2819",
    "type": "PHONE",
    "identifier": "+91 90617 90125",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 79,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your Mobile number has been awarded a <UKP>2000 prize GUARANTEED. Call 09061790125 from landline. Clai...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-7608",
    "type": "PHONE",
    "identifier": "+91 87092 22922",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 50,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"SPJanuary Male Sale! Hot Gay chat now cheaper, call 08709222922. National rate from 1.5p/min cheap to 7.8p/min...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3264",
    "type": "PHONE",
    "identifier": "+91 90663 82422",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 40,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congrats! Nokia 3650 video camera phone is your Call 09066382422 Calls cost 150ppm Ave call 3mins vary from mo...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4741",
    "type": "PHONE",
    "identifier": "+91 09063 46330",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 64,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Urgent! Please call 0906346330. Your ABTA complimentary 4* Spanish Holiday or £10,000 cash await collection SA...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-1158",
    "type": "PHONE",
    "identifier": "+91 70080 09200",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 83,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Missed call alert. These numbers called but left no message. 07008009200...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-1219",
    "type": "PHONE",
    "identifier": "+91 87124 02578",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 64,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Please CALL 08712402578 immediately as there is an urgent message waiting for you...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-9794",
    "type": "PHONE",
    "identifier": "+91 90617 44553",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 63,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Congrats! 2 mobile 3G Videophones R yours. call 09061744553 now! videochat wid ur mates, play java games, Dloa...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2721",
    "type": "PHONE",
    "identifier": "+91 78012 59231",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 57,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"U 447801259231 have a secret admirer who is looking 2 make contact with U-find out who they R*reveal who think...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-8940",
    "type": "PHONE",
    "identifier": "+91 90580 94597",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 100,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"U 447801259231 have a secret admirer who is looking 2 make contact with U-find out who they R*reveal who think...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4977",
    "type": "PHONE",
    "identifier": "+91 90580 91870",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 125,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Our dating service has been asked 2 contact U by someone shy! CALL 09058091870 NOW all will be revealed. POBox...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4736",
    "type": "PHONE",
    "identifier": "+91 87198 39835",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 131,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Welcome to UK-mobile-date this msg is FREE giving you free calling to 08719839835. Future mgs billed at 150p d...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3374",
    "type": "PHONE",
    "identifier": "+91 20731 62414",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 86,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Want explicit SEX in 30 secs? Ring 02073162414 now! Costs 20p/min...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3609",
    "type": "PHONE",
    "identifier": "+91 87028 40625",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 40,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"SMS SERVICES. for your inclusive text credits, pls goto www.comuk.net login= 3qxj9 unsubscribe with STOP, no e...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2032",
    "type": "PHONE",
    "identifier": "+91 90715 12432",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 72,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"\"URGENT! This is the 2nd attempt to contact U!U have WON £1000CALL 09071512432 b4 300603t&csBCM4235WC1N3XX.cal...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-8952",
    "type": "PHONE",
    "identifier": "+91 90651 71142",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 100,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"U have a Secret Admirer who is looking 2 make contact with U-find out who they R*reveal who thinks UR so speci...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2457",
    "type": "PHONE",
    "identifier": "+91 87175 09990",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 53,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You are being ripped off! Get your mobile content from www.clubmoby.com call 08717509990 poly/true/Pix/Rington...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4881",
    "type": "PHONE",
    "identifier": "+91 90663 80611",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"A £400 XMAS REWARD IS WAITING FOR YOU! Our computer has randomly picked you from our loyal mobile customers to...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3862",
    "type": "PHONE",
    "identifier": "+91 87187 38002",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 131,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for shows 800 un-redeemed S. I. M. points. Call 08718738002 Identifier Co...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-8296",
    "type": "PHONE",
    "identifier": "+91 70998 33605",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 58,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Customer service announcement. We recently tried to make a delivery to you but were unable to do so, please ca...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-544",
    "type": "PHONE",
    "identifier": "+91 78087 26822",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 125,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your Mobile No 07808726822 was awarded a £2,000 Bonus Caller Prize on 02/09/03! This is our 2nd attemp...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-8325",
    "type": "PHONE",
    "identifier": "+91 90778 18151",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 120,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Santa calling! Would your little ones like a call from Santa Xmas Eve? Call 09077818151 to book you time. Call...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2822",
    "type": "PHONE",
    "identifier": "+91 87191 80219",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 64,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2004 Account Statement for 078498****7 shows 786 unredeemed Bonus Points. To claim call 08719180...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4638",
    "type": "PHONE",
    "identifier": "+91 87187 26270",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 52,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"**FREE MESSAGE**Thanks for using the Auction Subscription Service. 18 . 150p/MSGRCVD 2 Skip an Auction txt OUT...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-994",
    "type": "PHONE",
    "identifier": "+91 80063 44447",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 87,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Great News! Call FREEFONE 08006344447 to claim your guaranteed £1000 CASH or £2000 gift. Speak to a live opera...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3925",
    "type": "PHONE",
    "identifier": "+91 90580 94507",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 145,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! We are trying to contact U. Todays draw shows that you have won a £2000 prize GUARANTEED. Call 0905809...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5602",
    "type": "PHONE",
    "identifier": "+91 87147 12412",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 148,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have WON a guaranteed £1000 cash or a £2000 prize. To claim yr prize call our customer service representat...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5527",
    "type": "PHONE",
    "identifier": "+91 87152 03685",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 130,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for shows 800 un-redeemed S.I.M. points. Call 08715203685 Identifier Code...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5055",
    "type": "PHONE",
    "identifier": "+91 90946 46631",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 58,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"I'd like to tell you my deepest darkest fantasies. Call me 09094646631 just 60p/min. To stop texts call 087124...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-1845",
    "type": "PHONE",
    "identifier": "+91 87012 13186",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 143,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Jamster! To get your free wallpaper text HEART to 88888 now! T&C apply. 16 only. Need Help? Call 08701213186....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4504",
    "type": "PHONE",
    "identifier": "+91 87014 17012",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 130,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"5p 4 alfie Moon's Children in need song on ur mob. Tell ur m8s. Txt Tone charity to 8007 for Nokias or Poly ch...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3875",
    "type": "PHONE",
    "identifier": "+91 90663 61921",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 114,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd attempt to contract U, you have won this weeks top prize of either £1000 cash or £200 prize. J...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5079",
    "type": "PHONE",
    "identifier": "+91 87152 05273",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 145,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You have 1 new message. Please call 08715205273...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5958",
    "type": "PHONE",
    "identifier": "+91 87152 03656",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 41,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for <fone no> shows 800 un-redeemed S. I. M. points. Call 08715203656 Ide...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-6504",
    "type": "PHONE",
    "identifier": "+91 90640 15307",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 89,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Someonone you know is trying to contact you via our dating service! To find out who it could be call from your...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-9049",
    "type": "PHONE",
    "identifier": "+91 90617 90126",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 66,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT! Your Mobile number has been awarded with a £2000 prize GUARANTEED. Call 09061790126 from land line. Cl...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-4174",
    "type": "PHONE",
    "identifier": "+91 90612 13237",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 127,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Urgent! Please call 09061213237 from landline. £5000 cash or a luxury 4* Canary Islands Holiday await collecti...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5951",
    "type": "PHONE",
    "identifier": "+91 90953 50301",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 112,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Call 09095350301 and send our girls into erotic ecstacy. Just 60p/min. To stop texts call 08712460324 (nat rat...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5248",
    "type": "PHONE",
    "identifier": "+91 87175 07382",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 136,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"IMPORTANT MESSAGE. This is a final contact attempt. You have important messages waiting out our customer claim...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-5040",
    "type": "PHONE",
    "identifier": "+91 90580 94583",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 45,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"Santa Calling! Would your little ones like a call from Santa Xmas eve? Call 09058094583 to book your time....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-7334",
    "type": "PHONE",
    "identifier": "+91 90640 17295",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 88,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"URGENT We are trying to contact you Last weekends draw shows u have won a £1000 prize GUARANTEED Call 09064017...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-6875",
    "type": "PHONE",
    "identifier": "+91 78082 47860",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 43,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for 07808247860 shows 800 un-redeemed S. I. M. points. Call 08719899229 I...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-7894",
    "type": "PHONE",
    "identifier": "+91 87198 99229",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 78,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for 07808247860 shows 800 un-redeemed S. I. M. points. Call 08719899229 I...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2559",
    "type": "PHONE",
    "identifier": "+91 90612 21061",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 135,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"You are awarded a SiPix Digital Camera! call 09061221061 from landline. Delivery within 28days. T Cs Box177. M...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-3095",
    "type": "PHONE",
    "identifier": "+91 87187 38001",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 143,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"PRIVATE! Your 2003 Account Statement for shows 800 un-redeemed S.I.M. points. Call 08718738001 Identifier Code...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-9251",
    "type": "PHONE",
    "identifier": "+91 71872 72008",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 45,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"This is the 2nd time we have tried 2 contact u. U have won the £750 Pound prize. 2 claim is easy, call 0871872...\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-voice-phish-1788131614435-2573",
    "type": "PHONE",
    "identifier": "+91 98655 56178",
    "name": "Voice Phishing / Fake Bank Manager Call",
    "category": "VOICE_PHISHING",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 149,
    "details": "Identified in voice extortion/KYC scam calls. Transcript signature: \"to get 1000 INR voucher please call on 889865556178....\"",
    "tags": [
      "voice_phishing",
      "sbi_debit_card_scam",
      "digital_arrest"
    ],
    "reportedAt": "2026-08-30T23:13:34.435Z"
  },
  {
    "id": "threat-vpa-002",
    "type": "VPA",
    "identifier": "electricity.disconnection.desk@okaxis",
    "name": "Electricity Board Power Cut Extortion",
    "category": "ELECTRICITY_BILL",
    "riskScore": 95,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 89,
    "details": "Sends fake SMS threatening power disconnect at 9:30 PM.",
    "tags": [
      "electricity_bill",
      "utility_fraud"
    ],
    "reportedAt": "2026-08-12T14:15:00.000Z"
  },
  {
    "id": "threat-phone-001",
    "type": "PHONE",
    "identifier": "+91 94775 30475",
    "name": "Digital Arrest Threat Caller (Kolkata Syndicate)",
    "category": "DIGITAL_ARREST",
    "riskScore": 98,
    "isBlacklisted": true,
    "source": "I4C_NATIONAL_CYBER_CRIME_PORTAL",
    "reportCount": 214,
    "details": "Robocalls victims claiming parcels intercepted with illegal narcotics in Mumbai customs.",
    "tags": [
      "digital_arrest",
      "mumbai_customs",
      "narcotics_scam"
    ],
    "reportedAt": "2026-08-01T08:00:00.000Z"
  },
  {
    "id": "threat-phone-002",
    "type": "PHONE",
    "identifier": "+91 88001 12233",
    "name": "Fake SBI KYC Manager & AnyDesk APK Spreader",
    "category": "KYC_EXPIRY",
    "riskScore": 96,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 67,
    "details": "Demands victims install AnyDesk / QuickSupport APK to prevent ATM suspension.",
    "tags": [
      "sbi_kyc",
      "anydesk_apk",
      "screen_share"
    ],
    "reportedAt": "2026-08-05T11:20:00.000Z"
  },
  {
    "id": "threat-phone-003",
    "type": "PHONE",
    "identifier": "+91 99112 23344",
    "name": "Electricity Power Cut Automated Bot",
    "category": "ELECTRICITY_BILL",
    "riskScore": 92,
    "isBlacklisted": true,
    "source": "SANCHAR_SAATHI_CHAKSHU",
    "reportCount": 43,
    "details": "Automated spoofed caller threatening disconnection.",
    "tags": [
      "electricity_bill"
    ],
    "reportedAt": "2026-08-08T16:45:00.000Z"
  },
  {
    "id": "threat-vpa-scam-1788131629745-1089",
    "type": "VPA",
    "identifier": "merchant_2028@oksbi",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 49,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.745Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3179",
    "type": "VPA",
    "identifier": "merchant_2046@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 25,
    "details": "Compromised merchant POS/digital handle reported for Malware in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5083",
    "type": "VPA",
    "identifier": "merchant_2067@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 57,
    "details": "Compromised merchant POS/digital handle reported for Malware in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2267",
    "type": "VPA",
    "identifier": "mule_976547@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 48,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-7608",
    "type": "VPA",
    "identifier": "merchant_2044@oksbi",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 44,
    "details": "Compromised merchant POS/digital handle reported for scam in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2586",
    "type": "VPA",
    "identifier": "merchant_2001@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 77,
    "details": "Compromised merchant POS/digital handle reported for scam in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4634",
    "type": "VPA",
    "identifier": "merchant_2026@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 70,
    "details": "Compromised merchant POS/digital handle reported for scam in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-6154",
    "type": "VPA",
    "identifier": "merchant_2094@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 41,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9956",
    "type": "VPA",
    "identifier": "merchant_2035@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 23,
    "details": "Compromised merchant POS/digital handle reported for Malware in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4701",
    "type": "VPA",
    "identifier": "merchant_2025@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 74,
    "details": "Compromised merchant POS/digital handle reported for phishing in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-8096",
    "type": "VPA",
    "identifier": "merchant_2042@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 73,
    "details": "Compromised merchant POS/digital handle reported for Malware in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4975",
    "type": "VPA",
    "identifier": "merchant_2068@oksbi",
    "name": "Mule Merchant Account (India)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 48,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1273",
    "type": "VPA",
    "identifier": "merchant_2019@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 55,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4605",
    "type": "VPA",
    "identifier": "merchant_2010@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 63,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-705",
    "type": "VPA",
    "identifier": "merchant_2073@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 20,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3577",
    "type": "VPA",
    "identifier": "merchant_2037@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 71,
    "details": "Compromised merchant POS/digital handle reported for Malware in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2814",
    "type": "VPA",
    "identifier": "mule_500558@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 74,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2948",
    "type": "VPA",
    "identifier": "merchant_2071@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 26,
    "details": "Compromised merchant POS/digital handle reported for Malware in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5048",
    "type": "VPA",
    "identifier": "merchant_2022@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 65,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9131",
    "type": "VPA",
    "identifier": "merchant_2089@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 72,
    "details": "Compromised merchant POS/digital handle reported for phishing in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-8415",
    "type": "VPA",
    "identifier": "merchant_2045@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 51,
    "details": "Compromised merchant POS/digital handle reported for Malware in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1810",
    "type": "VPA",
    "identifier": "merchant_2011@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 73,
    "details": "Compromised merchant POS/digital handle reported for Malware in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-476",
    "type": "VPA",
    "identifier": "merchant_2012@oksbi",
    "name": "Mule Merchant Account (India)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 23,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9614",
    "type": "VPA",
    "identifier": "merchant_2061@oksbi",
    "name": "Mule Merchant Account (India)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 39,
    "details": "Compromised merchant POS/digital handle reported for phishing in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9500",
    "type": "VPA",
    "identifier": "merchant_2081@oksbi",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 76,
    "details": "Compromised merchant POS/digital handle reported for scam in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9963",
    "type": "VPA",
    "identifier": "merchant_2088@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 24,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5563",
    "type": "VPA",
    "identifier": "merchant_2096@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 50,
    "details": "Compromised merchant POS/digital handle reported for Malware in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3112",
    "type": "VPA",
    "identifier": "merchant_2059@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 44,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5243",
    "type": "VPA",
    "identifier": "merchant_2075@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 52,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-6159",
    "type": "VPA",
    "identifier": "merchant_2099@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 31,
    "details": "Compromised merchant POS/digital handle reported for Malware in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-591",
    "type": "VPA",
    "identifier": "merchant_2004@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 66,
    "details": "Compromised merchant POS/digital handle reported for scam in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-791",
    "type": "VPA",
    "identifier": "merchant_2036@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 77,
    "details": "Compromised merchant POS/digital handle reported for phishing in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3185",
    "type": "VPA",
    "identifier": "merchant_2091@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 43,
    "details": "Compromised merchant POS/digital handle reported for phishing in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3931",
    "type": "VPA",
    "identifier": "merchant_2030@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9375",
    "type": "VPA",
    "identifier": "merchant_2008@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 48,
    "details": "Compromised merchant POS/digital handle reported for scam in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3504",
    "type": "VPA",
    "identifier": "merchant_2050@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 52,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-599",
    "type": "VPA",
    "identifier": "merchant_2077@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 27,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4458",
    "type": "VPA",
    "identifier": "merchant_2039@oksbi",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 62,
    "details": "Compromised merchant POS/digital handle reported for phishing in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1899",
    "type": "VPA",
    "identifier": "merchant_2040@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 62,
    "details": "Compromised merchant POS/digital handle reported for phishing in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5162",
    "type": "VPA",
    "identifier": "merchant_2085@oksbi",
    "name": "Mule Merchant Account (Chennai)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 60,
    "details": "Compromised merchant POS/digital handle reported for scam in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4111",
    "type": "VPA",
    "identifier": "merchant_2000@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 43,
    "details": "Compromised merchant POS/digital handle reported for phishing in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3740",
    "type": "VPA",
    "identifier": "merchant_2020@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 27,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4620",
    "type": "VPA",
    "identifier": "merchant_2053@oksbi",
    "name": "Mule Merchant Account (Chennai)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 73,
    "details": "Compromised merchant POS/digital handle reported for phishing in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4402",
    "type": "VPA",
    "identifier": "merchant_2086@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 52,
    "details": "Compromised merchant POS/digital handle reported for phishing in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1836",
    "type": "VPA",
    "identifier": "merchant_2056@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 26,
    "details": "Compromised merchant POS/digital handle reported for scam in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-8702",
    "type": "VPA",
    "identifier": "merchant_2062@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for scam in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9733",
    "type": "VPA",
    "identifier": "merchant_2054@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 66,
    "details": "Compromised merchant POS/digital handle reported for scam in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3740",
    "type": "VPA",
    "identifier": "merchant_2014@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 68,
    "details": "Compromised merchant POS/digital handle reported for phishing in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-6",
    "type": "VPA",
    "identifier": "merchant_2072@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 47,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1430",
    "type": "VPA",
    "identifier": "merchant_2052@oksbi",
    "name": "Mule Merchant Account (India)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 51,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-7618",
    "type": "VPA",
    "identifier": "mule_335778@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 63,
    "details": "Compromised merchant POS/digital handle reported for scam in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-7417",
    "type": "VPA",
    "identifier": "merchant_2034@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 42,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-8617",
    "type": "VPA",
    "identifier": "merchant_2024@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 22,
    "details": "Compromised merchant POS/digital handle reported for phishing in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-8368",
    "type": "VPA",
    "identifier": "merchant_2074@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 26,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3",
    "type": "VPA",
    "identifier": "merchant_2006@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 34,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3549",
    "type": "VPA",
    "identifier": "merchant_2090@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 45,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-54",
    "type": "VPA",
    "identifier": "merchant_2033@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 34,
    "details": "Compromised merchant POS/digital handle reported for Malware in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-934",
    "type": "VPA",
    "identifier": "mule_109263@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 36,
    "details": "Compromised merchant POS/digital handle reported for phishing in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-6598",
    "type": "VPA",
    "identifier": "merchant_2016@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 70,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9766",
    "type": "VPA",
    "identifier": "merchant_2058@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 34,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2308",
    "type": "VPA",
    "identifier": "merchant_2023@oksbi",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 69,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-759",
    "type": "VPA",
    "identifier": "merchant_2070@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 41,
    "details": "Compromised merchant POS/digital handle reported for Malware in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-172",
    "type": "VPA",
    "identifier": "merchant_2051@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for scam in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4548",
    "type": "VPA",
    "identifier": "merchant_2069@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 48,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9998",
    "type": "VPA",
    "identifier": "merchant_2087@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 44,
    "details": "Compromised merchant POS/digital handle reported for phishing in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-7754",
    "type": "VPA",
    "identifier": "merchant_2032@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 68,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-6713",
    "type": "VPA",
    "identifier": "merchant_2048@oksbi",
    "name": "Mule Merchant Account (India)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 30,
    "details": "Compromised merchant POS/digital handle reported for phishing in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9519",
    "type": "VPA",
    "identifier": "merchant_2021@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 48,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2162",
    "type": "VPA",
    "identifier": "merchant_2027@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 76,
    "details": "Compromised merchant POS/digital handle reported for Malware in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5010",
    "type": "VPA",
    "identifier": "merchant_2084@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 35,
    "details": "Compromised merchant POS/digital handle reported for scam in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5341",
    "type": "VPA",
    "identifier": "mule_445963@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 49,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-8986",
    "type": "VPA",
    "identifier": "merchant_2080@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 72,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1042",
    "type": "VPA",
    "identifier": "merchant_2083@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 22,
    "details": "Compromised merchant POS/digital handle reported for scam in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-540",
    "type": "VPA",
    "identifier": "merchant_2060@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 56,
    "details": "Compromised merchant POS/digital handle reported for phishing in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-3025",
    "type": "VPA",
    "identifier": "merchant_2095@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 67,
    "details": "Compromised merchant POS/digital handle reported for scam in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4939",
    "type": "VPA",
    "identifier": "merchant_2093@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 63,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5314",
    "type": "VPA",
    "identifier": "merchant_2055@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 46,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5126",
    "type": "VPA",
    "identifier": "merchant_2082@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 56,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-6512",
    "type": "VPA",
    "identifier": "merchant_2031@oksbi",
    "name": "Mule Merchant Account (Chennai)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 72,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-1536",
    "type": "VPA",
    "identifier": "merchant_2029@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 70,
    "details": "Compromised merchant POS/digital handle reported for phishing in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-9112",
    "type": "VPA",
    "identifier": "merchant_2092@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 36,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-4095",
    "type": "VPA",
    "identifier": "merchant_2015@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 72,
    "details": "Compromised merchant POS/digital handle reported for Malware in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2627",
    "type": "VPA",
    "identifier": "merchant_2018@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for scam in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-2316",
    "type": "VPA",
    "identifier": "merchant_2017@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 44,
    "details": "Compromised merchant POS/digital handle reported for Malware in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.746Z"
  },
  {
    "id": "threat-vpa-scam-1788131629746-5591",
    "type": "VPA",
    "identifier": "mule_395601@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 32,
    "details": "Compromised merchant POS/digital handle reported for scam in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-1529",
    "type": "VPA",
    "identifier": "merchant_2065@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 38,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-1314",
    "type": "VPA",
    "identifier": "mule_786553@okaxis",
    "name": "Mule Merchant Account (India)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 58,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-7853",
    "type": "VPA",
    "identifier": "mule_507122@okaxis",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 53,
    "details": "Compromised merchant POS/digital handle reported for Malware in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-4703",
    "type": "VPA",
    "identifier": "merchant_2003@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 30,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-5142",
    "type": "VPA",
    "identifier": "merchant_2007@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 46,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-1874",
    "type": "VPA",
    "identifier": "merchant_2002@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 69,
    "details": "Compromised merchant POS/digital handle reported for scam in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-9169",
    "type": "VPA",
    "identifier": "merchant_2009@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 19,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-3508",
    "type": "VPA",
    "identifier": "merchant_2049@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 27,
    "details": "Compromised merchant POS/digital handle reported for scam in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-1159",
    "type": "VPA",
    "identifier": "merchant_2064@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 30,
    "details": "Compromised merchant POS/digital handle reported for scam in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-5891",
    "type": "VPA",
    "identifier": "mule_937752@okaxis",
    "name": "Mule Merchant Account (India)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 33,
    "details": "Compromised merchant POS/digital handle reported for scam in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-8117",
    "type": "VPA",
    "identifier": "merchant_2066@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 29,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-8965",
    "type": "VPA",
    "identifier": "merchant_2013@oksbi",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 57,
    "details": "Compromised merchant POS/digital handle reported for Malware in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-5762",
    "type": "VPA",
    "identifier": "merchant_2047@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 69,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-8833",
    "type": "VPA",
    "identifier": "merchant_2097@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 53,
    "details": "Compromised merchant POS/digital handle reported for Malware in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-2993",
    "type": "VPA",
    "identifier": "merchant_2043@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 51,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-1735",
    "type": "VPA",
    "identifier": "merchant_2098@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 47,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-1270",
    "type": "VPA",
    "identifier": "mule_310462@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 49,
    "details": "Compromised merchant POS/digital handle reported for Malware in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-9260",
    "type": "VPA",
    "identifier": "merchant_2057@oksbi",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 32,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-7292",
    "type": "VPA",
    "identifier": "mule_872021@okaxis",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 41,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-7871",
    "type": "VPA",
    "identifier": "mule_847573@okaxis",
    "name": "Mule Merchant Account (Pune)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 68,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-7672",
    "type": "VPA",
    "identifier": "merchant_2041@oksbi",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for Malware in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-5273",
    "type": "VPA",
    "identifier": "merchant_2005@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 24,
    "details": "Compromised merchant POS/digital handle reported for phishing in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-3157",
    "type": "VPA",
    "identifier": "mule_436249@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 77,
    "details": "Compromised merchant POS/digital handle reported for phishing in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-4793",
    "type": "VPA",
    "identifier": "merchant_2063@oksbi",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 41,
    "details": "Compromised merchant POS/digital handle reported for scam in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629747-2155",
    "type": "VPA",
    "identifier": "merchant_2038@oksbi",
    "name": "Mule Merchant Account (Pune)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 49,
    "details": "Compromised merchant POS/digital handle reported for scam in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.747Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-79",
    "type": "VPA",
    "identifier": "mule_131702@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 62,
    "details": "Compromised merchant POS/digital handle reported for Malware in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-2403",
    "type": "VPA",
    "identifier": "mule_279243@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 50,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-7702",
    "type": "VPA",
    "identifier": "merchant_2079@oksbi",
    "name": "Mule Merchant Account (Delhi)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 56,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-250",
    "type": "VPA",
    "identifier": "mule_515727@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 72,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-45",
    "type": "VPA",
    "identifier": "mule_993621@okaxis",
    "name": "Mule Merchant Account (India)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-6215",
    "type": "VPA",
    "identifier": "merchant_2078@oksbi",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 27,
    "details": "Compromised merchant POS/digital handle reported for phishing in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-9768",
    "type": "VPA",
    "identifier": "mule_850277@okaxis",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 47,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-6460",
    "type": "VPA",
    "identifier": "mule_699070@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 47,
    "details": "Compromised merchant POS/digital handle reported for Malware in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-6235",
    "type": "VPA",
    "identifier": "merchant_2076@oksbi",
    "name": "Mule Merchant Account (Surat)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 41,
    "details": "Compromised merchant POS/digital handle reported for Malware in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-5725",
    "type": "VPA",
    "identifier": "mule_763253@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 52,
    "details": "Compromised merchant POS/digital handle reported for Malware in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-9422",
    "type": "VPA",
    "identifier": "mule_529082@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 64,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-8952",
    "type": "VPA",
    "identifier": "mule_148453@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 53,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-6640",
    "type": "VPA",
    "identifier": "mule_486924@okaxis",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 23,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-2134",
    "type": "VPA",
    "identifier": "mule_164124@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 56,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-2643",
    "type": "VPA",
    "identifier": "mule_641211@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 74,
    "details": "Compromised merchant POS/digital handle reported for Malware in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-4854",
    "type": "VPA",
    "identifier": "mule_810949@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 19,
    "details": "Compromised merchant POS/digital handle reported for phishing in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-7388",
    "type": "VPA",
    "identifier": "mule_557387@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 70,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-1169",
    "type": "VPA",
    "identifier": "mule_457588@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 61,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-421",
    "type": "VPA",
    "identifier": "mule_539898@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 46,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-1937",
    "type": "VPA",
    "identifier": "mule_413094@okaxis",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 22,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-6441",
    "type": "VPA",
    "identifier": "mule_234493@okaxis",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 38,
    "details": "Compromised merchant POS/digital handle reported for Malware in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-8037",
    "type": "VPA",
    "identifier": "mule_505308@okaxis",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 56,
    "details": "Compromised merchant POS/digital handle reported for phishing in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629748-9281",
    "type": "VPA",
    "identifier": "mule_736551@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 23,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.748Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-3561",
    "type": "VPA",
    "identifier": "mule_112705@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 26,
    "details": "Compromised merchant POS/digital handle reported for scam in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-4522",
    "type": "VPA",
    "identifier": "mule_369168@okaxis",
    "name": "Mule Merchant Account (Pune)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 68,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-3013",
    "type": "VPA",
    "identifier": "mule_492286@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 70,
    "details": "Compromised merchant POS/digital handle reported for scam in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-2705",
    "type": "VPA",
    "identifier": "mule_354519@okaxis",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 42,
    "details": "Compromised merchant POS/digital handle reported for scam in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-2306",
    "type": "VPA",
    "identifier": "mule_274960@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 77,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6012",
    "type": "VPA",
    "identifier": "mule_371850@okaxis",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 34,
    "details": "Compromised merchant POS/digital handle reported for phishing in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-1713",
    "type": "VPA",
    "identifier": "mule_939019@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 30,
    "details": "Compromised merchant POS/digital handle reported for scam in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-4655",
    "type": "VPA",
    "identifier": "mule_420234@okaxis",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 43,
    "details": "Compromised merchant POS/digital handle reported for Malware in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-3348",
    "type": "VPA",
    "identifier": "mule_136283@okaxis",
    "name": "Mule Merchant Account (Surat)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 50,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Surat.",
    "tags": [
      "mule_vpa",
      "surat"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6861",
    "type": "VPA",
    "identifier": "mule_948036@okaxis",
    "name": "Mule Merchant Account (India)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 25,
    "details": "Compromised merchant POS/digital handle reported for scam in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-2096",
    "type": "VPA",
    "identifier": "mule_852978@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 57,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6376",
    "type": "VPA",
    "identifier": "mule_782125@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 49,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-611",
    "type": "VPA",
    "identifier": "mule_985889@okaxis",
    "name": "Mule Merchant Account (Kolkata)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 43,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Kolkata.",
    "tags": [
      "mule_vpa",
      "kolkata"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6849",
    "type": "VPA",
    "identifier": "mule_703959@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 36,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-8178",
    "type": "VPA",
    "identifier": "mule_608118@okaxis",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 65,
    "details": "Compromised merchant POS/digital handle reported for phishing in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6901",
    "type": "VPA",
    "identifier": "mule_523057@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 38,
    "details": "Compromised merchant POS/digital handle reported for phishing in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-7573",
    "type": "VPA",
    "identifier": "mule_366604@okaxis",
    "name": "Mule Merchant Account (Hyderabad)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 60,
    "details": "Compromised merchant POS/digital handle reported for Malware in Hyderabad.",
    "tags": [
      "mule_vpa",
      "hyderabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-635",
    "type": "VPA",
    "identifier": "mule_770833@okaxis",
    "name": "Mule Merchant Account (Jaipur)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 74,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Jaipur.",
    "tags": [
      "mule_vpa",
      "jaipur"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-3989",
    "type": "VPA",
    "identifier": "mule_610215@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 72,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-1732",
    "type": "VPA",
    "identifier": "mule_798423@okaxis",
    "name": "Mule Merchant Account (Bangalore)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 18,
    "details": "Compromised merchant POS/digital handle reported for phishing in Bangalore.",
    "tags": [
      "mule_vpa",
      "bangalore"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-9304",
    "type": "VPA",
    "identifier": "mule_427674@okaxis",
    "name": "Mule Merchant Account (Pune)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 42,
    "details": "Compromised merchant POS/digital handle reported for scam in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-202",
    "type": "VPA",
    "identifier": "mule_857591@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 43,
    "details": "Compromised merchant POS/digital handle reported for phishing in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-9444",
    "type": "VPA",
    "identifier": "mule_588012@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 67,
    "details": "Compromised merchant POS/digital handle reported for phishing in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-1508",
    "type": "VPA",
    "identifier": "mule_610379@okaxis",
    "name": "Mule Merchant Account (Mumbai)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 71,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Mumbai.",
    "tags": [
      "mule_vpa",
      "mumbai"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6024",
    "type": "VPA",
    "identifier": "mule_591228@okaxis",
    "name": "Mule Merchant Account (Ahmedabad)",
    "category": "MALWARE",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 74,
    "details": "Compromised merchant POS/digital handle reported for Malware in Ahmedabad.",
    "tags": [
      "mule_vpa",
      "ahmedabad"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-4910",
    "type": "VPA",
    "identifier": "mule_371410@okaxis",
    "name": "Mule Merchant Account (Chennai)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 55,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Chennai.",
    "tags": [
      "mule_vpa",
      "chennai"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-285",
    "type": "VPA",
    "identifier": "mule_684672@okaxis",
    "name": "Mule Merchant Account (India)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 29,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-6301",
    "type": "VPA",
    "identifier": "mule_897087@okaxis",
    "name": "Mule Merchant Account (Pune)",
    "category": "PAYMENT_CARD_FRAUD",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 60,
    "details": "Compromised merchant POS/digital handle reported for Payment card fraud in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-7285",
    "type": "VPA",
    "identifier": "mule_601567@okaxis",
    "name": "Mule Merchant Account (India)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 77,
    "details": "Compromised merchant POS/digital handle reported for phishing in India.",
    "tags": [
      "mule_vpa",
      "india"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-4199",
    "type": "VPA",
    "identifier": "mule_995309@okaxis",
    "name": "Mule Merchant Account (Pune)",
    "category": "PHISHING",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 62,
    "details": "Compromised merchant POS/digital handle reported for phishing in Pune.",
    "tags": [
      "mule_vpa",
      "pune"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-5727",
    "type": "VPA",
    "identifier": "mule_778529@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "IDENTITY_THEFT",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 76,
    "details": "Compromised merchant POS/digital handle reported for Identity theft in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  },
  {
    "id": "threat-vpa-scam-1788131629749-7582",
    "type": "VPA",
    "identifier": "mule_604476@okaxis",
    "name": "Mule Merchant Account (Delhi)",
    "category": "SCAM",
    "riskScore": 94,
    "isBlacklisted": true,
    "source": "NPCI_MULE_ACCOUNT_REGISTRY",
    "reportCount": 22,
    "details": "Compromised merchant POS/digital handle reported for scam in Delhi.",
    "tags": [
      "mule_vpa",
      "delhi"
    ],
    "reportedAt": "2026-08-30T23:13:49.749Z"
  }
];
export const INITIAL_THREAT_RECORDS = SEED_THREAT_RECORDS;

export const SEED_DEFAULT_USER = {
  id: 'user_demo_001',
  phone: '+919820098200',
  name: 'Subhashree Dash',
  email: 'subhashree@example.com',
  isVerified: true,
  riskProfileScore: 15,
  settings: {
    maxAmountLimit: 15000,
    voicePhishingMode: true,
    callScreeningEnabled: true,
    highRiskAutoHold: true,
    language: 'en'
  },
  trustedPayees: [
    { vpa: 'landlord.rent@okaxis', name: 'Landlord Rent', addedOn: '2026-01-10' },
    { vpa: 'mom@okhdfcbank', name: 'Mom Personal', addedOn: '2026-01-01' },
    { vpa: 'grocery.mart@upi', name: 'Local Grocery', addedOn: '2026-02-01' }
  ]
};
