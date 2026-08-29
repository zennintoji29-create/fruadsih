import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle2, 
  XCircle, RefreshCw, Filter, Search, Database, Users, TrendingUp, 
  Sparkles, Lock, ArrowUpRight, Clock, User, Phone, Check, AlertOctagon, 
  Terminal, MapPin, Mail, Key, Landmark, ArrowRight, LogOut, Shield,
  Radio, BellRing, FileAudio, Upload, Mic, Play, Square, FileText, ChevronRight,
  ExternalLink, Eye, PlusCircle, AlertCircle, History, Trash2, Archive, RotateCcw
} from 'lucide-react';

export default function BankPortal({ backendUrl }) {
  // Portal Flow Step: 'LOGIN' | 'STATION_SETUP' | 'CONSOLE'
  const [currentStep, setCurrentStep] = useState(() => {
    try {
      const saved = localStorage.getItem('verix_bank_officer');
      return saved ? 'CONSOLE' : 'LOGIN';
    } catch (e) {
      return 'LOGIN';
    }
  });

  // Step 1: Login Credentials
  const [loginEmail, setLoginEmail] = useState('officer.compliance@sbi.co.in');
  const [loginPassword, setLoginPassword] = useState('cyber123');
  const [authError, setAuthError] = useState('');

  // Step 2: Officer Station & Bank Details
  const [officerProfile, setOfficerProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('verix_bank_officer');
      return saved ? JSON.parse(saved) : {
        name: 'Rajesh Verma',
        bankName: 'State Bank of India',
        postalCode: '560001',
        city: 'Bengaluru, Karnataka',
        stationCode: 'BLR-CYBER-NODAL-042'
      };
    } catch (e) {
      return {
        name: 'Rajesh Verma',
        bankName: 'State Bank of India',
        postalCode: '560001',
        city: 'Bengaluru, Karnataka',
        stationCode: 'BLR-CYBER-NODAL-042'
      };
    }
  });

  // Main Work Console State
  // Navigation tabs: 'disputes' | 'history' | 'database_search' | 'audio_lab' | 'sim_carrier' | 'advisories'
  const [activeTab, setActiveTab] = useState('disputes');
  const [appeals, setAppeals] = useState([]);
  const [stats, setStats] = useState(null);
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // 'ALL' | 'PENDING' | 'RESOLVED'
  const [selectedThreatType, setSelectedThreatType] = useState('ALL'); // 'ALL' | 'VPA' | 'PHONE'

  // Cleared / Archived Ticket IDs (persisted locally so cleared resolved tickets stay out of active queue)
  const [clearedTicketIds, setClearedTicketIds] = useState(() => {
    try {
      const saved = localStorage.getItem('verix_cleared_tickets');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Selected Ticket for Deep-Dive Modal
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Selected Threat Record for Enlarged Detail Inspection Modal
  const [selectedThreatRecord, setSelectedThreatRecord] = useState(null);

  // Audio Lab state
  const [audioPhoneInput, setAudioPhoneInput] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [audioAnalyzing, setAudioAnalyzing] = useState(false);
  const [audioResult, setAudioResult] = useState(null);
  const [audioRecording, setAudioRecording] = useState(false);
  const [audioTimer, setAudioTimer] = useState(0);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioTimerRef = useRef(null);

  // SIM Swap Simulation state
  const [simAlertTriggered, setSimAlertTriggered] = useState(false);
  const [simImsiLog, setSimImsiLog] = useState([]);

  // New Threat Modal state
  const [showAddThreatModal, setShowAddThreatModal] = useState(false);
  const [newThreatIdentifier, setNewThreatIdentifier] = useState('');
  const [newThreatCategory, setNewThreatCategory] = useState('DIGITAL_ARREST');
  const [newThreatDetails, setNewThreatDetails] = useState('');

  const popularBanks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Punjab National Bank',
    'Axis Bank',
    'Bank of Baroda',
    'Canara Bank',
    'NPCI Cyber Security Operations (CSOC)'
  ];

  // ── Step 1 Handler: Authenticate ──
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setAuthError('Please enter valid officer credentials');
      return;
    }
    setAuthError('');
    setCurrentStep('STATION_SETUP');
  };

  // ── Step 2 Handler: Save Station & Enter Console ──
  const handleStationSetupSubmit = (e) => {
    e.preventDefault();
    if (!officerProfile.name.trim() || !officerProfile.postalCode.trim() || !officerProfile.city.trim()) {
      alert('Please fill out all station details.');
      return;
    }
    try {
      localStorage.setItem('verix_bank_officer', JSON.stringify(officerProfile));
    } catch (e) {}
    setCurrentStep('CONSOLE');
  };

  // ── Step 3 Handler: Clean Logout (Req 10) ──
  const handleLogout = () => {
    if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try { mediaRecorderRef.current.stop(); } catch (e) {}
    }
    try {
      localStorage.removeItem('verix_bank_officer');
    } catch (e) {}
    setCurrentStep('LOGIN');
  };

  // ── Real-Time Work Page Data Fetching ──
  const fetchPortalData = async () => {
    try {
      const appealRes = await fetch(`${backendUrl}/api/v1/institution/appeals`, { cache: 'no-store' });
      if (appealRes.ok) {
        const appealData = await appealRes.json();
        if (appealData.appeals && Array.isArray(appealData.appeals)) {
          setAppeals(appealData.appeals);
        }
      }

      const analyticsRes = await fetch(`${backendUrl}/api/v1/institution/analytics-overview`, { cache: 'no-store' }).catch(() => null);
      if (analyticsRes && analyticsRes.ok) {
        const analyticsData = await analyticsRes.json();
        if (analyticsData.analytics) {
          setStats(analyticsData.analytics);
        }
      }

      const threatRes = await fetch(`${backendUrl}/api/v1/threat-intel/stats`, { cache: 'no-store' }).catch(() => null);
      if (threatRes && threatRes.ok) {
        const threatData = await threatRes.json();
        if (threatData.threats) {
          setThreats(threatData.threats);
        }
      }
    } catch (err) {
      console.warn('[Bank Portal Sync]:', err);
    }
  };

  const handleResolveAppeal = async (appealId, resolution) => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/institution/appeals/${appealId}/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resolution,
          reviewerNotes: resolution === 'APPROVED_WHITELISTED' 
            ? `Verified genuine transfer. Whitelisted by ${officerProfile.name} (${officerProfile.bankName} - ${officerProfile.city})` 
            : `Confirmed malicious extortion handle. Blacklisted by ${officerProfile.name} (${officerProfile.bankName})`
        })
      });
      if (res.ok) {
        setActionSuccess(`Ticket ${appealId} resolved as ${resolution === 'APPROVED_WHITELISTED' ? 'APPROVED & WHITELISTED' : 'REJECTED & BLOCKED'}!`);
      } else {
        setActionSuccess(`Updated ticket ${appealId}`);
      }
      setTimeout(() => setActionSuccess(''), 3500);
      if (selectedTicket && selectedTicket.appealId === appealId) {
        setSelectedTicket(prev => prev ? { ...prev, status: resolution } : null);
      }
      fetchPortalData();
    } catch (err) {
      setAppeals(appeals.map(a => a.appealId === appealId ? { ...a, status: resolution } : a));
      setActionSuccess(`Ticket ${appealId} resolved!`);
      setTimeout(() => setActionSuccess(''), 3500);
    }
  };

  // ── Add Threat to Database ──
  const handleAddNewThreat = async (e) => {
    e.preventDefault();
    if (!newThreatIdentifier.trim()) return;

    try {
      const isVpa = newThreatIdentifier.includes('@');
      const res = await fetch(`${backendUrl}/api/v1/threat-intel/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: newThreatIdentifier.trim(),
          type: isVpa ? 'VPA' : 'PHONE',
          category: newThreatCategory,
          details: newThreatDetails.trim() || `Flagged by ${officerProfile.name} (${officerProfile.bankName})`,
          reportedBy: officerProfile.name
        })
      });
      if (res.ok) {
        setActionSuccess(`Threat identifier ${newThreatIdentifier} added to database registry!`);
        setShowAddThreatModal(false);
        setNewThreatIdentifier('');
        setNewThreatDetails('');
        fetchPortalData();
      }
    } catch (err) {
      alert('Failed to register threat: ' + err.message);
    }
  };

  // ── Trigger SIM Swap Simulation Event (Req 7) ──
  const handleTriggerSimSwap = () => {
    setSimAlertTriggered(true);
    const newLog = {
      id: `SIM-EVT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString(),
      event: 'IMSI_CHANGE_DETECTED',
      phone: '+91 94775 30475',
      carrier: 'Jio 5G -> Airtel (Roaming Port)',
      riskLevel: 'CRITICAL',
      details: 'Physical SIM swap detected within 4 hours. Automated 24-hour cooling lock recommended by RBI framework.'
    };
    setSimImsiLog(prev => [newLog, ...prev]);
  };

  // ── Audio Lab Recording & Analysis (Req 4) ──
  const startAudioLabRecording = async () => {
    try {
      setAudioResult(null);
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        stream.getTracks().forEach(t => t.stop());

        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          await analyzeAudioInLab(reader.result, 'mic_sample.webm');
        };
      };

      mediaRecorder.start(250);
      setAudioRecording(true);
      setAudioTimer(0);

      audioTimerRef.current = setInterval(() => {
        setAudioTimer(t => {
          if (t >= 30) {
            stopAudioLabRecording();
            return 30;
          }
          return t + 1;
        });
      }, 1000);
    } catch (err) {
      alert('Microphone error: ' + err.message);
    }
  };

  const stopAudioLabRecording = () => {
    setAudioRecording(false);
    if (audioTimerRef.current) clearInterval(audioTimerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try { mediaRecorderRef.current.stop(); } catch (e) {}
    }
  };

  const analyzeAudioInLab = async (base64Data, fileName) => {
    setAudioAnalyzing(true);
    try {
      const res = await fetch(`${backendUrl}/api/v1/voice-phish/upload-recording`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64: base64Data,
          audioFileName: fileName || 'mic_sample.webm',
          callerNumber: audioPhoneInput ? audioPhoneInput.trim() : null,
          durationSeconds: 30
        })
      });
      const data = await res.json();
      if (data.data) {
        setAudioResult(data.data);
        if (data.data.fileMetadata?.savedToThreatRegistry) {
          fetchPortalData();
        }
      }
    } catch (err) {
      alert('Voice AI analysis error: ' + err.message);
    } finally {
      setAudioAnalyzing(false);
    }
  };

  // ── Clear Resolved / Completed Tickets Handler ──
  const handleClearResolved = () => {
    const resolvedIds = appeals
      .filter(a => a.status === 'APPROVED_WHITELISTED' || a.status === 'APPROVED' || a.status === 'REJECTED')
      .map(a => a.appealId);

    if (resolvedIds.length === 0) {
      alert('No resolved tickets to clear.');
      return;
    }

    const updated = Array.from(new Set([...clearedTicketIds, ...resolvedIds]));
    setClearedTicketIds(updated);
    try {
      localStorage.setItem('verix_cleared_tickets', JSON.stringify(updated));
    } catch (e) {}
    setActionSuccess(`✓ Cleared ${resolvedIds.length} resolved tickets from active queue. Retained in Disputes History.`);
    setTimeout(() => setActionSuccess(''), 4000);
  };

  // ── Restore Ticket to Active Queue Handler ──
  const handleRestoreTicket = (appealId) => {
    const updated = clearedTicketIds.filter(id => id !== appealId);
    setClearedTicketIds(updated);
    try {
      localStorage.setItem('verix_cleared_tickets', JSON.stringify(updated));
    } catch (e) {}
    setActionSuccess(`Ticket ${appealId} restored to active queue.`);
    setTimeout(() => setActionSuccess(''), 3500);
  };

  // ── Clear Entire History Archive Handler ──
  const handlePurgeHistory = () => {
    if (!window.confirm('Are you sure you want to reset cleared ticket filters?')) return;
    setClearedTicketIds([]);
    try {
      localStorage.removeItem('verix_cleared_tickets');
    } catch (e) {}
    setActionSuccess('History filters reset.');
    setTimeout(() => setActionSuccess(''), 3500);
  };

  useEffect(() => {
    if (currentStep === 'CONSOLE') {
      setLoading(true);
      fetchPortalData().finally(() => setLoading(false));
      const interval = setInterval(fetchPortalData, 3000);
      return () => clearInterval(interval);
    }
  }, [currentStep, backendUrl]);

  // Active queue appeals (excluding cleared tickets)
  const activeAppeals = appeals.filter(a => !clearedTicketIds.includes(a.appealId));

  // Filters for Active Appeals Queue
  const filteredAppeals = activeAppeals.filter(a => {
    const matchesSearch = 
      (a.appealId && a.appealId.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (a.vpa && a.vpa.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (a.contactEmail && a.contactEmail.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (a.reason && a.reason.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (selectedFilter === 'PENDING') return a.status === 'PENDING_REVIEW';
    if (selectedFilter === 'RESOLVED') return a.status !== 'PENDING_REVIEW';
    return true;
  });

  // All historical / resolved disputes (for History tab)
  const historyAppeals = appeals.filter(a => {
    const isResolved = a.status !== 'PENDING_REVIEW';
    if (!isResolved) return false;
    const matchesSearch = 
      (a.appealId && a.appealId.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (a.vpa && a.vpa.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (a.contactEmail && a.contactEmail.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (a.reason && a.reason.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  // Filters for Threat Registry (Req 3)
  const filteredThreats = threats.filter(t => {
    const matchesSearch = 
      (t.identifier && t.identifier.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (t.category && t.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (t.details && t.details.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;
    if (selectedThreatType === 'VPA') return t.type === 'VPA' || t.identifier?.includes('@');
    if (selectedThreatType === 'PHONE') return t.type === 'PHONE' || !t.identifier?.includes('@');
    return true;
  });

  const pendingCount = activeAppeals.filter(a => a.status === 'PENDING_REVIEW').length;
  const activeResolvedCount = activeAppeals.filter(a => a.status !== 'PENDING_REVIEW').length;
  const totalResolvedHistoryCount = appeals.filter(a => a.status !== 'PENDING_REVIEW').length;

  // ══════════════════════════════════════════════════════════════
  // VIEW 1: STEP 1 — LOGIN
  // ══════════════════════════════════════════════════════════════
  if (currentStep === 'LOGIN') {
    return (
      <div className="w-full max-w-md mx-auto p-6 space-y-6 text-[#F0F3F6] font-sans selection:bg-[#00F0A0] selection:text-[#090C10] animate-fade-in my-auto">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#10141C] border border-white/[0.1] mx-auto flex items-center justify-center text-[#00F0A0] shadow-xl">
            <Building2 className="w-7 h-7 stroke-[2.2]" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            VERIX Institutional Admin
          </h1>
          <p className="text-xs text-[#8494A8] font-mono">
            Bank &amp; PSP Pre-Transaction Compliance Desk
          </p>
        </div>

        <form onSubmit={handleLoginSubmit} className="p-6 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-2xl space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00F0A0]" /> Officer Work Email
            </label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="officer@sbi.co.in"
              className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#00F0A0]/60 transition-all font-mono"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#00F0A0]" /> Security PIN / Password
            </label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#00F0A0]/60 transition-all font-mono"
              required
            />
          </div>

          {authError && (
            <p className="text-xs text-rose-400 font-mono">{authError}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
          >
            <span>Proceed to Station Setup</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════
  // VIEW 2: STEP 2 — STATION SETUP
  // ══════════════════════════════════════════════════════════════
  if (currentStep === 'STATION_SETUP') {
    return (
      <div className="w-full max-w-lg mx-auto p-6 space-y-6 text-[#F0F3F6] font-sans selection:bg-[#00F0A0] selection:text-[#090C10] animate-fade-in my-auto">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#10141C] border border-white/[0.1] mx-auto flex items-center justify-center text-[#00F0A0]">
            <Landmark className="w-6 h-6 stroke-[2.2]" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Officer Station Setup
          </h1>
          <p className="text-xs text-[#8494A8] font-mono">Configure branch jurisdiction and nodal terminal</p>
        </div>

        <form onSubmit={handleStationSetupSubmit} className="p-6 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-2xl space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#00F0A0]" /> Officer Full Name
            </label>
            <input
              type="text"
              value={officerProfile.name}
              onChange={(e) => setOfficerProfile({ ...officerProfile, name: e.target.value })}
              className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#00F0A0]/60 transition-all"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
              <Landmark className="w-3.5 h-3.5 text-[#00F0A0]" /> Bank / Institutional Entity
            </label>
            <select
              value={officerProfile.bankName}
              onChange={(e) => setOfficerProfile({ ...officerProfile, bankName: e.target.value })}
              className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#00F0A0]/60 transition-all font-mono"
            >
              {popularBanks.map(b => <option key={b} value={b} className="bg-[#10141C] text-white">{b}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00F0A0]" /> Postal / PIN Code
              </label>
              <input
                type="text"
                value={officerProfile.postalCode}
                onChange={(e) => setOfficerProfile({ ...officerProfile, postalCode: e.target.value })}
                className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2.5 px-3.5 text-xs font-mono text-white focus:outline-none focus:border-[#00F0A0]/60 transition-all"
                required
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#00F0A0]" /> City / District
              </label>
              <input
                type="text"
                value={officerProfile.city}
                onChange={(e) => setOfficerProfile({ ...officerProfile, city: e.target.value })}
                className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2.5 px-3.5 text-xs text-white focus:outline-none focus:border-[#00F0A0]/60 transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg active:scale-98 transition-all cursor-pointer"
          >
            <span>Enter Live Work Console</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════
  // VIEW 3: STEP 3 — MAIN WORK CONSOLE WITH LEFT SIDEBAR (Req 6)
  // ══════════════════════════════════════════════════════════════
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6 text-[#F0F3F6] font-sans selection:bg-[#00F0A0] selection:text-[#090C10] animate-fade-in">
      
      {/* ── TOP HEADER COMMAND BAR ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#171E2B] border border-white/[0.12] flex items-center justify-center text-[#00F0A0] shadow-md shrink-0">
            <Landmark className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {officerProfile.bankName}
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#00F0A0]/15 text-[#00F0A0] border border-[#00F0A0]/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0A0] animate-pulse" />
                COMMAND DESK
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#8494A8] mt-0.5 font-mono">
              <span className="flex items-center gap-1 text-[#BAC5D5]">
                <User className="w-3 h-3 text-[#00F0A0]" /> {officerProfile.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" /> {officerProfile.city} ({officerProfile.postalCode})
              </span>
            </div>
          </div>
        </div>

        {/* Live Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={fetchPortalData}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono font-semibold text-[#BAC5D5] transition-all active:scale-95 cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#00F0A0] ${loading ? 'animate-spin' : ''}`} />
            <span>Sync DB</span>
          </button>
          <button
            onClick={() => setCurrentStep('STATION_SETUP')}
            className="px-3 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono text-[#BAC5D5] transition-all cursor-pointer"
          >
            Switch Station
          </button>
          <button
            onClick={handleLogout}
            className="p-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 transition-all cursor-pointer"
            title="Log Out & Stop Sessions"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── ACTION NOTIFICATION TOAST ── */}
      {actionSuccess && (
        <div className="p-3.5 rounded-xl bg-[#00F0A0]/15 border border-[#00F0A0]/40 text-[#00F0A0] text-xs font-mono font-bold flex items-center gap-2 animate-slide-down shadow-lg">
          <CheckCircle2 className="w-4 h-4 text-[#00F0A0]" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* ── MAIN WORKSPACE GRID WITH LEFT SIDEBAR (Req 6) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT SIDEBAR NAVIGATION (Req 6) */}
        <div className="lg:col-span-3 space-y-2">
          <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-1.5 shadow-md">
            <span className="text-[10px] font-mono font-bold uppercase text-[#546274] px-2 block mb-2 tracking-wider">
              Control Modules
            </span>

            {[
              { id: 'disputes', label: 'Disputes & Appeals', icon: FileText, count: pendingCount > 0 ? `${pendingCount} Pending` : activeAppeals.length, badgeColor: pendingCount > 0 ? 'bg-amber-400/25 text-amber-300 border border-amber-400/30' : 'bg-white/10 text-white/70' },
              { id: 'history', label: 'Disputes History', icon: History, count: totalResolvedHistoryCount, badgeColor: 'bg-emerald-400/20 text-emerald-300' },
              { id: 'database_search', label: 'Database Search', icon: Database, count: threats.length, badgeColor: 'bg-cyan-400/20 text-cyan-300' },
              { id: 'audio_lab', label: 'Voice Phishing Lab', icon: Mic, count: 'AI', badgeColor: 'bg-purple-400/20 text-purple-300' },
              { id: 'sim_carrier', label: 'SIM Swap Monitor', icon: Radio, count: simImsiLog.length, badgeColor: 'bg-emerald-400/20 text-emerald-300' },
              { id: 'advisories', label: 'Security Advisories', icon: BellRing, count: '5', badgeColor: 'bg-rose-400/20 text-rose-300' }
            ].map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full p-3 rounded-xl text-left text-xs font-mono font-bold flex items-center justify-between transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#171E2B] text-[#00F0A0] border border-[#00F0A0]/30 shadow-sm' 
                      : 'text-[#8494A8] hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#00F0A0]' : 'text-[#546274]'}`} />
                    <span>{item.label}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${item.badgeColor}`}>
                    {item.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Stats Widget */}
          <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase text-[#546274] block tracking-wider">
              Real-Time Telemetry
            </span>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8494A8]">Blacklisted VPAs:</span>
                <span className="text-white font-bold">{threats.filter(t => t.type === 'VPA' || t.identifier?.includes('@')).length}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8494A8]">Blacklisted Numbers:</span>
                <span className="text-white font-bold">{threats.filter(t => t.type === 'PHONE' || !t.identifier?.includes('@')).length}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8494A8]">Pending Disputes:</span>
                <span className="text-amber-400 font-bold">{pendingCount}</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#8494A8]">Archived History:</span>
                <span className="text-emerald-400 font-bold">{totalResolvedHistoryCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT MAIN PANEL */}
        <div className="lg:col-span-9 space-y-4">

          {/* ══════════════════════════════════════════════════════════
              TAB 1: DISPUTES & APPEALS ACTIVE QUEUE
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'disputes' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#00F0A0]" />
                    Live Dispute Appeals Queue
                  </h2>
                  <p className="text-[11px] text-[#738294] font-mono mt-0.5">Click any ticket for full user explanation and 1-click clearance.</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#546274] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search active tickets..."
                      className="bg-[#090C10] border border-white/[0.09] rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/50"
                    />
                  </div>
                </div>
              </div>

              {/* Filter Pills + Clear Resolved Button */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {[
                    { id: 'ALL', label: `Active Queue (${activeAppeals.length})` },
                    { id: 'PENDING', label: `Pending Review (${pendingCount})` },
                    { id: 'RESOLVED', label: `Resolved (${activeResolvedCount})` }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFilter(f.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedFilter === f.id
                          ? 'bg-[#00F0A0]/15 text-[#00F0A0] font-bold border border-[#00F0A0]/30'
                          : 'bg-[#090C10] text-[#8494A8] border border-white/[0.05] hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                {/* Clear Completed / Resolved Button */}
                {activeResolvedCount > 0 && (
                  <button
                    onClick={handleClearResolved}
                    className="px-3.5 py-1.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/35 text-rose-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer shadow-sm"
                    title="Clear completed/resolved tickets and keep only pending ones"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Completed ({activeResolvedCount})</span>
                  </button>
                )}
              </div>

              {/* Tickets List */}
              <div className="space-y-3">
                {filteredAppeals.length === 0 ? (
                  <div className="p-12 text-center rounded-2xl bg-[#090C10] border border-white/[0.05] space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#00F0A0] mx-auto opacity-70" />
                    <p className="text-sm font-bold text-white">No Active Pending Tickets</p>
                    <p className="text-xs text-[#738294]">
                      {clearedTicketIds.length > 0 
                        ? `${clearedTicketIds.length} completed tickets are archived in the Disputes History tab.` 
                        : 'Submit a false positive review ticket from the mobile app to see it live here.'}
                    </p>
                    {clearedTicketIds.length > 0 && (
                      <button
                        onClick={() => setActiveTab('history')}
                        className="mt-2 px-3.5 py-1.5 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono text-[#00F0A0] inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <History className="w-3.5 h-3.5" />
                        <span>View Archived Disputes History →</span>
                      </button>
                    )}
                  </div>
                ) : (
                  filteredAppeals.map((appeal) => (
                    <div
                      key={appeal.appealId}
                      className="p-4 sm:p-5 rounded-2xl bg-[#090C10] border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
                    >
                      {/* Ticket Details - Clickable (Req 5) */}
                      <div 
                        className="space-y-2 flex-1 cursor-pointer"
                        onClick={() => setSelectedTicket(appeal)}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#171E2B] text-[#00F0A0] border border-[#00F0A0]/25">
                            {appeal.appealId}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                            appeal.status === 'APPROVED_WHITELISTED' || appeal.status === 'APPROVED'
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                              : appeal.status === 'REJECTED'
                                ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                                : 'bg-amber-500/15 text-amber-300 border-amber-500/30 animate-pulse'
                          }`}>
                            {appeal.status.replace(/_/g, ' ')}
                          </span>
                          <span className="text-[10px] font-mono text-[#546274] ml-auto">
                            {appeal.submittedAt ? new Date(appeal.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently'}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-[11px] font-mono text-[#738294]">Target Recipient VPA:</span>
                            <span className="text-sm font-mono font-bold text-white">{appeal.vpa || 'Unknown VPA'}</span>
                            {appeal.amount ? (
                              <span className="text-xs font-mono font-bold text-[#00F0A0] ml-2">
                                (₹{Number(appeal.amount).toLocaleString('en-IN')})
                              </span>
                            ) : null}
                          </div>
                          <p className="text-xs text-[#BAC5D5] mt-1 font-medium leading-relaxed line-clamp-2">
                            "{appeal.reason}"
                          </p>
                        </div>

                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#00F0A0] hover:underline pt-1">
                          <Eye className="w-3 h-3" /> Click to inspect full user telemetry &amp; dispute details →
                        </div>
                      </div>

                      {/* Decision Buttons */}
                      {appeal.status === 'PENDING_REVIEW' ? (
                        <div className="flex sm:flex-col md:flex-row items-center gap-2 shrink-0 pt-2 md:pt-0">
                          <button
                            onClick={() => handleResolveAppeal(appeal.appealId, 'APPROVED_WHITELISTED')}
                            className="px-4 py-2.5 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] font-mono font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                          >
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Approve &amp; Whitelist</span>
                          </button>
                          <button
                            onClick={() => handleResolveAppeal(appeal.appealId, 'REJECTED')}
                            className="px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/35 text-rose-300 font-mono font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                          >
                            <XCircle className="w-4 h-4" />
                            <span>Reject &amp; Block</span>
                          </button>
                        </div>
                      ) : (
                        <div className="shrink-0 text-right font-mono text-xs text-[#738294]">
                          ✓ Action Resolved
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 1.5: DISPUTES HISTORY & COMPLETED ARCHIVES
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'history' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <History className="w-4 h-4 text-[#00F0A0]" />
                    Disputes &amp; Resolution History Archive
                  </h2>
                  <p className="text-[11px] text-[#738294] font-mono mt-0.5">
                    Complete permanent log of all approved, whitelisted, and rejected cyber disputes.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#546274] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search history records..."
                      className="bg-[#090C10] border border-white/[0.09] rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/50"
                    />
                  </div>
                </div>
              </div>

              {/* History Summary Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#090C10] border border-white/[0.06] text-center">
                  <span className="text-[10px] font-mono uppercase text-[#738294] block">Total Resolved</span>
                  <span className="text-lg font-bold text-white font-mono">{historyAppeals.length}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#090C10] border border-emerald-500/20 text-center">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 block">Whitelisted / Approved</span>
                  <span className="text-lg font-bold text-emerald-300 font-mono">
                    {historyAppeals.filter(a => a.status === 'APPROVED_WHITELISTED' || a.status === 'APPROVED').length}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#090C10] border border-rose-500/20 text-center">
                  <span className="text-[10px] font-mono uppercase text-rose-400 block">Blocked / Rejected</span>
                  <span className="text-lg font-bold text-rose-300 font-mono">
                    {historyAppeals.filter(a => a.status === 'REJECTED').length}
                  </span>
                </div>
              </div>

              {/* History List */}
              <div className="space-y-3">
                {historyAppeals.length === 0 ? (
                  <div className="p-12 text-center rounded-2xl bg-[#090C10] border border-white/[0.05] space-y-2">
                    <History className="w-8 h-8 text-[#546274] mx-auto opacity-70" />
                    <p className="text-sm font-bold text-white">No Historical Dispute Records</p>
                    <p className="text-xs text-[#738294]">Resolved dispute cases will automatically be archived here.</p>
                  </div>
                ) : (
                  historyAppeals.map((appeal) => (
                    <div
                      key={appeal.appealId}
                      className="p-4 sm:p-5 rounded-2xl bg-[#090C10] border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
                    >
                      <div 
                        className="space-y-2 flex-1 cursor-pointer"
                        onClick={() => setSelectedTicket(appeal)}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#171E2B] text-[#00F0A0] border border-[#00F0A0]/25">
                            {appeal.appealId}
                          </span>
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                            appeal.status === 'APPROVED_WHITELISTED' || appeal.status === 'APPROVED'
                              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                              : 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                          }`}>
                            {appeal.status.replace(/_/g, ' ')}
                          </span>
                          <span className="text-[10px] font-mono text-[#546274] ml-auto">
                            {appeal.submittedAt ? new Date(appeal.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently'}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-[11px] font-mono text-[#738294]">Target Recipient VPA:</span>
                            <span className="text-sm font-mono font-bold text-white">{appeal.vpa || 'Unknown VPA'}</span>
                            {appeal.amount ? (
                              <span className="text-xs font-mono font-bold text-[#00F0A0] ml-2">
                                (₹{Number(appeal.amount).toLocaleString('en-IN')})
                              </span>
                            ) : null}
                          </div>
                          <p className="text-xs text-[#BAC5D5] mt-1 font-medium leading-relaxed">
                            "{appeal.reason}"
                          </p>
                          {appeal.reviewerNotes && (
                            <p className="text-[11px] font-mono text-[#00F0A0] mt-1 bg-[#10141C] p-2 rounded-lg border border-[#00F0A0]/20">
                              🔒 Officer Audit Note: {appeal.reviewerNotes}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex sm:flex-col md:flex-row items-center gap-2 shrink-0 pt-2 md:pt-0">
                        {clearedTicketIds.includes(appeal.appealId) && (
                          <button
                            onClick={() => handleRestoreTicket(appeal.appealId)}
                            className="px-3 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono text-[#BAC5D5] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
                            title="Restore back to active disputes queue"
                          >
                            <RotateCcw className="w-3.5 h-3.5 text-[#00F0A0]" />
                            <span>Restore to Queue</span>
                          </button>
                        )}
                        <button
                          onClick={() => setSelectedTicket(appeal)}
                          className="px-3 py-2 rounded-xl bg-[#00F0A0]/15 hover:bg-[#00F0A0]/25 border border-[#00F0A0]/30 text-xs font-mono text-[#00F0A0] flex items-center gap-1.5 transition-all cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Telemetry</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 2: DATABASE SEARCH TABULAR VIEW (Req 3)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'database_search' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#00F0A0]" />
                    National Threat Intelligence Registry (I4C &amp; Sanchar Saathi)
                  </h2>
                  <p className="text-[11px] text-[#738294] font-mono mt-0.5">Filter by UPI ID vs +91 Phone numbers in tabular form.</p>
                </div>

                <button
                  onClick={() => setShowAddThreatModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add Threat Record</span>
                </button>
              </div>

              {/* Filter Pills: UPI ID vs Phone (+91) (Req 3) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase text-[#738294]">Type Filter:</span>
                  {[
                    { id: 'ALL', label: `All (${threats.length})` },
                    { id: 'VPA', label: 'UPI IDs Only' },
                    { id: 'PHONE', label: 'Phone Numbers (+91) Only' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedThreatType(f.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedThreatType === f.id
                          ? 'bg-[#00F0A0]/15 text-[#00F0A0] font-bold border border-[#00F0A0]/30'
                          : 'bg-[#090C10] text-[#8494A8] border border-white/[0.05] hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-[#546274] absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search +91 phone or VPA..."
                    className="bg-[#090C10] border border-white/[0.09] rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/50 w-64"
                  />
                </div>
              </div>

              {/* Tabular Form View (Req 3) */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#090C10] text-[#738294] uppercase text-[10px] tracking-wider border-b border-white/[0.06]">
                    <tr>
                      <th className="py-3 px-4">Identifier (VPA / Phone)</th>
                      <th className="py-3 px-4">Type</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Risk Score</th>
                      <th className="py-3 px-4">Source</th>
                      <th className="py-3 px-4">Details</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] bg-[#090C10]/60">
                    {filteredThreats.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-8 text-center text-[#738294]">
                          No threat records found matching current query.
                        </td>
                      </tr>
                    ) : (
                      filteredThreats.map((t) => (
                        <tr 
                          key={t.id || t.identifier} 
                          onClick={() => setSelectedThreatRecord(t)}
                          className="hover:bg-white/[0.05] transition-all cursor-pointer group"
                        >
                          <td className="py-3 px-4 font-bold text-white group-hover:text-[#00F0A0] transition-colors">
                            {t.identifier}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              t.type === 'VPA' || t.identifier?.includes('@')
                                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                                : 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                            }`}>
                              {t.type === 'VPA' || t.identifier?.includes('@') ? 'UPI VPA' : 'PHONE'}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-rose-300 font-bold">
                            {t.category}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              (t.riskScore || 0) >= 80 
                                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                                : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            }`}>
                              {t.riskScore || 90}% THREAT
                            </span>
                          </td>
                          <td className="py-3 px-4 text-[#8494A8] text-[11px]">
                            {t.source || 'I4C 1930'}
                          </td>
                          <td className="py-3 px-4 text-[#BAC5D5] text-[11px] max-w-xs truncate">
                            {t.details}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <span className="text-[10px] font-mono text-[#00F0A0] group-hover:underline flex items-center justify-end gap-1">
                              <Eye className="w-3 h-3" /> Inspect
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 3: VOICE PHISHING & AUDIO LAB (Req 4)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'audio_lab' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="pb-3 border-b border-white/[0.06]">
                <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <Mic className="w-4 h-4 text-[#00F0A0]" />
                  Voice Phishing Lab &amp; Auto-Registry Engine
                </h2>
                <p className="text-[11px] text-[#738294] font-mono mt-0.5">
                  Record live audio or upload speech file + optional phone number to analyze with Groq Whisper &amp; auto-save threat score.
                </p>
              </div>

              {/* Optional Phone Number Input (Req 4) */}
              <div className="p-4 rounded-xl bg-[#090C10] border border-white/[0.08] space-y-2">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#00F0A0]" /> Associated Caller Phone Number (Optional):
                </label>
                <input
                  type="text"
                  value={audioPhoneInput}
                  onChange={(e) => setAudioPhoneInput(e.target.value)}
                  placeholder="e.g. +91 94775 30475 (If threat detected, number will automatically register in DB)"
                  className="w-full bg-[#10141C] border border-white/[0.1] rounded-xl py-2 px-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/60"
                />
              </div>

              {/* Recording & Upload Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mic Record Card */}
                <div className="p-5 rounded-xl bg-[#090C10] border border-white/[0.08] text-center space-y-3">
                  <div className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center ${audioRecording ? 'bg-rose-500/20 text-rose-400 border border-rose-500 animate-pulse' : 'bg-[#171E2B] text-[#00F0A0]'}`}>
                    <Mic className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono">
                      {audioRecording ? `Recording (${audioTimer}s)` : 'Live Microphone Stream'}
                    </h3>
                    <p className="text-[10px] text-[#738294] font-mono mt-0.5">Capture real-time voice speech</p>
                  </div>
                  <button
                    onClick={audioRecording ? stopAudioLabRecording : startAudioLabRecording}
                    className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      audioRecording ? 'bg-rose-500 text-white' : 'bg-[#00F0A0] text-[#080B0F]'
                    }`}
                  >
                    {audioRecording ? <><Square className="w-3.5 h-3.5" /> Stop &amp; Analyze</> : <><Mic className="w-3.5 h-3.5" /> Record Microphone</>}
                  </button>
                </div>

                {/* Upload Card */}
                <div className="p-5 rounded-xl bg-[#090C10] border border-white/[0.08] text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center bg-[#171E2B] text-cyan-400">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white font-mono">Upload Audio File</h3>
                    <p className="text-[10px] text-[#738294] font-mono mt-0.5">Supports .mp3, .wav, .m4a, .webm</p>
                  </div>
                  <label className="w-full py-2.5 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono font-bold text-white flex items-center justify-center gap-1.5 cursor-pointer">
                    <FileAudio className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Choose Audio File</span>
                    <input
                      type="file"
                      accept="audio/*,.mp3,.wav,.m4a"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.readAsDataURL(file);
                          reader.onloadend = () => analyzeAudioInLab(reader.result, file.name);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Audio Lab Result */}
              {audioAnalyzing ? (
                <div className="p-6 text-center rounded-xl bg-[#090C10] border border-white/[0.08] space-y-2">
                  <RefreshCw className="w-6 h-6 text-[#00F0A0] animate-spin mx-auto" />
                  <p className="text-xs font-mono font-bold text-white">Transcribing with Groq Whisper &amp; evaluating coercion with LLaMA 3.3...</p>
                </div>
              ) : audioResult && (
                <div className="p-4 rounded-xl bg-[#090C10] border border-white/[0.1] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                      🚨 {audioResult.primaryCategory} (Risk Score: {audioResult.confidenceScore}%)
                    </span>
                    {audioResult.fileMetadata?.savedToThreatRegistry && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        ✓ Saved to Threat Database
                      </span>
                    )}
                  </div>

                  <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06]">
                    <span className="text-[10px] font-mono text-[#738294] block mb-1">Whisper Transcription:</span>
                    <p className="text-xs font-mono text-[#BAC5D5] italic">"{audioResult.transcribedSnippet}"</p>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <span className="text-[10px] font-mono font-bold text-rose-300 block mb-1">AI Coercion Rationale:</span>
                    <p className="text-xs text-rose-200">{audioResult.summary}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 4: SIM CARRIER & IMSI MONITOR (Req 7)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'sim_carrier' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#00F0A0]" />
                    SIM Swap &amp; Telecom Carrier Telemetry Engine
                  </h2>
                  <p className="text-[11px] text-[#738294] font-mono mt-0.5">Detects SIM re-issuance and IMSI changes within 24 hours.</p>
                </div>

                <button
                  onClick={handleTriggerSimSwap}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-mono font-bold flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Simulate SIM Swap Event</span>
                </button>
              </div>

              {simAlertTriggered && (
                <div className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 space-y-1.5 animate-slide-down">
                  <div className="flex items-center gap-2 font-mono font-bold text-xs">
                    <AlertOctagon className="w-4 h-4 text-rose-400" />
                    <span>CRITICAL: Carrier IMSI Swap Detected on Target Device</span>
                  </div>
                  <p className="text-xs text-rose-200">
                    A SIM swap occurred within 4 hours. Automated 24-hour cooling lock applied to all high-value outbound transfers.
                  </p>
                </div>
              )}

              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#090C10] text-[#738294] uppercase text-[10px] tracking-wider border-b border-white/[0.06]">
                    <tr>
                      <th className="py-3 px-4">Event ID</th>
                      <th className="py-3 px-4">Timestamp</th>
                      <th className="py-3 px-4">Phone Number</th>
                      <th className="py-3 px-4">Carrier Event</th>
                      <th className="py-3 px-4">Risk Level</th>
                      <th className="py-3 px-4">Action Taken</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] bg-[#090C10]/60">
                    {simImsiLog.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#738294]">
                          No recent SIM swap anomalies detected. Click "Simulate SIM Swap Event" to test trigger.
                        </td>
                      </tr>
                    ) : (
                      simImsiLog.map(l => (
                        <tr key={l.id} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-4 font-bold text-white">{l.id}</td>
                          <td className="py-3 px-4 text-[#8494A8]">{l.timestamp}</td>
                          <td className="py-3 px-4 text-amber-400 font-bold">{l.phone}</td>
                          <td className="py-3 px-4 text-[#BAC5D5]">{l.carrier}</td>
                          <td className="py-3 px-4 text-rose-400 font-bold">{l.riskLevel}</td>
                          <td className="py-3 px-4 text-[#00F0A0]">24hr Cooling Lock Active</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════
              TAB 5: ALERT MESSAGE LIBRARY (Req 12)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'advisories' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="pb-3 border-b border-white/[0.06]">
                <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-[#00F0A0]" />
                  Citizen Security Advisory &amp; Alert Message Library
                </h2>
                <p className="text-[11px] text-[#738294] font-mono mt-0.5">
                  Pre-configured alert templates for UPI, CVV, OTP, and Bank account fraud broadcast.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    title: '🛑 UPI Collect Request Scam',
                    category: 'UPI_FRAUD',
                    desc: 'Never enter your UPI PIN to RECEIVE money. UPI PIN is strictly used for DEBITING funds from your account.'
                  },
                  {
                    title: '💳 CVV & Card Expiry Phishing',
                    category: 'CARD_FRAUD',
                    desc: 'Bank officers never call asking for 3-digit CVV, 16-digit card number, or NetBanking OTP. Never click SMS APK links.'
                  },
                  {
                    title: '⚡ Electricity Bill Disconnection Alert',
                    category: 'UTILITY_FRAUD',
                    desc: 'Power boards NEVER demand bill payments to personal UPI handles over WhatsApp or calls. Always pay via official Discom portals.'
                  },
                  {
                    title: '🚨 Digital Arrest Extortion Advisory',
                    category: 'DIGITAL_ARREST',
                    desc: 'Real Indian Police, CBI, or ED officers NEVER arrest citizens over Skype/WhatsApp calls or ask for verification deposits.'
                  }
                ].map((adv, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#090C10] border border-white/[0.08] space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#171E2B] text-[#00F0A0] border border-[#00F0A0]/25">
                      {adv.category}
                    </span>
                    <h3 className="text-xs font-bold text-white font-mono">{adv.title}</h3>
                    <p className="text-xs text-[#BAC5D5] leading-relaxed">{adv.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MODAL: TICKET DEEP-DIVE INSPECTION (Req 5)
      ══════════════════════════════════════════════════════════════ */}
      {selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl bg-[#10141C] border border-white/[0.12] rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#171E2B] text-[#00F0A0] border border-[#00F0A0]/30">
                  {selectedTicket.appealId}
                </span>
                <h3 className="text-base font-bold text-white font-mono mt-1">Dispute Ticket Detailed Telemetry</h3>
              </div>
              <button 
                onClick={() => setSelectedTicket(null)}
                className="p-1 rounded-lg text-[#8494A8] hover:text-white hover:bg-white/[0.05]"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#090C10] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-[#738294]">Target Recipient VPA:</span>
                <p className="font-bold text-white text-sm">{selectedTicket.vpa}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#090C10] border border-white/[0.06] space-y-1">
                <span className="text-[10px] text-[#738294]">Transaction Amount:</span>
                <p className="font-bold text-[#00F0A0] text-sm">₹{Number(selectedTicket.amount || 0).toLocaleString('en-IN')}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#090C10] border border-white/[0.06] space-y-1.5">
              <span className="text-[10px] font-mono text-[#738294]">User Submitted Explanation / Appeal Note:</span>
              <p className="text-xs text-[#BAC5D5] italic font-medium leading-relaxed">
                "{selectedTicket.reason}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06]">
              <button
                onClick={() => {
                  setActiveTab('database_search');
                  setSearchQuery(selectedTicket.vpa);
                  setSelectedTicket(null);
                }}
                className="text-xs font-mono text-[#00F0A0] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Jump to Database Record for this VPA
              </button>

              {selectedTicket.status === 'PENDING_REVIEW' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleResolveAppeal(selectedTicket.appealId, 'APPROVED_WHITELISTED')}
                    className="px-4 py-2 rounded-xl bg-[#00F0A0] text-[#080B0F] font-mono font-bold text-xs cursor-pointer"
                  >
                    Approve &amp; Whitelist
                  </button>
                  <button
                    onClick={() => handleResolveAppeal(selectedTicket.appealId, 'REJECTED')}
                    className="px-4 py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono font-bold text-xs cursor-pointer"
                  >
                    Reject &amp; Block
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          MODAL: ADD NEW THREAT RECORD
      ══════════════════════════════════════════════════════════════ */}
      {showAddThreatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <form onSubmit={handleAddNewThreat} className="w-full max-w-md bg-[#10141C] border border-white/[0.12] rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-[#00F0A0]" />
                Add Threat to National Registry
              </h3>
              <button 
                type="button"
                onClick={() => setShowAddThreatModal(false)}
                className="p-1 rounded-lg text-[#8494A8] hover:text-white"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8]">
                Identifier (Phone or UPI VPA)
              </label>
              <input
                type="text"
                value={newThreatIdentifier}
                onChange={(e) => setNewThreatIdentifier(e.target.value)}
                placeholder="e.g. +91 94775 30475 or fraud@paytm"
                className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2 px-3 text-xs font-mono text-white focus:outline-none focus:border-[#00F0A0]/60"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8]">
                Threat Category
              </label>
              <select
                value={newThreatCategory}
                onChange={(e) => setNewThreatCategory(e.target.value)}
                className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2 px-3 text-xs font-mono text-white focus:outline-none focus:border-[#00F0A0]/60"
              >
                <option value="DIGITAL_ARREST">Digital Arrest / Fake Police</option>
                <option value="VOICE_PHISHING">Voice Phishing / Coercion</option>
                <option value="ELECTRICITY_BILL">Electricity Bill Disconnection</option>
                <option value="KYC_EXPIRY">Fake KYC / AnyDesk Screen Share</option>
                <option value="MULE_ACCOUNT">Mule UPI Account</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#8494A8]">
                Evidence Note / Case Details
              </label>
              <textarea
                value={newThreatDetails}
                onChange={(e) => setNewThreatDetails(e.target.value)}
                placeholder="Details of the extortion attempt or cyber cell FIR..."
                rows={3}
                className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2 px-3 text-xs font-mono text-white focus:outline-none focus:border-[#00F0A0]/60"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#00F0A0] text-[#080B0F] font-bold text-xs font-mono shadow-md cursor-pointer"
            >
              Save to Threat Registry
            </button>
          </form>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          MODAL: ENLARGED THREAT RECORD DEEP-DIVE INSPECTION
      ══════════════════════════════════════════════════════════════ */}
      {selectedThreatRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-2xl bg-[#10141C] border border-white/[0.14] rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl animate-scale-up max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/[0.08]">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    selectedThreatRecord.type === 'VPA' || selectedThreatRecord.identifier?.includes('@')
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  }`}>
                    {selectedThreatRecord.type === 'VPA' || selectedThreatRecord.identifier?.includes('@') ? 'UPI VPA RECIPIENT' : 'PHONE NUMBER (+91)'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
                    {selectedThreatRecord.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white font-mono tracking-tight flex items-center gap-2 pt-1">
                  <span>{selectedThreatRecord.identifier}</span>
                </h2>
              </div>

              <button 
                onClick={() => setSelectedThreatRecord(null)}
                className="p-1.5 rounded-xl text-[#8494A8] hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            {/* Score & Risk Overview Gauge */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-[#090C10] border border-rose-500/30 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-[#738294] block">Threat Risk Score</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-rose-400 font-mono">
                    {selectedThreatRecord.riskScore || 95}%
                  </span>
                  <span className="text-xs font-mono text-rose-300/80">/ 100</span>
                </div>
                <span className="text-[10px] font-mono text-rose-400 font-bold uppercase mt-1">
                  CRITICAL EXTORTION
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#090C10] border border-white/[0.06] flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-[#738294] block">Intelligence Source</span>
                <p className="font-bold text-white text-sm font-mono mt-1">
                  {selectedThreatRecord.source || 'I4C 1930 / Sanchar Saathi'}
                </p>
                <span className="text-[10px] font-mono text-[#00F0A0] mt-1">
                  ✓ Verified Registry Feed
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#090C10] border border-white/[0.06] flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-[#738294] block">Interception Policy</span>
                <p className="font-bold text-amber-400 text-sm font-mono mt-1">
                  HARD BLOCK (HOLD)
                </p>
                <span className="text-[10px] font-mono text-[#8494A8] mt-1">
                  Pre-Transaction Halt
                </span>
              </div>
            </div>

            {/* Full Un-truncated Explanation & Modus Operandi Details */}
            <div className="p-4 rounded-2xl bg-[#090C10] border border-white/[0.08] space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#00F0A0] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Full Modus Operandi &amp; Threat Intelligence Evidence:
              </span>
              <p className="text-xs text-[#BAC5D5] font-medium leading-relaxed font-sans bg-white/[0.02] p-3.5 rounded-xl border border-white/[0.04]">
                {selectedThreatRecord.details || 'Identified in active coercion campaign impersonating enforcement agencies or high-pressure payment redirection schemes.'}
              </p>
            </div>

            {/* Reporting Officer & System Metadata */}
            <div className="p-3.5 rounded-2xl bg-[#090C10] border border-white/[0.06] text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-[#8494A8]">
                <span>Reporting Node:</span>
                <span className="text-white">{selectedThreatRecord.reportedBy || 'NPCI National CSOC Sentinel'}</span>
              </div>
              <div className="flex justify-between text-[#8494A8]">
                <span>Status in Distributed DB:</span>
                <span className="text-[#00F0A0] font-bold">SYNCHRONIZED (ACTIVE BLACKLIST)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  navigator.clipboard && navigator.clipboard.writeText(selectedThreatRecord.identifier);
                  setActionSuccess(`Copied ${selectedThreatRecord.identifier} to clipboard!`);
                  setTimeout(() => setActionSuccess(''), 3000);
                }}
                className="px-3.5 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono text-[#BAC5D5] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>📋 Copy Identifier</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveTab('disputes');
                    setSearchQuery(selectedThreatRecord.identifier);
                    setSelectedThreatRecord(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-[#00F0A0]/30 text-xs font-mono text-[#00F0A0] flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Check Associated Disputes</span>
                </button>
                <button
                  onClick={() => setSelectedThreatRecord(null)}
                  className="px-4 py-2 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] text-xs font-mono font-bold transition-all cursor-pointer shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
