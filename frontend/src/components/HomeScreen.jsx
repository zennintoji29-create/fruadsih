import React, { useState } from 'react';
import { 
  Shield, Search, QrCode, Mic, SlidersHorizontal, 
  ArrowUpRight, PhoneCall, Globe, Sparkles, Zap, ChevronRight,
  Activity, CheckCircle2, AlertTriangle, Radio
} from 'lucide-react';
import { translations } from '../translations';

export default function HomeScreen({ user, onNavigate, currentLang = 'en', onLanguageChange, onTriggerCallSimulation }) {
  const t = translations[currentLang] || translations.en;
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'or', label: 'ଓଡ଼ିଆ' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  const darkBg = {
    background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)'
  };

  const glassDark = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
  };

  return (
    <div 
      className="flex flex-col min-h-full w-full font-sans select-none overflow-y-auto pb-32"
      style={darkBg}
    >
      {/* ── 1. TOP HEADER (SAFE AREA PADDED FOR CAMERA NOTCH & STATUS BAR) ── */}
      <div className="flex items-center justify-between px-5 pt-[max(2.5rem,env(safe-area-inset-top))] pb-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div 
            className="w-9 h-9 rounded-[14px] flex items-center justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #D8F828 0%, #A8CC18 100%)',
              boxShadow: '0 4px 16px rgba(216,248,40,0.35)'
            }}
          >
            <Shield className="w-[18px] h-[18px] text-[#1A0317] stroke-[2.8]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-white text-[17px] tracking-tight leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                verix
              </span>
              <span 
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full font-mono uppercase tracking-wider flex items-center gap-1"
                style={{ background: 'rgba(16,185,129,0.18)', border: '1px solid rgba(16,185,129,0.35)', color: '#34d399' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse block" />
                LIVE
              </span>
            </div>
            <span className="text-[10.5px] text-white/45 font-medium leading-none block mt-0.5">
              Cyber Defense AI
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 h-8 px-2.5 rounded-full border text-[11px] font-bold text-white transition-all active:scale-95"
              style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <Globe className="w-3.5 h-3.5 text-[#D8F828]" />
              <span className="uppercase">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div 
                className="absolute right-0 top-10 w-36 rounded-2xl p-1 shadow-2xl z-50 overflow-hidden animate-slide-down"
                style={{ background: '#25082E', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)' }}
              >
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onLanguageChange && onLanguageChange(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 text-xs font-semibold rounded-xl flex items-center justify-between text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span>{l.label}</span>
                    {currentLang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-[#D8F828]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Settings button */}
          <button 
            onClick={() => onNavigate('settings')}
            className="w-8 h-8 rounded-full border flex items-center justify-center text-white/70 hover:text-white transition-all active:scale-95"
            style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="px-4 space-y-3.5 mt-1">

        {/* ── 2. HERO CARD WITH GUARANTEED VISIBLE LIME CTA BUTTON ── */}
        <div 
          className="rounded-[26px] p-5 relative overflow-hidden flex flex-col justify-between"
          style={{
            background: 'linear-gradient(135deg, #2E0738 0%, #1A0322 100%)',
            border: '1px solid rgba(216,248,40,0.22)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
          }}
        >
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          {/* Top Pill & Status Radar */}
          <div className="flex items-center justify-between mb-3 relative z-10">
            <span 
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1"
              style={{ background: 'rgba(216,248,40,0.12)', border: '1px solid rgba(216,248,40,0.3)', color: '#D8F828' }}
            >
              <Zap className="w-3 h-3 text-[#D8F828]" />
              INSTANT THREAT INTERCEPTOR
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D8F828] shadow-[0_0_10px_#D8F828] animate-pulse block" />
          </div>

          {/* Main Title & Subtitle */}
          <div className="mb-4 relative z-10">
            <h2 
              className="text-[20px] font-black text-white leading-snug tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {t.runPreCheck || 'Run Pre-Payment Threat Check'}
            </h2>
            <p className="text-[11.5px] text-white/55 mt-1 leading-normal">
              Active defense against QR tampering, digital arrest coercion, and NPCI scam blacklists.
            </p>
          </div>



          {/* PROMINENT LIME CTA BUTTON (FIXED HEIGHT & SOLID CLICK TARGET) */}
          <button
            onClick={() => onNavigate('upi-check')}
            className="w-full flex items-center justify-center gap-2.5 font-black text-[13px] uppercase tracking-wider rounded-[18px] transition-all active:scale-[0.97] shadow-lg relative z-10 cursor-pointer"
            style={{
              height: '52px',
              background: 'linear-gradient(135deg, #E4FF2E 0%, #C4E810 60%, #A8CC18 100%)',
              boxShadow: '0 6px 20px rgba(216, 248, 40, 0.4)',
              color: '#1A0317',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            <Search className="w-4.5 h-4.5 text-[#1A0317] stroke-[3]" />
            <span>RUN PRE-PAYMENT THREAT CHECK</span>
          </button>
        </div>

        {/* ── 3. TWO CAPABILITY CARDS (QR SCAN & AUDIO SCAN) ── */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* Card A: UPI QR Scan */}
          <button
            onClick={() => onNavigate('home', { openQr: true })}
            className="rounded-[24px] p-4 text-left flex flex-col justify-between active:scale-[0.96] transition-all space-y-3"
            style={{
              background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.06) 100%)',
              border: '1px solid rgba(16,185,129,0.25)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            <div className="flex items-start justify-between w-full">
              <div 
                className="w-10 h-10 rounded-[14px] flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <QrCode className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
              </div>
              <span 
                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-mono"
                style={{ background: 'rgba(16,185,129,0.2)', color: '#34d399' }}
              >
                Instant Scan
              </span>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {t.scanQr || 'Scan UPI QR'}
              </h4>
              <p className="text-[10px] text-white/50 mt-1 leading-snug">
                Verify merchant QR payload against national fraud registries.
              </p>
            </div>

            <div className="flex justify-end pt-1">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              </div>
            </div>
          </button>

          {/* Card B: AI Audio Scan */}
          <button
            onClick={() => onNavigate('audio-analyzer')}
            className="rounded-[24px] p-4 text-left flex flex-col justify-between active:scale-[0.96] transition-all space-y-3"
            style={{
              background: 'linear-gradient(135deg, rgba(232,84,107,0.12) 0%, rgba(201,32,64,0.06) 100%)',
              border: '1px solid rgba(232,84,107,0.25)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            }}
          >
            <div className="flex items-start justify-between w-full">
              <div 
                className="w-10 h-10 rounded-[14px] flex items-center justify-center"
                style={{ background: 'rgba(232,84,107,0.2)', border: '1px solid rgba(232,84,107,0.3)' }}
              >
                <Mic className="w-5 h-5 text-rose-400 stroke-[2.2]" />
              </div>
              <span 
                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-mono"
                style={{ background: 'rgba(232,84,107,0.2)', color: '#F87396' }}
              >
                Coercion AI
              </span>
            </div>

            <div>
              <h4 className="text-[13px] font-bold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {t.audioScan || 'AI Audio Scan'}
              </h4>
              <p className="text-[10px] text-white/50 mt-1 leading-snug">
                Real-time speech analyzer for fake police &amp; digital arrest calls.
              </p>
            </div>

            <div className="flex justify-end pt-1">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              </div>
            </div>
          </button>
        </div>

        {/* ── 4. SCAM CALL & SIM SWAP SIMULATION CONTROLS ── */}
        <div className="grid grid-cols-2 gap-2.5">
          {/* Scam Call Simulator */}
          <div 
            className="rounded-[22px] p-3.5 flex flex-col justify-between"
            style={glassDark}
          >
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-8 h-8 rounded-[12px] flex items-center justify-center shrink-0"
                style={{ background: 'rgba(232,84,107,0.18)', border: '1px solid rgba(232,84,107,0.3)' }}
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
              </div>
              <h4 className="text-[11.5px] font-bold text-white leading-tight">
                Call HUD
              </h4>
            </div>
            <p className="text-[9.5px] text-white/45 mb-2 leading-snug">
              Simulate Digital Arrest scam call
            </p>
            <button
              onClick={() => onTriggerCallSimulation && onTriggerCallSimulation('+919477530475')}
              className="w-full py-2 rounded-[12px] text-[10.5px] font-bold text-white active:scale-95 transition-all shadow-md"
              style={{
                background: 'linear-gradient(135deg, #E8546B 0%, #C92040 100%)',
                boxShadow: '0 4px 12px rgba(232,84,107,0.35)',
              }}
            >
              Test Call Alert
            </button>
          </div>

          {/* SIM Swap Anomaly Simulator (Req 7) */}
          <div 
            className="rounded-[22px] p-3.5 flex flex-col justify-between"
            style={glassDark}
          >
            <div className="flex items-center gap-2 mb-2">
              <div 
                className="w-8 h-8 rounded-[12px] flex items-center justify-center shrink-0"
                style={{ background: 'rgba(245,158,11,0.18)', border: '1px solid rgba(245,158,11,0.3)' }}
              >
                <Radio className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="text-[11.5px] font-bold text-white leading-tight">
                SIM Swap
              </h4>
            </div>
            <p className="text-[9.5px] text-white/45 mb-2 leading-snug">
              Simulate IMSI carrier change
            </p>
            <button
              onClick={() => {
                alert('🚨 SIM SWAP DETECTED: Physical SIM change detected on your phone number (+91 94775 30475). A 24-hour security cooling hold is recommended to protect your bank accounts from OTP hijacking.');
              }}
              className="w-full py-2 rounded-[12px] text-[10.5px] font-bold text-black active:scale-95 transition-all shadow-md bg-amber-400 hover:bg-amber-300"
            >
              Test SIM Swap
            </button>
          </div>
        </div>


        {/* ── 5. SYSTEM STATUS CARD ── */}
        <div 
          className="rounded-[22px] p-3.5 flex items-center justify-between"
          style={glassDark}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-bold font-mono uppercase tracking-wider text-emerald-400">
                  SYSTEM STATUS
                </span>
              </div>
              <h5 className="text-[12px] font-bold text-white mt-0.5">
                All Systems Operational
              </h5>
              <p className="text-[9.5px] text-white/40 font-mono mt-0.5">
                AI Models • UPI Registry • Audio Engine
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-2xl font-black text-[#D8F828] font-mono leading-none block">
              0
            </span>
            <span className="text-[9px] uppercase tracking-wider text-white/40 font-mono block mt-0.5">
              Active Threats
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
