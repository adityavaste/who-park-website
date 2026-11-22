'use client';

import {
  QrCode,
  BellRing,
  Shield,
  Layers,
  Car,
  LayoutDashboard,
  Smartphone,
  Lock,
  Users,
  Building2,
  ParkingSquare,
  User,
} from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'Unique Vehicle QR Code',
    description: 'Every registered vehicle receives a dedicated QR sticker slug.',
    status: 'Available',
  },
  {
    icon: BellRing,
    title: 'Instant Vehicle Alerts',
    description: 'Receive immediate notifications and audible ring alerts when scanned.',
    status: 'Available',
  },
  {
    icon: Shield,
    title: 'Privacy-Focused Communication',
    description: 'Visitors alert you through the platform without seeing your mobile number.',
    status: 'Available',
  },
  {
    icon: Layers,
    title: 'Multiple Alert Categories',
    description: 'Pre-set alerts for blocked paths, headlights left ON, open windows, and emergencies.',
    status: 'Available',
  },
  {
    icon: Car,
    title: 'Easy Vehicle Registration',
    description: 'Add your vehicle plate number and generate a printable sticker in under a minute.',
    status: 'Available',
  },
  {
    icon: LayoutDashboard,
    title: 'Simple Dashboard',
    description: 'Manage stickers, view recent alerts, and send one-tap quick replies.',
    status: 'Available',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Experience',
    description: 'Works smoothly on mobile browsers and the Who Park Android app.',
    status: 'Available',
  },
  {
    icon: Lock,
    title: 'Secure Account Management',
    description: 'Protected sign-in powered by Google authentication.',
    status: 'Available',
  },
];

const audiences = [
  {
    icon: User,
    title: 'Individual Vehicle Owners',
    description: 'Protect your privacy while staying reachable whenever you park in public.',
  },
  {
    icon: Users,
    title: 'Families with Multiple Vehicles',
    description: 'Manage QR stickers for every car and two-wheeler in your household from one account.',
  },
  {
    icon: Building2,
    title: 'Apartment Residents',
    description: 'Resolve tandem or visitor parking blocks inside residential societies without arguments.',
  },
  {
    icon: ParkingSquare,
    title: 'Office Parking Facilities',
    description: 'Keep employee and visitor parking lanes flowing smoothly during peak work hours.',
  },
  {
    icon: Car,
    title: 'Commercial Parking Operators',
    description: 'Help drivers notify each other quickly in busy malls, markets, and complexes.',
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF7] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="max-w-2xl">
          <span className="inline-block bg-[#FFD600] border border-[#111111] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
            Built for Practical, Everyday Parking.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-white border-2 border-[#111111] rounded-2xl p-5 shadow-[4px_4px_0px_#111111] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD600] border border-[#111111] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#111111]" strokeWidth={2.2} />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16A34A] bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                      {feat.status}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#111111]">{feat.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#333333] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who Is It For? */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#111111] text-[#FFD600] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Who Is It For?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#111111]">
              Designed for Every Parking Environment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="bg-white border border-black/15 hover:border-[#111111] rounded-2xl p-5 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAF7] border border-[#111111] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#111111]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#111111]">{aud.title}</h3>
                  <p className="mt-2 text-xs text-[#333333] leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}