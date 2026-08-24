import React from 'react';
import { 
  Shield, Search, QrCode, Mic, SlidersHorizontal, 
  ArrowUpRight, PhoneCall, Globe, Sparkles, Zap, ChevronRight 
} from 'lucide-react';
import { translations } from '../translations';

export default function HomeScreen({ user, onNavigate, currentLang = 'en', onLanguageChange, onTriggerCallSimulation }) {
  const t = translations[currentLang] || translations.en;

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'or', label: 'ଓଡ଼ିଆ' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F7F8F2] text-slate-900 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-28 space-y-3.5 font-sans selection:bg-[#D8F828] selection:text-[#1A0317] w-full">
      {/* ── 1. Top Header: Modern Clean Status & Tools ── */}
      <div className="flex items-center justify-between pt-0.5 pb-0.5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#380932] to-[#20031C] text-[#D8F828] shadow-md shadow-[#380932]/20 flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 stroke-[2.4]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold font-heading text-[#260623] text-xl tracking-tight leading-none">Verix</span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 border border-emerald-300/50 text-[9.5px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                {t.activeProtection || 'ACTIVE PROTECTION'}
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium block mt-0.5">Real-Time Cyber Defense</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Language Selector Pill */}
          <div className="relative flex items-center bg-white border border-slate-200/80 rounded-full px-2.5 py-1.5 shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#380932] mr-1" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-700 focus:outline-none cursor-pointer pr-1"
            >
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>

          {/* Settings Button */}
          <button 
            onClick={() => onNavigate('settings')}
            title="Settings & Profile"
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200/80 text-slate-700 flex items-center justify-center font-bold text-xs shadow-2xs active:scale-95 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── 2. Hero Card: Deep Royal Plum with Radiant High-End CTA ── */}
      <div className="bg-gradient-to-br from-[#380932] via-[#2A0525] to-[#180216] rounded-3xl p-5 text-white space-y-3.5 shadow-xl shadow-[#2A0525]/30 border border-white/10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#D8F828]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#D8F828] uppercase px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs inline-flex items-center gap-1.5">
            ⚡ INSTANT THREAT INTERCEPTOR
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8F828] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8F828]"></span>
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold font-heading text-white tracking-tight leading-snug">
            {t.runPreCheck || 'Run Pre-Payment Threat Check'}
          </h2>
          <p className="text-xs text-white/75 mt-1 leading-relaxed font-normal">
            {t.dashboardSubtitle || 'Real-time AI cyber defense against fraudulent VPAs, digital arrest, and extortion.'}
          </p>
        </div>

        {/* ── World-Class Radiant Lime CTA Button ── */}
        <button
          onClick={() => onNavigate('upi-check')}
          className="w-full h-[52px] min-h-[52px] bg-gradient-to-r from-[#D8F828] to-[#C4EB1A] hover:brightness-105 text-[#1A0317] rounded-2xl text-sm font-black flex items-center justify-center gap-2.5 shadow-[0_8px_20px_-4px_rgba(216,248,40,0.45)] active:scale-[0.98] transition-all duration-150 tracking-wide uppercase"
        >
          <Search className="w-4.5 h-4.5 text-[#1A0317] stroke-[2.8]" />
          <span>{t.runPreCheck || 'Run Pre-Payment Threat Check'}</span>
        </button>
      </div>

      {/* ── 3. Feature Cards: High-End White Cards with Gradient Icon Badges ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Card 1: Scan UPI QR Code */}
        <button
          onClick={() => onNavigate('home', { openQr: true })}
          className="group relative p-4.5 rounded-3xl bg-white border border-slate-200/70 hover:border-emerald-300 text-left flex flex-col justify-between space-y-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md active:scale-[0.98] transition-all overflow-hidden"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 text-emerald-800 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <QrCode className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
              Instant Scan
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#260623] transition-colors">
                {t.scanQr || 'Scan UPI QR'}
              </h4>
              <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100 transition-all">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>
            <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-relaxed">
              Scan & verify any merchant or personal QR code against national cybercrime registries.
            </p>
          </div>
        </button>

        {/* Card 2: AI Voice & Audio Scan */}
        <button
          onClick={() => onNavigate('audio-analyzer')}
          className="group relative p-4.5 rounded-3xl bg-white border border-slate-200/70 hover:border-rose-300 text-left flex flex-col justify-between space-y-3.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md active:scale-[0.98] transition-all overflow-hidden"
        >
          <div className="flex items-center justify-between w-full">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-50 text-rose-700 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Mic className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/60">
              Coercion AI
            </span>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold font-heading text-slate-900 group-hover:text-[#260623] transition-colors">
                {t.audioScan || 'AI Audio Scan'}
              </h4>
              <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100 transition-all">
                <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>
            <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-relaxed">
              Record 30s of call audio to detect digital arrest threats, fake police pressure & coercion.
            </p>
          </div>
        </button>
      </div>

      {/* ── 4. Action Card: Live Scam Call Simulation (Refined Rose-Coral) ── */}
      <div className="bg-white rounded-3xl p-4 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-100 to-red-50 text-rose-600 flex items-center justify-center shadow-xs shrink-0">
            <PhoneCall className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 font-heading">Test Scam Call Simulation</h4>
            <p className="text-[10.5px] text-slate-500 leading-tight mt-0.5">Test Verix In-Call Defense & Floating Overlay</p>
          </div>
        </div>
        <button
          onClick={() => onTriggerCallSimulation && onTriggerCallSimulation('+919876543210')}
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-bold shadow-[0_4px_12px_rgba(225,29,72,0.25)] active:scale-95 transition-all shrink-0 tracking-wide"
        >
          Simulate Call
        </button>
      </div>
    </div>
  );
}

