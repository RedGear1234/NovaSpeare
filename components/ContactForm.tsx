
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Submission:', formData);
    setStatus('submitted');
    // Reset status after a few seconds
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
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <div className="glass-effect rounded-[3rem] p-8 md:p-16 border border-white/5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Start a <span className="gradient-text">Conversation</span></h2>
            <p className="text-slate-400 text-lg">Let's discuss how we can engineer your next digital breakthrough.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Tell us about your project goals..."
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'submitted'}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                status === 'submitted' 
                ? 'bg-emerald-600 text-white cursor-default' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
              }`}
            >
              {status === 'submitted' ? (
                <span className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-check"></i> Message Logged!
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
      {/* Background decoration for the form section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ContactForm;
