
import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { StrategyResult } from '../types';

const StrategyLab: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !niche) return;
    
    setLoading(true);
    try {
      const data = await generateMarketingStrategy(businessName, niche);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-strategy" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-flask-vial text-white text-xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">NovaSphere Strategy Lab</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Experience the power of our proprietary AI-driven approach. Enter your business details, and our custom-trained model will generate a foundational growth strategy in seconds.
            </p>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Business Name</label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="e.g. BlueWave Fitness"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Industry / Niche</label>
                <input 
                  type="text" 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  placeholder="e.g. Sustainable Apparel"
                />
              </div>
              <button 
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fa-solid fa-circle-notch animate-spin"></i> Analyzing Industry Data...
                  </span>
                ) : 'Generate My AI Strategy'}
              </button>
            </form>
          </div>

          <div className="glass-effect rounded-3xl p-8 min-h-[400px] flex flex-col justify-center border border-white/5 shadow-2xl">
            {!result && !loading && (
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-robot text-slate-600 text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-500">Awaiting Your Input</h3>
                <p className="text-slate-600 mt-2">The future of your brand starts here.</p>
              </div>
            )}

            {loading && (
              <div className="space-y-6 animate-pulse">
                <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                <div className="h-4 bg-slate-800 rounded w-full"></div>
                <div className="h-32 bg-slate-800 rounded w-full"></div>
                <div className="h-4 bg-slate-800 rounded w-2/3"></div>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-3">Executive Summary</h4>
                  <p className="text-slate-200 leading-relaxed text-lg">{result.overview}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">Strategic Tactics</h4>
                    <ul className="space-y-3">
                      {result.tactics.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <i className="fa-solid fa-check text-indigo-500 mt-1"></i>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-pink-400 font-bold uppercase tracking-widest text-xs mb-4">Success Metrics</h4>
                    <ul className="space-y-3">
                      {result.metrics.map((m, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <i className="fa-solid fa-chart-simple text-pink-500 mt-1"></i>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
