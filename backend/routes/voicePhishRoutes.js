import { Router } from 'express';
import { VoicePhishController } from '../controllers/voicePhishController.js';

const router = Router();

router.get('/screen-call', VoicePhishController.screenIncomingCall);
router.post('/screen-call', VoicePhishController.screenIncomingCall);
router.post('/upload-recording', VoicePhishController.uploadRecording);
router.post('/analyze-stream', VoicePhishController.analyzeStream);
router.post('/report-call', VoicePhishController.reportCaller);
router.get('/call-logs', VoicePhishController.getCallLogs);

export default router;
