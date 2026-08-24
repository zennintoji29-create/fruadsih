import React, { useState } from 'react';
import {
  Shield, Search, QrCode, Mic, SlidersHorizontal,
  ArrowUpRight, PhoneCall, Globe, Sparkles, Zap,
  ChevronRight, Lock, TrendingUp, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { translations } from '../translations';

export default function HomeScreen({ user, onNavigate, currentLang = 'en', onLanguageChange, onTriggerCallSimulation }) {
  const t = translations[currentLang] || translations.en;
  const [langOpen, setLangOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हि' },
    { code: 'or', label: 'ଓ' },
    { code: 'bn', label: 'বা' },
    { code: 'te', label: 'తె' },
    { code: 'ta', label: 'த' },
  ];

  const currentLangLabel = languages.find(l => l.code === currentLang)?.label || 'EN';

  return (
    <div
      className="flex flex-col min-h-full w-full font-sans select-none"
      style={{
        background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)',
      }}
    >
      {/* ── STATUS BAR AREA ── */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-[14px] flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #D8F828 0%, #A8CC18 100%)',
              boxShadow: '0 4px 16px rgba(216,248,40,0.35)',
            }}
          >
            <Shield className="w-[18px] h-[18px] text-[#1A0317] stroke-[2.8]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-[17px] tracking-tight leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Verix
              </span>
              {/* LIVE PILL */}
              <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-400/40 rounded-full px-2 py-[2px]">
                <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 animate-pulse block" />
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider font-mono">Live</span>
              </div>
            </div>
            <span className="text-[10px] text-white/40 font-medium mt-0.5 block">Cyber Defense AI</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              <Globe className="w-3.5 h-3.5 text-white/60" />
              <span className="text-[11px] font-bold text-white/80">{currentLangLabel}</span>
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-9 z-50 rounded-2xl border border-white/15 overflow-hidden"
                style={{ background: 'rgba(30,10,38,0.97)', backdropFilter: 'blur(24px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
              >
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { onLanguageChange && onLanguageChange(l.code); setLangOpen(false); }}
                    className={`block w-full px-4 py-2.5 text-left text-xs font-semibold transition-colors ${currentLang === l.code ? 'text-[#D8F828] bg-[#D8F828]/10' : 'text-white/70 hover:text-white hover:bg-white/8'}`}
                  >
                    {l.label === 'EN' ? 'English' : l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            onClick={() => onNavigate('settings')}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 transition-all active:scale-90"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <SlidersHorizontal className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {/* ── HERO CARD ── */}
      <div className="mx-4 mt-3 mb-4 rounded-[28px] overflow-hidden relative" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}>
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #3D0D46 0%, #2A0834 50%, #1A0428 100%)' }}
        />
        {/* Glow orbs */}
        <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(216,248,40,0.12) 0%, transparent 70%)' }} />
        <div className="absolute -left-10 bottom-0 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)' }} />

        <div className="relative p-5">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="flex items-center gap-1.5 rounded-full px-3 py-1"
              style={{ background: 'rgba(216,248,40,0.12)', border: '1px solid rgba(216,248,40,0.25)' }}
            >
              <Zap className="w-3 h-3 text-[#D8F828]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D8F828] font-mono">
                Instant Threat Interceptor
              </span>
            </div>
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8F828] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D8F828]" />
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[22px] font-black text-white leading-tight mb-1.5"
            style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.3px' }}
          >
            {t.runPreCheck || 'Run Pre-Payment\nThreat Check'}
          </h2>
          <p className="text-[12px] text-white/55 leading-relaxed mb-5 font-normal">
            {t.dashboardSubtitle || 'Real-time AI defense against fraudulent VPAs, digital arrest & extortion.'}
          </p>

          {/* Stats Row */}
          <div className="flex items-center gap-3 mb-5">
            {[
              { val: '99.2%', label: 'Accuracy' },
              { val: '<2s', label: 'Response' },
              { val: '50K+', label: 'Threats Blocked' },
            ].map(s => (
              <div key={s.label} className="flex-1 text-center">
                <div className="text-[14px] font-black text-[#D8F828]" style={{ fontFamily: 'Outfit, sans-serif' }}>{s.val}</div>
                <div className="text-[9px] text-white/40 uppercase tracking-wider font-mono">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate('upi-check')}
            className="w-full flex items-center justify-center gap-2.5 font-black text-[13px] uppercase tracking-wider rounded-[18px] active:scale-[0.97] transition-all duration-150"
            style={{
              height: '52px',
              background: 'linear-gradient(135deg, #E4FF2E 0%, #C4E810 60%, #A8CC18 100%)',
              boxShadow: '0 8px 24px rgba(216,248,40,0.4), 0 2px 8px rgba(216,248,40,0.2)',
              color: '#1A0317',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            <Search className="w-[17px] h-[17px] stroke-[3]" />
            {t.runPreCheck || 'Run Pre-Payment Threat Check'}
          </button>
        </div>
      </div>

      {/* ── FEATURE CARDS ── */}
      <div className="px-4 space-y-3 pb-6">
        <div className="grid grid-cols-2 gap-3">
          {/* QR Scan Card */}
          <button
            onClick={() => onNavigate('home', { openQr: true })}
            className="group relative rounded-[24px] p-4 text-left overflow-hidden active:scale-[0.96] transition-all duration-150"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(20,180,120,0.15) 0%, rgba(16,160,100,0.05) 100%)' }} />

            {/* Icon */}
            <div
              className="w-11 h-11 rounded-[16px] flex items-center justify-center mb-3 relative"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.25) 0%, rgba(5,150,105,0.15) 100%)',
                border: '1px solid rgba(16,185,129,0.3)',
              }}
            >
              <QrCode className="w-6 h-6 text-emerald-400 stroke-[2]" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 mb-2" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 font-mono">Instant Scan</span>
            </div>

            <h4 className="text-[13px] font-bold text-white leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {t.scanQr || 'Scan UPI QR'}
            </h4>
            <p className="text-[10.5px] text-white/40 mt-1 leading-relaxed">
              Verify merchants against cybercrime registries.
            </p>

            <div className="flex justify-end mt-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <ChevronRight className="w-3.5 h-3.5 text-white/50 stroke-[2.5]" />
              </div>
            </div>
          </button>

          {/* AI Audio Scan Card */}
          <button
            onClick={() => onNavigate('audio-analyzer')}
            className="group relative rounded-[24px] p-4 text-left overflow-hidden active:scale-[0.96] transition-all duration-150"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(244,63,94,0.15) 0%, rgba(220,38,38,0.05) 100%)' }} />

            <div
              className="w-11 h-11 rounded-[16px] flex items-center justify-center mb-3"
              style={{
                background: 'linear-gradient(135deg, rgba(244,63,94,0.25) 0%, rgba(220,38,38,0.15) 100%)',
                border: '1px solid rgba(244,63,94,0.3)',
              }}
            >
              <Mic className="w-6 h-6 text-rose-400 stroke-[2]" />
            </div>

            <div className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 mb-2" style={{ background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.3)' }}>
              <span className="text-[9px] font-black uppercase tracking-wider text-rose-400 font-mono">Coercion AI</span>
            </div>

            <h4 className="text-[13px] font-bold text-white leading-snug" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {t.audioScan || 'AI Audio Scan'}
            </h4>
            <p className="text-[10.5px] text-white/40 mt-1 leading-relaxed">
              Detect digital arrest &amp; police coercion.
            </p>

            <div className="flex justify-end mt-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <ChevronRight className="w-3.5 h-3.5 text-white/50 stroke-[2.5]" />
              </div>
            </div>
          </button>
        </div>

        {/* ── Simulate Call Banner ── */}
        <div
          className="rounded-[24px] p-4 flex items-center gap-3 relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.12) 0%, transparent 70%)' }} />

          <div
            className="w-11 h-11 rounded-[16px] flex items-center justify-center shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(244,63,94,0.25) 0%, rgba(190,18,60,0.2) 100%)',
              border: '1px solid rgba(244,63,94,0.3)',
            }}
          >
            <PhoneCall className="w-5 h-5 text-rose-400 stroke-[2]" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-[12.5px] font-bold text-white leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Test Scam Call Simulation
            </h4>
            <p className="text-[10px] text-white/40 mt-0.5">Test Verix In-Call Defense &amp; Floating Overlay</p>
          </div>

          <button
            onClick={() => onTriggerCallSimulation && onTriggerCallSimulation('+919876543210')}
            className="shrink-0 px-3.5 py-2 rounded-[14px] text-[11.5px] font-black text-white tracking-wide active:scale-95 transition-all"
            style={{
              background: 'linear-gradient(135deg, #E8546B 0%, #C92040 100%)',
              boxShadow: '0 4px 16px rgba(232,84,107,0.4)',
              fontFamily: 'Outfit, sans-serif',
            }}
          >
            Simulate
          </button>
        </div>

        {/* ── Threat Status Widget ── */}
        <div
          className="rounded-[24px] p-4 flex items-center gap-4"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
          }}
        >
          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono">System Status</span>
            </div>
            <h5 className="text-[12px] font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>All Systems Operational</h5>
            <p className="text-[10px] text-white/35 mt-0.5">AI models • UPI Registry • Audio Engine</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-[22px] font-black text-[#D8F828]" style={{ fontFamily: 'Outfit, sans-serif', lineHeight: 1 }}>
              0
            </div>
            <div className="text-[9px] text-white/35 uppercase font-mono tracking-wider">Active Threats</div>
          </div>
        </div>
      </div>
    </div>
  );
}
