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
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-28 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white">
      {/* Top Header - Single Unified Settings / Profile Entry */}
      <div className="flex items-center justify-between pb-1">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-2xl bg-[#450c3f] text-[#b9d175] shadow-md shadow-[#450c3f]/20">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold font-heading text-[#450c3f] text-lg tracking-tight block leading-none">Verix</span>
            <span className="text-[10px] font-mono text-[#6b8f1a] font-bold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b8f1a] animate-pulse"></span>
              {t.activeProtection || 'ACTIVE PROTECTION'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Language Selector */}
          <div className="relative flex items-center bg-white/90 backdrop-blur-xs border border-[#e5ebc5] rounded-2xl px-2.5 py-1.5 shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#450c3f] mr-1.5" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}
              className="bg-transparent text-xs font-bold text-[#450c3f] focus:outline-none cursor-pointer pr-1"
            >
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>

          {/* Single Unified Settings Button */}
          <button 
            onClick={() => onNavigate('settings')}
            title="Settings & Profile"
            className="w-10 h-10 rounded-2xl bg-[#450c3f] hover:bg-[#32082e] text-[#b9d175] flex items-center justify-center font-bold text-xs shadow-md shadow-[#450c3f]/20 active:scale-95 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Hero Action: Run Pre-Payment Threat Check */}
      <div className="bg-gradient-to-br from-[#450c3f] to-[#2a0626] rounded-3xl p-5 text-[#f5fbda] space-y-4 shadow-xl shadow-[#450c3f]/25 border border-[#450c3f]/30 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-8 -top-8 w-28 h-28 bg-[#b9d175]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-black tracking-wider text-[#b9d175] uppercase px-2.5 py-1 rounded-full bg-[#b9d175]/15 border border-[#b9d175]/30">
            ⚡ INSTANT THREAT INTERCEPTOR
          </span>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b9d175] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#b9d175]"></span>
          </span>
        </div>

        <div>
          <h2 className="text-xl font-black font-heading text-white tracking-tight leading-snug">
            {t.runPreCheck || 'Run Pre-Payment Threat Check'}
          </h2>
          <p className="text-xs text-[#f5fbda]/80 mt-1 leading-relaxed">
            {t.dashboardSubtitle || 'Real-time AI cyber defense against fraudulent VPAs, digital arrest, and extortion.'}
          </p>
        </div>

        <button
          onClick={() => onNavigate('upi-check')}
          className="w-full py-3.5 bg-[#b9d175] hover:bg-[#a8c75d] text-[#450c3f] rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all"
        >
          <Search className="w-4 h-4 text-[#450c3f] stroke-[2.5]" />
          <span>{t.runPreCheck || 'Run Pre-Payment Threat Check'}</span>
        </button>
      </div>

      {/* Prominent & Beautiful Core Action Cards: QR Scan & Voice AI */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Action 1: Scan UPI QR Code (Bigger & Richer) */}
        <button
          onClick={() => onNavigate('home', { openQr: true })}
          className="group relative p-5 rounded-3xl bg-white border border-[#e5ebc5] hover:border-[#b9d175] text-left flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md active:scale-98 transition-all overflow-hidden"
        >
          <div className="flex items-center justify-between w-full">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#d9efbd] to-[#b9d175] text-[#450c3f] shadow-xs group-hover:scale-105 transition-transform">
              <QrCode className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-bold text-[#6b8f1a] bg-[#d9efbd]/60 px-2.5 py-1 rounded-full border border-[#d9efbd]">
              Instant Scan
            </span>
          </div>

          <div>
            <h4 className="text-sm font-black font-heading text-[#1e112a] group-hover:text-[#450c3f] transition-colors flex items-center justify-between">
              {t.scanQr || 'Scan UPI QR'}
              <ChevronRight className="w-4 h-4 text-[#5e4d6a] group-hover:translate-x-1 transition-transform" />
            </h4>
            <p className="text-[11px] text-[#5e4d6a] font-medium mt-1 leading-relaxed">
              Scan & verify any merchant or personal QR code against national cybercrime registries.
            </p>
          </div>
        </button>

        {/* Action 2: AI Voice & Audio Scan (Bigger & Richer) */}
        <button
          onClick={() => onNavigate('audio-analyzer')}
          className="group relative p-5 rounded-3xl bg-white border border-[#e5ebc5] hover:border-[#b9d175] text-left flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md active:scale-98 transition-all overflow-hidden"
        >
          <div className="flex items-center justify-between w-full">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#d9efbd] to-[#b9d175] text-[#450c3f] shadow-xs group-hover:scale-105 transition-transform">
              <Mic className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
              Coercion AI
            </span>
          </div>

          <div>
            <h4 className="text-sm font-black font-heading text-[#1e112a] group-hover:text-[#450c3f] transition-colors flex items-center justify-between">
              {t.audioScan || 'AI Audio Scan'}
              <ChevronRight className="w-4 h-4 text-[#5e4d6a] group-hover:translate-x-1 transition-transform" />
            </h4>
            <p className="text-[11px] text-[#5e4d6a] font-medium mt-1 leading-relaxed">
              Record 30s of call audio to detect digital arrest threats, fake police pressure & coercion.
            </p>
          </div>
        </button>
      </div>

      {/* Quick Action: Live Scam Call Simulation */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-100 text-rose-700 shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1e112a]">Test Scam Call Simulation</h4>
            <p className="text-[10px] text-[#5e4d6a]">Test Verix In-Call Defense & Floating Overlay</p>
          </div>
        </div>
        <button
          onClick={() => onTriggerCallSimulation && onTriggerCallSimulation('+919876543210')}
          className="px-4 py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm active:scale-95 transition-all shrink-0"
        >
          Simulate Call
        </button>
      </div>
    </div>
  );
}
