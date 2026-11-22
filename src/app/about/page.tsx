import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Sparkles,
  Compass,
  HeartHandshake,
  ArrowUpRight,
  Lock,
  Radio,
} from 'lucide-react';
import SpotlightCard from '@/components/SpotlightCard';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn why Who Park was created and how our QR-based vehicle communication platform makes everyday parking smarter and safer.',
};

const values = [
  {
    icon: ShieldCheck,
    code: '01',
    title: 'Privacy by Default',
    description:
      'Drivers should never have to leave personal mobile digits exposed on windshields just to stay reachable.',
  },
  {
    icon: Sparkles,
    code: '02',
    title: 'Zero-Friction Design',
    description:
      'Any visitor should be able to scan a windshield decal and send an alert in seconds without installing an app.',
  },
  {
    icon: HeartHandshake,
    code: '03',
    title: 'Everyday Courtesy',
    description:
      'Clear, calm communication transforms tense double-parking moments into cooperative resolutions.',
  },
  {
    icon: Compass,
    code: '04',
    title: 'Built for Real Streets',
    description:
      'Engineered for residential apartments, office basements, and dense urban neighborhoods.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#050505] text-white selection:bg-[#FFD600] selection:text-[#050505]">
      {/* Dark Spatial Header */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-[radial-gradient(ellipse_at_top,rgba(255,214,0,0.18),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_65%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-300">
            <Radio className="w-3.5 h-3.5 text-[#FFD600]" />
            <span>Our Story &amp; Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-[-0.04em] leading-[1.02]">
            Making Everyday Parking{' '}
            <span className="bg-gradient-to-r from-[#FFD600] via-[#FFF2A6] to-[#FFD600] bg-clip-text text-transparent">
              Smarter.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Who Park was created to solve a universal urban problem: when a parked vehicle needs
            immediate attention, reaching the owner shouldn&apos;t require guesswork, honking, or
            sacrificing personal privacy.
          </p>
        </div>

        {/* Full-Bleed Architectural Parking Visual */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="relative rounded-[36px] overflow-hidden border border-white/15 h-72 sm:h-[420px] shadow-[0_35px_90px_rgba(0,0,0,0.85)]">
            <img
              src="/images/smart-parking-courtyard.jpg"
              alt="Modern residential parking courtyard illuminated at dusk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
            <div className="absolute bottom-6 inset-x-6 sm:inset-x-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#FFD600]">
                  Connected Mobility Layer
                </span>
                <p className="text-lg sm:text-2xl font-semibold text-white mt-1">
                  Bridging parked vehicles and passersby without phone number exposure.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-medium text-emerald-400 shrink-0">
                <Lock className="w-3.5 h-3.5" /> Privacy-First Relay
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Light Editorial & Bento Section */}
      <section className="bg-white text-[#0A0A0B] py-24 lg:py-32 rounded-t-[40px] -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Brand Story Split Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[32px] bg-[#F5F5F7] p-8 sm:p-12 border border-neutral-200/70">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Why We Built Who Park
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] leading-tight">
                Handwritten dashboard numbers were a broken compromise.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Every day across residential societies, office basements, and busy city lanes,
                small oversights create avoidable stress—a car blocking an exit, headlamps left
                switched ON, or a window left rolled down.
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Drivers previously had two poor choices: leave their personal mobile number on
                paper for every stranger to see, or leave no contact method at all. Who Park
                replaces exposed digits with a clean, scannable windshield QR beacon.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden h-64 sm:h-72 shadow-lg">
                <img
                  src="/images/driver-phone-alert.jpg"
                  alt="Driver receiving instant alert inside vehicle cabin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-[#FFD600]">Instant Connection</p>
                  <p className="text-sm font-medium mt-0.5">
                    Owners receive alerts immediately and reply in one tap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard
              dark
              className="rounded-[32px] bg-[#0A0A0B] text-white p-8 sm:p-10 min-h-[260px]"
            >
              <span className="inline-block w-fit text-xs font-semibold uppercase tracking-wider bg-[#FFD600] text-[#0A0A0B] px-3.5 py-1 rounded-full">
                Our Mission
              </span>
              <div className="mt-8">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Make vehicle communication simple and accessible.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Give every vehicle owner a privacy-shielded way to stay connected to their
                  parked car anywhere, without sharing personal phone numbers.
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard className="rounded-[32px] bg-[#FFD600] text-[#0A0A0B] p-8 sm:p-10 min-h-[260px]">
              <span className="inline-block w-fit text-xs font-semibold uppercase tracking-wider bg-[#0A0A0B] text-[#FFD600] px-3.5 py-1 rounded-full">
                Our Vision
              </span>
              <div className="mt-8">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Stress-free, cooperative urban parking.
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#0A0A0B]/80 leading-relaxed">
                  A city standard where every parked vehicle can be reached responsibly in
                  seconds—eliminating blocked driveways, drained batteries, and street conflict.
                </p>
              </div>
            </SpotlightCard>
          </div>

          {/* Core Values */}
          <div>
            <div className="max-w-xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Principles
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-[-0.03em]">
                What guides every product decision.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <SpotlightCard
                    key={v.title}
                    className="rounded-3xl bg-[#F5F5F7] border border-neutral-200/70 p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-11 h-11 rounded-2xl bg-[#0A0A0B] text-[#FFD600] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-neutral-400">
                        {v.code}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A0A0B]">{v.title}</h3>
                      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>

          {/* Closing CTA */}
          <div className="rounded-[36px] bg-[#0A0A0B] text-white p-10 sm:p-16 text-center relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#FFD600]/20 blur-3xl rounded-full"
            />
            <h2 className="relative text-3xl sm:text-5xl font-semibold tracking-[-0.035em]">
              Make every parking experience smarter.
            </h2>
            <p className="relative mt-4 text-sm sm:text-base text-neutral-400 max-w-md mx-auto">
              Register your vehicle and generate your windshield QR tag in under a minute.
            </p>
            <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={siteConfig.links.register}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#ffe033] text-[#0A0A0B] font-semibold text-sm sm:text-base px-8 py-4 rounded-full transition"
              >
                Get Started Free <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base px-8 py-4 rounded-full transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}