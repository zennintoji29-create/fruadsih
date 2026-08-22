import React from 'react';
import { 
  Shield, Phone, MessageSquare, Search, Lock, 
  CheckCircle2, ChevronRight, Sparkles, QrCode, Mic, SlidersHorizontal, ArrowUpRight, Activity, PhoneCall, Bell, Globe 
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
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] p-4 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white pb-8">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-4 pb-1">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-xl bg-[#450c3f] text-[#b9d175] shadow-sm">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold font-heading text-[#450c3f] text-base tracking-tight block leading-none">Verix</span>
            <span className="text-[9px] font-mono text-[#6b8f1a] font-bold">● {t.activeProtection}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Language Dropdown */}
          <div className="relative flex items-center bg-white border border-[#e5ebc5] rounded-xl px-2 py-1 shadow-2xs">
            <Globe className="w-3.5 h-3.5 text-[#450c3f] mr-1" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange && onLanguageChange(e.target.value)}
              className="bg-transparent text-[11px] font-bold text-[#450c3f] focus:outline-none cursor-pointer"
            >
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>

          <button 
            onClick={() => onNavigate('settings')}
            className="p-2 rounded-xl bg-[#d9efbd] text-[#450c3f] hover:bg-[#b9d175] transition-colors shadow-2xs"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button 
            onClick={() => onNavigate('settings')}
            className="w-8 h-8 rounded-full bg-[#450c3f] text-[#b9d175] flex items-center justify-center font-bold text-xs shadow-md"
          >
            {user?.name ? user.name[0].toUpperCase() : 'U'}
          </button>
        </div>
      </div>

      {/* Main Hero Action 1: Run Pre-Payment Threat Check */}
      <div className="bg-[#450c3f] rounded-3xl p-5 text-[#f5fbda] space-y-3.5 shadow-xl shadow-[#450c3f]/25">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold tracking-wider text-[#b9d175] uppercase">
            INSTANT THREAT INTERCEPTOR
          </span>
          <span className="w-2 h-2 rounded-full bg-[#b9d175] animate-ping" />
        </div>

        <div>
          <h2 className="text-lg font-black font-heading text-white tracking-tight">
            {t.runPreCheck}
          </h2>
          <p className="text-xs text-[#f5fbda]/80 mt-0.5 leading-relaxed">
            {t.dashboardSubtitle}
          </p>
        </div>

        <button
          onClick={() => onNavigate('upi-check')}
          className="w-full py-3.5 bg-[#b9d175] hover:bg-[#a8c75d] text-[#450c3f] rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
        >
          <Search className="w-4 h-4 text-[#450c3f]" />
          <span>{t.runPreCheck}</span>
        </button>
      </div>

      {/* Quick Core Actions 2-Grid: Scan QR Code & Voice Phishing AI */}
      <div className="grid grid-cols-2 gap-3">
        {/* Action 2: Scan UPI QR Code */}
        <button
          onClick={() => onNavigate('home', { openQr: true })}
          className="p-4 rounded-3xl bg-white border border-[#e5ebc5] hover:border-[#b9d175] text-left flex flex-col justify-between space-y-3 shadow-2xs active:scale-95 transition-all"
        >
          <div className="p-2.5 rounded-2xl bg-[#d9efbd] w-fit text-[#450c3f]">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold font-heading text-[#1e112a]">{t.scanQr}</h4>
            <p className="text-[10px] text-[#5e4d6a]">{t.scanQrSub}</p>
          </div>
        </button>

        {/* Action 3: AI Voice & Audio Scan */}
        <button
          onClick={() => onNavigate('audio-analyzer')}
          className="p-4 rounded-3xl bg-white border border-[#e5ebc5] hover:border-[#b9d175] text-left flex flex-col justify-between space-y-3 shadow-2xs active:scale-95 transition-all"
        >
          <div className="p-2.5 rounded-2xl bg-[#d9efbd] w-fit text-[#450c3f]">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold font-heading text-[#1e112a]">{t.audioScan}</h4>
            <p className="text-[10px] text-[#5e4d6a]">{t.audioScanSub}</p>
          </div>
        </button>
      </div>

      {/* Quick Action: Live Scam Call & Notification Bar Test */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-rose-100 text-rose-700">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1e112a]">Test Scam Call Simulation</h4>
            <p className="text-[10px] text-[#5e4d6a]">Test Verix In-Call Defense & Heads-Up Overlay</p>
          </div>
        </div>
        <button
          onClick={() => onTriggerCallSimulation && onTriggerCallSimulation('+919876543210')}
          className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all shrink-0"
        >
          Simulate Call
        </button>
      </div>

      {/* Real-Time Protection Monitors */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3">
        <div className="flex items-center justify-between border-b border-[#e5ebc5] pb-2">
          <span className="text-xs font-bold text-[#1e112a] flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#450c3f]" /> {t.monitorsTitle}
          </span>
          <span className="text-[10px] font-bold text-[#6b8f1a] bg-[#d9efbd] px-2 py-0.5 rounded-full">
            {t.allActive}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#f5fbda]/40 border border-[#e5ebc5]">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#d9efbd] text-[#450c3f]">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1e112a]">{t.upiMonitor}</h4>
                <p className="text-[10px] text-[#5e4d6a]">{t.upiMonitorSub}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#6b8f1a]">{t.active}</span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#f5fbda]/40 border border-[#e5ebc5]">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#d9efbd] text-[#450c3f]">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#1e112a]">{t.voiceMonitor}</h4>
                <p className="text-[10px] text-[#5e4d6a]">{t.voiceMonitorSub}</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#6b8f1a]">{t.active}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
