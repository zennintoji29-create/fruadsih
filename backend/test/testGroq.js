import { analyzeScamTranscriptWithGroq } from '../services/groqAiService.js';
import dotenv from 'dotenv';

dotenv.config();

async function runTest() {
  console.log('🔍 Testing Groq AI Scam Detection Pipeline...\n');

  const transcript = 'Hello sir, this is Inspector Sharma from Delhi Cyber Crime Branch. A parcel shipped under your Aadhaar number was intercepted containing illegal narcotics. You are under Digital Arrest. Pay ₹25,000 security verification deposit immediately or a police team will arrive at your home.';

  const result = await analyzeScamTranscriptWithGroq(transcript);

  if (result) {
    console.log('✅ GROQ API IS LIVE & WORKING 100% PERFECTLY!\n');
    console.log('--- AI Fraud Analysis Output ---');
    console.log('Phishing Detected:', result.phishingDetected);
    console.log('Confidence Score:', result.confidenceScore);
    console.log('Risk Level:', result.riskLevel);
    console.log('Primary Category:', result.primaryCategory);
    console.log('Summary:', result.summary);
    console.log('Safety Advice:', result.safetyAdvice);
  } else {
    console.error('❌ Failed to get response from Groq API');
  }
}

runTest();
