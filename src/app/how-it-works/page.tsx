import type { Metadata } from 'next';
import Link from 'next/link';
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
  ArrowRight,
  Package,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Step-by-step guide to creating your Who Park QR sticker and receiving instant vehicle alerts.',
};

const ownerSteps = [
  {
    num: '1',
    icon: UserCheck,
    title: 'Sign in with Google',
    desc: 'Create your free Who Park account in one tap using your Google account.',
  },
  {
    num: '2',
    icon: ShieldCheck,
    title: 'Link your mobile number once',
    desc: 'Add your phone number privately in your profile so alerts reach you—it is never shown publicly.',
  },
  {
    num: '3',
    icon: Car,
    title: 'Add your vehicle plate',
    desc: 'Enter your car or bike number inside your Who Park garage.',
  },
  {
    num: '4',
    icon: QrCode,
    title: 'Get your unique QR code',
    desc: 'Who Park automatically creates a permanent QR tag linked to your vehicle.',
  },
  {
    num: '5',
    icon: Printer,
    title: 'Print or order your sticker',
    desc: 'Download and print the free windshield card at home, or order a weatherproof decal with COD.',
  },
  {
    num: '6',
    icon: Sticker,
    title: 'Place it on your windshield',
    desc: 'Stick it inside the lower corner of your front glass where anyone can easily scan it.',
  },
];

const visitorSteps = [
  {
    num: '7',
    icon: ScanLine,
    title: 'Person scans your QR code',
    desc: 'Anyone near your car scans the sticker with their normal phone camera—no app download needed.',
  },
  {
    num: '8',
    icon: MousePointerClick,
    title: 'Taps the alert reason',
    desc: 'They see your vehicle number (never your phone number) and tap why they need you—like Blocked Exit or Lights ON.',
  },
  {
    num: '9',
    icon: BellRing,
    title: 'Your phone rings & you reply',
    desc: 'You get an instant alert on your phone and can reply in one tap ("Coming in 2 mins!").',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] selection:bg-[#FFD600] selection:text-[#111111]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
        {/* Header Card */}
        <section className="bg-white rounded-[32px] border border-neutral-200/90 p-6 sm:p-10 text-center space-y-4">
          <span className="inline-block bg-[#FFD600] text-xs font-bold px-3.5 py-1 rounded-full">
            Simple Step-by-Step Guide
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            How Who Park Works
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            From setting up your windshield sticker in 60 seconds to receiving your first private
            parking alert.
          </p>

          {/* Two Visual Photo Cards */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="relative rounded-2xl overflow-hidden h-52 bg-[#111111]">
              <img
                src="/images/qr-decal-macro.jpg"
                alt="Who Park Windshield QR Sticker"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] font-bold uppercase text-[#FFD600]">Part 1 • For Owners</p>
                <p className="text-sm font-bold">Stick your QR decal on the windshield</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-52 bg-[#111111]">
              <img
                src="/images/scan-windshield.jpg"
                alt="Scanning Who Park QR code with smartphone"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] font-bold uppercase text-[#FFD600]">Part 2 • For Anyone</p>
                <p className="text-sm font-bold">Scan with any phone camera to alert the driver</p>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Setup Steps */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold px-1">
            Part 1: Setting up your car (Steps 1 to 6)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ownerSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFD600] text-[#111111] font-bold text-sm flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-neutral-500" />
                      <h3 className="text-base font-bold">{step.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visitor Scan Steps */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold px-1">
            Part 2: When someone scans your sticker (Steps 7 to 9)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {visitorSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white rounded-2xl border border-neutral-200/90 p-6 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-[#111111] text-[#FFD600] font-bold text-sm flex items-center justify-center">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-neutral-400" />
                  </div>
                  <h3 className="text-base font-bold">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#111111] text-white rounded-[32px] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-2xl font-bold">Ready to get started?</h3>
            <p className="text-sm text-neutral-400">
              Create your free digital QR now or order a physical windshield sticker (COD).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={siteConfig.links.register}
              className="inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-bold text-xs sm:text-sm px-6 py-4 rounded-2xl transition"
            >
              <span>Get Free Digital QR</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact?subject=Order%20Windshield%20QR%20Sticker%20(COD)"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm px-6 py-4 rounded-2xl transition"
            >
              <Package className="w-4 h-4 text-[#FFD600]" />
              <span>Order Sticker (COD)</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}