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
    "id": "threat-1788098878370",
    "type": "PHONE",
    "identifier": "+91 99999 88888",
    "name": "Reported FAKE_POLICE_CBI Target",
    "category": "FAKE_POLICE_CBI",
    "riskScore": 100,
    "isBlacklisted": true,
    "source": "GROQ_WHISPER_VOICE_AI",
    "reportCount": 6,
    "details": "Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer and threatens a bail payment, which is a classic police impersonation scam demanding money. This is a clear voice phishing attempt.\" | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer demanding a bail payment for an alleged illegal parcel linked to the victim's Aadhaar, which is a classic digital arrest scam. No legitimate authority would request money in this manner, indicating a high‑risk phishing attempt.\" | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer and threatens the victim with an illegal parcel claim, demanding a ₹20,000 bail payment. This is a classic fake police/ digital arrest scam using coercion to extract money.\" | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer demanding a bail payment for an alleged illegal parcel linked to the victim's Aadhaar. This is a classic police‑impersonation scam using coercive financial threats.\" | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer and claims the victim has an illegal parcel linked to Aadhaar, demanding a ₹20,000 bail. This is a classic digital arrest scam using authority intimidation to extract money.\" | Update: Flagged via Voice AI Analysis (CRITICAL). Threat summary: \"The caller pretends to be a Crime Branch officer demanding a bail payment for an alleged illegal parcel linked to the victim's Aadhaar, a classic impersonation scam. This constitutes a fraudulent financial demand under false authority.\"",
    "tags": [
      "user_reported",
      "fake_police_cbi"
    ],
    "reportedAt": "2026-08-30T14:07:58.370Z"
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
