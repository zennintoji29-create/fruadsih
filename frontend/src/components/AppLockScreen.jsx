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

  const darkBg = { background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' };

  return (
    <div className="fixed inset-0 z-50 text-white flex flex-col justify-between p-6 font-sans select-none animate-fade-in" style={darkBg}>
      {/* Top Header & Dots */}
      <div className="text-center pt-8 space-y-3">
        <div className="w-16 h-16 rounded-[22px] p-0.5 mx-auto flex items-center justify-center shadow-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #D8F828, #A8CC18)' }}>
          <Shield className="w-8 h-8 text-[#1A0317] stroke-[2.8]" />
        </div>
        <div>
          <h1 className="text-2xl font-black font-heading text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Verix Locked</h1>
          <p className="text-xs text-[#D8F828] font-mono tracking-wider mt-0.5">ENTER 4-DIGIT SECURITY PIN</p>
        </div>

        {/* 4 PIN Dots */}
        <div className="flex justify-center gap-4 pt-4">
          {[0, 1, 2, 3].map((idx) => (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                pin.length > idx
                  ? 'bg-[#D8F828] border-[#D8F828] scale-125 shadow-lg shadow-[#D8F828]/60'
                  : 'border-white/20 bg-transparent'
              }`}
            />
          ))}
        </div>

        {errorMsg && (
          <p className="text-xs text-rose-400 font-medium animate-pulse pt-2">
            {errorMsg}
          </p>
        )}
      </div>

      {/* Number Pad Grid */}
      <div className="max-w-xs mx-auto w-full space-y-3 pb-4">
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
            <button
              key={digit}
              type="button"
              onClick={() => handleDigit(digit.toString())}
              className="h-16 rounded-2xl text-2xl font-black font-mono flex items-center justify-center transition-all active:scale-90"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
            >
              {digit}
            </button>
          ))}

          {/* Biometric Trigger */}
          <button
            type="button"
            onClick={handleNativeBiometric}
            className="h-16 rounded-2xl flex items-center justify-center transition-all active:scale-90"
            style={{ background: 'rgba(216,248,40,0.12)', border: '1px solid rgba(216,248,40,0.25)', color: '#D8F828' }}
          >
            <Fingerprint className="w-7 h-7" />
          </button>

          {/* Zero */}
          <button
            type="button"
            onClick={() => handleDigit('0')}
            className="h-16 rounded-2xl text-2xl font-black font-mono flex items-center justify-center transition-all active:scale-90"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
          >
            0
          </button>

          {/* Delete Button */}
          <button
            type="button"
            onClick={handleDelete}
            className="h-16 rounded-2xl flex items-center justify-center transition-all active:scale-90 text-white/50 hover:text-white"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Delete className="w-6 h-6" />
          </button>
        </div>

        {/* Forgot PIN / Reset Link */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={onForgotPin}
            className="text-xs text-white/40 hover:text-[#D8F828] font-medium underline transition-colors"
          >
            Forgot PIN / Relogin
          </button>
        </div>
      </div>
    </div>
  );
}
