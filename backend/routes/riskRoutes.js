import { Router } from 'express';
import { RiskController } from '../controllers/riskController.js';

const router = Router();

router.post('/check', RiskController.evaluateRisk);
router.post('/scan-qr', RiskController.scanQr);
router.post('/confirm-override', RiskController.confirmOverride);
router.get('/history', RiskController.getHistory);

export default router;
