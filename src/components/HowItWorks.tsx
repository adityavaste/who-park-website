'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserPlus,
  Car,
  QrCode,
  BellRing,
  CheckCircle2,
  Send,
  Smartphone,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Register',
    description: 'Create your Who Park account in seconds using your Google account.',
    icon: UserPlus,
  },
  {
    step: '02',
    title: 'Add Vehicle',
    description: 'Register your vehicle plate number and model in your garage dashboard.',
    icon: Car,
  },
  {
    step: '03',
    title: 'Get Your QR Code',
    description: 'Generate your unique vehicle QR code, print it, and attach it to your vehicle.',
    icon: QrCode,
  },
  {
    step: '04',
    title: 'Scan & Notify',
    description: 'Anyone can scan the QR code and send an instant alert to you.',
    icon: BellRing,
  },
];

const demoAlerts = [
  'Car is blocking my path',
  'Headlights have been left ON',
  'Car window has been left open',
  'Urgent parking notification',
];

export default function HowItWorks() {
  const [selectedIssue, setSelectedIssue] = useState(demoAlerts[0]);
  const [demoSent, setDemoSent] = useState(false);

  function triggerDemoAlert() {
    setDemoSent(true);
    setTimeout(() => setDemoSent(false), 3500);
  }

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-[#FFD600] border border-[#111111] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
            From Setup to First Alert in 4 Simple Steps.
          </h2>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative bg-[#FAFAF7] border-2 border-[#111111] rounded-3xl p-6 shadow-[4px_4px_0px_#111111]"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-black bg-[#111111] text-[#FFD600] px-3 py-1 rounded-full">
                    STEP {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-[#FFD600] border-2 border-[#111111] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#111111]" strokeWidth={2.3} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#111111]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#333333] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Product Demonstration */}
        <div className="mt-20 bg-[#111111] text-white rounded-[2.25rem] p-7 sm:p-12 border-2 border-[#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block bg-[#FFD600] text-[#111111] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                Interactive Demo
              </span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Try How a Visitor Alerts a Vehicle Owner.
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                When someone scans your Who Park QR sticker, they immediately see your vehicle
                identifier and one-tap alert buttons—no app download required for the scanner.
              </p>

              <div className="space-y-2.5 pt-2 text-sm">
                <div className="flex items-center gap-2.5 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                  <span>1. Visitor scans windshield QR sticker</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                  <span>2. Vehicle details appear without owner phone number</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                  <span>3. Visitor taps an alert & owner receives instant notification</span>
                </div>
              </div>
            </div>

            {/* Interactive Smartphone Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-sm bg-white text-[#111111] rounded-[2.25rem] border-4 border-[#FFD600] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* Phone Notch Header */}
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black">
                    <Smartphone className="w-4 h-4" /> WHO PARK SCANNER
                  </span>
                  <span className="text-[10px] font-mono bg-[#FAFAF7] px-2 py-0.5 rounded border border-black/15">
                    whopark.in
                  </span>
                </div>

                {/* Scanned Vehicle Card */}
                <div className="mt-4 bg-[#FAFAF7] border-2 border-[#111111] rounded-2xl p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#777777]">
                    Vehicle Identified
                  </span>
                  <p className="font-mono font-black text-xl text-[#111111]">MH 12 AB 1234</p>
                  <p className="text-xs font-semibold text-[#333333]">
                    Owner phone number hidden for privacy
                  </p>
                </div>

                {/* Alert Selection */}
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-extrabold text-[#333333]">
                    Select reason to notify owner:
                  </p>
                  {demoAlerts.map((reason) => {
                    const active = selectedIssue === reason;
                    return (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => {
                          setSelectedIssue(reason);
                          setDemoSent(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold border-2 transition ${
                          active
                            ? 'bg-[#FFD600] border-[#111111] text-[#111111]'
                            : 'bg-white border-black/15 text-[#333333] hover:border-[#111111]'
                        }`}
                      >
                        {reason}
                      </button>
                    );
                  })}
                </div>

                {/* Send Button */}
                <button
                  type="button"
                  onClick={triggerDemoAlert}
                  className="mt-4 w-full bg-[#111111] hover:bg-[#222222] text-[#FFD600] font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Instant Alert
                </button>

                {/* Simulated Owner Notification Toast */}
                {demoSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-3 rounded-xl bg-[#16A34A] text-white text-xs font-bold flex items-center gap-2"
                  >
                    <BellRing className="w-4 h-4 shrink-0" />
                    <span>Alert sent! Owner notified: &ldquo;{selectedIssue}&rdquo;</span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}