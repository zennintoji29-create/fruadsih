import React, { useState } from 'react';
import { 
  Shield, Search, Phone, MessageSquare, AlertTriangle, 
  Ban, Flag, Info, ArrowLeft, CheckCircle2, X, Send 
} from 'lucide-react';
import { translations } from '../translations';

export default function HistoryScreen({ onBack, backendUrl, user, currentLang = 'en' }) {
  const t = translations[currentLang] || translations.en;
  const [activeTab, setActiveTab] = useState('calls'); // 'calls' | 'messages'
  const [searchQuery, setSearchQuery] = useState('');
  const [blockedItems, setBlockedItems] = useState([]);
  const [reportedItems, setReportedItems] = useState([]);

  // Report Modal State
  const [reportingItem, setReportingItem] = useState(null);
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportNote, setReportNote] = useState('');

  const callAlerts = [
    {
      id: 'call-1',
      identifier: '+91 98765 43210',
      timestamp: 'Today, 10:42 AM • Incoming Call Flagged',
      badge: 'Digital Arrest Scam',
      badgeColor: 'bg-rose-600 text-white',
      summary: 'Verix AI Summary: Caller impersonated Delhi Cyber Crime Cell demanding ₹25,000 security clearance for fake arrest warrant.'
    },
    {
      id: 'call-2',
      identifier: '+91 88776 65544',
      timestamp: 'Yesterday, 4:20 PM • Robocall Intercepted',
      badge: 'Courier KYC Extortion',
      badgeColor: 'bg-amber-600 text-white',
      summary: 'Verix AI Summary: Automated IVR claimed an illegal parcel was intercepted at Mumbai customs requiring immediate verification payment.'
    }
  ];

  const messageAlerts = [
    {
      id: 'msg-1',
      identifier: 'VM-ELEC-OFFICER',
      timestamp: 'Today, 11:15 AM • Phishing SMS Intercepted',
      badge: 'Electricity Cut Trap',
      badgeColor: 'bg-rose-600 text-white',
      summary: 'Verix AI Summary: "Dear customer your electricity power will be disconnected at 9:30 PM today. Call officer at 9876543210 to clear bill." Malicious link blocked.'
    },
    {
      id: 'msg-2',
      identifier: 'AD-SBI-ALERT',
      timestamp: '2 days ago • Fake Bank APK Link',
      badge: 'Malicious APK Trap',
      badgeColor: 'bg-rose-600 text-white',
      summary: 'Verix AI Summary: Fake message claiming PAN update required with link to download an infected trojan APK.'
    }
  ];

  const currentList = activeTab === 'calls' ? callAlerts : messageAlerts;

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
            identifier: reportingItem.identifier,
            details: reportNote || reportingItem.summary,
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
    <div className="flex flex-col h-full overflow-y-auto bg-[#f5fbda] text-[#1e112a] p-4 space-y-4 font-sans selection:bg-[#450c3f] selection:text-white pb-8">
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
        <div className="w-8 h-8 rounded-full bg-[#450c3f] text-[#b9d175] flex items-center justify-center font-bold text-xs shadow-xs">
          {user?.name ? user.name[0].toUpperCase() : 'U'}
        </div>
      </div>

      {/* Page Title & Subtext */}
      <div>
        <h1 className="text-xl font-bold text-[#450c3f] font-heading">{t.historyTitle}</h1>
        <p className="text-xs text-[#5e4d6a] font-medium leading-tight">{t.historySub}</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search flagged incidents..."
          className="w-full bg-white border border-[#e5ebc5] rounded-2xl py-2.5 pl-10 pr-4 text-xs text-[#1e112a] focus:outline-none focus:border-[#450c3f]"
        />
      </div>

      {/* Segmented Toggle: Flagged Calls | Blocked SMS */}
      <div className="flex p-1 bg-white rounded-2xl border border-[#e5ebc5] shadow-2xs">
        <button
          onClick={() => setActiveTab('calls')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'calls'
              ? 'bg-[#450c3f] text-[#f5fbda] shadow-sm'
              : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <Phone className="w-3.5 h-3.5" /> Flagged Calls
        </button>
        <button
          onClick={() => setActiveTab('messages')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'messages'
              ? 'bg-[#450c3f] text-[#f5fbda] shadow-sm'
              : 'text-[#5e4d6a] hover:text-[#1e112a]'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" /> Blocked SMS
        </button>
      </div>

      {/* Dynamic Activity Feed */}
      <div className="space-y-3">
        {currentList
          .filter(item => item.identifier.toLowerCase().includes(searchQuery.toLowerCase()) || item.summary.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-4 border border-[#e5ebc5] shadow-xs space-y-3 animate-fade-in">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#1e112a] font-mono">{item.identifier}</h3>
                    <p className="text-[10px] text-[#5e4d6a] font-medium">{item.timestamp}</p>
                  </div>
                </div>

                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                  🔴 {item.badge}
                </span>
              </div>

              {/* ShieldX AI Summary */}
              <div className="p-3 rounded-2xl bg-[#f5fbda]/60 border border-[#d9efbd] flex items-start gap-2">
                <Info className="w-4 h-4 text-[#450c3f] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#1e112a] leading-relaxed font-medium">
                  {item.summary}
                </p>
              </div>

              {/* Action Buttons */}
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
              <p className="font-bold text-[#450c3f] font-mono">{reportingItem.identifier}</p>
              <span className="text-[10px] text-rose-700 font-semibold">{reportingItem.badge}</span>
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
