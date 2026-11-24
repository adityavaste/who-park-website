import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Sparkles, Compass, HeartHandshake, ArrowRight, PhoneOff } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn why Who Park was created and how our QR-based vehicle communication platform makes everyday parking smarter and safer.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Privacy First',
    desc: 'Drivers should never have to leave personal mobile numbers exposed on windshields just to stay reachable.',
  },
  {
    icon: Sparkles,
    title: 'Zero App Friction',
    desc: 'Anyone can scan a Who Park QR sticker with their regular phone camera and send an alert in seconds.',
  },
  {
    icon: HeartHandshake,
    title: 'Polite & Calm',
    desc: 'Quick, structured alerts replace endless honking and turn parking friction into easy cooperation.',
  },
  {
    icon: Compass,
    title: 'Made for Everyday Roads',
    desc: 'Built for apartment basements, office parking lots, markets, and busy residential lanes.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] overflow-x-hidden selection:bg-[#FFD600] selection:text-[#111111]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-0 pb-10 sm:py-14 space-y-10">
        {/* Hero Card: Flush on Mobile, Boxed on Laptop */}
        <section className="-mx-4 sm:mx-0 bg-white sm:rounded-[32px] border-b sm:border border-neutral-200/90 px-5 pt-6 pb-8 sm:p-10 sm:shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-neutral-200 text-xs font-semibold">
            <PhoneOff className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Our Story &amp; Mission</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12] max-w-3xl">
            Making Everyday Parking{' '}
            <span className="bg-[#FFD600] px-2.5 py-0.5 rounded-xl inline-block">
              Smarter &amp; Safer.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Who Park was built to solve a simple, everyday problem: when a parked car needs
            attention, reaching the owner shouldn&apos;t require guesswork, honking, or leaving
            your personal phone number on the glass.
          </p>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 bg-[#111111]">
            <img
              src="/images/smart-parking-courtyard.jpg"
              alt="Modern residential parking courtyard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="inline-block bg-[#FFD600] text-[#111111] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Park Smart. Stay Connected.
              </span>
              <p className="text-base sm:text-xl font-bold mt-1.5">
                Connecting parked vehicles and passersby without sharing mobile digits.
              </p>
            </div>
          </div>
        </section>

        {/* Story Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-[28px] sm:rounded-[32px] border border-neutral-200/90 p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Why we built Who Park</h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every day in residential societies, office basements, and busy streets, small
              oversights happen—a car blocks a driveway, headlights stay switched ON, or a window
              is left rolled down.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Previously, drivers had to write their personal phone number on paper and leave it
              on the dashboard for every stranger to see. Who Park replaces exposed phone numbers
              with a clean windshield QR sticker so anyone can ping you safely.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#111111]">
              <img
                src="/images/driver-phone-alert.jpg"
                alt="Driver receiving instant alert on phone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-[28px] bg-[#111111] text-white p-7 sm:p-8 space-y-3">
            <span className="inline-block bg-[#FFD600] text-[#111111] text-xs font-bold px-3 py-1 rounded-full">
              Our Mission
            </span>
            <h3 className="text-2xl font-bold">Simple, private vehicle alerts for everyone</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Give every car and bike owner a free, privacy-safe way to stay connected to their
              parked vehicle anywhere.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#FFD600] text-[#111111] p-7 sm:p-8 space-y-3">
            <span className="inline-block bg-[#111111] text-[#FFD600] text-xs font-bold px-3 py-1 rounded-full">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold">Stress-free, cooperative city parking</h3>
            <p className="text-sm text-[#111111]/85 leading-relaxed">
              A world where every parked vehicle can be reached responsibly in seconds—saving
              batteries, clearing blocked lanes, and protecting driver privacy.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-center">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FFD600] text-[#111111] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-[#111111] text-white rounded-[28px] sm:rounded-[32px] p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl font-bold">Ready to put Who Park on your car?</h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto">
            Create your free QR sticker in less than a minute.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.links.register}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-bold text-sm px-7 py-4 rounded-2xl transition"
            >
              <span>Get Free Digital QR</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-7 py-4 rounded-2xl transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}