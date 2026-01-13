
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    _gotcha: '' // Honeypot field for spam protection
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSetupError, setIsSetupError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; 
    
    setStatus('sending');
    setErrorMessage(null);
    setIsSetupError(false);

    try {
      const response = await fetch('https://formspree.io/f/xdaaojdn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          _subject: `Consultation Booking from ${formData.name}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('submitted');
        setFormData({ name: '', email: '', message: '', preferredDate: '', preferredTime: '', _gotcha: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorText = data.errors 
          ? data.errors.map((err: any) => err.message).join(', ') 
          : (data.error || 'Submission failed');
        
        if (errorText.toLowerCase().includes('set up') || data.errors?.some((e: any) => e.code === 'FORM_NOT_FOUND')) {
          setIsSetupError(true);
        }
        
        setErrorMessage(errorText);
        throw new Error(errorText);
      }
    } catch (err: any) {
      setStatus('error');
      if (!errorMessage) setErrorMessage(err.message || 'Unable to connect to the mail server.');
      setTimeout(() => {
        if (!isSetupError) {
          setStatus('idle');
          setErrorMessage(null);
        }
      }, isSetupError ? 30000 : 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Get today's date in YYYY-MM-DD format for the 'min' attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="consultation-form" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="glass-effect rounded-[3rem] p-8 md:p-16 border border-white/5 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-indigo-500"></span>
              <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">Consultation Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Book Your <span className="gradient-text">Breakthrough</span></h2>
            <p className="text-slate-400 text-lg">Select a preferred date and time to discuss your project with our lead strategists.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />
            
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

            {/* Date & Time Selection Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Preferred Date</label>
                <div className="relative">
                  <input 
                    type="date" 
                    name="preferredDate"
                    required
                    min={today}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all [color-scheme:dark]"
                  />
                  <i className="fa-regular fa-calendar absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"></i>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Preferred Time Slot</label>
                <div className="relative">
                  <select 
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none"
                  >
                    <option value="" disabled className="bg-[#0f172a]">Select Time</option>
                    <option value="09:00 AM" className="bg-[#0f172a]">09:00 AM - 10:00 AM</option>
                    <option value="10:00 AM" className="bg-[#0f172a]">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM" className="bg-[#0f172a]">11:00 AM - 12:00 PM</option>
                    <option value="02:00 PM" className="bg-[#0f172a]">02:00 PM - 03:00 PM</option>
                    <option value="03:00 PM" className="bg-[#0f172a]">03:00 PM - 04:00 PM</option>
                    <option value="04:00 PM" className="bg-[#0f172a]">04:00 PM - 05:00 PM</option>
                  </select>
                  <i className="fa-regular fa-clock absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"></i>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Project Brief</label>
              <textarea 
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Tell us about your breakthrough goals..."
              />
            </div>

            <button 
              type="submit"
              disabled={status === 'sending' || status === 'submitted'}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                status === 'submitted' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
              }`}
            >
              {status === 'sending' ? <i className="fa-solid fa-circle-notch animate-spin"></i> : 
               status === 'submitted' ? <i className="fa-solid fa-check"></i> : 
               'Confirm Appointment'}
            </button>
            
            {status === 'error' && (
              <p className="text-center text-rose-500 text-[10px] font-bold uppercase tracking-widest animate-fadeInUp">
                {isSetupError ? "Activation Required: Check shubhamchavan@live.com" : errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ContactForm;
