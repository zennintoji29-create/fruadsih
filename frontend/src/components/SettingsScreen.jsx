import React, { useState } from 'react';
import { 
  Sliders, Shield, Bell, Globe, ArrowLeft, Check, Lock, Users, Plus, 
  Smartphone, ShieldCheck, LogOut, ChevronDown, ChevronUp, KeyRound, Fingerprint 
} from 'lucide-react';
import { translations } from '../translations';
import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';

export default function SettingsScreen({ onBack, user, onUpdateUser, onLogout, currentLang = 'en', onLanguageChange, backendUrl }) {
  const t = translations[currentLang] || translations.en;

  const [maxAmountLimit, setMaxAmountLimit] = useState(user?.settings?.maxAmountLimit || 10000);
  const [voicePhishingMode, setVoicePhishingMode] = useState(user?.settings?.voicePhishingMode !== false);
  const [callScreeningEnabled, setCallScreeningEnabled] = useState(user?.settings?.callScreeningEnabled !== false);
  const [biometricEnabled, setBiometricEnabled] = useState(() => {
    return localStorage.getItem('shieldx_biometric_enabled') === 'true';
  });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showPermissionsTab, setShowPermissionsTab] = useState(false);

  // Password Setup / Change Modal State
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMsg, setPasswordMsg] = useState(null);

  // Native Android System Permissions Status
  const [permissions, setPermissions] = useState([
    { id: 'notif', name: 'Push Notifications (Critical)', desc: 'Real-time high-risk transaction & scam alerts', granted: true, icon: '🔔' },
    { id: 'call_screening', name: 'Call Screening & Phone State', desc: 'READ_PHONE_STATE / CallScreeningService', granted: true, icon: '📞' },
    { id: 'microphone', name: 'Microphone & Voice Phishing AI', desc: 'RECORD_AUDIO (In-memory zero audio storage)', granted: true, icon: '🎙️' },
    { id: 'overlay', name: 'Floating Scammer Call Overlay', desc: 'SYSTEM_ALERT_WINDOW (Truecaller-style HUD)', granted: true, icon: '🪟' },
    { id: 'camera', name: 'NPCI UPI QR Code Scanner', desc: 'CAMERA (Merchant QR pre-check)', granted: true, icon: '📷' },
    { id: 'sms', name: 'SMS Scam & Phishing Filter', desc: 'RECEIVE_SMS / READ_SMS', granted: true, icon: '💬' },
    { id: 'biometric', name: 'Biometric Transaction Override', desc: 'USE_BIOMETRIC / USE_FINGERPRINT', granted: true, icon: '🔐' }
  ]);

  const togglePermission = (id) => {
    setPermissions(permissions.map(p => p.id === id ? { ...p, granted: !p.granted } : p));
  };

  const handleToggleBiometric = async () => {
    const nextState = !biometricEnabled;
    if (nextState) {
      try {
        const bioInfo = await BiometricAuth.checkBiometry();
        if (bioInfo && bioInfo.isAvailable) {
          await BiometricAuth.authenticate({
            reason: 'Verify Fingerprint to Enable Biometric Lock',
            cancelTitle: 'Cancel',
            allowDeviceCredential: true
          });
        }
      } catch (e) {
        console.log('[Biometric Setup]:', e);
      }
    }
    setBiometricEnabled(nextState);
    try {
      localStorage.setItem('shieldx_biometric_enabled', nextState ? 'true' : 'false');
    } catch (e) {}
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length !== 4) {
      setPasswordMsg({ type: 'error', text: 'PIN must be exactly 4 digits.' });
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordMsg({ type: 'error', text: 'PINs do not match.' });
      return;
    }
    try {
      localStorage.setItem('shieldx_app_pin', newPassword.trim());
      localStorage.setItem('shieldx_app_lock_enabled', 'true');
    } catch (e) {}
    setPasswordMsg({ type: 'success', text: '4-Digit PIN saved successfully!' });
    setTimeout(() => {
      setShowPasswordModal(false);
      setPasswordMsg(null);
      setNewPassword('');
      setConfirmPassword('');
    }, 1500);
  };

  const handleSaveSettings = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/auth/settings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id || 'user_demo_001',
          maxAmountLimit: Number(maxAmountLimit),
          voicePhishingMode,
          callScreeningEnabled,
          language: currentLang
        })
      });
      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 2500);
      }
    } catch (err) {
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    }
  };

  const darkBg = { background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' };
  const glassCard = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)'
  };

  return (
    <div className="flex flex-col min-h-full w-full overflow-y-auto px-4 pt-4 pb-28 space-y-4 font-sans select-none" style={darkBg}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60 active:scale-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[10px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)' }}>
            <Shield className="w-[14px] h-[14px] text-[#1A0317] stroke-[2.8]" />
          </div>
          <span className="font-extrabold text-white text-[15px]" style={{ fontFamily: 'Outfit, sans-serif' }}>Verix</span>
        </div>
        <button 
          onClick={onLogout}
          title={t.logOut}
          className="p-2 rounded-full hover:bg-rose-500/20 text-rose-400 transition-all flex items-center gap-1 text-xs font-bold active:scale-90"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      <div>
        <h1 className="text-[20px] font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{t.settingsTitle}</h1>
        <p className="text-[11.5px] text-white/45 font-medium">{t.settingsSubtitle}</p>
      </div>

      {/* Multi-Language Switcher (All 6 Supported Languages) */}
      <div className="rounded-[24px] p-4 space-y-2.5" style={glassCard}>
        <h4 className="text-[12px] font-bold text-white/70 flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-[#D8F828]" /> {t.languageTitle}
        </h4>
        <div className="grid grid-cols-2 gap-2 pt-1">
          {[
            { id: 'en', label: 'English' },
            { id: 'hi', label: 'हिंदी (Hindi)' },
            { id: 'or', label: 'ଓଡ଼ିଆ (Odia)' },
            { id: 'bn', label: 'বাংলা (Bengali)' },
            { id: 'te', label: 'తెలుగు (Telugu)' },
            { id: 'ta', label: 'தமிழ் (Tamil)' }
          ].map((lang) => (
            <button
              key={lang.id}
              onClick={() => onLanguageChange(lang.id)}
              className={`p-3 rounded-2xl text-xs font-bold transition-all ${
                currentLang === lang.id 
                  ? 'bg-[#D8F828] text-[#1A0317] shadow-sm' 
                  : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Biometric Fingerprint Lock Toggle */}
      <div className="rounded-[24px] p-4 flex items-center justify-between" style={glassCard}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[14px] flex items-center justify-center" style={{ background: 'rgba(216,248,40,0.15)', color: '#D8F828' }}>
            <Fingerprint className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-[12.5px] font-bold text-white">Biometric Fingerprint Lock</h4>
            <p className="text-[10.5px] text-white/40">Unlock Verix with Fingerprint / Face ID</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleBiometric}
          className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
            biometricEnabled ? 'bg-[#D8F828]' : 'bg-white/15'
          }`}
        >
          <div className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
            biometricEnabled ? 'translate-x-6 bg-[#1A0317]' : 'translate-x-0 bg-white'
          }`} />
        </button>
      </div>

      {/* App 4-Digit MPIN Management Button */}
      <div className="rounded-[24px] p-4 flex items-center justify-between" style={glassCard}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[14px] flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}>
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-[12.5px] font-bold text-white">Set / Change 4-Digit PIN</h4>
            <p className="text-[10.5px] text-white/40">App Lock Security MPIN</p>
          </div>
        </div>

        <button
          onClick={() => setShowPasswordModal(true)}
          className="px-3.5 py-1.5 rounded-xl text-xs font-black active:scale-95 transition-all"
          style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)', color: '#1A0317' }}
        >
          Change PIN
        </button>
      </div>

      {/* Collapsible Android System Permissions Tab */}
      <div className="rounded-[24px] overflow-hidden" style={glassCard}>
        <button
          type="button"
          onClick={() => setShowPermissionsTab(!showPermissionsTab)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[12px] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <Smartphone className="w-4.5 h-4.5 text-white/80" />
            </div>
            <div>
              <h4 className="text-[12.5px] font-bold text-white">{t.systemPermissions}</h4>
              <p className="text-[10px] text-white/40">{t.clickToManage}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9.5px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30 font-mono">
              {permissions.filter(p => p.granted).length} Active
            </span>
            {showPermissionsTab ? <ChevronUp className="w-4 h-4 text-white/40" /> : <ChevronDown className="w-4 h-4 text-white/40" />}
          </div>
        </button>

        {showPermissionsTab && (
          <div className="p-4 pt-1 space-y-2 animate-slide-down" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {permissions.map((perm) => (
              <div key={perm.id} className="flex items-center justify-between p-2.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{perm.icon}</span>
                  <div>
                    <h4 className="text-[11.5px] font-bold text-white">{perm.name}</h4>
                    <p className="text-[9.5px] text-white/40 font-mono">{perm.desc}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => togglePermission(perm.id)}
                  className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all ${
                    perm.granted
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'bg-white/10 text-white/40'
                  }`}
                >
                  {perm.granted ? `✓ ${t.grantAccess}` : t.deniedAccess}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Threshold Amount Limit Slider */}
      <div className="rounded-[24px] p-4 space-y-3" style={glassCard}>
        <div className="flex items-center justify-between">
          <label className="text-[12px] font-bold text-white/80 flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#D8F828]" /> {t.safeLimit}
          </label>
          <span className="text-xs font-black font-mono text-[#D8F828] px-2.5 py-1 rounded-xl" style={{ background: 'rgba(216,248,40,0.15)', border: '1px solid rgba(216,248,40,0.25)' }}>
            ₹{Number(maxAmountLimit).toLocaleString('en-IN')}
          </span>
        </div>

        <p className="text-[10px] text-white/45 leading-snug">{t.safeLimitSub}</p>

        <input
          type="range"
          min={500}
          max={100000}
          step={500}
          value={maxAmountLimit}
          onChange={(e) => setMaxAmountLimit(e.target.value)}
          className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#D8F828]"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        />

        <div className="flex justify-between text-[9px] font-mono text-white/40 font-bold">
          <span>₹500 (Min)</span>
          <span>₹50,000</span>
          <span>₹1,00,000 (Max)</span>
        </div>
      </div>

      {/* Save Settings Button */}
      <button
        onClick={handleSaveSettings}
        className="w-full py-3.5 rounded-[18px] text-[13px] font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        style={{ background: 'linear-gradient(135deg,#E4FF2E,#C4E810)', color: '#1A0317', boxShadow: '0 8px 24px rgba(216,248,40,0.35)', fontFamily: 'Outfit, sans-serif' }}
      >
        {savedSuccess ? <Check className="w-4 h-4 stroke-[3]" /> : null}
        {savedSuccess ? t.settingsSaved : t.saveSettings}
      </button>

      {/* Log Out */}
      <button
        onClick={onLogout}
        className="w-full py-3 rounded-[18px] text-xs font-bold flex items-center justify-center gap-2 transition-all text-rose-400 active:scale-95"
        style={{ background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.2)' }}
      >
        <LogOut className="w-4 h-4" /> {t.logOut}
      </button>

      {/* PIN Setup / Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xs rounded-3xl p-5 space-y-3.5 animate-slide-down shadow-2xl" style={{ background: '#1F0626', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-[#D8F828]" /> Set 4-Digit Security PIN
              </h4>
              <button onClick={() => setShowPasswordModal(false)} className="text-white/40 hover:text-white text-sm font-bold">✕</button>
            </div>

            <form onSubmit={handleSavePassword} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 font-mono block mb-1">
                  New 4-Digit PIN:
                </label>
                <input
                  type="password"
                  maxLength={4}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••"
                  className="w-full rounded-xl py-2.5 px-3 text-center text-lg tracking-widest font-mono text-white font-bold focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(216,248,40,0.3)' }}
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 font-mono block mb-1">
                  Confirm 4-Digit PIN:
                </label>
                <input
                  type="password"
                  maxLength={4}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••"
                  className="w-full rounded-xl py-2.5 px-3 text-center text-lg tracking-widest font-mono text-white font-bold focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(216,248,40,0.3)' }}
                  required
                />
              </div>

              {passwordMsg && (
                <div className={`p-2.5 rounded-xl text-xs text-center font-medium ${
                  passwordMsg.type === 'success' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                }`}>
                  {passwordMsg.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-2xl text-xs font-black transition-all shadow-md active:scale-98"
                style={{ background: 'linear-gradient(135deg,#E4FF2E,#C4E810)', color: '#1A0317', fontFamily: 'Outfit, sans-serif' }}
              >
                Save Security PIN
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
