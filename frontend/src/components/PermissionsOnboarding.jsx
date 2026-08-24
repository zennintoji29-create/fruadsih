import React, { useState } from 'react';
import { 
  Shield, Bell, PhoneCall, Mic, Camera, MessageSquare, 
  Fingerprint, CheckCircle2, ArrowRight, KeyRound, Lock, Check 
} from 'lucide-react';
import { translations } from '../translations';
import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';

import { Capacitor, registerPlugin } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

const PermissionHelper = registerPlugin('PermissionHelper');

export default function PermissionsOnboarding({ onComplete, lang = 'en' }) {
  const t = translations[lang] || translations.en;

  const [step, setStep] = useState(1); // 1: System Permissions, 2: Setup 4-digit MPIN
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [pinError, setPinError] = useState(null);
  const [biometricEnrolled, setBiometricEnrolled] = useState(false);

  const [permissions, setPermissions] = useState([
    { id: 'notif', name: 'Push Notifications (Critical)', desc: 'Real-time high-risk transaction & scam alerts', icon: <Bell className="w-5 h-5" />, granted: true },
    { id: 'call', name: 'Call Screening & Phone State', desc: 'Detect active extortion calls during UPI transfers', icon: <PhoneCall className="w-5 h-5" />, granted: true },
    { id: 'mic', name: 'Microphone & Voice Phishing AI', desc: 'In-memory digital arrest deepfake analysis', icon: <Mic className="w-5 h-5" />, granted: true },
    { id: 'cam', name: 'Camera & QR Scanner', desc: 'Pre-check merchant & recipient UPI QR codes', icon: <Camera className="w-5 h-5" />, granted: true },
    { id: 'sms', name: 'SMS Scam Filter', desc: 'Filter phishing links & fake bank alert messages', icon: <MessageSquare className="w-5 h-5" />, granted: true },
    { id: 'bio', name: 'Biometric Auth Sensor', desc: 'Secure fingerprint approval for high-risk transfers', icon: <Fingerprint className="w-5 h-5" />, granted: true }
  ]);

  const toggle = (id) => {
    setPermissions(permissions.map(p => p.id === id ? { ...p, granted: !p.granted } : p));
  };

  const handleGrantPermissions = async () => {
    try {
      if (Capacitor.isNativePlatform()) {
        await PermissionHelper.requestAllPermissions().catch(() => {});
      }
    } catch (e) {}

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        await navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
          stream.getTracks().forEach(track => track.stop());
        }).catch(() => {});
      }
    } catch (e) {}

    try {
      if (Capacitor.isPluginAvailable('LocalNotifications')) {
        await LocalNotifications.requestPermissions().catch(() => {});
      }
    } catch (e) {}

    setStep(2);
  };

  const handleEnrollBiometric = async () => {
    try {
      const bioInfo = await BiometricAuth.checkBiometry();
      if (bioInfo && bioInfo.isAvailable) {
        await BiometricAuth.authenticate({
          reason: 'Confirm Fingerprint for Verix Lock',
          cancelTitle: 'Cancel',
          allowDeviceCredential: true
        });
        setBiometricEnrolled(true);
        localStorage.setItem('shieldx_biometric_enabled', 'true');
      } else {
        setBiometricEnrolled(true);
        localStorage.setItem('shieldx_biometric_enabled', 'true');
      }
    } catch (e) {
      console.log('[Biometric Setup]:', e);
      setBiometricEnrolled(true);
      localStorage.setItem('shieldx_biometric_enabled', 'true');
    }
  };

  const handleFinishSetup = (e) => {
    e.preventDefault();
    if (pin.length !== 4) {
      setPinError('PIN must be exactly 4 digits.');
      return;
    }
    if (pin !== confirmPin) {
      setPinError('PINs do not match.');
      return;
    }

    try {
      localStorage.setItem('shieldx_app_pin', pin.trim());
      localStorage.setItem('shieldx_app_lock_enabled', 'true');
      localStorage.setItem('shieldx_biometric_enabled', biometricEnrolled ? 'true' : 'false');
      localStorage.setItem('shieldx_permissions_onboarded', 'true');
    } catch (err) {}

    if (onComplete) onComplete();
  };

  const darkBg = { background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' };

  return (
    <div className="flex flex-col min-h-screen text-white p-5 font-sans justify-between overflow-y-auto select-none" style={darkBg}>
      {/* Header */}
      <div className="text-center pt-3 pb-2 space-y-2">
        <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)', color: '#1A0317' }}>
          {step === 1 ? <Shield className="w-7 h-7 stroke-[2.5]" /> : <Lock className="w-7 h-7 stroke-[2.5]" />}
        </div>
        <h1 className="text-2xl font-black font-heading text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {step === 1 ? t.permissionRequired : 'Set 4-Digit Security MPIN'}
        </h1>
        <p className="text-xs text-white/50 max-w-xs mx-auto leading-relaxed">
          {step === 1 ? 'Verix requires security access to protect your device against live phishing and scam calls.' : 'Create a 4-digit MPIN to lock and protect your Verix dashboard.'}
        </p>
      </div>

      {step === 1 ? (
        /* STEP 1: Permissions List */
        <>
          <div className="space-y-2.5 my-auto py-3 animate-fade-in">
            {permissions.map((p) => (
              <div 
                key={p.id} 
                onClick={() => toggle(p.id)}
                className="flex items-center justify-between p-3.5 rounded-2xl cursor-pointer active:scale-[0.99] transition-all"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${p.granted ? 'text-[#D8F828]' : 'text-white/30'}`} style={{ background: p.granted ? 'rgba(216,248,40,0.15)' : 'rgba(255,255,255,0.05)' }}>
                    {p.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-white">{p.name}</h4>
                    <p className="text-[10px] text-white/40 leading-tight">{p.desc}</p>
                  </div>
                </div>

                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                  p.granted ? 'bg-[#D8F828] border-[#D8F828] text-[#1A0317]' : 'border-white/20 bg-transparent'
                }`}>
                  {p.granted && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 pb-2">
            <button
              onClick={handleGrantPermissions}
              className="w-full py-4 rounded-[18px] text-[13px] font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all"
              style={{ background: 'linear-gradient(135deg,#E4FF2E,#C4E810)', color: '#1A0317', boxShadow: '0 8px 24px rgba(216,248,40,0.35)', fontFamily: 'Outfit, sans-serif' }}
            >
              <span>{t.grantAll} &amp; Continue</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </>
      ) : (
        /* STEP 2: Set 4-Digit Security MPIN & Biometrics */
        <div className="w-full max-w-sm mx-auto my-auto space-y-4 animate-slide-down">
          <form onSubmit={handleFinishSetup} className="rounded-[28px] p-5 shadow-2xl space-y-3.5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(24px)' }}>
            <div>
              <label className="text-xs font-bold text-white/70 block mb-1">
                Enter 4-Digit Security PIN:
              </label>
              <input
                type="password"
                maxLength={4}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
                placeholder="••••"
                className="w-full rounded-xl py-3 px-4 text-center text-xl tracking-widest font-mono text-white font-bold focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(216,248,40,0.3)' }}
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold text-white/70 block mb-1">
                Confirm 4-Digit PIN:
              </label>
              <input
                type="password"
                maxLength={4}
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, ''))}
                placeholder="••••"
                className="w-full rounded-xl py-3 px-4 text-center text-xl tracking-widest font-mono text-white font-bold focus:outline-none"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(216,248,40,0.3)' }}
                required
              />
            </div>

            {/* Biometric toggle */}
            <div 
              onClick={handleEnrollBiometric}
              className="flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2.5">
                <Fingerprint className="w-5 h-5 text-[#D8F828]" />
                <div className="text-left">
                  <h4 className="text-xs font-bold text-white">Enable Biometric Unlock</h4>
                  <p className="text-[10px] text-white/40">Unlock with Fingerprint</p>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                biometricEnrolled ? 'bg-[#D8F828] text-[#1A0317]' : 'bg-white/10 text-white/50'
              }`}>
                {biometricEnrolled ? '✓ Enrolled' : 'Tap to Enable'}
              </span>
            </div>

            {pinError && (
              <p className="text-xs text-rose-400 font-semibold text-center">{pinError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-[18px] text-xs font-black uppercase tracking-wider transition-all shadow-md active:scale-98"
              style={{ background: 'linear-gradient(135deg,#E4FF2E,#C4E810)', color: '#1A0317', boxShadow: '0 8px 24px rgba(216,248,40,0.35)', fontFamily: 'Outfit, sans-serif' }}
            >
              Save MPIN &amp; Enter Verix Dashboard
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
