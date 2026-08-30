import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle2, 
  XCircle, RefreshCw, Filter, Search, Database, Users, TrendingUp, 
  Sparkles, Lock, ArrowUpRight, Clock, User, Phone, Check, AlertOctagon, 
  Terminal, MapPin, Mail, Key, Landmark, ArrowRight, LogOut, Shield,
  Radio, BellRing, FileAudio, Upload, Mic, Play, Square, FileText, ChevronRight,
  ExternalLink, Eye, PlusCircle, AlertCircle, History, Trash2, Archive, RotateCcw,
  Download, Copy, ChevronLeft, ChevronsLeft, ChevronsRight, X, Layers
} from 'lucide-react';
import { INITIAL_THREAT_RECORDS } from '../threatData.js';

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
  const [threats, setThreats] = useState(() => {
    return Array.isArray(INITIAL_THREAT_RECORDS) && INITIAL_THREAT_RECORDS.length > 0
      ? INITIAL_THREAT_RECORDS
      : [];
  });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // 'ALL' | 'PENDING' | 'RESOLVED'
  const [selectedThreatType, setSelectedThreatType] = useState('ALL'); // 'ALL' | 'VPA' | 'PHONE'
  const [threatCategoryFilter, setThreatCategoryFilter] = useState('ALL');
  const [threatPage, setThreatPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [copiedIdentifier, setCopiedIdentifier] = useState('');

  const handleCopyIdentifier = (val) => {
    if (!val) return;
    try {
      navigator.clipboard.writeText(val);
      setCopiedIdentifier(val);
      setTimeout(() => setCopiedIdentifier(''), 2000);
    } catch (e) {}
  };

  const handleExportThreatsCsv = () => {
    if (!threats || threats.length === 0) {
      alert('No records available to export.');
      return;
    }
    const headers = ['ID', 'Identifier', 'Type', 'Category', 'Risk Score', 'Is Blacklisted', 'Source', 'Report Count', 'Forensic Details', 'Reported At'];
    const rows = filteredThreats.map(t => [
      `"${t.id || ''}"`,
      `"${t.identifier || ''}"`,
      `"${t.type || ''}"`,
      `"${t.category || ''}"`,
      t.riskScore || 90,
      t.isBlacklisted ? 'TRUE' : 'FALSE',
      `"${t.source || ''}"`,
      t.reportCount || 1,
      `"${(t.details || '').replace(/"/g, '""')}"`,
      `"${t.reportedAt || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `verix_threat_intelligence_database_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setActionSuccess(`✓ Exported ${filteredThreats.length} threat intelligence records to CSV.`);
    setTimeout(() => setActionSuccess(''), 4000);
  };

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
    if (!t) return false;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      (t.identifier && t.identifier.toLowerCase().includes(q)) ||
      (t.name && t.name.toLowerCase().includes(q)) ||
      (t.category && t.category.toLowerCase().includes(q)) ||
      (t.source && t.source.toLowerCase().includes(q)) ||
      (t.details && t.details.toLowerCase().includes(q)) ||
      (Array.isArray(t.tags) && t.tags.some(tag => tag.toLowerCase().includes(q)));

    if (!matchesSearch) return false;
    
    const isVpa = t.type === 'VPA' || t.identifier?.includes('@');
    if (selectedThreatType === 'VPA' && !isVpa) return false;
    if (selectedThreatType === 'PHONE' && isVpa) return false;

    if (threatCategoryFilter !== 'ALL') {
      const cat = (t.category || '').toUpperCase();
      if (threatCategoryFilter === 'DIGITAL_ARREST' && !cat.includes('DIGITAL_ARREST') && !cat.includes('POLICE')) return false;
      if (threatCategoryFilter === 'ELECTRICITY' && !cat.includes('ELECTRICITY') && !cat.includes('UTILITY')) return false;
      if (threatCategoryFilter === 'KYC' && !cat.includes('KYC') && !cat.includes('ANYDESK') && !cat.includes('APK')) return false;
      if (threatCategoryFilter === 'MULE' && !cat.includes('MULE') && !cat.includes('POS') && !cat.includes('IDENTITY')) return false;
      if (threatCategoryFilter === 'VOICE' && !cat.includes('VOICE') && !cat.includes('CALL')) return false;
    }

    return true;
  });

  const totalThreatPages = Math.ceil(filteredThreats.length / (itemsPerPage === 'ALL' ? (filteredThreats.length || 1) : Number(itemsPerPage))) || 1;
  const currentThreatPage = Math.min(threatPage, totalThreatPages);
  const paginatedThreats = itemsPerPage === 'ALL' 
    ? filteredThreats 
    : filteredThreats.slice((currentThreatPage - 1) * Number(itemsPerPage), currentThreatPage * Number(itemsPerPage));

  const totalVpaCount = threats.filter(t => t.type === 'VPA' || t.identifier?.includes('@')).length;
  const totalPhoneCount = threats.filter(t => t.type === 'PHONE' || !t.identifier?.includes('@')).length;
  const criticalThreatCount = threats.filter(t => (t.riskScore || 0) >= 90).length;

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
    <div className="w-full max-w-[1920px] mx-auto p-3 sm:p-5 lg:p-6 space-y-5 text-[#F0F3F6] font-sans selection:bg-[#00F0A0] selection:text-[#090C10] animate-fade-in">
      
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
            <span>Sync Cloud DB</span>
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

      {/* ── MAIN WORKSPACE GRID WITH SHIFTED LEFT SIDEBAR ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT SIDEBAR NAVIGATION (Shifted to Far Left) */}
        <div className="lg:col-span-3 xl:col-span-2 space-y-3">
          <div className="p-3.5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-1.5 shadow-md sticky top-4">
            <span className="text-[10px] font-mono font-bold uppercase text-[#546274] px-2 block mb-2 tracking-wider">
              Control Modules
            </span>

            {[
              { id: 'disputes', label: 'Disputes & Appeals', icon: FileText, count: pendingCount > 0 ? `${pendingCount} Pending` : activeAppeals.length, badgeColor: pendingCount > 0 ? 'bg-amber-400/25 text-amber-300 border border-amber-400/30' : 'bg-white/10 text-white/70' },
              { id: 'history', label: 'Disputes History', icon: History, count: totalResolvedHistoryCount, badgeColor: 'bg-emerald-400/20 text-emerald-300' },
              { id: 'database_search', label: 'Database Search', icon: Database, count: threats.length.toLocaleString(), badgeColor: 'bg-cyan-400/25 text-cyan-300 font-bold border border-cyan-400/30' },
              { id: 'audio_lab', label: 'Voice Phishing Lab', icon: Mic, count: 'AI', badgeColor: 'bg-purple-400/20 text-purple-300' },
              { id: 'sim_carrier', label: 'SIM Swap Monitor', icon: Radio, count: 'IMSI', badgeColor: 'bg-rose-400/20 text-rose-300' },
              { id: 'advisories', label: 'Security Advisories', icon: BellRing, count: '5', badgeColor: 'bg-blue-400/20 text-blue-300' }
            ].map(({ id, label, icon: Icon, count, badgeColor }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  if (id === 'database_search') setThreatPage(1);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === id
                    ? 'bg-[#00F0A0]/15 text-[#00F0A0] font-bold border border-[#00F0A0]/30 shadow-sm'
                    : 'text-[#8494A8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${activeTab === id ? 'text-[#00F0A0]' : 'text-[#8494A8]'}`} />
                  <span>{label}</span>
                </div>
                {count !== undefined && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] ${badgeColor}`}>
                    {count}
                  </span>
                )}
              </button>
            ))}

            {/* Quick Live Telemetry Widget */}
            <div className="pt-3 mt-3 border-t border-white/[0.06] space-y-2">
              <span className="text-[9.5px] font-mono uppercase text-[#546274] px-2 block font-bold tracking-wider">
                Registry Telemetry
              </span>
              <div className="bg-[#090C10] p-2.5 rounded-xl border border-white/[0.04] space-y-1.5 text-[10.5px] font-mono text-[#8494A8]">
                <div className="flex justify-between">
                  <span>Total Threats:</span>
                  <span className="text-white font-bold">{threats.length.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone Numbers:</span>
                  <span className="text-purple-300 font-bold">{totalPhoneCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Blacklisted VPAs:</span>
                  <span className="text-cyan-300 font-bold">{totalVpaCount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Critical (&ge;90%):</span>
                  <span className="text-rose-400 font-bold">{criticalThreatCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT / MAIN CONTENT AREA (Massive Widescreen Layout) */}
        <div className="lg:col-span-9 xl:col-span-10 space-y-4">

          {/* ══════════════════════════════════════════════════════════
              TAB 1: DISPUTES & APPEALS (Active Queue)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'disputes' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#00F0A0]" />
                    False-Positive Transaction Appeals Queue
                  </h2>
                  <p className="text-[11px] text-[#738294] font-mono mt-0.5">
                    Live review desk for users appealing blocked genuine payments.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {activeResolvedCount > 0 && (
                    <button
                      onClick={handleClearResolvedTickets}
                      className="px-3 py-1.5 rounded-xl bg-[#171E2B] hover:bg-rose-500/15 border border-white/[0.1] hover:border-rose-500/30 text-rose-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                      title="Clear all completed/resolved tickets from active queue"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                      <span>Clear Completed ({activeResolvedCount})</span>
                    </button>
                  )}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#546274] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search ticket ID or VPA..."
                      className="bg-[#090C10] border border-white/[0.09] rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/50 w-52"
                    />
                  </div>
                </div>
              </div>

              {/* Active Appeals List */}
              <div className="space-y-3">
                {filteredAppeals.length === 0 ? (
                  <div className="p-8 text-center rounded-xl bg-[#090C10] border border-white/[0.04] text-[#738294] font-mono text-xs space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#00F0A0] mx-auto opacity-40" />
                    <p>All active disputes have been resolved or queue is clean.</p>
                  </div>
                ) : (
                  filteredAppeals.map((appeal) => (
                    <div 
                      key={appeal.appealId}
                      className="p-4 rounded-xl bg-[#090C10] border border-white/[0.06] hover:border-white/[0.12] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#BAC5D5] bg-[#171E2B] px-2 py-0.5 rounded border border-white/[0.08]">
                            {appeal.appealId}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                            appeal.status === 'PENDING_REVIEW' 
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
                              : appeal.status === 'APPROVED_WHITELISTED' || appeal.status === 'WHITELISTED'
                                ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                                : 'bg-rose-400/20 text-rose-300 border border-rose-400/30'
                          }`}>
                            {appeal.status.replace(/_/g, ' ')}
                          </span>
                          <span className="text-[11px] font-mono text-[#546274]">
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
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
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
              TAB 2: DISPUTES HISTORY (Dedicated Archive)
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'history' && (
            <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <h2 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <History className="w-4 h-4 text-emerald-400" />
                    Resolved Disputes History &amp; Whitelist Archive
                  </h2>
                  <p className="text-[11px] text-[#738294] font-mono mt-0.5">
                    Permanent audit trail of all approved whitelists and rejected extortion appeals.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 text-[#546274] absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search archive history..."
                      className="bg-[#090C10] border border-white/[0.09] rounded-xl py-1.5 pl-8 pr-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/50 w-52"
                    />
                  </div>
                </div>
              </div>

              {/* History List */}
              <div className="space-y-3">
                {historyAppeals.length === 0 ? (
                  <div className="p-8 text-center rounded-xl bg-[#090C10] border border-white/[0.04] text-[#738294] font-mono text-xs space-y-2">
                    <Archive className="w-8 h-8 text-emerald-400 mx-auto opacity-40" />
                    <p>No historical resolved tickets matching query.</p>
                  </div>
                ) : (
                  historyAppeals.map((appeal) => (
                    <div 
                      key={appeal.appealId}
                      className="p-4 rounded-xl bg-[#090C10] border border-white/[0.06] hover:border-white/[0.12] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#BAC5D5] bg-[#171E2B] px-2 py-0.5 rounded border border-white/[0.08]">
                            {appeal.appealId}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                            appeal.status === 'APPROVED_WHITELISTED' || appeal.status === 'WHITELISTED'
                              ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                              : 'bg-rose-400/20 text-rose-300 border border-rose-400/30'
                          }`}>
                            {appeal.status.replace(/_/g, ' ')}
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

                      <div className="flex items-center gap-2 shrink-0">
                        {clearedTicketIds.includes(appeal.appealId) && (
                          <button
                            onClick={() => handleRestoreTicket(appeal.appealId)}
                            className="px-3 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono text-[#BAC5D5] hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
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
              TAB 3: ENLARGED EXECUTIVE THREAT INTELLIGENCE DATABASE
          ══════════════════════════════════════════════════════════ */}
          {activeTab === 'database_search' && (
            <div className="space-y-4">
              
              {/* 4 TOP EXECUTIVE METRIC CARDS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-md space-y-1">
                  <div className="flex items-center justify-between text-[#8494A8]">
                    <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider">Total Threat Records</span>
                    <Database className="w-4 h-4 text-[#00F0A0]" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">{threats.length.toLocaleString()}</div>
                  <p className="text-[10px] text-[#00F0A0] font-mono">100% Ingested &amp; Searchable</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-md space-y-1">
                  <div className="flex items-center justify-between text-[#8494A8]">
                    <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider">Flagged Phone Numbers</span>
                    <Phone className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">{totalPhoneCount.toLocaleString()}</div>
                  <p className="text-[10px] text-purple-300 font-mono">Chakshu / Telecom Traps</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-md space-y-1">
                  <div className="flex items-center justify-between text-[#8494A8]">
                    <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider">Flagged UPI VPAs</span>
                    <Building2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">{totalVpaCount.toLocaleString()}</div>
                  <p className="text-[10px] text-cyan-300 font-mono">NPCI Mule Registry</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-md space-y-1">
                  <div className="flex items-center justify-between text-[#8494A8]">
                    <span className="text-[10.5px] font-mono uppercase font-bold tracking-wider">Lookup Response SLA</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">&lt; 4.2 ms</div>
                  <p className="text-[10px] text-emerald-300 font-mono">In-Memory Zero Delay</p>
                </div>
              </div>

              {/* MAIN DATA TABLE WORKSTATION */}
              <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] space-y-4 shadow-xl">
                
                {/* Header & Controls Bar */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <h2 className="text-base font-bold text-white font-mono flex items-center gap-2">
                      <Database className="w-5 h-5 text-[#00F0A0]" />
                      National Cyber Threat Intelligence Registry
                    </h2>
                    <p className="text-xs text-[#8494A8] font-mono mt-0.5">
                      Ingested from I4C (1930 Helpline), Sanchar Saathi (Chakshu), NPCI Mule Registry &amp; Indian Online Fraud Datasets (2026).
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* CSV Export Button */}
                    <button
                      onClick={handleExportThreatsCsv}
                      className="px-3.5 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1F293A] text-white border border-white/[0.12] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-sm active:scale-95"
                    >
                      <Download className="w-3.5 h-3.5 text-[#00F0A0]" />
                      <span>Export CSV ({filteredThreats.length.toLocaleString()})</span>
                    </button>

                    {/* Add Record Button */}
                    <button
                      onClick={() => setShowAddThreatModal(true)}
                      className="px-3.5 py-2 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 transition-all"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Add Record</span>
                    </button>
                  </div>
                </div>

                {/* Filter Chips Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pt-1">
                  
                  {/* Type Filter Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10.5px] font-mono uppercase text-[#738294] font-bold">Type:</span>
                    {[
                      { id: 'ALL', label: `All (${threats.length.toLocaleString()})` },
                      { id: 'VPA', label: `💳 UPI VPAs (${totalVpaCount.toLocaleString()})` },
                      { id: 'PHONE', label: `📞 Phones (${totalPhoneCount.toLocaleString()})` }
                    ].map(f => (
                      <button
                        key={f.id}
                        onClick={() => {
                          setSelectedThreatType(f.id);
                          setThreatPage(1);
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          selectedThreatType === f.id
                            ? 'bg-[#00F0A0]/15 text-[#00F0A0] font-bold border border-[#00F0A0]/30 shadow-sm'
                            : 'bg-[#090C10] text-[#8494A8] border border-white/[0.05] hover:text-white'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}

                    <span className="text-white/20 mx-1">|</span>

                    {/* Category Filter Pills */}
                    <span className="text-[10.5px] font-mono uppercase text-[#738294] font-bold">Category:</span>
                    {[
                      { id: 'ALL', label: 'All Categories' },
                      { id: 'DIGITAL_ARREST', label: '🚨 Digital Arrest' },
                      { id: 'ELECTRICITY', label: '⚡ Electricity' },
                      { id: 'KYC', label: '⚠️ Fake KYC' },
                      { id: 'MULE', label: '🏦 Mule Accounts' }
                    ].map(c => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setThreatCategoryFilter(c.id);
                          setThreatPage(1);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all cursor-pointer ${
                          threatCategoryFilter === c.id
                            ? 'bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30'
                            : 'bg-[#090C10] text-[#738294] border border-white/[0.04] hover:text-[#BAC5D5]'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>

                  {/* Search Box with Clear Button */}
                  <div className="relative min-w-[260px]">
                    <Search className="w-4 h-4 text-[#546274] absolute left-3.5 top-2.5" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setThreatPage(1);
                      }}
                      placeholder="Search phone, VPA, bank, or keyword..."
                      className="w-full bg-[#090C10] border border-white/[0.1] rounded-xl py-2 pl-9 pr-8 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/60 shadow-inner"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-2.5 text-[#738294] hover:text-white"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Main Table */}
                <div className="overflow-x-auto rounded-xl border border-white/[0.08] shadow-md bg-[#090C10]">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#0D1117] text-[#738294] uppercase text-[10px] tracking-wider border-b border-white/[0.08]">
                      <tr>
                        <th className="py-3 px-4">Identifier (VPA / Phone)</th>
                        <th className="py-3 px-4">Entity Type</th>
                        <th className="py-3 px-4">Threat Category</th>
                        <th className="py-3 px-4">Risk Confidence</th>
                        <th className="py-3 px-4">Reports</th>
                        <th className="py-3 px-4">Source Registry</th>
                        <th className="py-3 px-4">Forensic Signature</th>
                        <th className="py-3 px-4 text-right">Dossier Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04] bg-[#090C10]/70">
                      {paginatedThreats.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="py-12 text-center text-[#738294] space-y-2">
                            <Database className="w-8 h-8 text-[#546274] mx-auto opacity-40" />
                            <p className="text-xs">No threat records found matching current query "{searchQuery}".</p>
                          </td>
                        </tr>
                      ) : (
                        paginatedThreats.map((t) => {
                          const isVpa = t.type === 'VPA' || t.identifier?.includes('@');
                          const isCopied = copiedIdentifier === t.identifier;
                          return (
                            <tr 
                              key={t.id || t.identifier} 
                              className="hover:bg-white/[0.04] transition-all group"
                            >
                              {/* Identifier & Quick Copy */}
                              <td className="py-3 px-4 font-bold text-white">
                                <div className="flex items-center gap-2">
                                  <span 
                                    onClick={() => setSelectedThreatRecord(t)}
                                    className="group-hover:text-[#00F0A0] transition-colors cursor-pointer"
                                  >
                                    {t.identifier}
                                  </span>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleCopyIdentifier(t.identifier);
                                    }}
                                    className="p-1 rounded bg-white/[0.05] hover:bg-white/[0.1] text-[#738294] hover:text-white transition-all cursor-pointer"
                                    title="Copy Identifier"
                                  >
                                    {isCopied ? <Check className="w-3 h-3 text-[#00F0A0]" /> : <Copy className="w-3 h-3" />}
                                  </button>
                                </div>
                              </td>

                              {/* Entity Type Badge */}
                              <td className="py-3 px-4">
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  isVpa
                                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                                    : 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                                }`}>
                                  {isVpa ? '💳 UPI VPA' : '📞 PHONE (+91)'}
                                </span>
                              </td>

                              {/* Category */}
                              <td className="py-3 px-4 text-rose-300 font-bold">
                                {t.category?.replace(/_/g, ' ') || 'EXTORTION'}
                              </td>

                              {/* Risk Score Meter */}
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    (t.riskScore || 0) >= 90 
                                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' 
                                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  }`}>
                                    {t.riskScore || 90}% THREAT
                                  </span>
                                </div>
                              </td>

                              {/* Reports Count */}
                              <td className="py-3 px-4 text-[#BAC5D5]">
                                <span className="px-2 py-0.5 rounded bg-[#171E2B] border border-white/[0.08] text-[10.5px]">
                                  {t.reportCount || 1} reports
                                </span>
                              </td>

                              {/* Source */}
                              <td className="py-3 px-4 text-[#8494A8] text-[11px]">
                                <span className="truncate max-w-[150px] block" title={t.source}>
                                  {t.source ? t.source.replace(/_/g, ' ') : 'I4C 1930 HELPLINE'}
                                </span>
                              </td>

                              {/* Details */}
                              <td className="py-3 px-4 text-[#BAC5D5] text-[11px] max-w-sm">
                                <span className="line-clamp-1" title={t.details}>
                                  {t.details || 'Identified in suspicious transactions.'}
                                </span>
                              </td>

                              {/* Action Button */}
                              <td className="py-3 px-4 text-right">
                                <button
                                  onClick={() => setSelectedThreatRecord(t)}
                                  className="px-2.5 py-1 rounded-lg bg-[#00F0A0]/10 hover:bg-[#00F0A0]/20 border border-[#00F0A0]/30 text-[11px] text-[#00F0A0] flex items-center gap-1 ml-auto transition-all cursor-pointer"
                                >
                                  <Eye className="w-3 h-3" />
                                  <span>Inspect Dossier</span>
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>

                {/* PAGINATION BAR */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs font-mono text-[#8494A8]">
                  <div className="flex items-center gap-3">
                    <span>
                      Showing <strong className="text-white">{filteredThreats.length > 0 ? (currentThreatPage - 1) * Number(itemsPerPage === 'ALL' ? filteredThreats.length : itemsPerPage) + 1 : 0}</strong> - <strong className="text-white">{Math.min(currentThreatPage * Number(itemsPerPage === 'ALL' ? filteredThreats.length : itemsPerPage), filteredThreats.length)}</strong> of <strong className="text-[#00F0A0]">{filteredThreats.length.toLocaleString()}</strong> records
                    </span>

                    <div className="flex items-center gap-1 ml-2">
                      <span className="text-[11px] text-[#546274]">Rows per page:</span>
                      {[25, 50, 100, 250].map(cnt => (
                        <button
                          key={cnt}
                          onClick={() => {
                            setItemsPerPage(cnt);
                            setThreatPage(1);
                          }}
                          className={`px-2 py-0.5 rounded text-[10.5px] transition-all cursor-pointer ${
                            itemsPerPage === cnt
                              ? 'bg-[#00F0A0] text-black font-bold'
                              : 'bg-[#171E2B] text-[#BAC5D5] hover:text-white'
                          }`}
                        >
                          {cnt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Page Navigation Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setThreatPage(1)}
                      disabled={currentThreatPage <= 1}
                      className="p-1.5 rounded-lg bg-[#171E2B] border border-white/[0.08] text-[#BAC5D5] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                      title="First Page"
                    >
                      <ChevronsLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setThreatPage(p => Math.max(1, p - 1))}
                      disabled={currentThreatPage <= 1}
                      className="px-2.5 py-1 rounded-lg bg-[#171E2B] border border-white/[0.08] text-[#BAC5D5] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-all cursor-pointer flex items-center gap-1"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" /> Prev
                    </button>

                    <span className="px-3 py-1 rounded-lg bg-[#090C10] border border-white/[0.1] text-white font-bold text-xs">
                      Page {currentThreatPage} / {totalThreatPages}
                    </span>

                    <button
                      onClick={() => setThreatPage(p => Math.min(totalThreatPages, p + 1))}
                      disabled={currentThreatPage >= totalThreatPages}
                      className="px-2.5 py-1 rounded-lg bg-[#171E2B] border border-white/[0.08] text-[#BAC5D5] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-all cursor-pointer flex items-center gap-1"
                    >
                      Next <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setThreatPage(totalThreatPages)}
                      disabled={currentThreatPage >= totalThreatPages}
                      className="p-1.5 rounded-lg bg-[#171E2B] border border-white/[0.08] text-[#BAC5D5] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                      title="Last Page"
                    >
                      <ChevronsRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

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
