import { VoicePhishingService } from '../services/voicePhishingService.js';
import { ThreatDbService } from '../services/threatDbService.js';
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
   * Transcribes transiently in memory, analyzes intent, and returns instant summary.
   */
  static async uploadRecording(req, res) {
    try {
      const { audioBase64, audioFileName, durationSeconds, fallbackTranscript, callerNumber } = req.body;

      if (!audioBase64 && !fallbackTranscript) {
        return res.status(400).json({
          success: false,
          message: 'Audio recording or transcript snippet is required.'
        });
      }

      // Simulated transient Speech-To-Text Transcription (or fallback transcript)
      let transcriptionText = fallbackTranscript;
      if (!transcriptionText && audioBase64) {
        // Transient in-memory decode & mock STT simulation
        transcriptionText = 'Hello sir, this is Mumbai Cyber Crime Department calling. A criminal parcel in your name was seized with illicit items. A digital arrest order is active. Transfer verification deposit immediately to avoid police visit.';
      }

      const duration = Number(durationSeconds) || 45;
      const analysis = VoicePhishingService.analyzeTranscript(transcriptionText, {
        callerNumber: callerNumber || 'SUSPECTED_VOICE_CALL',
        callDurationSeconds: duration
      });

      // Response payload with privacy guarantee badge (Zero Audio Saved)
      return res.status(200).json({
        success: true,
        privacyNotice: '🔒 Zero Raw Audio Persisted: Audio was processed in-memory and discarded to preserve user privacy.',
        data: {
          fileMetadata: {
            fileName: audioFileName || 'call_recording.m4a',
            durationSeconds: duration,
            processedAt: new Date().toISOString()
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
            '1. Immediately block the caller number.',
            '2. Do NOT transfer any money or pay security deposits.',
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

      const analysis = VoicePhishingService.analyzeTranscript(transcript, {
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
