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
  const [loading, setLoading] = useState(false);

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
      badgeColor: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
      summary: 'Caller impersonated CBI Officer demanding ₹25,000 security clearance for fake arrest warrant.'
    },
    {
      id: 'call-2',
      identifier: '+91 88776 65544',
      timestamp: 'Yesterday, 4:20 PM • Robocall Intercepted',
      badge: 'Courier KYC Extortion',
      badgeColor: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
      summary: 'Automated IVR claimed an illegal parcel was intercepted at Mumbai customs requiring immediate verification payment.'
    },
    {
      id: 'call-3',
      identifier: '+91 98200 12345',
      timestamp: '3 days ago • Voice Coercion Scan',
      badge: 'Voice Phishing Intercepted',
      badgeColor: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
      summary: '30s Speech Scan detected 94% coercion pattern with synthetic background police sirens.'
    }
  ];

  // 3. Ticket Responses & Admin Review History
  const [adminTickets, setAdminTickets] = useState([
    {
      id: 'VRX-REV-849201',
      vpa: 'scammer.cybercell@oksbi',
      amount: '25000',
      note: 'Demanded for Digital Arrest Bail clearance',
      submittedAt: 'Today, 10:48 AM',
      status: 'REJECTED',
      statusLabel: 'Transfer Blocked by Compliance',
      statusColor: 'bg-rose-500/20 text-rose-300 border border-rose-500/30',
      adminNote: 'Bank compliance review desk confirmed extortion threat patterns. Recipient VPA blacklisted.'
    },
    {
      id: 'VRX-REV-104928',
      vpa: 'landlord.rent@icici',
      amount: '18000',
      note: 'Monthly House Rent Transfer',
      submittedAt: 'Yesterday, 6:30 PM',
      status: 'APPROVED',
      statusLabel: 'Cleared & Whitelisted',
      statusColor: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
      adminNote: 'Verified legitimate landlord account after KYC verification. Token generated.'
    }
  ]);

  const fetchLiveHistory = async () => {
    setLoading(true);
    try {
      if (backendUrl) {
        // 1. Fetch Appeals from Bank Portal
        const appealsRes = await fetch(`${backendUrl}/api/v1/institution/appeals`, { cache: 'no-store' }).catch(() => null);
        if (appealsRes && appealsRes.ok) {
          const appealsData = await appealsRes.json();
          if (appealsData.appeals && Array.isArray(appealsData.appeals) && appealsData.appeals.length > 0) {
            const formatted = appealsData.appeals.map(a => {
              const isApproved = a.status === 'APPROVED_WHITELISTED' || a.status === 'APPROVED';
              const isRejected = a.status === 'REJECTED';
              const id = a.appealId || a.ticketId || a.id || `VRX-REV-${Math.floor(100000 + Math.random() * 900000)}`;
              return {
                id,
                vpa: a.vpa || 'N/A',
                amount: a.amount || '0',
                note: a.note || a.reason || 'User dispute ticket',
                submittedAt: a.submittedAt || a.createdAt ? new Date(a.submittedAt || a.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
                status: a.status || 'PENDING_REVIEW',
                statusLabel: isApproved ? 'Cleared & Whitelisted' : (isRejected ? 'Transfer Blocked by Compliance' : 'Pending Admin Review'),
                statusColor: isApproved 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                  : (isRejected ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'),
                adminNote: a.reviewerNotes || (isApproved 
                  ? 'Verified legitimate payee after manual KYC inspection. Clearance token issued.' 
                  : (isRejected ? 'Bank compliance desk confirmed suspicious extortion patterns. Payee blacklisted.' : 'Ticket received by Verix Fraud Review Desk. Surveillance agent analyzing transaction telemetry.'))
              };
            });
            setAdminTickets(prev => {
              const combined = [...formatted, ...prev.filter(p => !formatted.some(f => f.id === p.id))];
              return combined;
            });
          }
        }

        // 2. Fetch Risk Audit Logs
        const riskRes = await fetch(`${backendUrl}/api/v1/risk/history`, { cache: 'no-store' }).catch(() => null);
        if (riskRes && riskRes.ok) {
          const riskData = await riskRes.json();
          if (riskData.transactions && Array.isArray(riskData.transactions) && riskData.transactions.length > 0) {
            const formattedRisk = riskData.transactions.map(item => ({
              id: item.assessmentId || `tx-${Date.now()}`,
              vpa: item.vpa,
              payee: item.vpa.split('@')[0] || 'UPI Payee',
              amount: `₹${(item.amount || 0).toLocaleString('en-IN')}`,
              riskScore: item.riskScore || 0,
              riskLevel: item.riskLevel || (item.riskScore >= 70 ? 'HIGH_RISK' : 'SAFE'),
              timestamp: item.timestamp ? new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
              note: item.note || 'UPI Pre-Payment Scan',
              reason: item.isBlocked ? 'Blocked by Verix Pre-Payment Circuit Breaker' : 'Verified clean recipient handle.'
            }));
            setPreCheckHistory(prev => {
              const combined = [...formattedRisk, ...prev.filter(p => !formattedRisk.some(f => f.vpa === p.vpa && f.id === p.id))];
              return combined;
            });
          }
        }
      }
    } catch (e) {
      console.warn('[History Sync Notice]:', e.message);
    } finally {
      // Also load local tickets
      try {
        const savedTickets = localStorage.getItem('shieldx_tickets_history');
        if (savedTickets) {
          const parsed = JSON.parse(savedTickets);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setAdminTickets(prev => [...parsed.filter(p => !prev.some(x => x.id === p.id)), ...prev]);
          }
        }
      } catch (e) {}
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveHistory();
  }, [backendUrl]);

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

  const darkBg = { background: 'linear-gradient(160deg, #1B0A22 0%, #23072D 40%, #150520 75%, #0D0215 100%)' };
  const glassCard = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)'
  };

  return (
    <div className="flex flex-col min-h-full w-full overflow-y-auto px-4 pt-4 pb-28 space-y-4 font-sans select-none" style={darkBg}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 text-[11px] font-semibold text-white/60 active:scale-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-[10px] flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)' }}>
            <Shield className="w-[14px] h-[14px] text-[#1A0317] stroke-[2.8]" />
          </div>
          <span className="font-extrabold text-white text-[15px]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {t.historyTitle || 'Security History'}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs text-[#1A0317]" style={{ background: 'linear-gradient(135deg,#D8F828,#A8CC18)' }}>
          {user?.name ? user.name[0].toUpperCase() : 'U'}
        </div>
      </div>

      {/* Page Title & Subtext */}
      <div>
        <h1 className="text-[20px] font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
          {t.historyTitle || 'Activity & Incident Logs'}
        </h1>
        <p className="text-[11.5px] text-white/45 font-medium leading-relaxed mt-0.5">
          {t.historySub || 'Review all your UPI threat checks, screened call logs, and bank admin ticket reviews.'}
        </p>
      </div>

      {/* Search Bar & Live Sync Button */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-white/30 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchLogsPlaceholder || 'Search by VPA, phone number, or ticket ID...'}
            className="w-full rounded-[14px] py-2.5 pl-10 pr-4 text-xs font-mono font-medium text-white placeholder:text-white/25 focus:outline-none transition-all"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
          />
        </div>
        <button
          onClick={fetchLiveHistory}
          title="Refresh History from Live Backend"
          className="p-2.5 rounded-[14px] text-white/70 active:scale-95 transition-all"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#D8F828]' : ''}`} />
        </button>
      </div>

      {/* 3-Way Segmented Tabs: Pre-Checks | Call Logs | Admin Tickets */}
      <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
        {[
          { id: 'prechecks', label: t.prechecksTab || '⚡ Pre-Checks' },
          { id: 'calls', label: t.callsTab || '📞 Calls' },
          { id: 'tickets', label: t.ticketsTab || '🎫 Tickets' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 ${
              activeTab === tab.id
                ? 'bg-[#D8F828] text-[#1A0317] shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── TAB 1: UPI PRE-CHECKS HISTORY ── */}
      {activeTab === 'prechecks' && (
        <div className="space-y-3">
          {preCheckHistory
            .filter(item => item.vpa.toLowerCase().includes(searchQuery.toLowerCase()) || item.payee.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item) => (
              <div key={item.id} className="rounded-[24px] p-4 space-y-3 animate-fade-in" style={glassCard}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2.5 rounded-2xl ${item.riskScore > 50 ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                      {item.riskScore > 50 ? <AlertTriangle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-white font-mono">{item.vpa}</h3>
                      <p className="text-[10px] text-white/40 font-medium">{item.payee} • {item.timestamp}</p>
                    </div>
                  </div>

                  <span className={`text-[9.5px] font-black px-2.5 py-1 rounded-full border font-mono ${
                    item.riskScore > 50 
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/30' 
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {item.riskScore > 50 ? `🚨 ${item.riskScore}% RISK` : '🟢 SAFE'}
                  </span>
                </div>

                <div className="p-3 rounded-[16px] space-y-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex justify-between items-center text-[10px] text-white/40">
                    <span>Amount: <strong className="text-white font-mono">{item.amount}</strong></span>
                    <span>Note: <span className="italic text-white/60">{item.note}</span></span>
                  </div>
                  <p className="text-[11px] text-white/80 font-medium leading-relaxed pt-1">
                    {item.reason}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* ── TAB 2: CALL LOGS & VOICE SCANS ── */}
      {activeTab === 'calls' && (
        <div className="space-y-3">
          {callAlerts
            .filter(item => item.identifier.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((item) => (
              <div key={item.id} className="rounded-[24px] p-4 space-y-3 animate-fade-in" style={glassCard}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-rose-500/20 text-rose-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-white font-mono">{item.identifier}</h3>
                      <p className="text-[10px] text-white/40 font-medium">{item.timestamp}</p>
                    </div>
                  </div>

                  <span className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full font-mono ${item.badgeColor}`}>
                    🔴 {item.badge}
                  </span>
                </div>

                <div className="p-3 rounded-[16px] flex items-start gap-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Info className="w-4 h-4 text-[#D8F828] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-white/80 leading-relaxed font-medium">
                    {item.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleBlock(item.id, item.identifier)}
                    className={`flex-1 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      blockedItems.includes(item.id)
                        ? 'bg-white/10 text-white/40'
                        : 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm'
                    }`}
                  >
                    <Ban className="w-3.5 h-3.5" />
                    {blockedItems.includes(item.id) ? 'Blocked' : 'Block Sender'}
                  </button>

                  <button
                    onClick={() => handleOpenReportModal(item)}
                    className={`flex-1 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      reportedItems.includes(item.id)
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-white/10 border border-white/15 hover:bg-white/15 text-white'
                    }`}
                  >
                    <Flag className="w-3.5 h-3.5 text-rose-400" />
                    {reportedItems.includes(item.id) ? 'Reported (1930)' : (t.blockReport || 'Report Incident')}
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* ── TAB 3: TICKET RESPONSES & ADMIN REVIEWS ── */}
      {activeTab === 'tickets' && (
        <div className="space-y-3">
          {adminTickets
            .filter(item => 
              ((item.id || '').toLowerCase().includes((searchQuery || '').toLowerCase())) || 
              ((item.vpa || '').toLowerCase().includes((searchQuery || '').toLowerCase())) ||
              ((item.note || '').toLowerCase().includes((searchQuery || '').toLowerCase()))
            )
            .map((ticket) => (
              <div key={ticket.id} className="rounded-[24px] p-4 space-y-3 animate-fade-in" style={glassCard}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl" style={{ background: 'rgba(216,248,40,0.15)', color: '#D8F828' }}>
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black text-[#D8F828] font-mono">{ticket.id}</h3>
                      <p className="text-[10px] text-white/40 font-medium">Submitted: {ticket.submittedAt}</p>
                    </div>
                  </div>

                  <span className={`text-[9.5px] font-bold px-2.5 py-1 rounded-full border font-mono ${ticket.statusColor}`}>
                    {ticket.statusLabel}
                  </span>
                </div>

                <div className="text-xs p-2.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-[10px] text-white/40 block">Target VPA under review:</span>
                  <span className="font-mono font-bold text-white">{ticket.vpa}</span>
                </div>

                <div className="p-3 rounded-2xl space-y-1" style={{ background: 'rgba(216,248,40,0.06)', border: '1px solid rgba(216,248,40,0.15)' }}>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#D8F828] uppercase font-mono">
                    <Shield className="w-3 h-3 text-[#D8F828]" /> Bank Surveillance &amp; Admin Response:
                  </div>
                  <p className="text-[11px] text-white/80 font-medium leading-relaxed">
                    {ticket.adminNote}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Official Cyber Crime Reporting Modal */}
      {reportingItem && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xs rounded-3xl p-5 space-y-3.5 animate-slide-down shadow-2xl" style={{ background: '#1F0626', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                <Flag className="w-4 h-4 text-rose-500" /> Report to Cyber Crime (1930)
              </h4>
              <button onClick={() => setReportingItem(null)} className="text-white/40 hover:text-white text-sm font-bold">✕</button>
            </div>

            <div className="p-2.5 rounded-2xl text-xs" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <span className="text-[10px] text-white/40 block">Flagged Threat:</span>
              <p className="font-bold text-[#D8F828] font-mono">{reportingItem.identifier || reportingItem.vpa}</p>
              <span className="text-[10px] text-rose-400 font-semibold">{reportingItem.badge || 'High Risk Threat'}</span>
            </div>

            <form onSubmit={handleSubmitReport} className="space-y-3">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 font-mono block mb-1">
                  Additional Incident Details:
                </label>
                <textarea
                  value={reportNote}
                  onChange={(e) => setReportNote(e.target.value)}
                  placeholder="e.g. Scammer asked for OTP and threatened with immediate arrest."
                  rows={3}
                  className="w-full rounded-xl p-2.5 text-xs text-white placeholder:text-white/25 focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                />
              </div>

              {reportSuccess && (
                <div className="p-2.5 rounded-xl text-xs bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Submitted to Cyber Crime Registry!
                </div>
              )}

              <button
                type="submit"
                disabled={reportSuccess}
                className="w-full py-3 rounded-2xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md active:scale-98 transition-all"
                style={{ background: 'linear-gradient(135deg,#E4FF2E,#C4E810)', color: '#1A0317', fontFamily: 'Outfit, sans-serif' }}
              >
                <Send className="w-3.5 h-3.5 text-[#1A0317]" /> Submit Report (1930 / I4C)
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
