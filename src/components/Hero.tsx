'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  QrCode,
  BellRing,
  Smartphone,
  Car,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-black/10 bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-7"
          >
            <div className="inline-flex items-center gap-2 bg-[#FAFAF7] border border-black/15 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide text-[#111111]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600] border border-[#111111]" />
              {siteConfig.tagline}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-[1.06]">
              Your Parking Problems.{' '}
              <span className="relative inline-block">
                <span className="relative z-10 px-2">One Scan Away</span>
                <span className="absolute inset-x-0 bottom-1 h-4 sm:h-5 bg-[#FFD600] -z-0 rounded-md" />
              </span>{' '}
              From Solved.
            </h1>

            <p className="text-base sm:text-lg text-[#333333] leading-relaxed max-w-xl">
              Meet <strong className="font-extrabold text-[#111111]">Who Park</strong> – the
              smarter way to connect vehicle owners. Scan a QR code, send an alert and help
              resolve vehicle-related problems without sharing personal phone numbers.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <a
                href={siteConfig.links.register}
                className="inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-black text-base px-7 py-4 rounded-2xl border-2 border-[#111111] shadow-[5px_5px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </a>

              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAFAF7] text-[#111111] font-bold text-base px-7 py-4 rounded-2xl border-2 border-[#111111] transition"
              >
                How It Works
              </Link>
            </div>

            <div className="pt-2 flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#333333]">
              <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0" />
              <span>Smart Communication. Better Parking. More Privacy.</span>
            </div>
          </motion.div>

          {/* Right Column: Custom Layered Product Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Visual Stage */}
            <div className="relative bg-[#FAFAF7] border-2 border-[#111111] rounded-[2rem] p-6 sm:p-8 shadow-[10px_10px_0px_#111111]">
              {/* Top Status Header */}
              <div className="flex items-center justify-between pb-5 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#111111]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFD600] border border-[#111111]" />
                  <span className="text-xs font-mono font-bold text-[#777777] ml-1">
                    LIVE SCAN SIMULATION
                  </span>
                </div>
                <span className="text-xs font-extrabold bg-[#FFD600] px-3 py-1 rounded-full border border-[#111111]">
                  No Phone # Exposed
                </span>
              </div>

              {/* Parked Car + Windshield QR Sticker Card */}
              <div className="mt-6 bg-white border-2 border-[#111111] rounded-2xl p-5 relative">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-[#111111] text-[#FFD600] flex items-center justify-center shrink-0">
                      <Car className="w-8 h-8" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#777777]">
                        Parked Vehicle
                      </span>
                      <p className="font-mono font-black text-lg text-[#111111]">
                        MH 12 XX 0000
                      </p>
                      <p className="text-xs font-semibold text-[#16A34A] flex items-center gap-1 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Windshield QR Active
                      </p>
                    </div>
                  </div>

                  {/* Windshield Sticker Badge */}
                  <div className="bg-[#FFD600] border-2 border-[#111111] rounded-2xl p-3 text-center shadow-[3px_3px_0px_#111111] shrink-0">
                    <QrCode className="w-10 h-10 text-[#111111] mx-auto" strokeWidth={2.2} />
                    <span className="block text-[9px] font-black uppercase tracking-wider mt-1">
                      WHO PARK
                    </span>
                  </div>
                </div>
              </div>

              {/* Smartphone Scanning & Instant Alert Notification */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Visitor Phone */}
                <div className="bg-[#111111] text-white rounded-2xl p-4 border-2 border-[#111111]">
                  <div className="flex items-center justify-between text-xs text-white/70 mb-2">
                    <span className="flex items-center gap-1.5 font-bold text-[#FFD600]">
                      <Smartphone className="w-4 h-4" /> Visitor Scans QR
                    </span>
                    <span className="font-mono text-[10px]">0.5s</span>
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Selects issue:{' '}
                    <span className="font-bold text-[#FFD600]">
                      &ldquo;Car is blocking my path&rdquo;
                    </span>
                  </p>
                </div>

                {/* Owner Notification */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="bg-[#FFD600] text-[#111111] rounded-2xl p-4 border-2 border-[#111111] shadow-[4px_4px_0px_#111111]"
                >
                  <div className="flex items-center justify-between text-xs font-black mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <BellRing className="w-4 h-4" /> Owner Notified
                    </span>
                    <span className="bg-[#111111] text-white text-[10px] px-2 py-0.5 rounded-full">
                      NOW
                    </span>
                  </div>
                  <p className="text-xs font-bold leading-snug">
                    Instant alert delivered to vehicle owner&apos;s app.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}