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
      
      {/* Redesigned Hero with Abstract Visual */}
      <section className="max-w-7xl mx-auto px-6 mb-40 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-indigo-500/50"></span>
              <span className="text-indigo-400 font-black uppercase tracking-[0.4em] text-[10px]">The Operational Helix</span>
            </div>
            <h1 className="text-5xl md:text-[6.5rem] font-black text-white mb-10 leading-[0.9] tracking-tight">
              Our Proven <br />
              <span className="gradient-text pr-4 pb-2 inline-block">Process</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-xl font-medium opacity-80 italic">
              "We don't gamble with your growth. We engineer it through a rigorous, multi-layered strategic sequence."
            </p>
          </div>

          {/* Right Side: The Strategic Helix Visual */}
          <div className="hidden lg:flex justify-center relative h-[500px]">
            {/* The Central Flow Line */}
            <div className="absolute inset-y-0 w-1 bg-gradient-to-b from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 left-1/2 -translate-x-1/2"></div>
            
            {/* Pulsing Nodes on the Flow */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] animate-pulse"></div>
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)] animate-pulse [animation-delay:1s]"></div>
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-pulse [animation-delay:0.5s]"></div>

            {/* Orbiting Service Badges */}
            <div className="absolute w-full h-full animate-[spin_20s_linear_infinite]">
               <div className="absolute top-10 left-1/4 glass-effect p-4 rounded-2xl border border-white/10 flex items-center gap-3 -rotate-12">
                  <i className="fa-solid fa-brain text-indigo-400"></i>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Strategy_Lab</span>
               </div>
               <div className="absolute bottom-20 right-1/4 glass-effect p-4 rounded-2xl border border-white/10 flex items-center gap-3 rotate-12">
                  <i className="fa-solid fa-chart-line text-emerald-400"></i>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Growth_Pulse</span>
               </div>
            </div>

            <div className="absolute w-full h-full animate-[spin_30s_linear_infinite_reverse]">
               <div className="absolute top-1/2 left-0 glass-effect p-4 rounded-2xl border border-white/10 flex items-center gap-3 rotate-6">
                  <i className="fa-solid fa-code text-pink-400"></i>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Logic_Engine</span>
               </div>
               <div className="absolute top-1/4 right-0 glass-effect p-4 rounded-2xl border border-white/10 flex items-center gap-3 -rotate-6">
                  <i className="fa-solid fa-magnifying-glass-chart text-amber-400"></i>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Market_Scan</span>
               </div>
            </div>

            {/* Background Diffusion */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* The 4-Step Operational Pipeline */}
      <section className="max-w-7xl mx-auto px-6 mb-64 relative">
        <div className="space-y-32">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col lg:flex-row gap-12 lg:gap-32 group">
              <div className="lg:w-1/3 space-y-6">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-5xl font-black text-white/10 group-hover:text-indigo-500/20 transition-colors duration-700">{step.num}</span>
                  <div className="h-px flex-grow bg-white/5 group-hover:bg-indigo-500/10 transition-colors"></div>
                </div>
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                     <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                     <p className="text-[9px] font-black text-indigo-400 uppercase tracking-[0.4em]">{step.phase}</p>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight group-hover:gradient-text transition-all duration-500">
                    {step.title}
                  </h2>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="glass-effect rounded-[4rem] p-10 md:p-16 border border-white/5 group-hover:border-white/10 group-hover:bg-[#111827]/80 transition-all duration-700 relative overflow-hidden shadow-2xl">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-medium relative z-10">
                    {step.desc}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-12 relative z-10">
                    <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/60">Operational Tasks</h4>
                      <ul className="space-y-4">
                        {step.points.map((p, j) => (
                          <li key={j} className="flex items-center gap-4 text-sm text-slate-300 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-400 transition-colors"></div>
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white/[0.03] rounded-[2.5rem] p-8 border border-white/5 flex flex-col justify-between group-hover:bg-indigo-600/10 transition-all duration-700 group-hover:border-indigo-500/20">
                      <div>
                        <div className="w-10 h-10 rounded-2xl bg-indigo-600/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                          <i className="fa-solid fa-file-contract"></i>
                        </div>
                        <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-3">Key Outcome</h4>
                        <p className="text-white font-black text-lg leading-tight tracking-tight">
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

      {/* Impact Reports */}
      <section className="max-w-7xl mx-auto px-6 py-48 bg-transparent relative">
        <div className="text-center mb-40">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px]">Verification Module</span>
            <span className="w-8 h-[1px] bg-indigo-500"></span>
          </div>
          <h3 className="text-5xl md:text-[6.5rem] font-black text-white mb-8 tracking-tighter leading-none">
            Impact <span className="gradient-text">Reports</span>
          </h3>
          <p className="text-slate-400 text-xl font-medium opacity-70">
            Hard evidence of NovaSphere protocols in real-world deployment.
          </p>
        </div>

        <div className="grid gap-24 lg:gap-32">
          {caseStudies.map((study, i) => (
            <div key={study.id} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 via-pink-500/10 to-transparent rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              
              <div className="glass-effect rounded-[5rem] p-12 md:p-20 border border-white/5 relative z-10 grid lg:grid-cols-12 gap-16 overflow-hidden">
                <div className="absolute -top-10 -right-10 p-8 text-white/[0.02] text-[14rem] md:text-[18rem] font-black italic select-none pointer-events-none -rotate-12 group-hover:text-white/[0.05] transition-all duration-1000">
                  {i + 1}
                </div>

                <div className="lg:col-span-7 space-y-16 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[9px] font-black uppercase tracking-[0.3em] mb-8">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                      Case Study: {study.type}
                    </div>
                    <h4 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-[1.1]">
                      {study.title}
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500 flex items-center gap-3">
                          <i className="fa-solid fa-triangle-exclamation"></i>
                          The Friction
                        </h5>
                        <p className="text-slate-400 text-base leading-relaxed font-medium">{study.challenge}</p>
                      </div>
                      <div className="space-y-4">
                        <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-3">
                          <i className="fa-solid fa-microchip"></i>
                          The Protocol
                        </h5>
                        <p className="text-slate-400 text-base leading-relaxed font-medium">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative pl-10 border-l-2 border-indigo-500/20 italic group-hover:border-indigo-500/50 transition-colors duration-700">
                    <p className="text-xl text-slate-300 leading-relaxed mb-6 font-medium">
                      "{study.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-px bg-indigo-500"></div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">
                        {study.client}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8 h-full justify-center relative z-10">
                   <div className="bg-[#111827]/80 rounded-[4rem] p-12 border border-white/5 flex flex-col items-center text-center group-hover:border-indigo-500/30 transition-all duration-700 shadow-3xl">
                      <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4">{study.stats.label}</span>
                      <h5 className="text-6xl md:text-7xl font-black text-white tracking-tighter group-hover:scale-105 transition-transform duration-700">{study.stats.main}</h5>
                      <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mt-8 rounded-full"></div>
                   </div>

                   <div className="glass-effect rounded-[3rem] p-10 border border-white/10 space-y-6">
                     <div className="flex justify-between items-center mb-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">Verification Log</span>
                        <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase tracking-widest border border-emerald-500/20">Audit Passed</div>
                     </div>
                     {study.results.map((res, k) => (
                        <div key={k} className="flex items-center gap-4 group/item">
                          <div className="w-7 h-7 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-[10px] border border-emerald-500/20 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all duration-500">
                            <i className="fa-solid fa-check"></i>
                          </div>
                          <span className="text-white font-bold tracking-tight text-base md:text-lg">{res}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-40 pb-24 text-center">
        <div className="inline-flex items-center gap-3 mb-12">
           <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
           <span className="text-indigo-400 font-black text-[10px] uppercase tracking-[0.5em]">System Ready</span>
        </div>
        <h2 className="text-5xl md:text-[6.5rem] font-black text-white tracking-tighter leading-none mb-16">
          Initiate Your <br /> 
          <span className="gradient-text">Expansion</span>
        </h2>
        <button 
          onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-20 py-8 bg-indigo-600 text-white rounded-[3rem] font-black text-xl hover:bg-indigo-500 transition-all shadow-3xl shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center gap-6 mx-auto group"
        >
          Book Your Session
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000">
            <i className="fa-solid fa-bolt text-yellow-400"></i>
          </div>
        </button>
      </section>

      <ContactForm />
    </div>
  );
};

export default HowItWorksPage;