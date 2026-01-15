import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { StrategyResult } from '../types';

const StrategyLab: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !niche.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);
    
    try {
      const data = await generateMarketingStrategy(businessName, niche);
      setResult(data);
    } catch (err: any) {
      console.error("Strategy Lab UI Error:", err);
      // Display the specific message thrown (e.g., "API key is missing" or "API is wrong")
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
                className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-indigo-600/20 active:scale-95"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <i className="fa-solid fa-circle-notch animate-spin"></i> Processing Neural Data...
                  </span>
                ) : 'Generate Strategy'}
              </button>
            </form>
          </div>

          <div className="glass-effect rounded-[3rem] p-10 md:p-14 min-h-[500px] flex flex-col justify-center border border-white/5 shadow-2xl relative">
            {!result && !loading && !error && (
              <div className="text-center">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                  <i className="fa-solid fa-microchip text-indigo-500/30 text-4xl"></i>
                </div>
                <h3 className="text-2xl font-black text-slate-500 uppercase tracking-widest mb-3">System Ready</h3>
                <p className="text-slate-600 max-w-xs mx-auto">Input your vision on the left to activate our strategic neural engine.</p>
              </div>
            )}

            {loading && (
              <div className="space-y-8 animate-pulse">
                <div className="h-6 bg-white/5 rounded-full w-1/2"></div>
                <div className="h-4 bg-white/5 rounded-full w-full"></div>
                <div className="h-40 bg-white/5 rounded-[2rem] w-full"></div>
                <div className="flex gap-4">
                  <div className="h-20 bg-white/5 rounded-2xl w-1/2"></div>
                  <div className="h-20 bg-white/5 rounded-2xl w-1/2"></div>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="text-center animate-fadeInUp">
                <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
                  <i className="fa-solid fa-triangle-exclamation text-rose-500 text-2xl"></i>
                </div>
                <h3 className="text-xl font-black text-rose-500 uppercase tracking-widest mb-3">Protocol Interrupted</h3>
                <p className="text-slate-200 font-bold bg-rose-500/20 px-4 py-2 rounded-lg inline-block mb-8">{error}</p>
                <div className="mt-4">
                  <button 
                    onClick={handleGenerate}
                    className="px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-white transition-all"
                  >
                    Retry Connection
                  </button>
                </div>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-10 animate-fadeInUp">
                <div>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    <h4 className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px]">Strategic Summary</h4>
                  </div>
                  <p className="text-slate-200 leading-relaxed text-xl font-medium">{result.overview}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
                    <h4 className="text-purple-400 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Execution Tactics</h4>
                    <ul className="space-y-4">
                      {result.tactics.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <i className="fa-solid fa-bolt text-indigo-500 mt-1 text-[10px]"></i>
                          <span className="leading-tight">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-3xl p-6 border border-white/5">
                    <h4 className="text-pink-400 font-black uppercase tracking-[0.2em] text-[10px] mb-6">Success KPI's</h4>
                    <ul className="space-y-4">
                      {result.metrics.map((m, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <i className="fa-solid fa-chart-line text-pink-500 mt-1 text-[10px]"></i>
                          <span className="leading-tight">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                  <button onClick={() => window.print()} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-download"></i> Save Roadmap
                  </button>
                  <span className="text-[8px] font-bold text-indigo-500/50 uppercase tracking-widest">Neural Link Verified</span>
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