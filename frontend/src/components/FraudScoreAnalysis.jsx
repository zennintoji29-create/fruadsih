import React from 'react';
import { 
  ArrowLeft, MoreVertical, ShieldCheck, Fingerprint, CreditCard, 
  AlertTriangle, CheckCircle2, Lock, Sparkles, Shield 
} from 'lucide-react';

export default function FraudScoreAnalysis({ assessment, onBack }) {
  const score = assessment?.riskScore !== undefined ? (100 - assessment.riskScore) : 78;
  const isSafe = score >= 50;

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] p-4 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white">
      {/* Top Header */}
      <div className="flex items-center justify-between pt-4 pb-1">
        <button 
          onClick={onBack}
          className="p-1.5 rounded-xl hover:bg-[#d9efbd] text-[#450c3f] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-1.5">
          <div className="p-1 rounded-lg bg-[#450c3f] text-[#b9d175]">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-bold font-heading text-[#450c3f] text-sm">Verix</span>
        </div>
        <button className="p-1.5 rounded-xl hover:bg-[#d9efbd] text-[#450c3f] transition-all">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Header Titles */}
      <div className="text-center px-2 space-y-1">
        <h1 className="text-xl font-bold text-[#450c3f] font-heading">Analysis Results</h1>
        <p className="text-xs text-[#5e4d6a] font-medium leading-relaxed max-w-xs mx-auto">
          Your comprehensive security breakdown. Review the details below to understand your current standing and cyber protection level.
        </p>
      </div>

      {/* Main OVERALL SCORE Circular Gauge Card */}
      <div className="bg-white rounded-3xl p-6 border border-[#e5ebc5] shadow-sm text-center flex flex-col items-center justify-center space-y-4">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#5e4d6a] font-mono">OVERALL SCORE</span>

        {/* SVG Circle Gauge */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="#e5ebc5"
              strokeWidth="7"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke={isSafe ? '#450c3f' : '#d92d20'}
              strokeWidth="7"
              strokeDasharray="263.8"
              strokeDashoffset={263.8 * (1 - score / 100)}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black font-heading text-[#450c3f] leading-none">{score}</span>
            <span className="text-[10px] font-bold text-[#5e4d6a] mt-0.5">/100</span>
          </div>
        </div>

        {/* Standing Badge */}
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
          isSafe ? 'bg-[#d9efbd] text-[#450c3f]' : 'bg-rose-100 text-rose-800'
        }`}>
          {isSafe ? <CheckCircle2 className="w-3.5 h-3.5 text-[#6b8f1a]" /> : <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />}
          {isSafe ? 'Good Standing' : 'High Risk Alert'}
        </div>
      </div>

      {/* Identity Safety Card */}
      <div className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-sm space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#d9efbd] text-[#450c3f]">
              <Fingerprint className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#1e112a]">Identity Safety</h3>
            </div>
          </div>
          <span className="text-xs font-bold text-[#450c3f] font-mono">92/100</span>
        </div>
        <p className="text-xs text-[#5e4d6a] leading-relaxed pl-1">
          Excellent. Your personal identifiable information (PII) is well-secured across monitored platforms. No recent data breaches detected involving your primary identity.
        </p>
      </div>

      {/* Back to Protection button */}
      <button
        onClick={onBack}
        className="w-full py-3.5 bg-[#450c3f] hover:bg-[#33082e] text-[#f5fbda] rounded-2xl text-xs font-bold transition-all shadow-md active:scale-98 mt-auto"
      >
        Back to Pay Shield
      </button>
    </div>
  );
}
