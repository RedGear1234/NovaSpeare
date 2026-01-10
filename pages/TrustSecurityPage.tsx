import React, { useEffect } from 'react';

const TrustSecurityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const securityNodes = [
    {
      title: "GDPR Compliant",
      desc: "Your data privacy is protected. We strictly adhere to European and local data governance standards.",
      icon: "fa-shield-halved",
      color: "text-emerald-400",
      accent: "bg-emerald-500/10"
    },
    {
      title: "Secure by Default",
      desc: "All communications are encrypted using high-grade SSL/TLS. Your technical infrastructure is our top priority.",
      icon: "fa-lock",
      color: "text-indigo-400",
      accent: "bg-indigo-500/10"
    },
    {
      title: "NDA Agreements",
      desc: "Your business info stays confidential. Every partnership is legally bound by non-disclosure protocols.",
      icon: "fa-file-signature",
      color: "text-purple-400",
      accent: "bg-purple-500/10"
    },
    {
      title: "No Shared Strategies",
      desc: "Your strategies are custom, not reused. We build unique logic cores for every client ecosystem.",
      icon: "fa-dna",
      color: "text-pink-400",
      accent: "bg-pink-500/10"
    },
    {
      title: "Data Security",
      desc: "Regular backups and security audits ensure system resilience. Zero-trust architecture throughout our stack.",
      icon: "fa-vault",
      color: "text-amber-400",
      accent: "bg-amber-500/10"
    },
    {
      title: "Transparent Reporting",
      desc: "You control what data you share. Real-time dashboards provide complete visibility into all operational data.",
      icon: "fa-chart-pie",
      color: "text-cyan-400",
      accent: "bg-cyan-500/10"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0f172a] relative overflow-hidden">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-fadeInUp">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Operational Integrity
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
            Your Business Data <br /> is <span className="gradient-text">Safe.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            We operate a zero-trust environment to ensure your proprietary information and strategic assets remain exclusively yours.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityNodes.map((node, i) => (
            <div 
              key={i} 
              className="group glass-effect p-10 rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col relative overflow-hidden"
            >
              {/* Subtle Scanline Animation */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none"></div>

              <div className={`w-16 h-16 rounded-2xl ${node.accent} flex items-center justify-center mb-8 border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <i className={`fa-solid ${node.icon} ${node.color} text-2xl`}></i>
              </div>

              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
                {node.title}
              </h3>
              
              <p className="text-slate-400 text-base leading-relaxed font-medium flex-grow">
                {node.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                 <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">Security_Protocol_V4</span>
                 <i className="fa-solid fa-circle-check text-emerald-500 text-[10px]"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Callout */}
        <div className="mt-24 glass-effect p-12 md:p-16 rounded-[4rem] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12 group hover:border-indigo-500/20 transition-all duration-700">
           <div className="max-w-xl text-center lg:text-left">
              <h4 className="text-3xl font-black text-white mb-4">Continuous Governance</h4>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our infrastructure undergoes regular third-party audits. We don't just promise security; we verify it through technical rigorousness.
              </p>
           </div>
           <div className="flex flex-col gap-4 w-full lg:w-auto">
              <div className="px-8 py-5 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between gap-8 group-hover:bg-white/10 transition-colors">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Encryption_Standard</span>
                 <span className="text-white font-black text-sm">AES-256-GCM</span>
              </div>
              <div className="px-8 py-5 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between gap-8 group-hover:bg-white/10 transition-colors">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network_Isolation</span>
                 <span className="text-emerald-400 font-black text-sm uppercase">Active_VPC</span>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default TrustSecurityPage;