import { VoicePhishingService } from '../services/voicePhishingService.js';
import { ThreatDbService } from '../services/threatDbService.js';
import { transcribeAudioWithGroq } from '../services/groqAiService.js';
import { db } from '../config/db.js';
import { v4 as uuidv4 } from 'uuid';

export class VoicePhishController {
  /**
   * Android CallScreeningService & iOS CallKit Native Hook Endpoint
   */
  static async screenIncomingCall(req, res) {
    try {
      const callerNumber = req.query.callerNumber || req.body.callerNumber;
      if (!callerNumber) {
        return res.status(400).json({
          success: false,
          message: 'Caller phone number is required.'
        });
      }

      const result = await VoicePhishingService.screenIncomingCall(callerNumber);
      return res.status(200).json({
        success: true,
        data: result
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Drop / Upload Audio Recording Analyzer (30s - 2min)
   * Privacy-Preserving: Zero raw audio stored in database.
   * Transcribes transiently in memory with Groq Whisper v3, analyzes intent with LLaMA 3.3,
   * and optionally saves flagged phone number to threat registry.
   */
  static async uploadRecording(req, res) {
    try {
      const { audioBase64, audioFileName, durationSeconds, fallbackTranscript, callerNumber, language } = req.body;

      if (!audioBase64 && !fallbackTranscript) {
        return res.status(400).json({
          success: false,
          message: 'Audio recording or transcript snippet is required.'
        });
      }

      // 1. Real Speech-To-Text Transcription via Groq Whisper Large v3
      let transcriptionText = fallbackTranscript ? fallbackTranscript.trim() : null;
      let usedRealWhisper = false;

      if (audioBase64) {
        const whisperResult = await transcribeAudioWithGroq(audioBase64, { 
          language: language || 'en',
          fileName: audioFileName || 'recording.webm'
        });
        if (whisperResult && whisperResult.trim().length > 0) {
          transcriptionText = whisperResult.trim();
          usedRealWhisper = true;
        }
      }

      // If neither audio transcription nor fallback text was provided / speech was unintelligible
      const isUnintelligible = !transcriptionText || transcriptionText.length < 3;
      if (isUnintelligible) {
        transcriptionText = 'No clear speech or scam keywords detected in the recorded audio sample.';
      }

      const duration = Number(durationSeconds) || 30;
      let analysis;

      if (isUnintelligible) {
        analysis = {
          phishingDetected: false,
          confidenceScore: 5,
          riskLevel: 'SAFE',
          primaryCategory: 'SAFE_CONVERSATION',
          coercionLevel: 'NONE',
          detectedVectors: [],
          summary: 'No fraudulent extortion, legal threats, or digital arrest patterns detected in this audio sample.',
          safetyAdvice: 'Always avoid sharing OTPs, bank passwords, or remote screen-sharing codes.'
        };
      } else {
        analysis = await VoicePhishingService.analyzeTranscript(transcriptionText, {
          callerNumber: callerNumber || 'SUSPECTED_VOICE_CALL',
          callDurationSeconds: duration
        });
      }

      // 2. Auto-save flagged caller number to Threat Database if risk score >= 50%
      let savedToDb = false;
      let dbRecord = null;
      let targetNumberToSave = callerNumber && callerNumber.trim() && callerNumber !== 'SUSPECTED_VOICE_CALL' ? callerNumber.trim() : null;

      // If no explicit caller number passed, attempt to extract phone from transcript
      if (!targetNumberToSave && transcriptionText) {
        const extracted = transcriptionText.match(/(\+?91[\s-]?)?[6-9]\d{9}/g);
        if (extracted && extracted.length > 0) {
          targetNumberToSave = extracted[0].replace(/\s+/g, '');
        }
      }

      if (targetNumberToSave) {
        const isThreat = analysis.phishingDetected || (analysis.confidenceScore >= 50);

        if (isThreat) {
          dbRecord = await ThreatDbService.reportScammer({
            identifier: targetNumberToSave,
            type: targetNumberToSave.includes('@') ? 'VPA' : 'PHONE',
            category: analysis.primaryCategory || 'VOICE_PHISHING',
            details: `Flagged via Voice AI Analysis (${analysis.riskLevel} - ${analysis.confidenceScore}%). Threat summary: "${analysis.summary || ''}"`,
            source: 'GROQ_WHISPER_VOICE_AI',
            riskScore: analysis.confidenceScore || 95
          });
          savedToDb = true;
        }
      }

      // 3. Response payload with privacy guarantee badge (Zero Audio Saved)
      return res.status(200).json({
        success: true,
        privacyNotice: '🔒 Zero Raw Audio Persisted: Audio was processed in volatile memory with Groq Whisper and destroyed to preserve user privacy (DPDP Act 2023).',
        data: {
          fileMetadata: {
            fileName: audioFileName || 'voice_recording.m4a',
            durationSeconds: duration,
            processedAt: new Date().toISOString(),
            associatedCaller: callerNumber || null,
            savedToThreatRegistry: savedToDb,
            threatRecordId: dbRecord?.id || null
          },
          transcribedSnippet: transcriptionText,
          phishingDetected: analysis.phishingDetected,
          confidenceScore: analysis.confidenceScore,
          riskLevel: analysis.riskLevel,
          primaryCategory: analysis.primaryCategory,
          coercionLevel: analysis.coercionLevel,
          detectedVectors: analysis.detectedVectors,
          summary: analysis.summary,
          safetyAdvice: analysis.safetyAdvice,
          actionPlan: analysis.phishingDetected ? [
            '1. Immediately block and disconnect the caller number.',
            '2. Do NOT transfer any money or share UPI PINs / OTPs.',
            '3. Remember: Real Indian Law Enforcement (CBI/Police) NEVER conduct Digital Arrests on phone calls.',
            '4. Report to National Cyber Crime Helpline (1930) or cybercrime.gov.in.'
          ] : [
            '1. Call appears legitimate or non-coercive.',
            '2. Always avoid sharing sensitive UPI PINs or OTPs.'
          ]
        }
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }


  /**
   * Live Call Transcript & Audio Stream Phishing Analysis
   */
  static async analyzeStream(req, res) {
    try {
      const { transcript, callerNumber, callDurationSeconds, isVideoCall } = req.body;

      if (!transcript) {
        return res.status(400).json({
          success: false,
          message: 'Transcript text or audio transcription snippet is required.'
        });
      }

      const analysis = await VoicePhishingService.analyzeTranscript(transcript, {
        callerNumber,
        callDurationSeconds,
        isVideoCall
      });

      const reportId = `call-analysis-${uuidv4()}`;
      const report = {
        reportId,
        callerNumber: callerNumber || 'UNKNOWN',
        transcriptSnippet: transcript,
        ...analysis,
        recordedAt: new Date().toISOString()
      };

      db.callReports.set(reportId, report);
      db.save();

      return res.status(200).json({
        success: true,
        data: report
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * User Report & Mark Caller as Spammer
   */
  static async reportCaller(req, res) {
    try {
      const { callerNumber, category, details, transcript } = req.body;
      if (!callerNumber) {
        return res.status(400).json({
          success: false,
          message: 'Caller phone number is required.'
        });
      }

      const record = await ThreatDbService.reportScammer({
        identifier: callerNumber,
        type: 'PHONE',
        category: category || 'VOICE_PHISHING',
        details: details || `Reported via live call screening HUD. Snippet: "${(transcript || '').slice(0, 100)}..."`,
        source: 'USER_APP_OVERLAY'
      });

      return res.status(200).json({
        success: true,
        message: 'Caller reported and added to Community Cyber Shield Registry.',
        data: record
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Get Screened Call Logs
   */
  static async getCallLogs(req, res) {
    try {
      const reports = Array.from(db.callReports.values()).reverse();
      return res.status(200).json({
        success: true,
        count: reports.length,
        calls: reports
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
}
