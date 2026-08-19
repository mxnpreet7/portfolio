import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please enter a message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate clean frontend submission feedback
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }, 600);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-indigo-600/10 via-cyan-500/5 to-transparent rounded-t-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have an internship opening, project collaboration, or question? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400">Email Address</span>
                    <p className="text-sm sm:text-base font-semibold text-white break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all"
                >
                  <span>Open Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social & Professional Presence Card */}
            <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider">
                Profiles & Networks
              </h3>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-indigo-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900 text-white group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">GitHub</span>
                      <span className="text-xs text-slate-400 font-mono">github.com/mxnpreet7</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/40 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-600/10 text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">LinkedIn</span>
                      <span className="text-xs text-slate-400 font-mono">in/manpreet-singh-7063703b2</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-700/30">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-white block">Location</span>
                    <span className="text-xs text-slate-400 font-mono">{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl">
              
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-800">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! This is a frontend demo confirmation. You can also send a direct email to <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500'
                            : 'border-slate-700/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500'
                            : 'border-slate-700/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship Inquiry / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500'
                          : 'border-slate-700/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Manpreet, I came across your portfolio and would like to connect regarding..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500 ring-1 ring-rose-500'
                          : 'border-slate-700/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Frontend-only portfolio interface • Directly routes or emails to <span className="text-slate-300 font-mono">{personalInfo.email}</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
