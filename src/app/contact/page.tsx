'use client';

import { useState } from 'react';
import {
  Mail,
  HelpCircle,
  Wrench,
  Building2,
  CheckCircle2,
  Send,
  MapPin,
  Phone,
} from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import { siteConfig } from '@/lib/config';

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusMessage(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please enter your full name, email address, and message.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, phone, subject, message }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Unable to send message.');
      }

      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent to the Who Park team.',
      });
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FFD600] selection:text-[#050505]">
      {/* Dark Spatial Header */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-[radial-gradient(ellipse_at_top,rgba(255,214,0,0.18),transparent_70%)] blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-300">
            Contact &amp; Partnerships
          </span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.04em] leading-[1.04]">
            Get in Touch With{' '}
            <span className="text-[#FFD600]">Who Park.</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto">
            Questions about windshield QR tags, technical support, or deploying Who Park across
            apartments and office parking facilities? Reach out below.
          </p>
        </div>
      </section>

      {/* Light Content Surface */}
      <section className="bg-white text-[#0A0A0B] py-24 lg:py-32 rounded-t-[40px] -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Enquiry Channels */}
            <div className="lg:col-span-5 space-y-4">
              <SpotlightCard className="rounded-3xl bg-[#F5F5F7] border border-neutral-200/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0A0A0B] text-[#FFD600] flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-base text-[#0A0A0B]">General Enquiries</h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      Questions about how Who Park works for individual cars and two-wheelers.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="rounded-3xl bg-[#F5F5F7] border border-neutral-200/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0A0A0B] text-[#FFD600] flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-base text-[#0A0A0B]">Technical Support</h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      Assistance with account login, vehicle registration, or QR sticker printing.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="rounded-3xl bg-[#F5F5F7] border border-neutral-200/70 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#0A0A0B] text-[#FFD600] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-base text-[#0A0A0B]">
                      Business Partnerships
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      Roll out Who Park across housing societies, corporate campuses, and parking
                      lots.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Direct Contact Card */}
              <div className="rounded-3xl bg-[#0A0A0B] text-white p-7 space-y-3.5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#FFD600]">
                  Direct Channels
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-[#FFD600] shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </div>
                {siteConfig.contact.phone && (
                  <div className="flex items-center gap-3 text-sm text-neutral-300">
                    <Phone className="w-4 h-4 text-[#FFD600] shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm text-neutral-400">
                  <MapPin className="w-4 h-4 text-[#FFD600] shrink-0" />
                  <span>{siteConfig.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Modern Contact Form */}
            <div className="lg:col-span-7 rounded-[32px] bg-[#F5F5F7] border border-neutral-200/70 p-7 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#0A0A0B] mb-2">Send a Message</h2>
              <p className="text-sm text-neutral-500 mb-6">
                Fill out the form below and our team will respond shortly.
              </p>

              {statusMessage && (
                <div
                  className={`mb-6 p-4 rounded-2xl text-sm font-medium flex items-center gap-2.5 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-50 text-[#16A34A] border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {statusMessage.type === 'success' && (
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:border-[#0A0A0B] focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:border-[#0A0A0B] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:border-[#0A0A0B] focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Subject *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:border-[#0A0A0B] focus:outline-none text-sm"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Business Partnerships">Business Partnerships</option>
                      <option value="Plan Enquiry">Plan Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-neutral-200 focus:border-[#0A0A0B] focus:outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A0A0B] hover:bg-neutral-800 text-white font-semibold text-sm px-8 py-4 rounded-full transition disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#FFD600]" />
                  {submitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}