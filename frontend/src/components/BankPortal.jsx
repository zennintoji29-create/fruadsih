import React, { useState, useEffect } from 'react';
import { 
  Building2, ShieldCheck, ShieldAlert, AlertTriangle, CheckCircle2, 
  XCircle, RefreshCw, Filter, Search, Database, Users, TrendingUp, Sparkles, Lock 
} from 'lucide-react';

export default function BankPortal({ backendUrl }) {
  const [activeTab, setActiveTab] = useState('appeals'); // 'appeals' | 'telemetry' | 'registry'
  const [appeals, setAppeals] = useState([]);
  const [stats, setStats] = useState(null);
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');

  const fetchPortalData = async () => {
    setLoading(true);
    try {
      const appealRes = await fetch(`${backendUrl}/api/v1/institution/appeals`);
      const appealData = await appealRes.json();
      setAppeals(appealData.appeals || []);

      const analyticsRes = await fetch(`${backendUrl}/api/v1/institution/analytics-overview`);
      const analyticsData = await analyticsRes.json();
      setStats(analyticsData.analytics);

      const threatRes = await fetch(`${backendUrl}/api/v1/threat-intel/stats`);
      const threatData = await threatRes.json();
      setThreats(threatData.threats || []);
    } catch (err) {
      // Offline fallback
      setAppeals([
        {
          appealId: 'appeal-demo-01',
          vpa: 'state.electricity.board@paytm',
          appellantType: 'MERCHANT',
          contactEmail: 'nodal.officer@state-electricity.org',
          reason: 'Authorized government power utility bill collection account.',
          status: 'PENDING_REVIEW',
          submittedAt: new Date().toISOString()
        },
        {
          appealId: 'appeal-demo-02',
          vpa: 'landlord.rent@okaxis',
          appellantType: 'INDIVIDUAL',
          contactEmail: 'user.verified@domain.com',
          reason: 'Verified landlord rent payment handle false positive.',
          status: 'PENDING_REVIEW',
          submittedAt: new Date().toISOString()
        }
      ]);
      setStats({
        totalEvaluatedTransactions: 142,
        totalBlockedTransactions: 18,
        totalVolumeProtectedINR: 385000,
        activeThreatRegistrySize: 12,
        pendingFalsePositiveAppeals: 2
      });
      setThreats([
        { id: 't1', identifier: 'scammer.cybercell@oksbi', category: 'DIGITAL_ARREST', riskScore: 98, source: 'I4C Cyber Crime Helpline 1930', reportCount: 142, details: 'Impersonating Mumbai Police & CBI extortion ring.' },
        { id: 't2', identifier: 'electricity.officer.bill@paytm', category: 'ELECTRICITY_BILL', riskScore: 92, source: 'Sanchar Saathi Chakshu', reportCount: 89, details: 'Urgent power cut SMS phishing trap.' },
        { id: 't3', identifier: '+91 98765 43210', category: 'VOICE_PHISHING', riskScore: 96, source: 'User Community Report', reportCount: 56, details: 'Voice phishing digital arrest extortion caller.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleResolveAppeal = async (appealId, resolution) => {
    try {
      await fetch(`${backendUrl}/api/v1/institution/appeals/${appealId}/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          resolution,
          reviewerNotes: `Reviewed & processed by Nodal Compliance Officer #042`
        })
      });
      setActionSuccess(`Appeal ${appealId} resolved as ${resolution}!`);
      setTimeout(() => setActionSuccess(''), 3000);
      fetchPortalData();
    } catch (err) {
      setAppeals(appeals.map(a => a.appealId === appealId ? { ...a, status: resolution } : a));
      setActionSuccess(`Appeal ${appealId} resolved!`);
      setTimeout(() => setActionSuccess(''), 3000);
    }
  };

  useEffect(() => {
    fetchPortalData();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6 text-[#1e112a] bg-[#f5fbda]/40 rounded-3xl border border-[#e5ebc5] animate-fade-in font-sans selection:bg-[#450c3f] selection:text-white">
      {/* Top Institutional Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-[#e5ebc5] shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-[#450c3f] text-[#b9d175] shadow-md">
            <Building2 className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold font-heading text-[#450c3f]">Bank & Nodal Cyber Operations Dashboard</h1>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#d9efbd] text-[#450c3f] border border-[#b9d175]">
                NPCI / I4C Synchronized
              </span>
            </div>
            <p className="text-xs text-[#5e4d6a] font-medium">Centralized dispute resolution, false-positive appeals queue & threat intelligence stream</p>
          </div>
        </div>

        <button
          onClick={fetchPortalData}
          className="px-4 py-2.5 bg-[#450c3f] hover:bg-[#33082e] text-[#f5fbda] rounded-2xl text-xs font-bold flex items-center gap-2 self-start md:self-auto transition-all shadow-md active:scale-95"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh Telemetry
        </button>
      </div>

      {actionSuccess && (
        <div className="p-3 rounded-2xl bg-[#d9efbd] text-[#450c3f] text-xs font-bold flex items-center gap-2 animate-slide-down border border-[#b9d175]">
          <CheckCircle2 className="w-4 h-4 text-[#450c3f]" /> {actionSuccess}
        </div>
      )}

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-3xl border border-[#e5ebc5] shadow-sm space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#5e4d6a]">Protected Fraud Volume</span>
          <h3 className="text-2xl font-bold font-mono text-[#450c3f]">
            ₹{(stats?.totalVolumeProtectedINR || 385000).toLocaleString('en-IN')}
          </h3>
          <p className="text-[10px] text-[#5e4d6a] font-medium">Saved from Extortion Rackets</p>
        </div>

        <div className="bg-white p-4 rounded-3xl border border-[#e5ebc5] shadow-sm space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#5e4d6a]">Pre-Payment Scans</span>
          <h3 className="text-2xl font-bold font-mono text-[#450c3f]">
            {stats?.totalEvaluatedTransactions || 142}
          </h3>
          <p className="text-[10px] text-[#450c3f] font-bold">Real-time evaluations</p>
        </div>

        <div className="bg-white p-4 rounded-3xl border border-[#e5ebc5] shadow-sm space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#5e4d6a]">Active Threat Registry</span>
          <h3 className="text-2xl font-bold font-mono text-rose-600">
            {stats?.activeThreatRegistrySize || threats.length || 12}
          </h3>
          <p className="text-[10px] text-[#5e4d6a] font-medium">I4C / Sanchar Saathi VPAs</p>
        </div>

        <div className="bg-white p-4 rounded-3xl border border-[#e5ebc5] shadow-sm space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#5e4d6a]">Dispute Review Queue</span>
          <h3 className="text-2xl font-bold font-mono text-amber-600">
            {appeals.filter(a => a.status === 'PENDING_REVIEW').length}
          </h3>
          <p className="text-[10px] text-[#5e4d6a] font-medium">Pending Officer Resolution</p>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-[#e5ebc5] gap-6">
        {[
          { id: 'appeals', label: 'False-Positive Appeals Queue' },
          { id: 'registry', label: 'National Cyber Threat Registry (I4C / Chakshu)' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-xs font-bold transition-all border-b-2 ${
              activeTab === tab.id 
                ? 'text-[#450c3f] border-[#450c3f]' 
                : 'text-[#5e4d6a] border-transparent hover:text-[#450c3f]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: False Positive Appeals */}
      {activeTab === 'appeals' && (
        <div className="space-y-3">
          {appeals.length === 0 ? (
            <div className="bg-white p-8 rounded-3xl border border-[#e5ebc5] text-center text-[#5e4d6a] text-xs">
              No pending false positive disputes.
            </div>
          ) : (
            appeals.map((appeal) => (
              <div
                key={appeal.appealId}
                className="bg-white p-4 rounded-3xl border border-[#e5ebc5] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono bg-[#d9efbd] text-[#450c3f] border border-[#b9d175]">
                      {appeal.appellantType}
                    </span>
                    <h4 className="text-xs font-bold font-mono text-[#450c3f]">{appeal.vpa || 'Flagged VPA'}</h4>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      appeal.status === 'APPROVED_WHITELISTED' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : appeal.status === 'REJECTED' 
                          ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {appeal.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <p className="text-xs text-[#1e112a] font-medium">{appeal.reason}</p>
                  <p className="text-[10px] text-[#5e4d6a]">Contact: {appeal.contactEmail} • Ticket ID: {appeal.appealId}</p>
                </div>

                {appeal.status === 'PENDING_REVIEW' && (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleResolveAppeal(appeal.appealId, 'APPROVED_WHITELISTED')}
                      className="px-3.5 py-2 bg-[#450c3f] hover:bg-[#33082e] text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#b9d175]" /> Approve & Whitelist
                    </button>
                    <button
                      onClick={() => handleResolveAppeal(appeal.appealId, 'REJECTED')}
                      className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-2xl text-xs font-bold border border-rose-200 transition-all active:scale-95"
                    >
                      <XCircle className="w-3.5 h-3.5 text-rose-600" /> Reject Appeal
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 2: Threat Registry */}
      {activeTab === 'registry' && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {threats.map((t) => (
              <div key={t.id} className="bg-white p-4 rounded-3xl border border-[#e5ebc5] shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold font-mono text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                    {t.category}
                  </span>
                  <span className="text-xs font-bold font-mono text-[#450c3f]">Risk: {t.riskScore}%</span>
                </div>
                <div>
                  <h4 className="text-xs font-bold font-mono text-[#450c3f]">{t.identifier}</h4>
                  <p className="text-[10px] text-[#5e4d6a] mt-0.5 font-medium">{t.details}</p>
                </div>
                <div className="flex items-center justify-between text-[9px] text-[#5e4d6a] pt-2 border-t border-[#e5ebc5]">
                  <span>Source: {t.source}</span>
                  <span>Reports: {t.reportCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
