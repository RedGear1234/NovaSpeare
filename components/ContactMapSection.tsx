import React, { useState } from 'react';

const ContactMapSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSetupError, setIsSetupError] = useState(false);

  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.291729524102!2d73.89500694999998!3d18.560882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c123e182222f%3A0x34f6141b85761dd5!2sMaharashtra%20Co-Operative%20Housing%20Society%2C%20Yerawada%2C%20Pune%2C%20Maharashtra%20411006!5e0!3m2!1sen!2sin!4v1766852542773!5m2!1sen!2sin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return;
    
    setStatus('sending');
    setErrorMessage(null);
    setIsSetupError(false);

    try {
      const response = await fetch('https://formspree.io/f/mdaaobal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `NovaSphere Web Inquiry: ${formData.name}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorText = data.errors 
          ? data.errors.map((err: any) => err.message).join(', ') 
          : (data.error || 'Server Error');
        
        if (errorText.toLowerCase().includes('set up') || data.errors?.some((e: any) => e.code === 'FORM_NOT_FOUND')) {
          setIsSetupError(true);
        }

        setErrorMessage(errorText);
        throw new Error(errorText);
      }
    } catch (err: any) {
      setStatus('error');
      if (!errorMessage) setErrorMessage(err.message || 'Failed to connect to Formspree.');
      
      const displayTime = isSetupError ? 30000 : 8000;
      setTimeout(() => {
        if (!isSetupError) {
          setStatus('idle');
          setErrorMessage(null);
          setIsSetupError(false);
        }
      }, displayTime);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-32 relative overflow-visible bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-stretch">
          {/* Contact Form Content */}
          <div className="flex flex-col justify-center animate-fadeInUp">
            <div className="mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-indigo-500"></span>
                <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Contact Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">Let's Start Your <br /> <span className="gradient-text">Transformation</span></h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">Whether you have a specific project in mind or just want to explore the possibilities of AI and design.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
              
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
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
              <div className="space-y-4">
                <button 
                  type="submit" 
                  disabled={status === 'sending' || status === 'submitted'} 
                  className={`w-full py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                    status === 'submitted' ? 'bg-emerald-600 text-white' : 
                    status === 'error' ? 'bg-rose-600 text-white' :
                    'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
                  }`}
                >
                  {status === 'sending' && <i className="fa-solid fa-circle-notch animate-spin"></i>}
                  {status === 'idle' && 'Send Inquiry'}
                  {status === 'sending' && 'Transmitting...'}
                  {status === 'submitted' && 'Inquiry Dispatched'}
                  {status === 'error' && 'Retry Submission'}
                </button>
                {status === 'error' && (
                  <div className="text-center space-y-3 animate-fadeInUp">
                    <p className="text-rose-500 text-[10px] font-bold uppercase tracking-widest animate-pulse">
                      Error: {isSetupError ? "Pending Activation" : errorMessage}
                    </p>
                    {isSetupError && (
                       <div className="text-slate-400 text-[10px] leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                         <p className="mb-2">A request was sent to <strong>shubhamchavan@live.com</strong>.</p>
                         <p className="opacity-70">Check your <strong>Spam/Junk</strong> folder.</p>
                       </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Map Content */}
          <div className="relative group h-[350px] lg:h-auto lg:min-h-full animate-fadeInUp stagger-2">
            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-indigo-500/40">
              {/* Map Visibility Fix: Increased brightness and opacity, reduced extreme invert contrast */}
              <div className="absolute inset-0 grayscale invert contrast-[1.1] brightness-[0.55] opacity-85 transition-all duration-700 group-hover:brightness-[0.65] group-hover:opacity-100">
                <iframe 
                  src={mapSrc} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  title="Location Map"
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Overlay Gradients for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/10 to-transparent pointer-events-none"></div>
              
              {/* Detail Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10">
                <div className="glass-effect p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 flex-shrink-0">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base">Pune Hub</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">Yerawada, Pune, Maharashtra 411006</p>
                    </div>
                  </div>
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