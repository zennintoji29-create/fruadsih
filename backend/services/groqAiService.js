import Groq from 'groq-sdk';
import dotenv from 'dotenv';
import fs from 'fs';
import os from 'os';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from both local and root directories
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(process.cwd(), 'backend/.env') });

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
 * Transcribe real audio buffer / base64 using Groq Whisper Large v3
 */
export async function transcribeAudioWithGroq(audioBase64OrBuffer, options = {}) {
  if (!groqClient || !audioBase64OrBuffer) return null;

  let tempFilePath = null;
  try {
    let buffer;
    let ext = 'webm';

    if (typeof audioBase64OrBuffer === 'string') {
      // 1. Detect audio format from MIME type or filename
      if (audioBase64OrBuffer.includes('audio/wav') || audioBase64OrBuffer.includes('audio/x-wav')) {
        ext = 'wav';
      } else if (audioBase64OrBuffer.includes('audio/mp3') || audioBase64OrBuffer.includes('audio/mpeg')) {
        ext = 'mp3';
      } else if (audioBase64OrBuffer.includes('audio/mp4') || audioBase64OrBuffer.includes('audio/m4a')) {
        ext = 'm4a';
      } else if (audioBase64OrBuffer.includes('audio/ogg')) {
        ext = 'ogg';
      } else if (audioBase64OrBuffer.includes('audio/webm') || audioBase64OrBuffer.includes('video/webm')) {
        ext = 'webm';
      } else if (options.fileName && options.fileName.includes('.')) {
        ext = options.fileName.split('.').pop().toLowerCase();
      }

      // 2. Cleanly extract base64 data regardless of codec parameters
      let cleanBase64 = audioBase64OrBuffer;
      if (cleanBase64.includes(';base64,')) {
        cleanBase64 = cleanBase64.split(';base64,')[1];
      } else if (cleanBase64.startsWith('data:')) {
        cleanBase64 = cleanBase64.replace(/^data:[^,]+,/, '');
      }

      buffer = Buffer.from(cleanBase64.trim(), 'base64');
    } else if (Buffer.isBuffer(audioBase64OrBuffer)) {
      buffer = audioBase64OrBuffer;
      if (options.fileName && options.fileName.includes('.')) {
        ext = options.fileName.split('.').pop().toLowerCase();
      }
    } else {
      return null;
    }

    if (!buffer || buffer.length === 0) {
      console.warn('[Groq AI Whisper] Empty audio buffer received.');
      return null;
    }

    // Write transiently to tmp file with correct extension for Groq SDK multipart stream
    const tempFileName = `verix_audio_${Date.now()}_${Math.random().toString(36).substring(7)}.${ext}`;
    tempFilePath = path.join(os.tmpdir(), tempFileName);
    fs.writeFileSync(tempFilePath, buffer);

    const targetLang = (options.language && options.language !== 'en') ? options.language : undefined;
    const whisperModels = ['whisper-large-v3-turbo', 'whisper-large-v3'];

    for (const model of whisperModels) {
      try {
        const transcription = await groqClient.audio.transcriptions.create({
          file: fs.createReadStream(tempFilePath),
          model: model,
          prompt: 'Cyber crime, Digital Arrest, Mumbai Police, CBI officer, verification deposit, Aadhaar card, FIR, bank account, OTP, Electricity bill.',
          response_format: 'json',
          language: targetLang,
          temperature: 0.0
        });

        if (transcription && transcription.text && transcription.text.trim().length > 0) {
          console.log(`[Groq AI Whisper] (${model}) Transcribed audio successfully:`, transcription.text);
          return transcription.text.trim();
        }
      } catch (modelErr) {
        console.warn(`[Groq AI Whisper] Model '${model}' attempt failed:`, modelErr.message);
      }
    }

    return null;
  } catch (err) {
    console.warn('[Groq AI Whisper] Transcription failed, fallback will be used:', err.message);
    return null;
  } finally {
    if (tempFilePath && fs.existsSync(tempFilePath)) {
      try { fs.unlinkSync(tempFilePath); } catch (e) {}
    }
  }
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
