import { db } from '../config/db.js';
import { SEED_DEFAULT_USER } from '../seeds/threatData.js';

export class AuthController {
  static async getProfile(req, res) {
    try {
      const userId = req.query.userId || req.headers['x-user-id'] || 'user_demo_001';
      let user = db.users.get(userId);

      if (!user) {
        user = SEED_DEFAULT_USER;
        db.users.set(user.id, user);
      }

      return res.status(200).json({
        success: true,
        user
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  static async updateSettings(req, res) {
    try {
      const userId = req.body.userId || 'user_demo_001';
      let user = db.users.get(userId) || { ...SEED_DEFAULT_USER, id: userId };

      const { maxAmountLimit, voicePhishingMode, callScreeningEnabled, highRiskAutoHold, language } = req.body;

      if (maxAmountLimit !== undefined) {
        const numLimit = Number(maxAmountLimit);
        if (numLimit < 500 || numLimit > 100000) {
          return res.status(400).json({
            success: false,
            message: 'Threshold amount limit must be between ₹500 and ₹1,00,000'
          });
        }
        user.settings.maxAmountLimit = numLimit;
      }

      if (voicePhishingMode !== undefined) user.settings.voicePhishingMode = Boolean(voicePhishingMode);
      if (callScreeningEnabled !== undefined) user.settings.callScreeningEnabled = Boolean(callScreeningEnabled);
      if (highRiskAutoHold !== undefined) user.settings.highRiskAutoHold = Boolean(highRiskAutoHold);
      if (language) user.settings.language = language;

      db.users.set(user.id, user);
      db.save();

      return res.status(200).json({
        success: true,
        message: 'Security settings updated successfully',
        settings: user.settings
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  /**
   * Google OAuth / SSO Login
   */
  static async googleLogin(req, res) {
    try {
      const { email, name, photoUrl, googleId, idToken } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Google email address is required.'
        });
      }

      const cleanEmail = email.trim().toLowerCase();
      let user = null;

      // Find existing user by email
      for (const u of db.users.values()) {
        if (u.email && u.email.toLowerCase() === cleanEmail) {
          user = u;
          break;
        }
      }

      if (!user) {
        user = {
          id: `user_google_${googleId || Date.now()}`,
          phone: null,
          name: name || email.split('@')[0],
          email: cleanEmail,
          photoUrl: photoUrl || null,
          googleId: googleId || `gid-${Date.now()}`,
          authProvider: 'GOOGLE_OAUTH',
          isVerified: true,
          riskProfileScore: 10,
          settings: {
            maxAmountLimit: 10000,
            voicePhishingMode: true,
            callScreeningEnabled: true,
            highRiskAutoHold: true,
            language: 'en'
          },
          trustedPayees: [
            { vpa: 'landlord.rent@okaxis', name: 'Landlord Rent', addedOn: '2026-01-10' }
          ],
          knownDevices: [{ deviceId: `dev-google-${Date.now()}`, model: 'Google Auth Client', lastSeen: new Date().toISOString() }]
        };
      } else {
        user.authProvider = user.authProvider || 'GOOGLE_OAUTH';
        if (name) user.name = name;
        if (photoUrl) user.photoUrl = photoUrl;
      }

      db.users.set(user.id, user);
      db.users.set(user.email, user);
      db.save();

      return res.status(200).json({
        success: true,
        message: 'Google Sign-In successful',
        token: `jwt-google-session-${user.id}`,
        user
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  static async sendOtp(req, res) {
    try {
      const { phone, email } = req.body;
      const target = phone || email;

      if (!target) {
        return res.status(400).json({ success: false, message: 'Phone number or email is required' });
      }

      // Channel Switch: 'SMS' vs 'VOICE'
      const otpType = (req.body.otpType || req.body.channel || 'SMS').toUpperCase();
      // Generate a dynamic, unique 6-digit random OTP every single time
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

      // Store in memory with 5 min expiration
      if (!db.activeOtps) db.activeOtps = new Map();
      db.activeOtps.set(target, {
        code: otpCode,
        otpType,
        expiresAt: Date.now() + 5 * 60 * 1000
      });

      let gatewayResponse = null;

      // Real Voice Call OTP via 2Factor.in (Calls phone and speaks the exact random OTP)
      if (phone && otpType === 'VOICE' && process.env.TWO_FACTOR_API_KEY) {
        try {
          const clean10DigitPhone = phone.replace(/[^0-9]/g, '').slice(-10);
          const apiKey = process.env.TWO_FACTOR_API_KEY.trim();
          console.log(`[2Factor.in] Making REAL VOICE CALL to +91${clean10DigitPhone} with dynamic OTP [${otpCode}]...`);
          
          const voiceUrl = `https://2factor.in/API/V1/${apiKey}/VOICE/${clean10DigitPhone}/${otpCode}`;
          const voiceRes = await fetch(voiceUrl);
          const voiceData = await voiceRes.json();
          console.log('[2Factor.in Voice Response]:', voiceData);
          gatewayResponse = { status: voiceData.Status === 'Success' ? 'CALL_INITIATED' : 'NOTICE', details: voiceData.Details, provider: '2FACTOR_VOICE' };
        } catch (vErr) {
          console.error('[2Factor Voice Error]:', vErr.message);
        }
      }

      console.log(`[AUTH] Generated Dynamic Random OTP [${otpCode}] for: ${target} (${otpType})`);

      return res.status(200).json({
        success: true,
        channel: otpType,
        otpType,
        target,
        otp: otpCode, // Return generated dynamic code for in-app display & auto-fill
        message: otpType === 'VOICE'
          ? `Voice call initiated to ${target}. Please answer to hear your security code.`
          : `Security code generated for ${target}: ${otpCode}`,
        gatewayStatus: gatewayResponse?.status || 'GENERATED',
        expiresInSeconds: 300
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  static async verifyOtp(req, res) {
    try {
      const { phone, email, otp, name } = req.body;
      const identifier = phone || email;

      if (!identifier || !otp) {
        return res.status(400).json({ success: false, message: 'Phone/Email and OTP are required' });
      }

      // Validate against dynamic OTP or demo codes
      const storedOtpObj = db.activeOtps?.get(identifier);
      const isDynamicValid = storedOtpObj && storedOtpObj.code === otp && Date.now() <= storedOtpObj.expiresAt;
      const isDemoValid = otp === '123456' || otp === '000000';

      if (!isDynamicValid && !isDemoValid) {
        return res.status(401).json({ success: false, message: 'Invalid or expired OTP code. Please try again.' });
      }

      let user = db.users.get(identifier);
      if (!user) {
        user = {
          id: `user_${Date.now()}`,
          phone: phone || null,
          email: email || (phone ? `${phone.replace(/[^0-9]/g, '')}@fraudshield.local` : null),
          name: name || 'Verified User',
          isVerified: true,
          riskProfileScore: 10,
          settings: {
            maxAmountLimit: 10000,
            voicePhishingMode: true,
            callScreeningEnabled: true,
            highRiskAutoHold: true,
            language: 'en'
          },
          trustedPayees: [
            { vpa: 'landlord.rent@okaxis', name: 'Landlord Rent', addedOn: '2026-01-10' }
          ],
          knownDevices: [{ deviceId: `dev-${Date.now()}`, model: 'Android Client', lastSeen: new Date().toISOString() }]
        };
        db.users.set(user.id, user);
        db.users.set(identifier, user);
        db.save();
      }

      return res.status(200).json({
        success: true,
        message: 'Authentication successful',
        token: `mock-jwt-token-${user.id}`,
        user
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }

  static async addTrustedPayee(req, res) {
    try {
      const userId = req.body.userId || 'user_demo_001';
      const { vpa, name } = req.body;
      if (!vpa) return res.status(400).json({ success: false, message: 'VPA is required' });

      let user = db.users.get(userId) || SEED_DEFAULT_USER;
      user.trustedPayees = user.trustedPayees || [];

      const existing = user.trustedPayees.find(p => p.vpa.toLowerCase() === vpa.trim().toLowerCase());
      if (!existing) {
        user.trustedPayees.push({
          vpa: vpa.trim().toLowerCase(),
          name: name || vpa.trim(),
          addedOn: new Date().toISOString()
        });
        db.users.set(user.id, user);
        db.save();
      }

      return res.status(200).json({
        success: true,
        message: 'Trusted payee added',
        trustedPayees: user.trustedPayees
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
}
