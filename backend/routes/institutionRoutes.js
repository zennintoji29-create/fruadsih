import { Router } from 'express';
import { InstitutionController } from '../controllers/institutionController.js';

const router = Router();

router.post('/appeals', InstitutionController.submitAppeal);
router.get('/appeals', InstitutionController.getAppeals);
router.post('/appeals/:appealId/resolve', InstitutionController.resolveAppeal);
router.get('/analytics-overview', InstitutionController.getAnalyticsOverview);

export default router;
