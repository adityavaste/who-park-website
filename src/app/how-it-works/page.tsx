'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserCheck,
  ShieldCheck,
  Car,
  QrCode,
  Printer,
  Sticker,
  ScanLine,
  MousePointerClick,
  BellRing,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';

const ownerSteps = [
  {
    num: '01',
    icon: UserCheck,
    title: 'Account Registration',
    desc: 'Open Who Park and sign in with your Google account in a single tap—no new password required.',
    badge: 'Google Sign-In',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Email & Contact Linking',
    desc: 'Your email is verified automatically via Google, and you link your mobile number once to activate owner alerts.',
    badge: 'One-Time Setup',
  },
  {
    num: '03',
    icon: Car,
    title: 'Vehicle Registration',
    desc: 'Enter your vehicle license plate number and make/model inside your Owner Garage dashboard.',
    badge: 'Plate Binding',
  },
  {
    num: '04',
    icon: QrCode,
    title: 'Unique QR Code Generation',
    desc: 'Who Park automatically generates a dedicated QR tag linked exclusively to your registered vehicle.',
    badge: 'Instant Mint',
  },
  {
    num: '05',
    icon: Printer,
    title: 'Download & Print Sticker',
    desc: 'Download the high-contrast QR PNG or open the printable Windshield Sticker Card from your dashboard.',
    badge: 'Print Ready',
  },
  {
    num: '06',
    icon: Sticker,
    title: 'Mount on Windshield',
    desc: 'Place the sticker inside the lower corner of your front windshield where passersby can easily scan it.',
    badge: 'Windshield Placement',
  },
];

const visitorSteps = [
  {
    num: '07',
    icon: ScanLine,
    title: 'Visitor Scans the QR Code',
    desc: 'Someone notices an issue and scans your windshield sticker using any standard smartphone camera—no app download needed.',
    badge: 'Zero App Friction',
  },
  {
    num: '08',
    icon: MousePointerClick,
    title: 'Selects the Alert Reason',
    desc: 'Your vehicle plate appears (with your phone number completely hidden), and the visitor taps the exact alert reason.',
    badge: 'One-Tap Presets',
  },
  {
    num: '09',
    icon: BellRing,
    title: 'Owner Receives Notification',
    desc: 'Your phone rings immediately with the alert details, and you can send a quick reply right back to the visitor.',
    badge: 'Live Acknowledgement',
  },
];

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'owner' | 'visitor'>('all');

  const displayedSteps =
    activeTab === 'owner'
      ? ownerSteps
      : activeTab === 'visitor'
      ? visitorSteps
      : [...ownerSteps, ...visitorSteps];

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FFD600] selection:text-[#050505]">
      {/* Dark Spatial Header */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-[radial-gradient(ellipse_at_top,rgba(255,214,0,0.18),transparent_70%)] blur-3xl"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-300">
            Complete End-to-End Flow
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.02]">
            From Setup to{' '}
            <span className="bg-gradient-to-r from-[#FFD600] via-[#FFF2A6] to-[#FFD600] bg-clip-text text-transparent">
              First Scan.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            See every step of how vehicle owners create their windshield QR tag and how visitors
            send instant alerts without ever seeing a phone number.
          </p>

          {/* Visual Showcase Strip */}
          <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="relative rounded-[28px] overflow-hidden border border-white/15 h-60 group">
              <img
                src="/images/qr-decal-macro.jpg"
                alt="Macro view of Who Park windshield QR decal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD600]">
                  Part 1 • For Vehicle Owners
                </span>
                <p className="text-lg font-semibold text-white mt-0.5">
                  Register plate &amp; mount your windshield QR decal
                </p>
              </div>
            </div>

            <div className="relative rounded-[28px] overflow-hidden border border-white/15 h-60 group">
              <img
                src="/images/scan-windshield.jpg"
                alt="Smartphone scanning windshield QR decal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#FFD600]">
                  Part 2 • For Passersby
                </span>
                <p className="text-lg font-semibold text-white mt-0.5">
                  Scan with any camera &amp; notify the owner in seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Interactive Step-by-Step Section */}
      <section className="bg-white text-[#0A0A0B] py-24 lg:py-32 rounded-t-[40px] -mt-6 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-neutral-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                9-Step Complete Journey
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Filter by owner setup or visitor scan flow.
              </p>
            </div>

            <div className="inline-flex items-center gap-1 bg-[#F5F5F7] p-1.5 rounded-full self-start">
              {[
                { id: 'all', label: 'All 9 Steps' },
                { id: 'owner', label: 'Owner Setup (01–06)' },
                { id: 'visitor', label: 'Visitor Scan (07–09)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                    activeTab === tab.id
                      ? 'bg-[#0A0A0B] text-white shadow-xs'
                      : 'text-neutral-600 hover:text-[#0A0A0B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Steps List */}
          <div className="mt-10 space-y-4">
            <AnimatePresence mode="popLayout">
              {displayedSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    layout
                    key={step.num}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl bg-[#F5F5F7] border border-neutral-200/70 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <span className="w-11 h-11 rounded-2xl bg-[#0A0A0B] text-[#FFD600] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {step.num}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#0A0A0B]">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-600 mt-1.5 leading-relaxed max-w-2xl">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-neutral-200/80 text-xs font-semibold text-[#0A0A0B] shrink-0 self-start sm:self-center">
                      <Icon className="w-4 h-4 text-[#0A0A0B]" />
                      <span>{step.badge}</span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-[36px] bg-[#0A0A0B] text-white p-10 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FFD600]">
                <CheckCircle2 className="w-4 h-4" /> Free to Start
              </div>
              <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                Ready to generate your QR sticker?
              </h3>
              <p className="text-sm text-neutral-400">
                Sign in with Google and mount your decal in under a minute.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href={siteConfig.links.register}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#ffe033] text-[#0A0A0B] font-semibold text-sm px-7 py-4 rounded-full transition"
              >
                Create Free QR Tag <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-medium text-sm px-7 py-4 rounded-full transition"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}