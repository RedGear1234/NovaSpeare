import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const FAQPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'submitted' | 'error'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return;
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/shubhamchavan@live.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `FAQ Page Inquiry: ${formData.name}` })
      });

      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const faqs = [
    {
      q: "How long before I see results?",
      a: "You'll see initial results in 30-60 days. Most clients see meaningful improvements (leads, traffic, or sales) within 90 days. Some fast-wins (PPC) can generate results within 7-14 days.",
      icon: "fa-bolt-lightning",
      color: "text-amber-400"
    },
    {
      q: "How much does it cost?",
      a: "Our packages start at ₹15,000/month and go up from there based on your goals and services needed. We also offer custom enterprise packages. No hidden fees — pricing is completely transparent upfront.",
      icon: "fa-indian-rupee-sign",
      color: "text-emerald-400"
    },
    {
      q: "Do you work with my industry?",
      a: "Yes! We've successfully worked with: E-commerce & retail, B2B services (IT, consulting, manufacturing), Healthcare & wellness, Real estate & property, Education & training, Hospitality & restaurants, and many others.",
      icon: "fa-city",
      color: "text-blue-400"
    },
    {
      q: "What if I'm not happy with results?",
      a: "We're so confident in our work that we offer a 30-day money-back guarantee on our core services. If you're not seeing traction by day 30, we'll refund you fully — no questions asked.",
      icon: "fa-shield-heart",
      color: "text-rose-400"
    },
    {
      q: "How is your agency different from others?",
      a: "Three key differences: 1. We focus only on measurable results (ROI, leads, sales). 2. You get a dedicated account manager who knows your business. 3. Complete transparency — you see everything in real-time.",
      icon: "fa-dna",
      color: "text-indigo-400"
    },
    {
      q: "Do I need a large budget to start?",
      a: "No. We work with startups starting at ₹15,000/month and enterprises with ₹5+ lakh budgets. Results scale with investment, but we help you maximize whatever budget you have.",
      icon: "fa-piggy-bank",
      color: "text-teal-400"
    },
    {
      q: "How often do I get reports?",
      a: "You get: Real-time dashboard access (24/7), Weekly performance summaries (email), Monthly detailed report + strategy call, and Quarterly business reviews.",
      icon: "fa-chart-pie",
      color: "text-purple-400"
    },
    {
      q: "What if I already have a website?",
      a: "Perfect! We'll audit your existing site and show you exactly what's working and what's not. Many improvements don't require a redesign — just strategic optimization.",
      icon: "fa-laptop-code",
      color: "text-cyan-400"
    },
    {
      q: "Can you help with social media management?",
      a: "Yes. We offer complete social media services including content creation, posting, community management, and paid advertising on Instagram, Facebook, and LinkedIn.",
      icon: "fa-share-nodes",
      color: "text-pink-400"
    },
    {
      q: "How does your pricing work exactly?",
      a: "We typically charge a base service fee (includes strategy + base campaign management) plus ad spend (for paid campaigns). You have control over ad budget and can scale up or down. All costs are transparent upfront.",
      icon: "fa-calculator",
      color: "text-indigo-500"
    }
  ];

  // Modal Component to be Portaled
  const ContactModal = (
    <div className="fixed inset-0 flex items-center justify-center p-6" style={{ zIndex: 9999 }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0f172a]/95 backdrop-blur-lg animate-fadeIn"
        onClick={() => setIsModalOpen(false)}
      ></div>
      
      {/* Modal Card */}
      <div className="relative glass-effect p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-3xl w-full max-w-xl animate-scaleIn">
        <button 
          onClick={() => setIsModalOpen(false)}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors"
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </button>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-indigo-500"></span>
            <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[8px]">Direct Channel</span>
          </div>
          <h2 className="text-3xl font-black text-white">Ask Anything</h2>
          <p className="text-slate-400 text-sm mt-2">Get direct answers from our specialized strategy team.</p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <input type="text" name="_gotcha" value={formData._gotcha} onChange={(e) => setFormData({...formData, _gotcha: e.target.value})} className="hidden" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" 
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50" 
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">How can we help?</label>
            <textarea 
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
              placeholder="Tell us about your breakthrough goals..."
            />
          </div>

          <button 
            type="submit"
            disabled={status === 'sending' || status === 'submitted'}
            className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
              status === 'submitted' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
            }`}
          >
            {status === 'sending' ? <i className="fa-solid fa-circle-notch animate-spin"></i> : 
             status === 'submitted' ? <i className="fa-solid fa-check"></i> : 'Submit Inquiry'}
          </button>
          
          {status === 'error' && (
            <p className="text-center text-rose-500 text-[10px] font-bold uppercase tracking-widest">
              Transmission failed. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );

  return (
    <div className="pt-32 pb-24 bg-[#0f172a] relative">
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-fadeInUp">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
          Common Questions Answered
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
          Transparency <br /><span className="gradient-text">By Design.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about partnering with NovaSphere for your digital evolution.
        </p>
      </section>

      {/* FAQ Grid */}
      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="group glass-effect rounded-[3rem] p-8 md:p-12 border border-white/5 hover:border-indigo-500/30 transition-all duration-700 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/30 transition-all ${faq.color} flex-shrink-0`}>
                  <i className={`fa-solid ${faq.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors leading-tight">
                    {faq.q}
                  </h3>
                </div>
              </div>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center pb-24 relative z-10">
        <div className="glass-effect rounded-[4rem] p-12 md:p-20 border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"></div>
          <h2 className="text-3xl font-black text-white mb-6 relative z-10">Still have a question?</h2>
          <p className="text-slate-400 mb-10 text-lg relative z-10">Our strategists are ready to provide the answers you need to scale your business.</p>
          <a 
            href="javascript:void(0)"
            onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
            className="px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-3xl font-black text-lg transition-all relative z-10 shadow-3xl shadow-indigo-600/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-4 mx-auto w-fit"
            role="button"
          >
            Connect With Us <i className="fa-solid fa-arrow-right-long text-sm"></i>
          </a>
        </div>
      </section>

      {/* Render Modal via Portal to avoid clipping from parent stacking contexts */}
      {isModalOpen && ReactDOM.createPortal(ContactModal, document.body)}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default FAQPage;