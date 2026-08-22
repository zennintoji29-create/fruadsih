-- ===================================================
-- FRAUD SHIELD SIH S40 - SUPABASE POSTGRESQL SCHEMA
-- ===================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Users Table
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255),
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Threat Registry Table (UPI VPAs, Phone Numbers, Malicious URLs, Bank Accounts)
CREATE TABLE IF NOT EXISTS public.threat_registry (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    identifier VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(50) NOT NULL,
    threat_score INTEGER DEFAULT 0,
    category VARCHAR(100),
    reported_count INTEGER DEFAULT 1,
    status VARCHAR(50) DEFAULT 'ACTIVE',
    details JSONB DEFAULT '{}'::jsonb,
    last_flagged TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_threat_identifier ON public.threat_registry(identifier);
CREATE INDEX IF NOT EXISTS idx_threat_type ON public.threat_registry(type);

-- 4. Transaction Risk Logs Table
CREATE TABLE IF NOT EXISTS public.transaction_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_vpa VARCHAR(255) NOT NULL,
    receiver_vpa VARCHAR(255) NOT NULL,
    amount NUMERIC(12, 2) NOT NULL,
    risk_score INTEGER NOT NULL,
    action_taken VARCHAR(50) NOT NULL,
    explanation TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_tx_receiver ON public.transaction_logs(receiver_vpa);
CREATE INDEX IF NOT EXISTS idx_tx_timestamp ON public.transaction_logs(timestamp DESC);

-- 5. Voice & Phishing Call Reports Table
CREATE TABLE IF NOT EXISTS public.call_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    caller_number VARCHAR(20) NOT NULL,
    transcription TEXT,
    fraud_probability NUMERIC(5, 2),
    category VARCHAR(100),
    audio_hash VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. False Positive Appeals Table
CREATE TABLE IF NOT EXISTS public.false_positive_appeals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    transaction_id VARCHAR(255),
    user_identifier VARCHAR(255) NOT NULL,
    reason TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Enable Row Level Security (RLS) & Grant Access Policies for API
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.threat_registry ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transaction_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.call_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.false_positive_appeals ENABLE ROW LEVEL SECURITY;

-- Allow API read/write access
CREATE POLICY "Allow public read users" ON public.users FOR SELECT USING (true);
CREATE POLICY "Allow public insert users" ON public.users FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public read threat_registry" ON public.threat_registry FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update threat_registry" ON public.threat_registry FOR ALL USING (true);

CREATE POLICY "Allow public insert transaction_logs" ON public.transaction_logs FOR ALL USING (true);
CREATE POLICY "Allow public insert call_reports" ON public.call_reports FOR ALL USING (true);
CREATE POLICY "Allow public insert false_positive_appeals" ON public.false_positive_appeals FOR ALL USING (true);

-- 8. Seed Initial Indian Threat Data
INSERT INTO public.threat_registry (identifier, type, threat_score, category, reported_count, details)
VALUES 
    ('lottery.claim@ybl', 'UPI_VPA', 95, 'LOTTERY_SCAM', 42, '{"risk_level": "CRITICAL", "description": "Fake KBC lottery distribution account"}'),
    ('sbi.kyc.update@paytm', 'UPI_VPA', 98, 'PHISHING', 128, '{"risk_level": "CRITICAL", "description": "Impersonating SBI KYC verification team"}'),
    ('+919876543210', 'PHONE', 89, 'VOICE_PHISH', 18, '{"risk_level": "HIGH", "description": "AI Voice cloning scam claiming family emergency"}')
ON CONFLICT (identifier) DO NOTHING;
