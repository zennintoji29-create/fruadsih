import React, { useState } from 'react';
import {
  ShieldCheck, Search, QrCode, Lock, CheckCircle2,
  Activity, Shield, TrendingUp, Zap, ArrowRight
} from 'lucide-react';
import { translations } from '../translations';

export default function PaymentProtectionScreen({ user, onNavigate, currentLang = 'en', backendUrl }) {
  const t = translations[currentLang] || translations.en;
  const [realtimeEnabled, setRealtimeEnabled] = useState(true);

  const darkBg = { background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' };
  const glassDark = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)',
  };

  return (
    <div className="flex flex-col min-h-full w-full font-sans select-none overflow-y-auto pb-28" style={darkBg}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-[14px] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#D8F828 0%,#A8CC18 100%)', boxShadow: '0 4px 16px rgba(216,248,40,0.35)' }}
          >
            <Shield className="w-[18px] h-[18px] text-[#1A0317] stroke-[2.8]" />
          </div>
          <div>
            <span className="font-extrabold text-white text-[17px] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {t.navPayments || 'Pay Shield'}
            </span>
            <span className="block text-[10px] text-white/40 font-medium">
              {t.cyberDefenseAi || 'Live Payment Defense'}
            </span>
          </div>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-black text-[#1A0317]"
          style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)' }}
        >
          {user?.name ? user.name[0].toUpperCase() : 'U'}
        </div>
      </div>

      <div className="px-4 space-y-3.5">
        {/* Live Protection Toggle Card */}
        <div className="rounded-[24px] p-4 flex items-center justify-between" style={glassDark}>
          <div>
            <h2 className="text-[14px] font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {t.livePaymentProtection || 'Live Payment Protection'}
            </h2>
            <p className="text-[11px] text-white/45 mt-0.5 leading-snug">
              {t.livePaymentProtectionSub || 'Real-time heuristic analysis against NPCI & I4C scam registries.'}
            </p>
          </div>
          <button
            onClick={() => setRealtimeEnabled(!realtimeEnabled)}
            className="relative shrink-0 ml-3 transition-all active:scale-95"
            style={{
              width: '48px', height: '26px',
              background: realtimeEnabled ? 'linear-gradient(135deg, #D8F828, #A8CC18)' : 'rgba(255,255,255,0.1)',
              borderRadius: '999px',
              border: realtimeEnabled ? 'none' : '1px solid rgba(255,255,255,0.15)',
              transition: 'background 0.2s',
            }}
          >
            <div
              className="absolute top-[3px] w-5 h-5 rounded-full bg-white shadow-md transition-all duration-200"
              style={{ left: realtimeEnabled ? '24px' : '3px' }}
            />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('upi-check')}
            className="rounded-[24px] p-4 text-left flex flex-col justify-between space-y-3 active:scale-[0.96] transition-all"
            style={{
              background: 'linear-gradient(135deg, rgba(216,248,40,0.18) 0%, rgba(168,204,24,0.1) 100%)',
              border: '1px solid rgba(216,248,40,0.3)',
            }}
          >
            <div
              className="w-10 h-10 rounded-[14px] flex items-center justify-center"
              style={{ background: 'rgba(216,248,40,0.2)', border: '1px solid rgba(216,248,40,0.3)' }}
            >
              <Search className="w-5 h-5 text-[#D8F828] stroke-[2]" />
            </div>
            <div>
              <h4 className="text-[12.5px] font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {t.manualVpaCheck || 'Manual VPA Check'}
              </h4>
              <p className="text-[10px] text-white/50 mt-0.5">
                {t.manualVpaCheckSub || 'Verify any UPI ID or phone'}
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('home', { openQr: true })}
            className="rounded-[24px] p-4 text-left flex flex-col justify-between space-y-3 active:scale-[0.96] transition-all"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div
              className="w-10 h-10 rounded-[14px] flex items-center justify-center"
              style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)' }}
            >
              <QrCode className="w-5 h-5 text-emerald-400 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-[12.5px] font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {t.scanQrCode || 'Scan QR Code'}
              </h4>
              <p className="text-[10px] text-white/50 mt-0.5">
                {t.scanQrCodeSub || 'Verify merchant payload'}
              </p>
            </div>
          </button>
        </div>

        {/* Active Defense Card */}
        <div
          className="rounded-[24px] p-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #2A083A 0%, #1A0428 100%)',
            border: '1px solid rgba(216,248,40,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(216,248,40,0.1) 0%, transparent 70%)' }} />
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-[#D8F828] font-mono uppercase tracking-wider">
              {t.securityEngineStatus || 'Security Engine Status'}
            </span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full" style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse block" />
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">{t.active || 'Active'}</span>
            </div>
          </div>
          <h3 className="text-[16px] font-bold text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {t.guardingUpiTransfers || 'Guarding All UPI Transfers'}
          </h3>
          <p className="text-[11px] text-white/55 leading-relaxed">
            {t.guardingUpiTransfersDesc || 'Verix monitors clipboard, active calls, and payee threat scores before any money leaves your account.'}
          </p>
        </div>

        {/* Protection Layers */}
        <div className="rounded-[24px] p-4" style={glassDark}>
          <h4 className="text-[11px] font-bold text-white/60 uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            {t.monitorsTitle || 'Active Protection Layers'}
          </h4>
          <div className="space-y-2.5">
            {[
              { 
                icon: ShieldCheck, 
                label: t.upiMonitor || 'National Registry Screening', 
                desc: t.upiMonitorSub || 'Instant cross-referencing with I4C blacklisted VPAs and suspect accounts.', 
                color: 'rgba(16,185,129,0.2)', 
                iconColor: 'text-emerald-400', 
                border: 'rgba(16,185,129,0.25)' 
              },
              { 
                icon: Lock, 
                label: t.voiceMonitor || 'Coercion & Active Call Intercept', 
                desc: t.voiceMonitorSub || 'Automatically warns and halts transfers if an ongoing scammer call is active.', 
                color: 'rgba(216,248,40,0.1)', 
                iconColor: 'text-[#D8F828]', 
                border: 'rgba(216,248,40,0.2)' 
              },
            ].map(({ icon: Icon, label, desc, color, iconColor, border }) => (
              <div key={label} className="flex items-start gap-3 p-3 rounded-[16px]" style={{ background: color, border: `1px solid ${border}` }}>
                <div className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <Icon className={`w-4 h-4 ${iconColor} stroke-[2]`} />
                </div>
                <div>
                  <h5 className="text-[11.5px] font-bold text-white">{label}</h5>
                  <p className="text-[10px] text-white/45 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
