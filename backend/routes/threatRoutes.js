import { Router } from 'express';
import { ThreatIntelController } from '../controllers/threatIntelController.js';

const router = Router();

router.get('/lookup', ThreatIntelController.lookup);
router.post('/report', ThreatIntelController.report);
router.get('/stats', ThreatIntelController.getStats);

export default router;
