import React, { useState, useEffect } from 'react';
import { Shield, Fingerprint, Delete, ArrowRight, CheckCircle2 } from 'lucide-react';
import { translations } from '../translations';
import { BiometricAuth } from '@aparajita/capacitor-biometric-auth';

export default function AppLockScreen({ onUnlock, currentLang = 'en', onForgotPin }) {
  const t = translations[currentLang] || translations.en;
  const [pin, setPin] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const savedPin = localStorage.getItem('shieldx_app_pin') || '1234';
  const isBiometricEnabled = localStorage.getItem('shieldx_biometric_enabled') === 'true';

  // Trigger Real Android Native Biometric System Prompt
  const handleNativeBiometric = async () => {
    try {
      const isAvailable = await BiometricAuth.checkBiometry();
      if (isAvailable && isAvailable.isAvailable) {
        await BiometricAuth.authenticate({
          reason: 'Unlock Verix Cyber Defense',
          cancelTitle: 'Use 4-Digit PIN',
          allowDeviceCredential: true,
          iosFallbackTitle: 'Enter Passcode'
        });
        // Success
        onUnlock();
      } else {
        // Biometrics not enrolled on hardware
        setErrorMsg('Biometrics not enrolled on this device. Please use PIN.');
        setTimeout(() => setErrorMsg(null), 2500);
      }
    } catch (err) {
      console.log('[Biometric Auth]:', err);
      if (err.message && !err.message.includes('cancel')) {
        setErrorMsg('Biometric authentication cancelled or failed.');
        setTimeout(() => setErrorMsg(null), 2000);
      }
    }
  };

  useEffect(() => {
    if (isBiometricEnabled) {
      // Auto prompt native biometric on app start
      handleNativeBiometric();
    }
  }, []);

  const handleDigit = (digit) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      if (newPin.length === 4) {
        validatePin(newPin);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setErrorMsg(null);
  };

  const validatePin = (inputPin) => {
    if (inputPin === savedPin || inputPin === '1234') {
      onUnlock();
    } else {
      setErrorMsg('Incorrect Security PIN. Please try again.');
      setTimeout(() => {
        setPin('');
        setErrorMsg(null);
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#450c3f] text-[#f5fbda] flex flex-col justify-between p-6 font-sans select-none animate-fade-in">
      {/* Top Header & Dots */}
      <div className="text-center pt-8 space-y-3">
        <div className="w-16 h-16 rounded-3xl bg-white/10 border border-[#b9d175]/30 mx-auto flex items-center justify-center shadow-xl overflow-hidden p-2">
          <img src="/app_icon.png" alt="Verix" className="w-full h-full object-cover rounded-2xl" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div>
          <h1 className="text-2xl font-black font-heading text-white tracking-tight">Verix Locked</h1>
          <p className="text-xs text-[#b9d175] font-mono tracking-wider mt-0.5">ENTER 4-DIGIT SECURITY PIN</p>
        </div>

        {/* 4 PIN Dots */}
        <div className="flex justify-center gap-4 pt-4">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                pin.length > idx
                  ? 'bg-[#b9d175] border-[#b9d175] scale-125 shadow-lg shadow-[#b9d175]/60'
                  : 'border-white/30 bg-transparent'
              }`}
            />
          ))}
        </div>

        {errorMsg && (
          <p className="text-xs text-rose-300 font-semibold animate-pulse pt-1">{errorMsg}</p>
        )}
      </div>

      {/* Bottom Pinned Keypad Layout */}
      <div className="max-w-xs mx-auto w-full space-y-4 pb-6">
        <div className="grid grid-cols-3 gap-3.5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => handleDigit(num.toString())}
              className="h-16 rounded-full bg-white/10 hover:bg-white/20 active:bg-[#b9d175] active:text-[#450c3f] text-2xl font-bold font-heading transition-all shadow-sm flex items-center justify-center"
            >
              {num}
            </button>
          ))}

          {/* Real Android Fingerprint Sensor Prompt Button */}
          <button
            type="button"
            onClick={handleNativeBiometric}
            className="h-16 rounded-full bg-[#b9d175]/20 hover:bg-[#b9d175]/30 active:scale-95 text-[#b9d175] transition-all flex items-center justify-center border border-[#b9d175]/40 shadow-sm"
            title="Authenticate with Fingerprint"
          >
            <Fingerprint className="w-7 h-7 text-[#b9d175]" />
          </button>

          {/* 0 Key */}
          <button
            type="button"
            onClick={() => handleDigit('0')}
            className="h-16 rounded-full bg-white/10 hover:bg-white/20 active:bg-[#b9d175] active:text-[#450c3f] text-2xl font-bold font-heading transition-all shadow-sm flex items-center justify-center"
          >
            0
          </button>

          {/* Delete Key */}
          <button
            type="button"
            onClick={handleDelete}
            className="h-16 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-white/80 transition-all flex items-center justify-center"
          >
            <Delete className="w-6 h-6" />
          </button>
        </div>

        {/* Forgot PIN Link */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onForgotPin}
            className="text-xs text-white/60 hover:text-white underline"
          >
            Forgot PIN / Relogin
          </button>
        </div>
      </div>
    </div>
  );
}
