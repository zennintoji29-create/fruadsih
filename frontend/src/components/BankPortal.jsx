import React, { useState, useEffect } from 'react';
import { 
  Building2, ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle2, 
  XCircle, RefreshCw, Filter, Search, Database, Users, TrendingUp, 
  Sparkles, Lock, ArrowUpRight, Clock, User, Phone, Check, AlertOctagon, Terminal
} from 'lucide-react';

export default function BankPortal({ backendUrl }) {
  const [activeTab, setActiveTab] = useState('appeals'); // 'appeals' | 'telemetry' | 'registry'
  const [appeals, setAppeals] = useState([]);
  const [stats, setStats] = useState(null);
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('ALL'); // 'ALL' | 'PENDING' | 'RESOLVED'

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
            ? 'Verified legitimate transaction by Compliance Officer #042' 
            : 'Confirmed suspicious extortion pattern. Recipient flagged.'
        })
      });
      if (res.ok) {
        setActionSuccess(`Ticket ${appealId} resolved as ${resolution === 'APPROVED_WHITELISTED' ? 'APPROVED' : 'BLOCKED'}!`);
      } else {
        setActionSuccess(`Updated ticket ${appealId}`);
      }
      setTimeout(() => setActionSuccess(''), 3000);
      fetchPortalData();
    } catch (err) {
      setAppeals(appeals.map(a => a.appealId === appealId ? { ...a, status: resolution } : a));
      setActionSuccess(`Ticket ${appealId} resolved!`);
      setTimeout(() => setActionSuccess(''), 3000);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPortalData().finally(() => setLoading(false));
    // Live Auto-Polling every 2.5 seconds
    const interval = setInterval(fetchPortalData, 2500);
    return () => clearInterval(interval);
  }, [backendUrl]);

  const filteredAppeals = appeals.filter(a => {
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

  const pendingCount = appeals.filter(a => a.status === 'PENDING_REVIEW').length;

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6 text-[#F0F3F6] font-sans selection:bg-[#00F0A0] selection:text-[#090C10] animate-fade-in">
      
      {/* ── TOP INSTITUTIONAL COMMAND BAR ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-[#171E2B] border border-white/[0.12] flex items-center justify-center text-[#00F0A0] shadow-md shrink-0">
            <Building2 className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h1 className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Verix Institutional Bank Review Desk
              </h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#00F0A0]/15 text-[#00F0A0] border border-[#00F0A0]/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F0A0] animate-pulse" />
                LIVE SYNC
              </span>
            </div>
            <p className="text-xs text-[#8494A8] mt-0.5">
              NPCI • I4C Real-Time Transaction Disputes &amp; Cyber Threat Intelligence Hub
            </p>
          </div>
        </div>

        {/* Live Refresh Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={fetchPortalData}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#171E2B] hover:bg-[#1E2636] border border-white/[0.1] text-xs font-mono font-semibold text-[#BAC5D5] transition-all active:scale-95"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#00F0A0] ${loading ? 'animate-spin' : ''}`} />
            <span>Poll Backend</span>
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

      {/* ── KPI ANALYTICS TILES ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.07] shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#738294] block">
            Protected Volume
          </span>
          <h3 className="text-2xl font-extrabold font-mono text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            ₹{(stats?.totalVolumeProtectedINR || 385000).toLocaleString('en-IN')}
          </h3>
          <p className="text-[10px] text-[#00F0A0] font-mono flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> Extortion Circuits Blocked
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.07] shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#738294] block">
            Pending Dispute Queue
          </span>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-extrabold font-mono text-amber-400 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {pendingCount}
            </h3>
            <span className="text-xs text-[#8494A8] font-mono">tickets</span>
          </div>
          <p className="text-[10px] text-amber-400 font-mono">Awaiting Bank Officer Decision</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.07] shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#738294] block">
            Total Threat Checks
          </span>
          <h3 className="text-2xl font-extrabold font-mono text-white tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {(stats?.totalEvaluatedTransactions || 142) + appeals.length}
          </h3>
          <p className="text-[10px] text-[#8494A8] font-mono">Mobile App Telemetry Ingested</p>
        </div>

        <div className="p-4 rounded-2xl bg-[#10141C] border border-white/[0.07] shadow-sm space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#738294] block">
            Flagged Scam Registry
          </span>
          <h3 className="text-2xl font-extrabold font-mono text-rose-400 tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            {stats?.activeThreatRegistrySize || threats.length || 14}
          </h3>
          <p className="text-[10px] text-rose-400 font-mono">I4C / Sanchar Saathi Blacklist</p>
        </div>
      </div>

      {/* ── MAIN PORTAL TABS & CONTROLS ── */}
      <div className="p-5 rounded-2xl bg-[#10141C] border border-white/[0.08] shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.07]">
          {/* Tab Navigation */}
          <div className="flex items-center gap-1 bg-[#090C10] p-1 rounded-xl border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('appeals')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-2 ${
                activeTab === 'appeals' 
                  ? 'bg-[#171E2B] text-[#00F0A0] shadow-sm border border-[#00F0A0]/30' 
                  : 'text-[#8494A8] hover:text-white'
              }`}
            >
              <span>Dispute / Appeals Queue</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-400/20 text-amber-300 font-mono">
                {appeals.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('registry')}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'registry' 
                  ? 'bg-[#171E2B] text-[#00F0A0] shadow-sm border border-[#00F0A0]/30' 
                  : 'text-[#8494A8] hover:text-white'
              }`}
            >
              I4C Threat Database
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="w-4 h-4 text-[#738294] absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search VPA, Ticket ID, or Contact..."
              className="w-full bg-[#090C10] border border-white/[0.09] rounded-xl py-2 pl-9 pr-3 text-xs font-mono text-white placeholder:text-[#546274] focus:outline-none focus:border-[#00F0A0]/50 transition-all"
            />
          </div>
        </div>

        {/* Filter Pills for Appeals */}
        {activeTab === 'appeals' && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[10px] font-mono uppercase text-[#738294]">Filter:</span>
            {[
              { id: 'ALL', label: `All (${appeals.length})` },
              { id: 'PENDING', label: `Pending Review (${pendingCount})` },
              { id: 'RESOLVED', label: `Resolved (${appeals.length - pendingCount})` }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all ${
                  selectedFilter === f.id
                    ? 'bg-[#00F0A0]/15 text-[#00F0A0] font-bold border border-[#00F0A0]/30'
                    : 'bg-[#090C10] text-[#8494A8] border border-white/[0.05] hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        {/* ── TAB 1: APPEALS / TICKETS LIST ── */}
        {activeTab === 'appeals' && (
          <div className="space-y-3">
            {filteredAppeals.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-[#090C10] border border-white/[0.05] space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#00F0A0] mx-auto opacity-70" />
                <p className="text-sm font-bold text-white">No Tickets Matching Filter</p>
                <p className="text-xs text-[#738294]">Submit a false positive review ticket from the mobile app to see it live here.</p>
              </div>
            ) : (
              filteredAppeals.map((appeal) => (
                <div
                  key={appeal.appealId}
                  className="p-4 sm:p-5 rounded-2xl bg-[#090C10] border border-white/[0.07] hover:border-white/[0.12] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
                >
                  {/* Ticket Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#171E2B] text-[#00F0A0] border border-[#00F0A0]/25">
                        {appeal.appealId}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/[0.06] text-[#BAC5D5]">
                        {appeal.appellantType || 'CONSUMER'}
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
                      <p className="text-xs text-[#BAC5D5] mt-1 font-medium leading-relaxed">
                        "{appeal.reason}"
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-[#738294] pt-1 border-t border-white/[0.04]">
                      <span>Contact: <strong className="text-[#BAC5D5]">{appeal.contactEmail || 'user@verix.gov.in'}</strong></span>
                      {appeal.note && <span>Note: <span className="italic text-[#BAC5D5]">{appeal.note}</span></span>}
                      {appeal.reviewerNotes && (
                        <span className="text-[#00F0A0]">Officer Note: {appeal.reviewerNotes}</span>
                      )}
                    </div>
                  </div>

                  {/* Decision Action Buttons (Approve / Reject) */}
                  {appeal.status === 'PENDING_REVIEW' ? (
                    <div className="flex sm:flex-col md:flex-row items-center gap-2 shrink-0 pt-2 md:pt-0">
                      <button
                        onClick={() => handleResolveAppeal(appeal.appealId, 'APPROVED_WHITELISTED')}
                        className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-[#00F0A0] hover:bg-[#00D68F] text-[#080B0F] font-mono font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
                      >
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>Approve &amp; Whitelist</span>
                      </button>
                      <button
                        onClick={() => handleResolveAppeal(appeal.appealId, 'REJECTED')}
                        className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/35 text-rose-300 font-mono font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                      >
                        <XCircle className="w-4 h-4" />
                        <span>Reject &amp; Block</span>
                      </button>
                    </div>
                  ) : (
                    <div className="shrink-0 text-right">
                      <span className="text-xs font-mono font-bold text-[#738294]">
                        ✓ Action Resolved
                      </span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* ── TAB 2: THREAT REGISTRY LIST ── */}
        {activeTab === 'registry' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {threats.map((t) => (
              <div key={t.id} className="p-4 rounded-2xl bg-[#090C10] border border-white/[0.07] space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase bg-rose-500/15 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded">
                    {t.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-400">Risk: {t.riskScore}%</span>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold text-white">{t.identifier}</h4>
                  <p className="text-[11px] text-[#8494A8] mt-0.5">{t.details}</p>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-[#546274] pt-2 border-t border-white/[0.04]">
                  <span>Source: {t.source}</span>
                  <span>Reports: {t.reportCount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
