import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { 
  Smartphone, Building2, Shield, Bell, Sparkles, 
  PhoneCall, QrCode, SlidersHorizontal, History, Home as HomeIcon, CheckCircle2, CreditCard 
} from 'lucide-react';

import SplashScreen from './components/SplashScreen.jsx';
import AppLockScreen from './components/AppLockScreen.jsx';
import PermissionsOnboarding from './components/PermissionsOnboarding.jsx';
import LoginScreen from './components/LoginScreen.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import UpiCheckScreen from './components/UpiCheckScreen.jsx';
import FraudScoreAnalysis from './components/FraudScoreAnalysis.jsx';
import PaymentProtectionScreen from './components/PaymentProtectionScreen.jsx';
import CallScreeningOverlay from './components/CallScreeningOverlay.jsx';
import AudioAnalyzerScreen from './components/AudioAnalyzerScreen.jsx';
import HistoryScreen from './components/HistoryScreen.jsx';
import SettingsScreen from './components/SettingsScreen.jsx';
import BankPortal from './components/BankPortal.jsx';
import QrScannerModal from './components/QrScannerModal.jsx';
import { translations } from './translations';

export default function App() {
  const [activePortal, setActivePortal] = useState('mobile'); // 'mobile' | 'bank'
  const [showSplash, setShowSplash] = useState(true);
  
  // Multi-Language State (Default English)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('shieldx_lang') || 'en';
  });

  // Persistent Auth State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('shieldx_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [needsPermissionsOnboarding, setNeedsPermissionsOnboarding] = useState(() => {
    const savedUser = localStorage.getItem('shieldx_user');
    const onboarded = localStorage.getItem('shieldx_permissions_onboarded') === 'true';
    const hasPin = Boolean(localStorage.getItem('shieldx_app_pin'));
    return Boolean(savedUser) && (!onboarded || !hasPin);
  });
  
  // App PIN Lock State: only lock if authenticated AND already onboarded with a configured PIN
  const [isAppLocked, setIsAppLocked] = useState(() => {
    const savedUser = localStorage.getItem('shieldx_user');
    const onboarded = localStorage.getItem('shieldx_permissions_onboarded') === 'true';
    const isLockEnabled = localStorage.getItem('shieldx_app_lock_enabled') === 'true';
    const hasPin = Boolean(localStorage.getItem('shieldx_app_pin'));
    return Boolean(savedUser) && onboarded && hasPin && isLockEnabled;
  });

  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'payments' | 'alerts' | 'settings' | 'upi-check' | 'analysis' | 'audio-analyzer'
  const [presetData, setPresetData] = useState(null);
  const [latestAssessment, setLatestAssessment] = useState(null);
  const [showCallSimulation, setShowCallSimulation] = useState(false);
  const [showQrScanner, setShowQrScanner] = useState(false);
  const [activeCallerNumber, setActiveCallerNumber] = useState('+919876543210');
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'https://fruadsih.onrender.com';
  const t = translations[currentLang] || translations.en;

  useEffect(() => {
    const isNative = Capacitor.isNativePlatform();
    const isSmall = window.innerWidth <= 768;
    setIsMobileDevice(isNative || isSmall);

    const handleResize = () => {
      setIsMobileDevice(Capacitor.isNativePlatform() || window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLanguageChange = (lang) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('shieldx_lang', lang);
    } catch (e) {}
  };

  const handleLoginSuccess = (usr) => {
    setCurrentUser(usr);
    try {
      localStorage.setItem('shieldx_user', JSON.stringify(usr));
    } catch (e) {}
    
    // Check if user has completed permissions & MPIN onboarding
    const onboarded = localStorage.getItem('shieldx_permissions_onboarded') === 'true';
    const hasPin = Boolean(localStorage.getItem('shieldx_app_pin'));
    if (!onboarded || !hasPin) {
      setNeedsPermissionsOnboarding(true);
      setIsAppLocked(false);
    } else {
      setNeedsPermissionsOnboarding(false);
      setIsAppLocked(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setNeedsPermissionsOnboarding(false);
    setIsAppLocked(false);
    try {
      localStorage.removeItem('shieldx_user');
      localStorage.removeItem('shieldx_app_lock_enabled');
      localStorage.removeItem('shieldx_app_pin');
      localStorage.removeItem('shieldx_permissions_onboarded');
    } catch (e) {}
  };

  // Register In-Call Notification Bar Actions & Request Notification Permission on Startup
  useEffect(() => {
    if (Capacitor.isPluginAvailable('LocalNotifications')) {
      try {
        LocalNotifications.requestPermissions().catch(() => {});
        LocalNotifications.registerActionTypes({
          types: [
            {
              id: 'IN_CALL_DEFENSE',
              actions: [
                {
                  id: 'RECORD_CALL_30S',
                  title: '🔴 Scan Call (30s - 1m)',
                  foreground: true
                },
                {
                  id: 'DISMISS_CALL',
                  title: 'Dismiss'
                }
              ]
            }
          ]
        }).catch(() => {});

        LocalNotifications.addListener('localNotificationActionPerformed', (action) => {
          if (action.actionId === 'RECORD_CALL_30S') {
            setShowCallSimulation(false);
            setCurrentScreen('audio-analyzer');
          }
        });
      } catch (e) {}
    }
  }, []);

  const handleTriggerCall = async (number = '+919876543210') => {
    setActiveCallerNumber(number);
    setShowCallSimulation(true);

    try {
      if (Capacitor.isPluginAvailable('LocalNotifications')) {
        await LocalNotifications.requestPermissions();
        await LocalNotifications.schedule({
          notifications: [
            {
              id: 9901,
              title: '🎙️ Verix In-Call Defense: ' + number,
              body: 'Active Call. Tap "🔴 Scan Call (30s - 1m)" below to detect Digital Arrest coercion in memory.',
              actionTypeId: 'IN_CALL_DEFENSE',
              schedule: { at: new Date(Date.now() + 200) }
            }
          ]
        });
      }
    } catch (e) {
      console.log('[Local Notification Alert]:', e);
    }
  };

  const handleScanSuccess = (extractedPayload) => {
    setPresetData(extractedPayload);
    setCurrentScreen('upi-check');
  };

  // Render Screen Content
  const renderScreenContent = () => {
    if (!currentUser) {
      return (
        <LoginScreen 
          backendUrl={BACKEND_URL} 
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          onLoginSuccess={handleLoginSuccess} 
        />
      );
    }

    if (needsPermissionsOnboarding) {
      return (
        <PermissionsOnboarding 
          lang={currentLang}
          onComplete={() => setNeedsPermissionsOnboarding(false)} 
        />
      );
    }

    switch (currentScreen) {
      case 'home':
        return (
          <HomeScreen 
            user={currentUser} 
            currentLang={currentLang}
            onLanguageChange={handleLanguageChange}
            onNavigate={(screen, extra) => {
              if (extra?.openQr) {
                setShowQrScanner(true);
                return;
              }
              setCurrentScreen(screen);
            }}
            onTriggerCallSimulation={() => handleTriggerCall('+919876543210')}
          />
        );
      case 'payments':
        return (
          <PaymentProtectionScreen
            user={currentUser}
            currentLang={currentLang}
            onNavigate={(screen, extra) => {
              if (extra?.openQr) {
                setShowQrScanner(true);
                return;
              }
              setCurrentScreen(screen);
            }}
            backendUrl={BACKEND_URL}
          />
        );
      case 'upi-check':
        return (
          <UpiCheckScreen 
            onBack={() => { setCurrentScreen('home'); setPresetData(null); }}
            backendUrl={BACKEND_URL}
            user={currentUser}
            initialPreset={presetData}
            currentLang={currentLang}
            onAssessmentComplete={(res) => {
              setLatestAssessment(res);
              setCurrentScreen('analysis');
            }}
          />
        );
      case 'analysis':
        return (
          <FraudScoreAnalysis
            assessment={latestAssessment}
            currentLang={currentLang}
            onBack={() => setCurrentScreen('home')}
          />
        );
      case 'audio-analyzer':
        return (
          <AudioAnalyzerScreen 
            onBack={() => setCurrentScreen('home')}
            currentLang={currentLang}
            backendUrl={BACKEND_URL}
          />
        );
      case 'alerts':
      case 'history':
        return (
          <HistoryScreen 
            onBack={() => setCurrentScreen('home')}
            backendUrl={BACKEND_URL}
            user={currentUser}
            currentLang={currentLang}
          />
        );
      case 'settings':
        return (
          <SettingsScreen 
            onBack={() => setCurrentScreen('home')}
            user={currentUser}
            currentLang={currentLang}
            onLanguageChange={handleLanguageChange}
            onUpdateUser={(updated) => {
              setCurrentUser(updated);
              try { localStorage.setItem('shieldx_user', JSON.stringify(updated)); } catch (e) {}
            }}
            onLogout={handleLogout}
            backendUrl={BACKEND_URL}
          />
        );
      default:
        return null;
    }
  };

  // Bottom Navigation Bar with Safe-Area clearance for Android Gesture Bar
  const renderBottomNav = () => {
    if (!currentUser || needsPermissionsOnboarding) return null;
    return (
      <div className="h-20 pb-4 bg-white/95 backdrop-blur-md border-t border-[#e5ebc5] flex items-center justify-around px-2 z-30 shadow-lg shrink-0">
        <button
          onClick={() => setCurrentScreen('home')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-all ${
            currentScreen === 'home' ? 'text-[#450c3f] font-bold scale-105' : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <HomeIcon className="w-4 h-4" /> {t.navHome}
        </button>

        <button
          onClick={() => setCurrentScreen('payments')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-all ${
            currentScreen === 'payments' || currentScreen === 'upi-check' || currentScreen === 'analysis' ? 'text-[#450c3f] font-bold scale-105' : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <CreditCard className="w-4 h-4" /> {t.navPayments}
        </button>

        <button
          onClick={() => setCurrentScreen('alerts')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-all ${
            currentScreen === 'alerts' || currentScreen === 'history' ? 'text-[#450c3f] font-bold scale-105' : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <Bell className="w-4 h-4" /> {t.navAlerts}
        </button>

        <button
          onClick={() => setCurrentScreen('settings')}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold transition-all ${
            currentScreen === 'settings' ? 'text-[#450c3f] font-bold scale-105' : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" /> {t.navSettings}
        </button>
      </div>
    );
  };

  // FULL SCREEN SPLASH IF ACTIVE
  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  // 1. FIRST-TIME PERMISSIONS & 4-DIGIT MPIN SETUP (AFTER LOGIN)
  if (currentUser && needsPermissionsOnboarding) {
    return (
      <div className="h-screen w-screen bg-[#f5fbda] flex flex-col overflow-hidden font-sans select-none">
        <PermissionsOnboarding 
          lang={currentLang}
          onComplete={() => {
            setNeedsPermissionsOnboarding(false);
            setIsAppLocked(false);
          }} 
        />
      </div>
    );
  }

  // 2. APP PIN LOCK SCREEN (ONLY AFTER ONBOARDED & MPIN IS CONFIGURED)
  if (currentUser && isAppLocked) {
    return (
      <AppLockScreen 
        currentLang={currentLang}
        onUnlock={() => setIsAppLocked(false)} 
        onForgotPin={handleLogout}
      />
    );
  }

  // NATIVE ANDROID / MOBILE FULL-SCREEN RENDERING
  if (isMobileDevice) {
    return (
      <div className="h-screen w-screen bg-[#f5fbda] flex flex-col overflow-hidden font-sans select-none">
        <div className="flex-1 overflow-y-auto relative flex flex-col">
          {renderScreenContent()}
          {showCallSimulation && (
            <CallScreeningOverlay 
              callerNumber={activeCallerNumber}
              onClose={() => setShowCallSimulation(false)}
            />
          )}
          {showQrScanner && (
            <QrScannerModal 
              lang={currentLang}
              onClose={() => setShowQrScanner(false)}
              onScanSuccess={handleScanSuccess}
            />
          )}
        </div>
        {renderBottomNav()}
      </div>
    );
  }

  // DESKTOP SIMULATOR WRAPPER FOR BROWSER DEMOS
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-between selection:bg-[#450c3f] selection:text-white font-sans">
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-xl bg-[#450c3f] border border-[#b9d175]/40 text-[#b9d175]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold font-heading text-white text-base tracking-tight">ShieldX</span>
                <span className="text-[10px] font-black uppercase font-mono px-2 py-0.5 rounded-full bg-[#b9d175]/20 text-[#b9d175] border border-[#b9d175]/40">
                  SIH S40
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">Real-Time UPI & Voice Phishing Cyber Defense</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActivePortal('mobile')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activePortal === 'mobile' 
                  ? 'bg-[#450c3f] text-[#b9d175] shadow-md border border-[#b9d175]/30' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" /> Mobile App Simulator
            </button>
            <button
              onClick={() => setActivePortal('bank')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activePortal === 'bank' 
                  ? 'bg-[#450c3f] text-[#b9d175] shadow-md border border-[#b9d175]/30' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" /> Bank Review Portal
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        {activePortal === 'bank' ? (
          <BankPortal backendUrl={BACKEND_URL} />
        ) : (
          <div className="smartphone-frame">
            <div className="dynamic-island">
              <span className="text-[9px] font-mono text-slate-400">9:41</span>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-1.5 bg-slate-400 rounded-sm"></span>
                <span className="text-[9px] font-mono text-slate-400">5G</span>
              </div>
            </div>

            <div className="flex-1 pt-8 pb-16 overflow-y-auto relative flex flex-col">
              {renderScreenContent()}
              {showCallSimulation && (
                <CallScreeningOverlay 
                  callerNumber={activeCallerNumber}
                  onClose={() => setShowCallSimulation(false)}
                />
              )}
              {showQrScanner && (
                <QrScannerModal 
                  lang={currentLang}
                  onClose={() => setShowQrScanner(false)}
                  onScanSuccess={handleScanSuccess}
                />
              )}
            </div>

            {renderBottomNav()}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800/80 py-2.5 px-4 text-center text-xs text-slate-400 flex items-center justify-between max-w-7xl mx-auto w-full">
        <span>🛡️ ShieldX Native App • SIH S40</span>
        <span className="flex items-center gap-1 text-[#b9d175] font-mono">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#b9d175]" /> Backend Online (Port 5000)
        </span>
      </footer>
    </div>
  );
}
