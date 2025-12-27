
import React, { useState } from 'react';

const ContactMapSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.291729524102!2d73.89500694999998!3d18.560882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c123e182222f%3A0x34f6141b85761dd5!2sMaharashtra%20Co-Operative%20Housing%20Society%2C%20Yerawada%2C%20Pune%2C%20Maharashtra%20411006!5e0!3m2!1sen!2sin!4v1766852542773!5m2!1sen!2sin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 relative overflow-visible bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          <div className="flex flex-col justify-center animate-fadeInUp">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-indigo-500"></span>
                <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Contact Us</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-[1.1]">Let's Start Your <br /> <span className="gradient-text">Transformation</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">Whether you have a specific project in mind or just want to explore the possibilities of AI and design.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600" placeholder="Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600" placeholder="Email Address" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600 resize-none" placeholder="How can we help?" />
              </div>
              <button type="submit" disabled={status === 'submitted'} className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 ${status === 'submitted' ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white'}`}>
                {status === 'submitted' ? 'Inquiry Logged' : 'Send Inquiry'}
              </button>
            </form>
          </div>

          <div className="relative group min-h-[500px] lg:min-h-full animate-fadeInUp stagger-2">
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-indigo-500/30">
              <div className="absolute inset-0 grayscale invert contrast-[1.2] brightness-[0.3] opacity-60">
                <iframe src={mapSrc} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" title="Location Map"></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 lg:right-12">
                <div className="glass-effect p-8 rounded-[2.5rem] border border-white/10 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <h4 className="text-white font-bold text-sm">Pune Hub</h4>
                  <p className="text-slate-400 text-xs">Yerawada, Pune, Maharashtra 411006</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;
