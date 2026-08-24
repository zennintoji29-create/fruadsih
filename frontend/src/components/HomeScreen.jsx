import React, { useState } from 'react';
import { 
  Shield, Search, QrCode, Mic, SlidersHorizontal, 
  ArrowUpRight, PhoneCall, Globe, Sparkles, Zap, ChevronRight,
  Activity, CheckCircle2, AlertTriangle, Radio, Terminal, Cpu, Lock, ArrowRight
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

  return (
    <div className="flex flex-col min-h-full w-full bg-[#090C10] text-[#F0F3F6] font-sans selection:bg-[#00F0A0] selection:text-[#090C10] select-none pb-28">
      
      {/* ── 1. TOP TELEMETRY BAR & BRAND ── */}
      <header className="px-5 pt-3 pb-3 border-b border-white/[0.06] bg-[#090C10]/90 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between">
        {/* Brand & Live Subsystem */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#141A22] border border-white/[0.12] flex items-center justify-center text-[#00F0A0] shadow-xs">
            <Shield className="w-4 h-4 stroke-[2.4]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-[15px] text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                VERIX
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#00F0A0] uppercase bg-[#00F0A0]/10 px-1.5 py-0.5 rounded border border-[#00F0A0]/25 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0A0] animate-pulse"></span>
                ACTIVE
              </span>
            </div>
            <p className="text-[10px] text-[#7A889B] font-mono tracking-tight -mt-0.5">
              NPCI • I4C DEFENSE ENGINE
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Language Pill */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 h-8 px-2.5 rounded-lg bg-[#141A22] border border-white/[0.08] text-[11px] font-mono text-[#BAC5D5] hover:border-white/20 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#00F0A0]" />
              <span className="font-bold uppercase">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-10 w-36 bg-[#141A22] border border-white/[0.12] rounded-xl shadow-2xl z-50 overflow-hidden py-1">
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onLanguageChange && onLanguageChange(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium flex items-center justify-between ${
                      currentLang === l.code ? 'bg-[#00F0A0]/15 text-[#00F0A0] font-bold' : 'text-[#BAC5D5] hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{l.label}</span>
                    {currentLang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-[#00F0A0]"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Settings Trigger */}
          <button 
            onClick={() => onNavigate('settings')}
            className="w-8 h-8 rounded-lg bg-[#141A22] border border-white/[0.08] text-[#BAC5D5] hover:text-white hover:border-white/20 flex items-center justify-center transition-all active:scale-95"
            title="Settings & System Diagnostics"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      <div className="px-5 pt-4 space-y-5">

        {/* ── 2. HERO: ASYMMETRIC THREAT IMMUNITY INDEX ── */}
        <section className="bg-gradient-to-b from-[#121720] to-[#0D1117] rounded-2xl border border-white/[0.09] p-5 shadow-lg relative overflow-hidden">
          {/* Fine technical grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top Posture Status */}
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[10px] font-mono tracking-widest text-[#8494A8] uppercase flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-[#00F0A0]" />
              CYBER DEFENSE POSTURE
            </span>
            <span className="text-[10px] font-mono text-[#00F0A0] bg-[#00F0A0]/10 px-2 py-0.5 rounded font-bold border border-[#00F0A0]/20">
              OPTIMAL
            </span>
          </div>

          {/* Main Hero Score & Editorial Copy */}
          <div className="flex items-end justify-between mt-4 relative z-10">
            <div>
              <p className="text-[11px] font-mono text-[#8494A8] tracking-wide uppercase">
                Threat Immunity Index
              </p>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-4xl font-extrabold tracking-tight text-white font-mono" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  98.4
                </span>
                <span className="text-xs font-mono text-[#6A788A]">/ 100</span>
              </div>
            </div>

            {/* Segmented Technical Arc Visualization */}
            <div className="flex flex-col items-end">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((seg) => (
                  <span 
                    key={seg} 
                    className={`w-1.5 h-6 rounded-xs transition-all ${
                      seg <= 7 ? 'bg-[#00F0A0]' : 'bg-[#00F0A0]/30'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-[9px] font-mono text-[#8494A8] tracking-wider uppercase">
                14 / 14 ENGINES ARMED
              </span>
            </div>
          </div>

          {/* Security Summary Statement */}
          <p className="text-xs text-[#9EADBF] leading-relaxed mt-3.5 relative z-10 font-normal">
            Zero anomalous transaction vectors detected across active clipboard, incoming calls, and banking channels in the last 24 hours.
          </p>

          {/* Precision Action Button */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.06] relative z-10">
            <button
              onClick={() => onNavigate('upi-check')}
              className="w-full h-12 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] active:scale-[0.98] text-[#080B0F] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_16px_rgba(0,240,160,0.25)] font-mono"
            >
              <Search className="w-4 h-4 text-[#080B0F] stroke-[2.8]" />
              <span>{t.runPreCheck || 'Run Pre-Payment Threat Check'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#080B0F] stroke-[2.5]" />
            </button>
          </div>
        </section>

        {/* ── 3. REAL-TIME TELEMETRY STRIP ── */}
        <section className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-[#10141C] border border-white/[0.06] text-center">
            <p className="text-[9px] font-mono uppercase text-[#738294] tracking-tight">I4C REGISTRY</p>
            <p className="text-[11px] font-mono font-bold text-white mt-0.5">SYNCED (2m)</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[#10141C] border border-white/[0.06] text-center">
            <p className="text-[9px] font-mono uppercase text-[#738294] tracking-tight">COERCION AI</p>
            <p className="text-[11px] font-mono font-bold text-[#00F0A0] mt-0.5">ARMED</p>
          </div>
          <div className="p-2.5 rounded-xl bg-[#10141C] border border-white/[0.06] text-center">
            <p className="text-[9px] font-mono uppercase text-[#738294] tracking-tight">CLIPBOARD</p>
            <p className="text-[11px] font-mono font-bold text-white mt-0.5">GUARDED</p>
          </div>
        </section>

        {/* ── 4. PRIMARY SECURITY CAPABILITIES (EDITORIAL SPLIT) ── */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#738294]">
              Active Interceptors
            </span>
            <span className="text-[10px] font-mono text-[#546274]">
              LATENCY &lt; 85ms
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Capability 1: UPI QR Registry Interceptor */}
            <button
              onClick={() => onNavigate('home', { openQr: true })}
              className="p-4 rounded-2xl bg-[#10141C] hover:bg-[#141A24] border border-white/[0.07] hover:border-white/[0.15] text-left transition-all group active:scale-[0.98] flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div className="flex items-start justify-between w-full">
                <div className="w-9 h-9 rounded-lg bg-[#171E2B] border border-white/[0.08] flex items-center justify-center text-[#00F0A0] group-hover:border-[#00F0A0]/40 transition-colors">
                  <QrCode className="w-4.5 h-4.5 stroke-[2.2]" />
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#00F0A0] bg-[#00F0A0]/10 px-2 py-0.5 rounded border border-[#00F0A0]/20">
                  Instant Reticle
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {t.scanQr || 'Scan UPI QR Payload'}
                  </h4>
                  <ChevronRight className="w-4 h-4 text-[#546274] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[11px] text-[#8494A8] mt-1 leading-relaxed">
                  Real-time payload inspection cross-referenced with 120,000+ national cybercrime complaint hashes.
                </p>
              </div>
            </button>

            {/* Capability 2: Real-time Call Coercion Analyzer */}
            <button
              onClick={() => onNavigate('audio-analyzer')}
              className="p-4 rounded-2xl bg-[#10141C] hover:bg-[#141A24] border border-white/[0.07] hover:border-white/[0.15] text-left transition-all group active:scale-[0.98] flex flex-col justify-between space-y-3 shadow-xs"
            >
              <div className="flex items-start justify-between w-full">
                <div className="w-9 h-9 rounded-lg bg-[#171E2B] border border-white/[0.08] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-colors">
                  <Mic className="w-4.5 h-4.5 stroke-[2.2]" />
                </div>
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                  In-Memory AI
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {t.audioScan || 'Speech Coercion Engine'}
                  </h4>
                  <ChevronRight className="w-4 h-4 text-[#546274] group-hover:text-white transition-colors" />
                </div>
                <p className="text-[11px] text-[#8494A8] mt-1 leading-relaxed">
                  Transient 30s acoustic scanning to intercept Digital Arrest, fake police threats & extortion patterns.
                </p>
              </div>
            </button>
          </div>
        </section>

        {/* ── 5. ADVERSARIAL ATTACK SIMULATION (SURGICAL DIAGNOSTIC) ── */}
        <section className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.07] flex items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#261217] border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <PhoneCall className="w-4.5 h-4.5 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white font-mono tracking-tight">
                Simulate Digital Arrest Call
              </h4>
              <p className="text-[10px] text-[#8494A8] mt-0.5">
                Test live in-call HUD overlay & coercion banner
              </p>
            </div>
          </div>

          <button
            onClick={() => onTriggerCallSimulation && onTriggerCallSimulation('+919876543210')}
            className="h-8 px-3 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/35 text-rose-300 text-[11px] font-mono font-bold transition-all active:scale-95 shrink-0"
          >
            Trigger Call
          </button>
        </section>

        {/* ── 6. RECENT SECURITY LOG FEED (MINIMAL ON-BACKGROUND TIMELINE) ── */}
        <section className="space-y-2 pt-1 pb-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#738294]">
              Recent Protection Telemetry
            </span>
            <button 
              onClick={() => onNavigate('history')} 
              className="text-[10px] font-mono text-[#00F0A0] hover:underline flex items-center gap-0.5"
            >
              Full Log <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          <div className="divide-y divide-white/[0.04] rounded-xl bg-[#0D1117] border border-white/[0.05] p-1">
            <div className="p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0A0]" />
                <span className="font-mono text-[11px] text-[#BAC5D5]">NPCI Registry Update</span>
              </div>
              <span className="font-mono text-[10px] text-[#546274]">2 min ago • Clean</span>
            </div>
            <div className="p-2.5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span className="font-mono text-[11px] text-[#BAC5D5]">Acoustic Guard Primed</span>
              </div>
              <span className="font-mono text-[10px] text-[#546274]">Standby</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
