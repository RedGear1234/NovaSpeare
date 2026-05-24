import React, { useState, useEffect } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { StrategyResult } from '../types';

const StrategyLab: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<StrategyResult | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'tactics' | 'kpis'>('overview');

  // Load strategy info from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('nova_strategy_businessName');
    const savedNiche = localStorage.getItem('nova_strategy_niche');
    const savedResult = localStorage.getItem('nova_strategy_result');
    const savedActiveTab = localStorage.getItem('nova_strategy_activeTab');

    if (savedName) setBusinessName(savedName);
    if (savedNiche) setNiche(savedNiche);
    if (savedResult) {
      try {
        setResult(JSON.parse(savedResult));
      } catch (e) {
        console.error("Failed to parse saved strategy result:", e);
      }
    }
    if (savedActiveTab) setActiveTab(savedActiveTab as any);
  }, []);

  // Save active tab preference
  useEffect(() => {
    if (result) {
      localStorage.setItem('nova_strategy_activeTab', activeTab);
    }
  }, [activeTab, result]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !niche.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const data = await generateMarketingStrategy(businessName, niche);
      setResult(data);
      setActiveTab('overview');
      localStorage.setItem('nova_strategy_businessName', businessName);
      localStorage.setItem('nova_strategy_niche', niche);
      localStorage.setItem('nova_strategy_result', JSON.stringify(data));
      localStorage.setItem('nova_strategy_activeTab', 'overview');
    } catch (err: any) {
      console.error("Strategy Lab UI Error:", err);
      setError(err.message || "An unexpected system error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategy" className="pt-32 pb-16 bg-transparent relative overflow-visible">
      {/* Decorative Orbs */}
      <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">The Innovation Hub</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[0.9]">
              NovaSphere <br /> 
              <span className="gradient-text">Strategy Lab</span>
            </h2>
            <p className="text-slate-400 text-xl mb-10 leading-relaxed max-w-xl">
              Experience our proprietary AI-driven approach. Enter your business details, and our custom-trained model will generate a growth roadmap in seconds.
            </p>
            
            <form onSubmit={handleGenerate} className="space-y-6 max-w-lg">
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Business Name</label>
                <input 
                  type="text" 
                  value={businessName}
                  required
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                  placeholder="e.g. BlueWave Fitness"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Industry / Niche</label>
                <input 
                  type="text" 
                  value={niche}
                  required
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                  placeholder="e.g. Sustainable Apparel"
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-indigo-600/20 active:scale-95 animate-pulse"
                style={{ animationDuration: '3s' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-circle-notch animate-spin"></i> Processing Neural Data...
                  </span>
                ) : 'Generate Strategy'}
              </button>
            </form>
          </div>

          <div className="glass-effect rounded-[3rem] p-8 md:p-10 min-h-[520px] flex flex-col justify-start border border-white/5 shadow-2xl relative overflow-visible transition-all duration-500">
            {!result && !loading && !error && (
              <div className="text-center my-auto">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-inner">
                  <i className="fa-solid fa-microchip text-indigo-500/30 text-4xl animate-pulse" style={{ animationDuration: '4s' }}></i>
                </div>
                <h3 className="text-2xl font-black text-slate-500 uppercase tracking-widest mb-3">System Ready</h3>
                <p className="text-slate-600 max-w-xs mx-auto">Input your vision on the left to activate our strategic neural engine.</p>
              </div>
            )}

            {loading && (
              <div className="space-y-8 animate-pulse my-auto p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-6 bg-white/5 rounded-full w-1/3"></div>
                  <div className="h-4 bg-white/5 rounded-full w-1/6"></div>
                </div>
                <div className="h-28 bg-white/5 rounded-[2rem] w-full"></div>
                <div className="space-y-3">
                  <div className="h-16 bg-white/5 rounded-2xl w-full"></div>
                  <div className="h-16 bg-white/5 rounded-2xl w-full"></div>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="text-center my-auto animate-fadeInUp">
                <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
                  <i className="fa-solid fa-triangle-exclamation text-rose-500 text-2xl animate-bounce"></i>
                </div>
                <h3 className="text-xl font-black text-rose-500 uppercase tracking-widest mb-3">Protocol Interrupted</h3>
                <div className="bg-rose-500/20 px-6 py-4 rounded-2xl border border-rose-500/20 inline-block mb-8">
                  <p className="text-slate-200 font-black tracking-widest uppercase text-sm">{error}</p>
                </div>
                <div className="mt-4">
                  <button 
                    onClick={handleGenerate}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-all shadow-lg active:scale-95"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            )}

            {result && !loading && (
              <div className="flex flex-col h-full justify-between animate-fadeInUp">
                {/* Glowing status banner */}
                <div className="flex items-center justify-between mb-8">
                  <span className="flex items-center gap-2 bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border border-indigo-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    Neural Link Verified
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">v3.9 Engine</span>
                </div>

                {/* Premium Tab Switcher */}
                <div className="flex bg-white/5 p-1 rounded-full border border-white/10 mb-8 w-full">
                  <button
                    type="button"
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === 'overview'
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <i className="fa-solid fa-sparkles"></i> Overview
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('tactics')}
                    className={`flex-1 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === 'tactics'
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <i className="fa-solid fa-bolt"></i> Tactics
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('kpis')}
                    className={`flex-1 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeTab === 'kpis'
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <i className="fa-solid fa-chart-line"></i> KPIs
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="flex-1">
                  {activeTab === 'overview' && (
                    <div className="relative group overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8 rounded-[2.5rem] border border-white/5 shadow-inner animate-fadeInUp">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                          <i className="fa-solid fa-brain text-indigo-400 text-sm"></i>
                        </div>
                        <h4 className="text-white font-black text-sm uppercase tracking-widest">Executive Blueprint</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-lg font-medium">{result.overview}</p>
                      
                      <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Target Niche</div>
                          <div className="text-indigo-400 text-sm font-black uppercase tracking-wide truncate">{niche}</div>
                        </div>
                        <div>
                          <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Brand Profile</div>
                          <div className="text-pink-400 text-sm font-black uppercase tracking-wide truncate">{businessName}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'tactics' && (
                    <div className="space-y-4 animate-fadeInUp">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-purple-400 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                          <i className="fa-solid fa-bolt"></i> Strategic Action Plan
                        </h4>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{result.tactics.length} Directives</span>
                      </div>
                      <div className="grid gap-4 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                        {result.tactics.map((t, i) => {
                          const badges = [
                            { label: 'PHASE 1 • IMMEDIATE', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20', numColor: 'from-indigo-500 to-indigo-600' },
                            { label: 'PHASE 1 • HIGH IMPACT', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20', numColor: 'from-purple-500 to-purple-600' },
                            { label: 'PHASE 2 • INTEGRATION', color: 'text-pink-400 bg-pink-500/10 border-pink-500/20', numColor: 'from-pink-500 to-pink-600' },
                            { label: 'PHASE 2 • SCALING', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20', numColor: 'from-blue-500 to-blue-600' }
                          ];
                          const badge = badges[i] || badges[0];
                          
                          return (
                            <div key={i} className="group relative bg-white/[0.02] hover:bg-white/[0.05] rounded-[1.75rem] p-5 border border-white/5 hover:border-white/10 transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-md">
                              <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${badge.numColor} flex items-center justify-center text-white font-black text-xs shadow-md shrink-0`}>
                                {String(i + 1).padStart(2, '0')}
                              </div>
                              <div className="space-y-1.5">
                                <div className="flex items-center">
                                  <span className={`text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${badge.color}`}>
                                    {badge.label}
                                  </span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed font-semibold group-hover:text-white transition-colors">{t}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {activeTab === 'kpis' && (
                    <div className="space-y-4 animate-fadeInUp">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-pink-400 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                          <i className="fa-solid fa-chart-line"></i> Success Metrics & Targets
                        </h4>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Measurable Targets</span>
                      </div>
                      <div className="grid gap-4 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                        {result.metrics.map((m, i) => {
                          const variants = [
                            { color: 'text-pink-400', pct: '85%', label: 'ACQUISITION TARGET', icon: 'fa-user-plus' },
                            { color: 'text-emerald-400', pct: '75%', label: 'REVENUE PROJECTION', icon: 'fa-sack-dollar' },
                            { color: 'text-blue-400', pct: '90%', label: 'RETENTION BENCHMARK', icon: 'fa-arrows-spin' }
                          ];
                          const v = variants[i] || variants[0];
                          
                          return (
                            <div key={i} className="group bg-white/[0.02] hover:bg-white/[0.05] rounded-[1.75rem] p-5 border border-white/5 hover:border-white/10 transition-all duration-300 space-y-4 shadow-sm hover:shadow-md">
                              <div className="flex justify-between items-start gap-4">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500/30 transition-colors shrink-0`}>
                                    <i className={`fa-solid ${v.icon} text-slate-400 group-hover:text-indigo-400 text-[10px]`}></i>
                                  </div>
                                  <div>
                                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">{v.label}</span>
                                    <p className="text-slate-200 text-sm leading-snug font-semibold mt-0.5">{m}</p>
                                  </div>
                                </div>
                                <div className="shrink-0 text-right">
                                  <span className={`text-xs font-black uppercase tracking-widest ${v.color}`}>{v.pct}</span>
                                  <span className="block text-[7px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Confidence</span>
                                </div>
                              </div>
                              
                              <div className="space-y-1">
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full transition-all duration-1000 ease-out`}
                                    style={{ width: v.pct }}
                                  ></div>
                                </div>
                                <div className="flex justify-between text-[7px] font-bold text-slate-600 uppercase tracking-widest">
                                  <span>Initial</span>
                                  <span>Target Standard ({v.pct})</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hidden Print-Only Layout */}
                <div id="strategy-print-area" className="hidden print:block p-8 bg-white text-slate-900 rounded-[2rem]">
                  <div className="border-b-2 border-indigo-600 pb-6 mb-8 flex justify-between items-end">
                    <div>
                      <h1 className="text-3xl font-black tracking-tight text-indigo-900">NOVASPHERE</h1>
                      <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mt-1">AI Strategic Intelligence Report</p>
                    </div>
                    <div className="text-right text-xs text-slate-500 font-medium">
                      <div>Date: {new Date().toLocaleDateString()}</div>
                      <div>System Link: Verified</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <span className="text-[10px] uppercase font-black tracking-widest text-indigo-600">Executive Summary</span>
                    <h2 className="text-2xl font-black text-slate-800 mt-1 mb-3">{businessName} • {niche} Strategy</h2>
                    <p className="text-slate-700 leading-relaxed font-medium text-base">{result.overview}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-purple-600 mb-4">Execution Tactics</h3>
                      <div className="space-y-4">
                        {result.tactics.map((t, i) => (
                          <div key={i} className="flex gap-3">
                            <span className="font-bold text-slate-400 text-sm shrink-0">{String(i+1).padStart(2, '0')}.</span>
                            <p className="text-slate-700 text-sm leading-relaxed font-medium">{t}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-pink-600 mb-4">Success Objectives</h3>
                      <div className="space-y-4">
                        {result.metrics.map((m, i) => (
                          <div key={i} className="flex gap-3">
                            <span className="font-bold text-slate-400 text-sm shrink-0">🎯</span>
                            <p className="text-slate-700 text-sm leading-relaxed font-medium">{m}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 pt-6 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>© {new Date().getFullYear()} NovaSphere. All rights reserved.</span>
                    <span>Generated via Strategy Lab Engine v3.9</span>
                  </div>
                </div>

                {/* Footnotes / Actions */}
                <div className="pt-6 mt-8 border-t border-white/5 flex justify-between items-center gap-4">
                  <button 
                    onClick={() => window.print()} 
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all flex items-center gap-2 border border-white/5 active:scale-95"
                  >
                    <i className="fa-solid fa-download"></i> Save Roadmap
                  </button>
                  <button 
                    onClick={() => {
                      setResult(null);
                      setBusinessName('');
                      setNiche('');
                      localStorage.removeItem('nova_strategy_businessName');
                      localStorage.removeItem('nova_strategy_niche');
                      localStorage.removeItem('nova_strategy_result');
                      localStorage.removeItem('nova_strategy_activeTab');
                    }} 
                    className="px-5 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white border border-indigo-500/20 transition-all flex items-center gap-2 active:scale-95"
                  >
                    <i className="fa-solid fa-rotate-left"></i> Reset Engine
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyLab;