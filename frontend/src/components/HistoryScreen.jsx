import React, { useState, useEffect } from 'react';
import { 
  Shield, Search, Phone, MessageSquare, AlertTriangle, 
  Ban, Flag, Info, ArrowLeft, CheckCircle2, X, Send, 
  Clock, Ticket, ExternalLink, Check, RefreshCw, AlertCircle, ArrowUpRight 
} from 'lucide-react';
import { translations } from '../translations';

export default function HistoryScreen({ onBack, backendUrl, user, currentLang = 'en', onNavigate }) {
  const t = translations[currentLang] || translations.en;
  const [activeTab, setActiveTab] = useState('prechecks'); // 'prechecks' | 'calls' | 'tickets'
  const [searchQuery, setSearchQuery] = useState('');
  const [blockedItems, setBlockedItems] = useState([]);
  const [reportedItems, setReportedItems] = useState([]);

  // Report Modal State
  const [reportingItem, setReportingItem] = useState(null);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportNote, setReportNote] = useState('');

  // 1. UPI Pre-Checks History (Loaded from localStorage + Curated real examples)
  const [preCheckHistory, setPreCheckHistory] = useState([
    {
      id: 'pre-1',
      vpa: 'scammer.cybercell@oksbi',
      payee: 'Fake Cyber Police Desk',
      amount: '₹25,000.00',
      riskScore: 98,
      riskLevel: 'HIGH_RISK',
      timestamp: 'Today, 10:45 AM',
      note: 'Demanded for Digital Arrest Bail clearance',
      reason: 'Flagged in I4C National Cybercrime Registry for impersonation extortion.'
    },
    {
      id: 'pre-2',
      vpa: 'customs.courier.fine@icici',
      payee: 'Customs Clearance IVR',
      amount: '₹14,500.00',
      riskScore: 92,
      riskLevel: 'HIGH_RISK',
      timestamp: 'Yesterday, 3:15 PM',
      note: 'Illegal FedEx parcel release fee',
      reason: 'Multiple victim reports received for fake narcotics customs scam.'
    },
    {
      id: 'pre-3',
      vpa: 'mom@okhdfcbank',
      payee: 'Mother Personal',
      amount: '₹2,000.00',
      riskScore: 2,
      riskLevel: 'SAFE',
      timestamp: '2 days ago, 7:30 PM',
      note: 'Grocery & Medicine',
      reason: 'Verified clean recipient VPA with high trust score.'
    },
    {
      id: 'pre-4',
      vpa: 'quick.electricity.bill@axis',
      payee: 'Electricity Officer Disconnect',
      amount: '₹3,400.00',
      riskScore: 89,
      riskLevel: 'HIGH_RISK',
      timestamp: '3 days ago, 11:20 AM',
      note: 'Power cut bill update',
      reason: 'SMS Phishing APK dropper vector associated with this VPA.'
    }
  ]);

  // 2. Call Logs & Voice Scans
  const callAlerts = [
    {
      id: 'call-1',
      identifier: '+91 94775 30475',
      timestamp: 'Today, 10:42 AM • Incoming Call Flagged',
      badge: 'Digital Arrest Scam',
      badgeColor: 'bg-rose-600 text-white',
      summary: 'Caller impersonated CBI Officer demanding ₹25,000 security clearance for fake arrest warrant.'
    },
    {
      id: 'call-2',
      identifier: '+91 88776 65544',
      timestamp: 'Yesterday, 4:20 PM • Robocall Intercepted',
      badge: 'Courier KYC Extortion',
      badgeColor: 'bg-amber-600 text-white',
      summary: 'Automated IVR claimed an illegal parcel was intercepted at Mumbai customs requiring immediate verification payment.'
    },
    {
      id: 'call-3',
      identifier: '+91 98200 12345',
      timestamp: '3 days ago • Voice Coercion Scan',
      badge: 'Voice Phishing Intercepted',
      badgeColor: 'bg-rose-600 text-white',
      summary: '30s Speech Scan detected 94% coercion pattern with synthetic background police sirens.'
    }
  ];

  // 3. Ticket Responses & Admin Review History
  const [adminTickets, setAdminTickets] = useState([
    {
      id: 'VRX-REV-849201',
      vpa: 'scammer.cybercell@oksbi',
      submittedAt: 'Today, 10:48 AM',
      status: 'VERIFIED_MALICIOUS',
      statusLabel: 'Confirmed Scam • Blocked',
      statusColor: 'bg-rose-100 text-rose-800 border-rose-200',
      adminNote: 'Bank Admin Surveillance confirmed VPA is linked to known extortion ring in Cambodia/Mewat. Account freeze initiated with 1930 Cyber Cell.'
    },
    {
      id: 'VRX-REV-391024',
      vpa: 'hostel.mess.fees@sbi',
      submittedAt: 'Yesterday, 1:20 PM',
      status: 'APPROVED_CLEARANCE',
      statusLabel: 'Clearance Granted',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      adminNote: 'Verified genuine institutional payee after manual KYC inspection. 24-hour white-listing bypass token issued.'
    },
    {
      id: 'VRX-REV-671932',
      vpa: 'quick.electricity.bill@axis',
      submittedAt: '3 days ago',
      status: 'BLOCKED_FRAUD',
      statusLabel: 'Threat Confirmed',
      statusColor: 'bg-rose-100 text-rose-800 border-rose-200',
      adminNote: 'Reported to I4C portal. VPA blocked across state banking grid.'
    }
  ]);

  // Load custom tickets or pre-checks from localStorage if saved
  useEffect(() => {
    try {
      const savedTickets = localStorage.getItem('shieldx_tickets_history');
      if (savedTickets) {
        const parsed = JSON.parse(savedTickets);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAdminTickets(prev => [...parsed, ...prev.filter(p => !parsed.some(x => x.id === p.id))]);
        }
      }
    } catch (e) {}
  }, []);

  const handleBlock = (id, identifier) => {
    if (!blockedItems.includes(id)) {
      setBlockedItems([...blockedItems, id]);
      alert(`🚫 ${identifier} has been added to Verix Auto-Silence & Block list.`);
    }
  };

  const handleOpenReportModal = (item) => {
    setReportingItem(item);
    setReportSuccess(false);
    setReportNote('');
  };

  const handleSubmitReport = async (e) => {
    e.preventDefault();
    try {
      if (backendUrl) {
        await fetch(`${backendUrl}/api/v1/threat-intel/report`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            identifier: reportingItem.identifier || reportingItem.vpa,
            details: reportNote || reportingItem.summary || reportingItem.reason,
            category: reportingItem.badge || 'REPORTED_SCAM',
            reportedBy: user?.name || 'Verix User'
          })
        }).catch(() => {});
      }
    } finally {
      setReportedItems([...reportedItems, reportingItem.id]);
      setReportSuccess(true);
      setTimeout(() => {
        setReportingItem(null);
        setReportSuccess(false);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-28 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1">
        <button 
          onClick={onBack}
          className="p-2 rounded-2xl hover:bg-[#d9efbd] text-[#450c3f] transition-all bg-white border border-[#e5ebc5] shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <div className="flex items-center gap-1.5">
          <div className="p-1.5 rounded-xl bg-[#450c3f] text-[#b9d175]">
            <Shield className="w-4 h-4" />
          </div>
          <span className="font-extrabold font-heading text-[#450c3f] text-base">Security History</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#450c3f] text-[#b9d175] flex items-center justify-center font-bold text-xs shadow-xs">
          {user?.name ? user.name[0].toUpperCase() : 'U'}
        </div>
      </div>

      {/* Page Title & Subtext */}
      <div>
        <h1 className="text-xl font-extrabold text-[#450c3f] font-heading tracking-tight">
          Activity & Incident Logs
        </h1>
        <p className="text-xs text-[#5e4d6a] font-medium leading-relaxed mt-0.5">
          Review all your UPI threat checks, screened call logs, and bank admin ticket reviews.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by VPA, phone number, or ticket ID..."
          className="w-full bg-white border border-[#e5ebc5] rounded-2xl py-2.5 pl-10 pr-4 text-xs text-[#1e112a] focus:outline-none focus:border-[#450c3f] shadow-2xs"
        />
      </div>

      {/* 3-Way Segmented Tabs: Pre-Checks | Call Logs | Admin Tickets */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-white rounded-2xl border border-[#e5ebc5] shadow-2xs">
        <button
          onClick={() => setActiveTab('prechecks')}
          className={`py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'prechecks'
              ? 'bg-[#450c3f] text-[#f5fbda] shadow-sm'
              : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <span>⚡ Pre-Checks</span>
        </button>
        <button
          onClick={() => setActiveTab('calls')}
          className={`py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'calls'
              ? 'bg-[#450c3f] text-[#f5fbda] shadow-sm'
              : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <Phone className="w-3 h-3" /> Calls
        </button>
        <button
          onClick={() => setActiveTab('tickets')}
          className={`py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
            activeTab === 'tickets'
              ? 'bg-[#450c3f] text-[#f5fbda] shadow-sm'
              : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <Ticket className="w-3 h-3" /> Tickets
        </button>
      </div>

      {/* ── TAB 1: UPI PRE-CHECKS HISTORY ─────────────────────────────────── */}
      {activeTab === 'prechecks' && (
        <div className="space-y-3">
          {preCheckHistory
            .filter(item => item.vpa.toLowerCase().includes(searchQuery.toLowerCase()) || item.payee.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3 animate-fade-in">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2.5 rounded-2xl ${item.riskScore > 50 ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'}`}>
                      {item.riskScore > 50 ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-[#1e112a] font-mono">{item.vpa}</h3>
                      <p className="text-[10px] text-[#5e4d6a] font-medium">{item.payee} • {item.timestamp}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border ${
                    item.riskScore > 50 
                      ? 'bg-rose-100 text-rose-800 border-rose-200' 
                      : 'bg-emerald-100 text-emerald-800 border-emerald-200'
                  }`}>
                    {item.riskScore > 50 ? `🚨 ${item.riskScore}% RISK` : '🟢 SAFE'}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-[#f5fbda]/60 border border-[#d9efbd] space-y-1">
                  <div className="flex justify-between items-center text-[10px] text-[#5e4d6a]">
                    <span>Amount Checked: <strong className="text-[#1e112a]">{item.amount}</strong></span>
                    <span>Note: <span className="italic">{item.note}</span></span>
                  </div>
                  <p className="text-[11px] text-[#1e112a] font-medium leading-relaxed pt-1">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* ── TAB 2: CALL LOGS & VOICE SCANS ─────────────────────────────────── */}
      {activeTab === 'calls' && (
        <div className="space-y-3">
          {callAlerts
            .filter(item => item.identifier.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3 animate-fade-in">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-[#1e112a] font-mono">{item.identifier}</h3>
                      <p className="text-[10px] text-[#5e4d6a] font-medium">{item.timestamp}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                    🔴 {item.badge}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-[#f5fbda]/60 border border-[#d9efbd] flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#450c3f] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#1e112a] leading-relaxed font-medium">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleBlock(item.id, item.identifier)}
                    className={`flex-1 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      blockedItems.includes(item.id)
                        ? 'bg-slate-200 text-slate-600'
                        : 'bg-[#450c3f] hover:bg-[#33082e] text-[#f5fbda] shadow-sm'
                    }`}
                  >
                    <Ban className="w-3.5 h-3.5" />
                    {blockedItems.includes(item.id) ? 'Blocked' : 'Block Sender'}
                  </button>

                  <button
                    onClick={() => handleOpenReportModal(item)}
                    className={`flex-1 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      reportedItems.includes(item.id)
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-white border border-[#e5ebc5] hover:bg-slate-50 text-[#1e112a]'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5 text-rose-600" />
                    {reportedItems.includes(item.id) ? 'Reported (1930)' : 'Report Incident'}
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* ── TAB 3: TICKET RESPONSES & ADMIN REVIEWS ─────────────────────────── */}
      {activeTab === 'tickets' && (
        <div className="space-y-3">
          {adminTickets
            .filter(item => item.id.toLowerCase().includes(searchQuery.toLowerCase()) || item.vpa.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((ticket) => (
              <div key={ticket.id} className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3 animate-fade-in">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#450c3f] text-[#b9d175]">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-[#450c3f] font-mono">{ticket.id}</h3>
                      <p className="text-[10px] text-[#5e4d6a] font-medium">Submitted: {ticket.submittedAt}</p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${ticket.statusColor}`}>
                    {ticket.statusLabel}
                  </span>
                </div>

                <div className="text-xs text-[#1e112a] p-2.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] text-[#5e4d6a] block">Target VPA under review:</span>
                  <span className="font-mono font-bold text-[#450c3f]">{ticket.vpa}</span>
                </div>

                <div className="p-3 rounded-2xl bg-[#f5fbda]/60 border border-[#d9efbd] space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#450c3f] uppercase">
                    <Shield className="w-3 h-3 text-[#6b8f1a]" /> Bank Surveillance & Admin Response:
                  </div>
                  <p className="text-[11px] text-[#1e112a] font-medium leading-relaxed">
                    {ticket.adminNote}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Official Cyber Crime Reporting Modal */}
      {reportingItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xs rounded-3xl p-5 border border-[#e5ebc5] space-y-3.5 animate-slide-down shadow-2xl">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-[#450c3f] flex items-center gap-1.5">
                <Flag className="w-4 h-4 text-rose-600" /> Report to Cyber Crime (1930)
              </h4>
              <button onClick={() => setReportingItem(null)} className="text-slate-400 hover:text-slate-700 text-sm font-bold">✕</button>
            </div>

            <div className="p-2.5 rounded-2xl bg-[#f5fbda]/60 border border-[#d9efbd] text-xs">
              <span className="text-[10px] text-[#5e4d6a] block">Flagged Threat:</span>
              <p className="font-bold text-[#450c3f] font-mono">{reportingItem.identifier || reportingItem.vpa}</p>
              <span className="text-[10px] text-rose-700 font-semibold">{reportingItem.badge || 'High Risk Threat'}</span>
            </div>

            <form onSubmit={handleSubmitReport} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-[#5e4d6a] block mb-1">
                  Additional Incident Details:
                </label>
                <textarea
                  value={reportNote}
                  onChange={(e) => setReportNote(e.target.value)}
                  placeholder="e.g. Scammer asked for OTP and threatened with immediate arrest."
                  rows={3}
                  className="w-full bg-[#f5fbda]/40 border border-[#d9efbd] rounded-xl p-2.5 text-xs text-[#1e112a] focus:outline-none focus:border-[#450c3f]"
                />
              </div>

              {reportSuccess && (
                <div className="p-2.5 rounded-xl text-xs bg-emerald-50 border border-emerald-200 text-emerald-800 text-center font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Submitted to Cyber Crime Registry!
                </div>
              )}

              <button
                type="submit"
                disabled={reportSuccess}
                className="w-full py-3 bg-[#450c3f] hover:bg-[#33082e] text-[#f5fbda] rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all"
              >
                <Send className="w-3.5 h-3.5 text-[#b9d175]" /> Submit Report (1930 / I4C)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
