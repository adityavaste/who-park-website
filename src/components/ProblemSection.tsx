'use client';

import { motion } from 'framer-motion';
import { CarFront, Lightbulb, DoorOpen, AlertTriangle, Check, X } from 'lucide-react';

const problems = [
  {
    icon: CarFront,
    title: 'Blocked Vehicle',
    description:
      'Someone has parked behind your car in a tight lane or lot, and you cannot leave when you need to.',
    tag: 'Most Common',
  },
  {
    icon: Lightbulb,
    title: 'Headlights Left ON',
    description:
      'A vehicle owner has accidentally left their headlights running, risking a drained battery.',
    tag: 'Battery Saver',
  },
  {
    icon: DoorOpen,
    title: 'Window Left Open',
    description:
      'Someone notices an unattended vehicle with an open window exposed to rain or theft.',
    tag: 'Safety Check',
  },
  {
    icon: AlertTriangle,
    title: 'Urgent Vehicle Alert',
    description:
      'Someone needs to notify a vehicle owner immediately about an urgent parking or safety situation.',
    tag: 'Urgent Ping',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF7] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="inline-block bg-[#FFD600] border border-[#111111] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111] leading-tight">
            Everyday Parking Problems. We&apos;ve All Been There.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#333333] leading-relaxed">
            Small parking oversights turn into wasted time, honking horns, and unnecessary stress
            when there is no safe way to reach the driver.
          </p>
        </div>

        {/* Four Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border-2 border-[#111111] rounded-3xl p-6 shadow-[5px_5px_0px_#111111] hover:-translate-y-1 transition-transform flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFD600] border-2 border-[#111111] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#111111]" strokeWidth={2.2} />
                    </div>
                    <span className="text-[11px] font-bold text-[#777777] bg-[#FAFAF7] px-2.5 py-1 rounded-full border border-black/10">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#111111]">{item.title}</h3>
                  <p className="mt-2.5 text-sm text-[#333333] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Solution Comparison Strip */}
        <div className="mt-16 bg-white border-2 border-[#111111] rounded-3xl p-7 sm:p-10 shadow-[8px_8px_0px_#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="inline-block bg-[#111111] text-[#FFD600] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                The Solution
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111] leading-tight">
                Introducing Who Park – A Simple Solution.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#333333] leading-relaxed">
                Replace handwritten dashboard phone numbers with a smart, scannable QR tag
                built for privacy and speed.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAFAF7] border border-black/15 rounded-2xl p-5 space-y-3">
                <p className="text-xs font-black uppercase tracking-wider text-[#777777]">
                  Without Who Park
                </p>
                <ul className="space-y-2.5 text-sm text-[#333333]">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Searching around for the vehicle owner&apos;s number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Waiting helplessly for someone to return</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>Exposing personal mobile numbers on windshields</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFD600] border-2 border-[#111111] rounded-2xl p-5 space-y-3">
                <p className="text-xs font-black uppercase tracking-wider text-[#111111]">
                  With Who Park
                </p>
                <ul className="space-y-2.5 text-sm font-bold text-[#111111]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>Simply scan the QR code on the vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>Pick the exact alert reason in seconds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" strokeWidth={3} />
                    <span>Notify the owner without revealing phone numbers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}