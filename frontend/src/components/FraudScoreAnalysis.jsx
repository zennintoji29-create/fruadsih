import React from 'react';
import {
  ArrowLeft, MoreVertical, ShieldCheck, Fingerprint, CreditCard,
  AlertTriangle, CheckCircle2, Lock, Shield
} from 'lucide-react';
import { translations } from '../translations';

export default function FraudScoreAnalysis({ assessment, onBack, currentLang = 'en' }) {
  const t = translations[currentLang] || translations.en;
  const score = assessment?.riskScore !== undefined ? (100 - assessment.riskScore) : 78;
  const isSafe = score >= 50;

  const darkBg = { background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' };
  const glassDark = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)',
  };

  const scoreColor = isSafe ? '#D8F828' : '#E8546B';
  const circumference = 263.8;
  const strokeDashoffset = circumference * (1 - score / 100);

  return (
    <div className="flex flex-col min-h-full w-full font-sans select-none overflow-y-auto pb-10" style={darkBg}>
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15 active:scale-90 transition-all"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <ArrowLeft className="w-4.5 h-4.5 text-white/70 stroke-[2.5]" />
        </button>
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-[10px] flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)' }}
          >
            <Shield className="w-[14px] h-[14px] text-[#1A0317] stroke-[2.8]" />
          </div>
          <span className="font-extrabold text-white text-[15px]" style={{ fontFamily: 'Outfit, sans-serif' }}>Verix</span>
        </div>
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center border border-white/15"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          <MoreVertical className="w-4 h-4 text-white/50" />
        </button>
      </div>

      <div className="px-5 pb-6">
        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="text-[22px] font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {t.threatAnalysis ? t.threatAnalysis.replace(':', '') : 'Analysis Results'}
          </h1>
          <p className="text-[11.5px] text-white/45 mt-1 leading-relaxed">
            {t.scoreSubtitle || 'Comprehensive security breakdown for your transaction.'}
          </p>
        </div>

        {/* Score Gauge Card */}
        <div
          className="rounded-[28px] p-6 flex flex-col items-center space-y-4 mb-4"
          style={{
            background: 'linear-gradient(135deg, #2A083A 0%, #1A0428 100%)',
            border: isSafe ? '1px solid rgba(216,248,40,0.2)' : '1px solid rgba(232,84,107,0.3)',
            boxShadow: isSafe ? '0 8px 32px rgba(0,0,0,0.3)' : '0 8px 32px rgba(232,84,107,0.15)',
          }}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-mono">
            {t.deviceScore || 'Overall Score'}
          </span>

          {/* SVG Gauge */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.07)" strokeWidth="7" fill="transparent" />
              <circle
                cx="50" cy="50" r="42"
                stroke={scoreColor}
                strokeWidth="7"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span
                className="text-4xl font-black leading-none"
                style={{ color: scoreColor, fontFamily: 'Outfit, sans-serif' }}
              >
                {score}
              </span>
              <span className="text-[10px] font-bold text-white/40 mt-0.5">/100</span>
            </div>
          </div>

          {/* Badge */}
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold"
            style={isSafe
              ? { background: 'rgba(216,248,40,0.15)', border: '1px solid rgba(216,248,40,0.3)', color: '#D8F828' }
              : { background: 'rgba(232,84,107,0.15)', border: '1px solid rgba(232,84,107,0.3)', color: '#E8546B' }
            }
          >
            {isSafe
              ? <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              : <AlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
            }
            {isSafe ? (t.threatLevelSafe || 'Good Standing') : (t.threatLevelCritical || 'High Risk Alert')}
          </div>
        </div>

        {/* Identity Safety Card */}
        <div className="rounded-[24px] p-4 mb-3" style={glassDark}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-[12px] flex items-center justify-center"
                style={{ background: 'rgba(216,248,40,0.15)', border: '1px solid rgba(216,248,40,0.25)' }}
              >
                <Fingerprint className="w-4.5 h-4.5 text-[#D8F828] stroke-[2]" />
              </div>
              <h3 className="text-[12.5px] font-bold text-white">
                {t.protected || 'Identity Safety'}
              </h3>
            </div>
            <span className="text-[12px] font-black text-[#D8F828] font-mono">92/100</span>
          </div>
          <p className="text-[10.5px] text-white/45 leading-relaxed pl-1">
            {t.scoreSubtitle || 'Zero threats detected in your active payments and communication channels.'}
          </p>
        </div>

        {/* Payment Safety Card */}
        <div className="rounded-[24px] p-4 mb-5" style={glassDark}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-[12px] flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)' }}
              >
                <ShieldCheck className="w-4.5 h-4.5 text-emerald-400 stroke-[2]" />
              </div>
              <h3 className="text-[12.5px] font-bold text-white">
                {t.upiMonitor || 'Payment Shield'}
              </h3>
            </div>
            <span className="text-[12px] font-black text-emerald-400 font-mono">
              {isSafe ? '88/100' : '34/100'}
            </span>
          </div>
          <p className="text-[10.5px] text-white/45 leading-relaxed pl-1">
            {isSafe
              ? (t.noAlerts || 'No flagged VPAs or suspicious payment patterns detected.')
              : (t.cautionNotice || 'High-risk patterns detected. Do not proceed with this transaction.')}
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2.5 font-black text-[13px] uppercase tracking-wider rounded-[18px] active:scale-[0.97] transition-all cursor-pointer"
          style={{
            height: '52px',
            background: 'linear-gradient(135deg, #E4FF2E 0%, #C4E810 60%, #A8CC18 100%)',
            boxShadow: '0 8px 24px rgba(216,248,40,0.35)',
            color: '#1A0317',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          {t.backBtn || 'Back to Pay Shield'}
        </button>
      </div>
    </div>
  );
}
