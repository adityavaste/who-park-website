'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  Package,
  Wrench,
  Building2,
  CheckCircle2,
  Send,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';

const COD_SUBJECT = 'Order Windshield QR Sticker (COD)';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'General Enquiry';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState(
    initialSubject === COD_SUBJECT
      ? 'Hi Who Park team, I would like to order a windshield QR sticker with Cash on Delivery (COD).\n\nVehicle Number:\nDelivery Address & Pincode:'
      : ''
  );
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  useEffect(() => {
    const paramSubject = searchParams.get('subject');
    if (paramSubject) {
      setSubject(paramSubject);
      if (paramSubject === COD_SUBJECT && !message) {
        setMessage(
          'Hi Who Park team, I would like to order a windshield QR sticker with Cash on Delivery (COD).\n\nVehicle Number:\nDelivery Address & Pincode:'
        );
      }
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatusMessage(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in your name, email address, and message.',
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
        text:
          subject === COD_SUBJECT
            ? 'Thank you! Your COD sticker order request has been received. Our team will confirm shortly.'
            : 'Thank you! Your message has been sent to the Who Park team.',
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Cards */}
      <div className="lg:col-span-5 space-y-4">
        <button
          type="button"
          onClick={() => {
            setSubject(COD_SUBJECT);
            setMessage(
              'Hi Who Park team, I would like to order a windshield QR sticker with Cash on Delivery (COD).\n\nVehicle Number:\nDelivery Address & Pincode:'
            );
          }}
          className="w-full text-left bg-[#FFD600] rounded-2xl p-5 flex items-start gap-3.5 transition hover:brightness-95"
        >
          <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#FFD600] flex items-center justify-center shrink-0">
            <Package className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider bg-[#111111] text-white px-2 py-0.5 rounded-full">
              COD Available
            </span>
            <h2 className="font-bold text-base text-[#111111] mt-1">
              Order Windshield Sticker (COD)
            </h2>
            <p className="text-xs text-[#111111]/80 mt-0.5 leading-relaxed">
              Tap here to pre-fill your Cash on Delivery sticker order form.
            </p>
          </div>
        </button>

        <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-neutral-200 text-[#111111] flex items-center justify-center shrink-0">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-sm text-[#111111]">Technical Support</h2>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
              Need help setting up your account, adding a car, or printing your QR tag?
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200/90 p-5 flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-neutral-200 text-[#111111] flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-sm text-[#111111]">Apartments &amp; Offices</h2>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
              Bulk windshield QR tags for residential societies and office parking lots.
            </p>
          </div>
        </div>

        <div className="bg-[#111111] text-white rounded-2xl p-6 space-y-3 text-xs sm:text-sm">
          <p className="font-bold text-[#FFD600] uppercase tracking-wider text-xs">
            Direct Contact
          </p>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#FFD600]" />
            <span>{siteConfig.contact.email}</span>
          </div>
          <div className="flex items-center gap-2.5 text-neutral-400">
            <MapPin className="w-4 h-4 text-[#FFD600]" />
            <span>{siteConfig.contact.location}</span>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:col-span-7 bg-white rounded-[28px] border border-neutral-200/90 p-6 sm:p-9">
        <h2 className="text-xl sm:text-2xl font-bold mb-1">
          {subject === COD_SUBJECT ? 'Order Sticker (Cash on Delivery)' : 'Send Us a Message'}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 mb-6">
          Fill in the details below and our team will reply shortly.
        </p>

        {statusMessage && (
          <div
            className={`mb-5 p-4 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-50 text-[#16A34A] border border-emerald-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {statusMessage.type === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0" />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-neutral-200 focus:border-[#111111] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-neutral-200 focus:border-[#111111] focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                Phone Number {subject === COD_SUBJECT ? '*' : '(Optional)'}
              </label>
              <input
                type="tel"
                required={subject === COD_SUBJECT}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-neutral-200 focus:border-[#111111] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                Topic *
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-neutral-200 focus:border-[#111111] focus:outline-none text-sm"
              >
                <option value="General Enquiry">General Enquiry</option>
                <option value={COD_SUBJECT}>{COD_SUBJECT}</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Business Partnerships">Business Partnerships</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1.5">
              {subject === COD_SUBJECT ? 'Delivery Address & Vehicle Number *' : 'Message *'}
            </label>
            <textarea
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF9F5] border border-neutral-200 focus:border-[#111111] focus:outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-bold text-sm px-8 py-3.5 rounded-2xl transition disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {submitting
              ? 'Sending...'
              : subject === COD_SUBJECT
              ? 'Place COD Sticker Order'
              : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] overflow-x-hidden selection:bg-[#FFD600] selection:text-[#111111]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-0 pb-10 sm:py-14 space-y-8 sm:space-y-10">
        {/* Header: Flush White Banner on Mobile, Centered Header on Laptop */}
        <section className="-mx-4 sm:mx-0 bg-white sm:bg-transparent border-b sm:border-0 border-neutral-200/90 px-5 pt-6 pb-8 sm:p-0 text-center max-w-2xl sm:mx-auto space-y-3">
          <span className="inline-block bg-[#FFD600] text-xs font-bold px-3.5 py-1 rounded-full">
            Help, Orders &amp; Partnerships
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Order a windshield sticker with Cash on Delivery, ask a question, or partner with
            Who Park.
          </p>
        </section>

        <Suspense
          fallback={
            <div className="bg-white rounded-[28px] border border-neutral-200 p-10 text-center text-sm text-neutral-500">
              Loading form...
            </div>
          }
        >
          <ContactFormContent />
        </Suspense>
      </main>
    </div>
  );
}