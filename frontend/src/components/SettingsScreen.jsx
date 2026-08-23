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
      const data = await res.json();
      if (data.success) {
        onUpdateUser({
          ...user,
          settings: data.settings
        });
      }
    } catch (err) {}
    
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-28 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1">
        <button 
          onClick={onBack}
          className="p-1.5 rounded-xl hover:bg-[#d9efbd] text-[#450c3f] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5">
          <div className="p-1 rounded-lg bg-[#450c3f] text-[#b9d175]">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-bold font-heading text-[#450c3f] text-sm">Verix</span>
        </div>
        <button 
          onClick={onLogout}
          title={t.logOut}
          className="p-1.5 rounded-xl hover:bg-rose-100 text-rose-700 transition-all flex items-center gap-1 text-xs font-bold"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>

      <div>
        <h1 className="text-xl font-bold text-[#450c3f] font-heading">{t.settingsTitle}</h1>
        <p className="text-xs text-[#5e4d6a] font-medium">{t.settingsSubtitle}</p>
      </div>

      {/* Multi-Language Switcher (All 6 Supported Languages) */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-2.5">
        <h4 className="text-xs font-bold text-[#1e112a] flex items-center gap-1.5">
          <Globe className="w-4 h-4 text-[#450c3f]" /> {t.languageTitle}
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
              className={`p-3 rounded-2xl border text-xs font-bold transition-all ${
                currentLang === lang.id 
                  ? 'bg-[#450c3f] text-[#f5fbda] border-[#450c3f] shadow-sm' 
                  : 'bg-[#f5fbda]/40 text-[#5e4d6a] border-[#e5ebc5] hover:bg-[#d9efbd]/40'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Biometric Fingerprint Lock Toggle */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#d9efbd] text-[#450c3f]">
            <Fingerprint className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1e112a]">Biometric Fingerprint Lock</h4>
            <p className="text-[10px] text-[#5e4d6a]">Unlock Verix with Fingerprint / Face ID</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleBiometric}
          className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
            biometricEnabled ? 'bg-[#450c3f]' : 'bg-slate-300'
          }`}
        >
          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
            biometricEnabled ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </button>
      </div>

      {/* App 4-Digit MPIN Management Button */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#d9efbd] text-[#450c3f]">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1e112a]">Set / Change 4-Digit PIN</h4>
            <p className="text-[10px] text-[#5e4d6a]">App Lock Security MPIN</p>
          </div>
        </div>

        <button
          onClick={() => setShowPasswordModal(true)}
          className="px-3.5 py-1.5 rounded-xl bg-[#450c3f] text-[#f5fbda] text-xs font-bold shadow-xs hover:bg-[#33082e] transition-all"
        >
          Change PIN
        </button>
      </div>

      {/* Collapsible Android System Permissions Tab */}
      <div className="bg-white rounded-3xl border border-[#e5ebc5] shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setShowPermissionsTab(!showPermissionsTab)}
          className="w-full p-4 flex items-center justify-between text-left hover:bg-[#f5fbda]/30 transition-colors"
        >
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#d9efbd] text-[#450c3f]">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1e112a]">{t.systemPermissions}</h4>
              <p className="text-[10px] text-[#5e4d6a]">{t.clickToManage}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#450c3f] bg-[#d9efbd] px-2 py-0.5 rounded-full border border-[#b9d175]">
              {permissions.filter(p => p.granted).length} Active
            </span>
            {showPermissionsTab ? <ChevronUp className="w-4 h-4 text-[#5e4d6a]" /> : <ChevronDown className="w-4 h-4 text-[#5e4d6a]" />}
          </div>
        </button>

        {showPermissionsTab && (
          <div className="p-4 pt-1 border-t border-[#e5ebc5] space-y-2 animate-slide-down">
            {permissions.map((perm) => (
              <div key={perm.id} className="flex items-center justify-between p-2.5 rounded-2xl bg-[#f5fbda]/40 border border-[#e5ebc5]">
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{perm.icon}</span>
                  <div>
                    <h4 className="text-xs font-bold text-[#1e112a]">{perm.name}</h4>
                    <p className="text-[10px] text-[#5e4d6a] font-mono">{perm.desc}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => togglePermission(perm.id)}
                  className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all ${
                    perm.granted
                      ? 'bg-[#d9efbd] text-[#450c3f] border border-[#b9d175]'
                      : 'bg-slate-200 text-slate-500'
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
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-[#1e112a] flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#450c3f]" /> {t.safeLimit}
          </label>
          <span className="text-xs font-bold font-mono text-[#450c3f] bg-[#d9efbd] px-2.5 py-1 rounded-xl border border-[#b9d175]">
            ₹{Number(maxAmountLimit).toLocaleString('en-IN')}
          </span>
        </div>

        <p className="text-[10px] text-[#5e4d6a] leading-snug">{t.safeLimitSub}</p>

        <input
          type="range"
          min={500}
          max={100000}
          step={500}
          value={maxAmountLimit}
          onChange={(e) => setMaxAmountLimit(e.target.value)}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#450c3f]"
        />

        <div className="flex justify-between text-[9px] font-mono text-[#5e4d6a] font-bold">
          <span>₹500 (Min)</span>
          <span>₹50,000</span>
          <span>₹1,00,000 (Max)</span>
        </div>
      </div>

      {/* Save Settings Button */}
      <button
        onClick={handleSaveSettings}
        className="w-full py-3.5 bg-[#450c3f] hover:bg-[#33082e] text-[#f5fbda] rounded-2xl text-xs font-bold shadow-md shadow-[#450c3f]/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
      >
        {savedSuccess ? <Check className="w-4 h-4 text-[#b9d175]" /> : null}
        {savedSuccess ? t.settingsSaved : t.saveSettings}
      </button>

      {/* Log Out */}
      <button
        onClick={onLogout}
        className="w-full py-3 bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
      >
        <LogOut className="w-4 h-4" /> {t.logOut}
      </button>

      {/* PIN Setup / Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xs rounded-3xl p-5 border border-[#e5ebc5] space-y-3.5 animate-slide-down shadow-2xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#450c3f] flex items-center gap-1.5">
                <KeyRound className="w-4 h-4 text-[#450c3f]" /> Set 4-Digit Security PIN
              </h4>
              <button onClick={() => setShowPasswordModal(false)} className="text-slate-400 hover:text-slate-700 text-sm font-bold">✕</button>
            </div>

            <form onSubmit={handleSavePassword} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#5e4d6a] block mb-1">
                  New 4-Digit PIN:
                </label>
                <input
                  type="password"
                  maxLength={4}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••"
                  className="w-full bg-[#f5fbda]/40 border border-[#b9d175] rounded-xl py-2.5 px-3 text-center text-lg tracking-widest font-mono text-[#1e112a] font-bold focus:outline-none focus:border-[#450c3f]"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#5e4d6a] block mb-1">
                  Confirm 4-Digit PIN:
                </label>
                <input
                  type="password"
                  maxLength={4}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value.replace(/\D/g, ''))}
                  placeholder="••••"
                  className="w-full bg-[#f5fbda]/40 border border-[#b9d175] rounded-xl py-2.5 px-3 text-center text-lg tracking-widest font-mono text-[#1e112a] font-bold focus:outline-none focus:border-[#450c3f]"
                  required
                />
              </div>

              {passwordMsg && (
                <div className={`p-2.5 rounded-xl text-xs text-center font-medium ${
                  passwordMsg.type === 'success' ? 'bg-[#d9efbd] text-[#450c3f]' : 'bg-rose-100 text-rose-800'
                }`}>
                  {passwordMsg.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#450c3f] hover:bg-[#33082e] text-[#f5fbda] rounded-2xl text-xs font-bold transition-all shadow-md active:scale-98"
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
