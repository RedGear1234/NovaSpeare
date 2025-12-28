
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
      // Switched to JSON payload for more consistent activation triggers
      const response = await fetch('https://formspree.io/shubhamchavan@live.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `NovaSphere: Message from ${formData.name}`
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
          : (data.error || 'Submission failed');
        
        console.error('Formspree Failure Detail:', JSON.stringify(data, null, 2));
        
        // Detect setup error (FORM_NOT_FOUND)
        if (errorText.toLowerCase().includes('set up') || data.errors?.some((e: any) => e.code === 'FORM_NOT_FOUND')) {
          setIsSetupError(true);
        }
        
        setErrorMessage(errorText);
        throw new Error(errorText);
      }
    } catch (err: any) {
      console.error('Submission Error:', err.message || err);
      setStatus('error');
      if (!errorMessage) setErrorMessage(err.message || 'Unable to connect to the mail server.');
      
      // Keep visible longer for activation errors
      const displayTime = isSetupError ? 30000 : 8000;
      setTimeout(() => {
        if (!isSetupError) {
          setStatus('idle');
          setErrorMessage(null);
        }
      }, displayTime);
    }
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
              disabled={status === 'sending' || status === 'submitted'}
              className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                status === 'submitted' 
                ? 'bg-emerald-600 text-white cursor-default' 
                : status === 'error'
                ? 'bg-rose-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20'
              }`}
            >
              {status === 'sending' && <i className="fa-solid fa-circle-notch animate-spin"></i>}
              {status === 'submitted' && <i className="fa-solid fa-check"></i>}
              {status === 'error' && <i className="fa-solid fa-triangle-exclamation"></i>}
              
              {status === 'idle' && 'Send Message'}
              {status === 'sending' && 'Transmitting...'}
              {status === 'submitted' && 'Message Dispatched!'}
              {status === 'error' && 'Retry Submission'}
            </button>
            
            {status === 'error' && (
              <div className="text-center space-y-4 animate-fadeInUp">
                <p className="text-rose-500 text-xs font-bold uppercase tracking-widest">
                  {isSetupError ? "Activation Link Triggered" : `Error: ${errorMessage}`}
                </p>
                {isSetupError && (
                  <div className="p-6 bg-slate-900 border border-indigo-500/20 rounded-[2rem] text-left">
                    <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                      <i className="fa-solid fa-envelope-open-text text-indigo-400"></i>
                      Email Troubleshooting (Live.com / Outlook)
                    </h4>
                    <div className="space-y-4 text-slate-400 text-xs leading-relaxed">
                      <p>If you don't see the email at <strong>shubhamchavan@live.com</strong>, try these steps:</p>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Check your <strong>Junk / Spam</strong> folder immediately.</li>
                        <li>Live.com can take up to <strong>5 minutes</strong> to deliver Formspree automated mails.</li>
                        <li>Add <strong>notifications@formspree.io</strong> to your "Safe Senders" list in Outlook settings.</li>
                      </ul>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] hover:text-white transition-colors mt-2"
                      >
                        Try sending again to re-trigger activation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ContactForm;
