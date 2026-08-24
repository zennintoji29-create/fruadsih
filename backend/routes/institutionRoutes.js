import { Router } from 'express';
import { InstitutionController } from '../controllers/institutionController.js';

const router = Router();

router.post(['/appeals', '/appeal', '/tickets', '/ticket'], InstitutionController.submitAppeal);
router.get(['/appeals', '/tickets'], InstitutionController.getAppeals);
router.get(['/appeals/:appealId', '/appeal/:appealId', '/tickets/:appealId', '/ticket/:appealId'], InstitutionController.getAppealById);
router.post(['/appeals/:appealId/resolve', '/appeal/:appealId/resolve', '/tickets/:appealId/resolve'], InstitutionController.resolveAppeal);
router.get('/analytics-overview', InstitutionController.getAnalyticsOverview);

export default router;
