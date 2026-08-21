import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';

const router = Router();

router.get('/profile', AuthController.getProfile);
router.post('/settings', AuthController.updateSettings);
router.post('/google-login', AuthController.googleLogin);
router.post('/send-otp', AuthController.sendOtp);
router.post('/verify-otp', AuthController.verifyOtp);
router.post('/trusted-payees', AuthController.addTrustedPayee);

export default router;
