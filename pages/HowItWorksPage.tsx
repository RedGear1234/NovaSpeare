import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      phase: "INTELLIGENCE_GATHERING",
      desc: "Deep dive into your business, goals, and challenges. We analyze your competitors and research your target audience in detail to create a custom roadmap.",
      deliverable: "Detailed strategy document + implementation plan",
      points: [
        "Competitor & Market Analysis",
        "Target Audience Deep-Dive",
        "Custom Goal Alignment",
        "Milestone-based Roadmap"
      ]
    },
    {
      num: "02",
      title: "Campaign Setup & Launch",
      phase: "INFRASTRUCTURE_DEPLOYMENT",
      desc: "We build the technical foundation. From conversion funnels to tracking infrastructure, we ensure every click is measured before the first ad goes live.",
      deliverable: "Live campaigns + tracking dashboard access",
      points: [
        "SEO & Social Campaign Build",
        "High-Conversion Landing Pages",
        "GA4 & Meta Pixel Integration",
        "Live Performance Monitoring"
      ]
    },
    {
      num: "03",
      title: "Optimization & Testing",
      phase: "PERFORMANCE_REFINEMENT",
      desc: "Ongoing refinement is key. We monitor daily performance and run A/B tests to ensure your ROI continues to climb while pausing low-performers.",
      deliverable: "Weekly performance reports + optimization updates",
      points: [
        "Scientific A/B Testing",
        "Targeting & Bidding Refinement",
        "Scaling Winning Assets",
        "Daily Performance Tuning"
      ]
    },
    {
      num: "04",
      title: "Growth & Scaling",
      phase: "EQUITY_MAXIMIZATION",
      desc: "Once we find the winning formula, we pour fuel on the fire. We expand to new channels and refine strategies based on accumulated data.",
      deliverable: "Monthly strategy reviews + growth roadmap",
      points: [
        "Budget Optimization & Scaling",
        "Channel Expansion",
        "Data-driven Refinement",
        "Next-Quarter Planning"
      ]
    }
  ];

  const caseStudies = [
    {
      id: "ecommerce",
      title: "Fashion & Apparel Store",
      type: "E-Commerce",
      stats: { main: "4.2x", label: "ROAS ACHIEVED" },
      challenge: "New online store with zero traffic, high inventory but no sales, and a limited $500/month budget.",
      solution: "Built SEO-optimized product pages, launched Meta shopping ads, and implemented abandoned cart recovery flows.",
      results: [
        "150+ orders in 90 days",
        "4.2x ROI on ad spend",
        "35% increase in order value",
        "Scaled to $2,500/month profitably"
      ],
      quote: "NovaSphere didn't just run ads — they understood our business and helped us scale systematically. Revenue went from zero to ₹8 lakhs in 3 months.",
      client: "Priya M., Fashion Store Owner"
    },
    {
      id: "b2b",
      title: "IT Services Consulting",
      type: "B2B Lead Gen",
      stats: { main: "68%", label: "CPL REDUCTION" },
      challenge: "Struggling to get qualified leads for IT consulting. High cost per lead with low conversion rates.",
      solution: "B2B-specific SEO, Google Ads targeting decision-makers, and LinkedIn thought leadership content funnels.",
      results: [
        "CPL reduced to ₹800",
        "Website leads increased 320%",
        "Top 3 ranking for 5 key terms",
        "Revenue from digital grew 5x"
      ],
      quote: "The team's expertise in B2B marketing is exceptional. They didn't just generate leads; they generated qualified leads we could actually close.",
      client: "Raj K., IT Services Manager"
    },
    {
      id: "local",
      title: "Premium Dental Clinic",
      type: "Local SEO",
      stats: { main: "45", label: "NEW BOOKINGS" },
      challenge: "Competing with large chains for local patients. Limited visibility in Google Maps and inconsistent acquisition.",
      solution: "Local SEO (GMB) optimization, location-based Search ads, and systematic reputation management for reviews.",
      results: [
        "45 new bookings in 2 months",
        "₹1,200 acquisition cost",
        "Reviews: 8 to 47 (4.8 stars)",
        "60% of patients from Google Maps"
      ],
      quote: "They transformed how we show up online. Getting to the top of Google Maps was a game-changer for our clinic.",
      client: "Dr. Arun, Clinic Owner"
    }
  ];

  return (
    <div className="pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-full h-[1000px] bg-indigo-600/[0.03] blur-[150px] rounded-full -z-10"></div>
      
      {/* Refined Hero with High-End 3D Visualization */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-indigo-500/50"></span>
              <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Operational Architecture</span>
            </div>
            <h1 className="text-5xl md:text-[6.5rem] font-black text-white mb-10 leading-[0.9] tracking-tight">
              Our Proven <br />
              <span className="gradient-text pr-4 pb-2 inline-block">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium opacity-80 italic">
              "We don't gamble with your growth. We engineer it through a rigorous, multi-layered strategic sequence."
            </p>
          </div>

          {/* Right Side: Refined 3D Strategic Architecture Visual */}
          <div className="hidden lg:flex justify-center items-center relative h-[600px] perspective-[2000px]">
            <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
              
              {/* Vertical Conduit Glow */}
              <div className="absolute w-[2px] h-[400px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20 blur-[2px]"></div>
              
              {/* Floating Processing Layers (Stacked vertically in 3D) */}
              <div className="absolute top-[15%] transform rotate-x-[60deg] transition-all duration-1000 group-hover:translate-y-[-10px]">
                <div className="w-64 h-64 glass-effect rounded-[3rem] border border-white/20 flex items-center justify-center shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
                   <div className="relative z-10 flex flex-col items-center gap-2 -rotate-x-[60deg]">
                      <i className="fa-solid fa-satellite text-indigo-400 text-3xl"></i>
                      <span className="text-[8px] font-black text-white uppercase tracking-widest">Discovery_Module</span>
                   </div>
                   <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/40 blur-sm animate-[scan_3s_linear_infinite]"></div>
                </div>
              </div>

              <div className="absolute top-[45%] transform rotate-x-[60deg] transition-all duration-1000 group-hover:scale-110">
                <div className="w-80 h-80 glass-effect rounded-[4rem] border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.15)] relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5"></div>
                   <div className="relative z-10 flex flex-col items-center gap-2 -rotate-x-[60deg]">
                      <i className="fa-solid fa-microchip text-pink-400 text-4xl animate-pulse"></i>
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">Core_Strategy_v4</span>
                   </div>
                   <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-16 border border-indigo-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                </div>
              </div>

              <div className="absolute top-[75%] transform rotate-x-[60deg] transition-all duration-1000 group-hover:translate-y-[10px]">
                <div className="w-56 h-56 glass-effect rounded-[2.5rem] border border-white/20 flex items-center justify-center shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-emerald-500/5"></div>
                   <div className="relative z-10 flex flex-col items-center gap-2 -rotate-x-[60deg]">
                      <i className="fa-solid fa-arrow-trend-up text-emerald-400 text-2xl"></i>
                      <span className="text-[8px] font-black text-white uppercase tracking-widest">Growth_Expander</span>
                   </div>
                </div>
              </div>

              {/* Flowing Data Particles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[1px] animate-[particle_4s_linear_infinite]"
                    style={{ 
                      animationDelay: `${i * 0.7}s`,
                      left: `${45 + (i % 3) * 5}%`
                    }}
                  ></div>
                ))}
              </div>

              {/* Ambient Holographic Readouts */}
              <div className="absolute left-[80%] top-1/4 glass-effect px-4 py-2 rounded-xl border border-white/10 -rotate-12 group-hover:rotate-0 transition-transform">
                <p className="text-[7px] font-black text-indigo-400 uppercase tracking-widest mb-1">Status</p>
                <p className="text-[9px] font-bold text-white tracking-tight">OPTIMIZING_ROI</p>
              </div>
              
              <div className="absolute right-[80%] bottom-1/4 glass-effect px-4 py-2 rounded-xl border border-white/10 rotate-12 group-hover:rotate-0 transition-transform">
                <p className="text-[7px] font-black text-pink-400 uppercase tracking-widest mb-1">Compute</p>
                <p className="text-[9px] font-bold text-white tracking-tight">NEURAL_TRAFFIC_ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Operational Pipeline */}
      <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-64 relative">
        <div className="space-y-16 md:space-y-32">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-32 group">
              <div className="lg:w-1/3 space-y-6">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-white/10 group-hover:text-indigo-500/20 transition-colors duration-700">{step.num}</span>
                  <div className="h-px flex-grow bg-white/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                </div>
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                     <p className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.4em]">{step.phase}</p>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight group-hover:gradient-text transition-all duration-500">
                    {step.title}
                  </h2>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="glass-effect rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 border border-white/5 group-hover:border-white/10 group-hover:bg-[#111827]/80 transition-all duration-700 relative overflow-hidden shadow-2xl">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <p className="text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 font-medium relative z-10">
                    {step.desc}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/60">Operational Tasks</h4>
                      <ul className="space-y-3 md:space-y-4">
                        {step.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-4 text-sm text-slate-300 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-400 transition-colors"></div>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/[0.03] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-white/5 flex flex-col justify-between group-hover:bg-indigo-600/10 transition-all duration-700 group-hover:border-indigo-500/20">
                      <div>
                        <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                          <i className="fa-solid fa-file-contract"></i>
                        </div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Key Outcome</h4>
                        <p className="text-white font-black text-base md:text-lg leading-tight tracking-tight">
                          {step.deliverable}
                        </p>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <span className="text-[8px] font-black text-indigo-500 uppercase tracking-widest border-b border-indigo-500/30">Verified Asset</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Reports - Refined for Mobile */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-48 bg-transparent relative">
        <div className="text-center mb-24 md:mb-40">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">Verification Module</span>
            <span className="w-8 h-[1px] bg-indigo-500"></span>
          </div>
          <h3 className="text-4xl md:text-[6.5rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-none">
            Impact <span className="gradient-text">Reports</span>
          </h3>
          <p className="text-slate-400 text-lg md:text-xl font-medium opacity-70">
            Hard evidence of NovaSphere protocols in real-world deployment.
          </p>
        </div>

        <div className="grid gap-12 md:gap-24 lg:gap-32">
          {caseStudies.map((study, i) => (
            <div key={study.id} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-transparent rounded-[3rem] md:rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="glass-effect rounded-[2.5rem] md:rounded-[5rem] p-6 sm:p-10 md:p-16 lg:p-20 border border-white/5 relative z-10 grid lg:grid-cols-12 gap-10 md:gap-16 overflow-hidden">
                <div className="absolute -top-10 -right-10 p-8 text-white/[0.02] text-[8rem] sm:text-[14rem] md:text-[18rem] font-black italic select-none pointer-events-none -rotate-12 group-hover:text-white/[0.05] transition-all duration-1000">
                  {i + 1}
                </div>

                <div className="lg:col-span-7 space-y-10 md:space-y-16 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      Case Study: {study.type}
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-tight md:leading-[1.1]">
                      {study.title}
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                      <div className="space-y-3 md:space-y-4">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 flex items-center gap-3">
                          <i className="fa-solid fa-triangle-exclamation"></i>
                          The Friction
                        </h5>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">{study.challenge}</p>
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
                          <i className="fa-solid fa-microchip"></i>
                          The Protocol
                        </h5>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-6 md:pl-10 border-l-2 border-indigo-500/20 italic group-hover:border-indigo-500/50 transition-colors duration-700">
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-4 md:mb-6 font-medium">
                      "{study.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-px bg-indigo-500"></div>
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
                        {study.client}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8 h-full justify-center relative z-10">
                   <div className="bg-[#111827]/80 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 border border-white/5 flex flex-col items-center text-center group-hover:border-indigo-500/30 transition-all duration-700 shadow-3xl">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4">{study.stats.label}</span>
                      <h5 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform duration-700">{study.stats.main}</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mt-6 md:mt-8 rounded-full"></div>
                   </div>

                   <div className="glass-effect rounded-[2rem] md:rounded-[3rem] p-6 sm:p-10 border border-white/10 space-y-4 md:space-y-6">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-600">Verification Log</span>
                        <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-widest border border-emerald-500/20">Audit Passed</div>
                     </div>
                     {study.results.map((res, k) => (
                        <div key={k} className="flex items-center gap-3 md:gap-4 group/item">
                          <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg md:rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-[10px] border border-emerald-500/20 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-500 flex-shrink-0">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <span className="text-white font-bold tracking-tight text-sm md:text-base lg:text-lg">{res}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-40 pb-24 text-center">
        <div className="inline-flex items-center gap-3 mb-10 md:mb-12">
           <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
           <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em]">System Ready</span>
        </div>
        <h2 className="text-4xl md:text-[6.5rem] font-black text-white tracking-tighter leading-none mb-12 md:mb-16">
          Initiate Your <br /> 
          <span className="gradient-text">Expansion</span>
        </h2>
        <button 
          onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-12 md:px-20 py-6 md:py-8 bg-indigo-600 text-white rounded-[2rem] md:rounded-[3rem] font-black text-lg md:text-xl hover:bg-indigo-500 transition-all shadow-3xl shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center gap-4 md:gap-6 mx-auto group"
        >
          Book Your Session
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000">
            <i className="fa-solid fa-bolt text-yellow-400"></i>
          </div>
        </button>
      </section>

      <ContactForm />
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(240px); opacity: 0; }
        }
        @keyframes particle {
          0% { transform: translateY(-100px) scale(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(300px) scale(1.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HowItWorksPage;