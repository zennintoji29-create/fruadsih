import React, { useState, useEffect } from 'react';
import { 
  PhoneOff, PhoneIncoming, ShieldAlert, AlertOctagon, Mic, 
  MicOff, Volume2, Sparkles, X, ChevronRight, CheckCircle2, Shield, PhoneCall 
} from 'lucide-react';

export default function CallScreeningOverlay({ callerNumber = '+919876543210', onClose, onOpenTranscriptAnalyzer }) {
  const [callState, setCallState] = useState('RINGING'); // 'RINGING' | 'CONNECTED_RECORDING' | 'ENDED'
  const [timer, setTimer] = useState(0);
  const [liveTranscript, setLiveTranscript] = useState('');
  const [aiWarning, setAiWarning] = useState(null);

  useEffect(() => {
    let interval;
    if (callState === 'CONNECTED_RECORDING') {
      interval = setInterval(() => {
        setTimer((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [callState]);

  // Simulate incoming live transcript stream after call is picked up
  useEffect(() => {
    if (callState === 'CONNECTED_RECORDING') {
      const timeout1 = setTimeout(() => {
        setLiveTranscript('Caller: "Hello, this is Cyber Crime Branch Mumbai. An arrest warrant is active under your Aadhaar."');
      }, 1500);

      const timeout2 = setTimeout(() => {
        setLiveTranscript('Caller: "Do not disconnect this video call. You must transfer ₹25,000 security bail deposit immediately."');
        setAiWarning('🚨 DIGITAL ARREST DETECTED: Caller is impersonating police/CBI to extort money. Do not transfer funds.');
      }, 4500);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
      };
    }
  }, [callState]);

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-md flex flex-col justify-between p-6 animate-fade-in text-white font-sans select-none" style={{ background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' }}>
      {/* Top Floating Security HUD (CallScreeningService Badge) */}
      <div className="animate-slide-down space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs text-[#b9d175]">
          <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
            Android CallScreeningService Active
          </span>
          <button onClick={onClose} className="p-1 rounded-full bg-white/10 text-white/70 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* High-Risk Red Warning Banner */}
        <div className="p-3.5 rounded-2xl bg-rose-600/30 border border-rose-400 shadow-xl space-y-1">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-rose-300 shrink-0" />
            <div>
              <h4 className="text-xs font-black text-white tracking-wide uppercase">
                ⚠️ SCAMMER ALERT: DIGITAL ARREST / FAKE POLICE
              </h4>
              <p className="text-[10px] text-rose-200">
                Flagged in I4C National Cybercrime Registry • 310 community reports
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Incoming Caller Card */}
      <div className="my-auto text-center space-y-4">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-3xl bg-white/10 border-2 border-rose-400 flex items-center justify-center mx-auto animate-pulse">
            <AlertOctagon className="w-12 h-12 text-rose-300" />
          </div>
          <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 bg-rose-600 text-white font-mono text-[9px] font-black rounded-full border border-[#450c3f] shadow-md">
            RISK: 98%
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white font-mono">{callerNumber}</h3>
          <p className="text-xs text-rose-300 font-semibold mt-0.5">Suspected Fake Police / CBI Extortionist</p>
          {callState === 'CONNECTED_RECORDING' && (
            <p className="text-xs text-[#b9d175] font-mono mt-1 font-bold">
              🔴 In-Call Security Recording: 00:{timer < 10 ? `0${timer}` : timer}
            </p>
          )}
        </div>

        {/* Real-time AI Transcript & Coercion Detection Box */}
        {callState === 'CONNECTED_RECORDING' && (
          <div className="bg-white/10 rounded-2xl p-4 border border-[#b9d175]/30 text-left space-y-2 animate-slide-down shadow-lg">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#b9d175]">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#b9d175]" /> Live AI Phishing Classifier
              </span>
              <span className="text-emerald-300 font-mono">Zero Audio Stored</span>
            </div>

            <p className="text-[11px] text-white italic font-mono bg-black/30 p-2.5 rounded-xl border border-white/10">
              {liveTranscript || 'Listening and transcribing speech in memory...'}
            </p>

            {aiWarning && (
              <div className="p-2.5 rounded-xl bg-rose-600 text-white text-[11px] font-bold animate-pulse shadow-md">
                {aiWarning}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Action Controls */}
      <div className="space-y-3 pb-4">
        {callState === 'RINGING' ? (
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onClose}
              className="py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-rose-900/50 transition-all active:scale-95"
            >
              <PhoneOff className="w-4 h-4" /> Reject & Block
            </button>

            <button
              onClick={() => setCallState('CONNECTED_RECORDING')}
              className="py-4 rounded-2xl text-xs font-black flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 uppercase tracking-wider"
              style={{ background: 'linear-gradient(135deg, #E4FF2E, #C4E810)', color: '#1A0317', fontFamily: 'Outfit, sans-serif' }}
            >
              <Mic className="w-4 h-4 stroke-[2.8]" /> Accept & Record
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <button
              onClick={() => {
                setCallState('ENDED');
                onClose();
              }}
              className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
            >
              <PhoneOff className="w-4 h-4" /> Hang Up & Save Threat Log
            </button>

            <p className="text-[10px] text-center text-white/60">
              🔒 Privacy Guaranteed: Audio is transcribed transiently and discarded without saving raw files.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
