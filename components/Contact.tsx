'use client';

import React, { useState } from 'react';
import {
  Send,
  Mail,
  MapPin,
  Check,
  Copy,
  Clock,
  // Sparkles,
  AlertCircle,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Contact() {
  const { personal, socials } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    projectType: 'Autonomous AI Agents',
    budget: '$10k - $25k',
    message: '',
    honeypot: '', // bot trap
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const projectTypes = [
    'Autonomous AI Agents',
    'Full-Stack Next.js App',
    'Design Systems & UI',
    'Cloud API & Architecture',
    'Other / Advisory',
  ];

  const budgetRanges = [
    '< $10k',
    '$10k - $25k',
    '$25k - $50k',
    '$50k+',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Basic Client validation
    if (!formData.name.trim() || formData.name.length < 2) {
      setErrorMessage('Please provide your name (at least 2 characters).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please include a brief message about your project (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to send your message. Please try again.');
      }

      setSuccessMessage(
        data.message || 'Your message has been sent successfully! Julian will respond within 24 hours.'
      );

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: 'Autonomous AI Agents',
        budget: '$10k - $25k',
        message: '',
        honeypot: '',
      });
    } catch (err: unknown) {
      const errText = err instanceof Error ? err.message : 'An error occurred while sending your message.';
      setErrorMessage(errText);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7A1A]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF7A1A]" />
            <span className="text-[11px] font-extrabold tracking-widest text-[#FF7A1A] uppercase font-mono">
              LET&apos;S COLLABORATE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#17130F] dark:text-[#F6F1E6]">
            Start a <span className="text-[#FF7A1A]">Conversation</span>.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6E6656] dark:text-[#A89F91]">
            Have an upcoming project, architecture question, or seeking technical advisory? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols): Direct Info & Guarantees */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card with 1-Click Copy */}
            <div className="bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-3xl p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-xl bg-[#FF7A1A]/10 text-[#FF7A1A] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91]">
                  DIRECT INBOX
                </span>
              </div>

              <div className="text-base sm:text-lg font-black text-[#17130F] dark:text-[#F6F1E6] truncate mb-3">
                {personal.email}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="app-pill-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6F1E6] dark:bg-[#231D16] text-[#17130F] dark:text-[#F6F1E6] hover:bg-[#FF7A1A] hover:text-white dark:hover:bg-[#FF7A1A] text-xs font-bold transition-all tap-bounce"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                      <span className="text-[#22C55E]">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="app-pill-btn inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#17130F] dark:bg-[#FF7A1A] text-white dark:text-[#17130F] text-xs font-bold hover:bg-[#FF7A1A] transition-all"
                >
                  <span>Open Client</span>
                </a>
              </div>
            </div>

            {/* Location & Response Time */}
            <div className="bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-3xl p-6 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] text-[#FF7A1A] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17130F] dark:text-[#F6F1E6]">
                    Primary Location
                  </div>
                  <div className="text-xs text-[#6E6656] dark:text-[#A89F91]">
                    {personal.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] text-[#22C55E] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#17130F] dark:text-[#F6F1E6]">
                    Average Response
                  </div>
                  <div className="text-xs text-[#6E6656] dark:text-[#A89F91]">
                    Under 24 hours on business days
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-3xl p-6 shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-3">
                Connected Networks
              </h4>
              <div className="flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-pill-btn px-3.5 py-1.5 rounded-full bg-[#F6F1E6] dark:bg-[#231D16] text-xs font-bold text-[#17130F] dark:text-[#F6F1E6] hover:bg-[#FF7A1A] hover:text-white transition-all tap-bounce"
                  >
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Contact Form with Resend Integration */}
          <div className="lg:col-span-7 bg-[#FFFFFF] dark:bg-[#17130F] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-3xl p-6 sm:p-9 shadow-md relative">
            <h3 className="text-lg sm:text-xl font-black text-[#17130F] dark:text-[#F6F1E6] tracking-tight mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs text-[#6E6656] dark:text-[#A89F91] mb-6">
              Powered by Resend with verified server delivery.
            </p>

            {/* Success Banner */}
            {successMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-start gap-3 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed font-medium">
                  {successMessage}
                </div>
              </div>
            )}

            {/* Error Banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed font-medium">
                  {errorMessage}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Anti-spam honeypot (hidden from human view) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] text-sm text-[#17130F] dark:text-[#F6F1E6] placeholder-[#6E6656]/50 dark:placeholder-[#A89F91]/50 focus:outline-none focus:border-[#FF7A1A] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] text-sm text-[#17130F] dark:text-[#F6F1E6] placeholder-[#6E6656]/50 dark:placeholder-[#A89F91]/50 focus:outline-none focus:border-[#FF7A1A] transition-colors"
                  />
                </div>
              </div>

              {/* Project Type Select Pills */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-2">
                  Project Domain / Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all tap-bounce ${
                          isSelected
                            ? 'bg-[#FF7A1A] text-white shadow-xs font-bold'
                            : 'bg-[#F6F1E6] dark:bg-[#231D16] text-[#6E6656] dark:text-[#A89F91] hover:text-[#17130F] dark:hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range Selection */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-2">
                  Estimated Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetRanges.map((range) => {
                    const isSelected = formData.budget === range;
                    return (
                      <button
                        type="button"
                        key={range}
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`text-xs py-2 rounded-xl font-mono text-center transition-all ${
                          isSelected
                            ? 'bg-[#17130F] dark:bg-[#FF7A1A] text-white dark:text-[#17130F] font-bold shadow-xs'
                            : 'bg-[#F6F1E6] dark:bg-[#231D16] text-[#6E6656] dark:text-[#A89F91] hover:border-[#FF7A1A]'
                        }`}
                      >
                        {range}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-1.5">
                  Subject / Objective
                </label>
                <input
                  type="text"
                  placeholder="e.g. Multi-agent workflow architecture for our SaaS"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] text-sm text-[#17130F] dark:text-[#F6F1E6] placeholder-[#6E6656]/50 dark:placeholder-[#A89F91]/50 focus:outline-none focus:border-[#FF7A1A] transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-mono font-bold uppercase text-[#6E6656] dark:text-[#A89F91] mb-1.5">
                  Project Details & Scope *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your product, timeline, goals, and any specific technical requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F6F1E6] dark:bg-[#231D16] border border-[rgba(23,19,15,0.08)] dark:border-[rgba(255,255,255,0.08)] text-sm text-[#17130F] dark:text-[#F6F1E6] placeholder-[#6E6656]/50 dark:placeholder-[#A89F91]/50 focus:outline-none focus:border-[#FF7A1A] transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="app-pill-btn w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FF7A1A] hover:bg-[#E0670F] text-white font-bold text-sm tracking-wide shadow-glow-orange disabled:opacity-50 disabled:cursor-not-allowed transition-all tap-bounce"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message to Julian</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
