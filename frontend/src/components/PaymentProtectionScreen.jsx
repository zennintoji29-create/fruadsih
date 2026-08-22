import React, { useState } from 'react';
import { 
  ShieldCheck, Search, QrCode, Lock, CheckCircle2, 
  Activity, ArrowRight, Shield, AlertTriangle 
} from 'lucide-react';
import { translations } from '../translations';

export default function PaymentProtectionScreen({ user, onNavigate, currentLang = 'en', backendUrl }) {
  const t = translations[currentLang] || translations.en;
  const [realtimeEnabled, setRealtimeEnabled] = useState(true);

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] p-4 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white pb-8">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-4 pb-1">
        <div className="flex items-center gap-1.5">
          <div className="p-1 rounded-lg bg-[#450c3f] text-[#b9d175]">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-bold font-heading text-[#450c3f] text-sm">Verix</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#450c3f] text-[#b9d175] flex items-center justify-center font-bold text-xs shadow-xs">
          {user?.name ? user.name[0].toUpperCase() : 'U'}
        </div>
      </div>

      {/* Description Header with Real-Time Toggle */}
      <div className="bg-white rounded-3xl p-5 border border-[#e5ebc5] shadow-xs flex items-center justify-between">
        <div className="max-w-[220px]">
          <h2 className="text-sm font-bold text-[#450c3f] font-heading">Live Payment Protection</h2>
          <p className="text-xs text-[#5e4d6a] mt-0.5 leading-snug">
            Real-time heuristic analysis against NPCI & I4C scam registries.
          </p>
        </div>

        {/* Toggle Switch */}
        <button
          onClick={() => setRealtimeEnabled(!realtimeEnabled)}
          className={`w-12 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
            realtimeEnabled ? 'bg-[#450c3f]' : 'bg-slate-300'
          }`}
        >
          <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
            realtimeEnabled ? 'translate-x-6' : 'translate-x-0'
          }`} />
        </button>
      </div>

      {/* Quick Launch Actions */}
      <div className="grid grid-cols-2 gap-2.5">
        <button
          onClick={() => onNavigate('upi-check')}
          className="p-4 rounded-3xl bg-[#450c3f] text-[#f5fbda] text-left flex flex-col justify-between space-y-3 shadow-md shadow-[#450c3f]/20 active:scale-95 transition-all"
        >
          <div className="p-2 rounded-2xl bg-white/10 w-fit text-[#b9d175]">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold font-heading text-white">Manual VPA Check</h4>
            <p className="text-[10px] text-[#b9d175]">Verify any UPI ID or phone</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('home', { openQr: true })}
          className="p-4 rounded-3xl bg-white border border-[#e5ebc5] hover:border-[#b9d175] text-left flex flex-col justify-between space-y-3 shadow-xs active:scale-95 transition-all"
        >
          <div className="p-2 rounded-2xl bg-[#d9efbd] w-fit text-[#450c3f]">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold font-heading text-[#1e112a]">Scan QR Code</h4>
            <p className="text-[10px] text-[#5e4d6a]">Verify merchant payload</p>
          </div>
        </button>
      </div>

      {/* Active Defense Shield Status */}
      <div className="bg-[#450c3f] text-[#f5fbda] rounded-3xl p-5 shadow-md space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-[#b9d175] font-mono uppercase">SECURITY ENGINE STATUS</span>
          <span className="flex items-center gap-1 text-[10px] font-bold text-[#b9d175] bg-[#b9d175]/20 px-2 py-0.5 rounded-full">
            ● Active
          </span>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold font-heading text-white">Guarding All UPI Transfers</h3>
          <CheckCircle2 className="w-5 h-5 text-[#b9d175]" />
        </div>
        <p className="text-xs text-[#f5fbda]/90 leading-relaxed">
          Verix monitors clipboard, active calls, and payee threat scores before any money leaves your bank account.
        </p>
      </div>

      {/* Security Features Breakdown */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3">
        <h4 className="text-xs font-bold text-[#1e112a] flex items-center gap-1.5 border-b border-[#e5ebc5] pb-2">
          <Activity className="w-4 h-4 text-[#450c3f]" /> Active Protection Layers
        </h4>

        <div className="space-y-2">
          <div className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-[#f5fbda]/50 border border-[#e5ebc5]">
            <div className="p-1.5 rounded-xl bg-[#d9efbd] text-[#450c3f] mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#1e112a]">National Registry Screening</h5>
              <p className="text-[10px] text-[#5e4d6a] leading-tight">Instant cross-referencing with I4C blacklisted VPAs and suspect accounts.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 rounded-2xl bg-[#f5fbda]/50 border border-[#e5ebc5]">
            <div className="p-1.5 rounded-xl bg-[#d9efbd] text-[#450c3f] mt-0.5">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[#1e112a]">Coercion & Active Call Intercept</h5>
              <p className="text-[10px] text-[#5e4d6a] leading-tight">Automatically warns and halts transfers if an ongoing scammer call is active.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
