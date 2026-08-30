import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
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
  const [activePortal, setActivePortal] = useState(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('portal') === 'mobile') return 'mobile';
      if (urlParams.get('portal') === 'bank') return 'bank';
      return window.innerWidth > 900 ? 'bank' : 'mobile';
    } catch (e) {
      return 'mobile';
    }
  });
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

  // ── Hardware Android Back Button Handler ──
  useEffect(() => {
    let handler;
    if (Capacitor.isPluginAvailable('App')) {
      handler = CapacitorApp.addListener('backButton', () => {
        if (showQrScanner) {
          setShowQrScanner(false);
        } else if (showCallSimulation) {
          setShowCallSimulation(false);
        } else if (currentScreen !== 'home') {
          setCurrentScreen('home');
        } else {
          CapacitorApp.exitApp();
        }
      });
    }
    return () => {
      if (handler && handler.remove) {
        handler.remove();
      }
    };
  }, [currentScreen, showQrScanner, showCallSimulation]);

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
      <nav
        className="shrink-0 w-full max-w-md mx-auto z-30 flex items-center justify-around bg-[#0B0E14] border-t border-white/[0.08]"
        style={{
          paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        }}
      >
        {[
          { id: 'home', icon: HomeIcon, label: t.navHome || 'Home' },
          { id: 'payments', icon: CreditCard, label: t.navPayments || 'Pay Shield', extraIds: ['upi-check', 'analysis'] },
          { id: 'history', icon: History, label: t.navHistory || 'Logs', extraIds: ['alerts'] },
          { id: 'settings', icon: SlidersHorizontal, label: t.navSettings || 'Config' },
        ].map(({ id, icon: Icon, label, extraIds = [] }) => {
          const isActive = currentScreen === id || extraIds.includes(currentScreen);
          return (
            <button
              key={id}
              onClick={() => setCurrentScreen(id)}
              className="flex-1 flex flex-col items-center justify-center pt-2.5 pb-1 gap-1 transition-all active:scale-95 group"
            >
              <div className="relative flex items-center justify-center">
                <Icon
                  className={`w-5 h-5 stroke-[2] transition-colors ${
                    isActive ? 'text-[#00F0A0]' : 'text-[#617184] group-hover:text-[#94A3B8]'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#00F0A0]" />
                )}
              </div>
              <span
                className={`text-[9.5px] font-mono tracking-tight transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-[#617184]'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    );
  };

  // ── 1. NATIVE ANDROID MOBILE APP ONLY (CAPACITOR RUNTIME) ──
  if (Capacitor.isNativePlatform()) {
    if (showSplash) {
      return <SplashScreen onComplete={() => setShowSplash(false)} />;
    }

    if (currentUser && needsPermissionsOnboarding) {
      return (
        <div className="h-[100dvh] w-full max-w-md mx-auto bg-[#f5fbda] flex flex-col overflow-hidden font-sans select-none">
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

    if (currentUser && isAppLocked) {
      return (
        <div className="h-[100dvh] w-full max-w-md mx-auto bg-[#f5fbda] flex flex-col overflow-hidden font-sans select-none">
          <AppLockScreen 
            currentLang={currentLang}
            onUnlock={() => setIsAppLocked(false)} 
            onForgotPin={handleLogout}
          />
        </div>
      );
    }

    return (
      <div className="h-[100dvh] w-full max-w-md mx-auto flex flex-col overflow-hidden font-sans select-none bg-[#090C10] shadow-2xl relative">
        <div className="flex-1 overflow-y-auto relative flex flex-col">
          {renderScreenContent()}
          {showCallSimulation && (
            <CallScreeningOverlay 
              callerNumber={activeCallerNumber}
              backendUrl={BACKEND_URL}
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

  // ── 2. DESKTOP BROWSER / SIMULATOR WRAPPER ──
  return (
    <div className="min-h-screen bg-[#07090E] flex flex-col justify-between selection:bg-[#00F0A0] selection:text-[#090C10] font-sans">
      <header className="border-b border-white/[0.08] bg-[#0D1117] sticky top-0 z-50 backdrop-blur-md px-4 sm:px-6 py-3.5 shadow-md">
        <div className={`mx-auto flex items-center justify-between ${activePortal === 'bank' ? 'max-w-[1920px]' : 'max-w-7xl'}`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#171E2B] border border-white/[0.12] flex items-center justify-center text-[#00F0A0] shadow-sm">
              <Shield className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold font-heading text-white text-base tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  VERIX COMMAND CENTER
                </span>
                <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded-full bg-[#00F0A0]/15 text-[#00F0A0] border border-[#00F0A0]/30">
                  SIH S40
                </span>
              </div>
              <p className="text-[11px] text-[#8494A8] hidden sm:block">NPCI • I4C Real-Time Transaction Disputes &amp; Cyber Defense Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-[#090C10] p-1 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setActivePortal('bank')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activePortal === 'bank' 
                  ? 'bg-[#171E2B] text-[#00F0A0] shadow-md border border-[#00F0A0]/30' 
                  : 'text-[#8494A8] hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" /> Bank Review Desk
            </button>
            <button
              onClick={() => setActivePortal('mobile')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activePortal === 'mobile' 
                  ? 'bg-[#171E2B] text-[#00F0A0] shadow-md border border-[#00F0A0]/30' 
                  : 'text-[#8494A8] hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile App View
            </button>
          </div>
        </div>
      </header>

      <main className={`flex-1 w-full ${activePortal === 'bank' ? 'p-3 sm:p-6 max-w-[1920px] mx-auto' : 'flex items-center justify-center p-4 md:p-8'}`}>
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
                  backendUrl={BACKEND_URL}
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

      <footer className="border-t border-slate-800/80 py-2.5 px-4 text-center text-xs text-slate-400 flex items-center justify-between max-w-[1920px] mx-auto w-full">
        <span>🛡️ ShieldX Native App • SIH S40</span>
        <span className="flex items-center gap-1 text-[#b9d175] font-mono">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#b9d175]" /> Backend Online (Port 5000)
        </span>
      </footer>
    </div>
  );
}
