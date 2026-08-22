import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.GROQ_API_KEY;
let groqClient = null;

if (apiKey && apiKey.startsWith('gsk_')) {
  try {
    groqClient = new Groq({ apiKey });
    console.log('[Groq AI] Initialized Groq AI client successfully!');
  } catch (err) {
    console.error('[Groq AI] Initialization error:', err.message);
  }
} else {
  console.warn('[Groq AI] Missing or invalid GROQ_API_KEY in environment.');
}

/**
 * Perform real-time LLM Scam Transcript & Voice Phishing Analysis using Groq AI
 */
export async function analyzeScamTranscriptWithGroq(transcript, metadata = {}) {
  if (!groqClient || !transcript) return null;

  const models = ['groq/compound-mini', 'openai/gpt-oss-20b', 'qwen/qwen3.6-27b'];

  for (const model of models) {
    try {
      const prompt = `You are the AI Engine of Fraud Shield (SIH S40), India's Real-Time Cyber Crime Prevention System.
Analyze the following phone call transcript / voice message for voice phishing, coercion, or financial fraud (such as Digital Arrest, CBI/Police impersonation, Electricity bill disconnection, AnyDesk screen sharing, or KYC suspension).

Transcript: "${transcript}"

Return ONLY a valid JSON object matching this exact schema:
{
  "phishingDetected": true or false,
  "confidenceScore": integer 0 to 100,
  "riskLevel": "CRITICAL" or "HIGH" or "MEDIUM" or "SAFE",
  "primaryCategory": "DIGITAL_ARREST" or "FAKE_POLICE_CBI" or "ELECTRICITY_BILL" or "APK_SCREEN_SHARE" or "KYC_EXPIRY" or "GENERAL_SCAM" or "SAFE_CONVERSATION",
  "coercionLevel": "SEVERE" or "MODERATE" or "LOW" or "NONE",
  "detectedVectors": ["vector1", "vector2"],
  "summary": "Concise 2-sentence explanation of why this call is or isn't a scam.",
  "safetyAdvice": "Direct 1-sentence action for the target victim."
}`;

      const chatCompletion = await groqClient.chat.completions.create({
        messages: [
          { role: 'system', content: 'You are an expert cyber fraud detection AI. Respond strictly in valid JSON.' },
          { role: 'user', content: prompt }
        ],
        model: model,
        temperature: 0.1,
        response_format: { type: 'json_object' }
      });

      const content = chatCompletion.choices[0]?.message?.content;
      if (content) {
        // Strip any thinking tags if present
        const cleanJson = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
        const parsed = JSON.parse(cleanJson);
        console.log(`[Groq AI] Successfully analyzed transcript using model '${model}':`, parsed.primaryCategory);
        return parsed;
      }
    } catch (err) {
      console.warn(`[Groq AI] Model '${model}' call failed, trying next model:`, err.message);
    }
  }

  return null;
}

/**
 * Generate human-friendly explainable AI rationale for a UPI payment risk evaluation
 */
export async function generateExplainableRiskAnalysisWithGroq({ vpa, amount, riskScore, riskLevel, reasons = [], language = 'en' }) {
  if (!groqClient) return null;

  try {
    const prompt = `You are the Explainable AI (XAI) engine for UPI Fraud Shield.
A transaction to recipient VPA "${vpa}" for amount ₹${amount} was evaluated with a Risk Score of ${riskScore}/100 (${riskLevel}).
Triggered Risk Factors: ${reasons.join('; ')}

Generate a clear, empathetic 2-sentence explanation for the user in ${language === 'hi' ? 'Hindi' : 'English'} explaining why this transaction was flagged or permitted and what they should do next. Respond strictly in JSON format: {"explanation": "your explanation text here"}`;

    const completion = await groqClient.chat.completions.create({
      messages: [
        { role: 'system', content: 'Respond strictly in JSON format: {"explanation": "string"}' },
        { role: 'user', content: prompt }
      ],
      model: 'groq/compound-mini',
      temperature: 0.2,
      response_format: { type: 'json_object' }
    });

    const raw = completion.choices[0]?.message?.content;
    if (raw) {
      const cleanJson = raw.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
      const res = JSON.parse(cleanJson);
      return res.explanation;
    }
  } catch (err) {
    console.warn('[Groq AI] XAI generation fallback:', err.message);
  }

  return null;
}

/**
 * Analyze SMS / extortion payment message using Groq AI
 */
export async function analyzePaymentMessageWithGroq(note, vpa = '', amount = 0) {
  if (!groqClient || !note) return null;

  const models = ['groq/compound-mini', 'openai/gpt-oss-20b', 'qwen/qwen3.6-27b'];

  for (const model of models) {
    try {
      const prompt = `You are the AI Fraud Detection Engine for Verix Cyber Defense.
Analyze the following payment note / SMS context / caller message for financial coercion, extortion, fake police/CBI impersonation, digital arrest, utility fraud, or phishing traps.

Recipient UPI ID: "${vpa}"
Payment Amount: ₹${amount}
Message Context: "${note}"

Return ONLY a valid JSON object matching this exact schema:
{
  "isExtortion": true or false,
  "threatScore": integer 0 to 100,
  "category": "FAKE_POLICE_EXTORTION" or "DIGITAL_ARREST" or "UTILITY_SCAM" or "KYC_PHISHING" or "NORMAL_PAYMENT",
  "reason": "Clear explanation of detected threat factors",
  "action": "BLOCK" or "ALLOW"
}`;

      const chatCompletion = await groqClient.chat.completions.create({
        messages: [
          { role: 'system', content: 'You are an expert fraud detection AI. Respond strictly in valid JSON.' },
          { role: 'user', content: prompt }
        ],
        model: model,
        temperature: 0.1,
        response_format: { type: 'json_object' }
      });

      const content = chatCompletion.choices[0]?.message?.content;
      if (content) {
        const cleanJson = content.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
        const parsed = JSON.parse(cleanJson);
        console.log(`[Groq AI] Payment message analyzed with '${model}':`, parsed.category, 'Score:', parsed.threatScore);
        return parsed;
      }
    } catch (err) {
      console.warn(`[Groq AI] Message analysis failed with '${model}':`, err.message);
    }
  }

  return null;
}
