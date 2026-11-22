'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import {
  QrCode,
  ShieldCheck,
  ArrowUpRight,
  BellRing,
  Car,
  Lightbulb,
  Wind,
  Check,
  Lock,
  Plus,
  Sparkles,
  ScanLine,
  Radio,
  Zap,
  Eye,
  EyeOff,
  Building2,
  Users,
  UserCheck,
  ParkingCircle,
} from 'lucide-react';
import { siteConfig, pricingPlans } from '@/lib/config';

const scenarios = [
  {
    id: 'blocked',
    label: 'Blocked Exit',
    plate: 'MH 12 •• 4821',
    alertTitle: 'Obstruction Alert',
    visitorMsg: 'Your car is blocking the driveway exit.',
    ownerReply: 'Moving my car in 2 mins — sorry!',
  },
  {
    id: 'lights',
    label: 'Headlights ON',
    plate: 'MH 14 •• 9034',
    alertTitle: 'Battery Saver Ping',
    visitorMsg: 'Your headlights were left switched ON.',
    ownerReply: 'Thanks for the save! Heading down now.',
  },
  {
    id: 'window',
    label: 'Open Window',
    plate: 'MH 01 •• 1170',
    alertTitle: 'Cabin Safety Alert',
    visitorMsg: 'Rear left window is rolled down.',
    ownerReply: 'Appreciate it — closing it right away.',
  },
];

const marqueeItems = [
  'ZERO PHONE NUMBERS EXPOSED',
  'INSTANT WINDSHIELD QR ALERTS',
  'NO APP REQUIRED TO SCAN',
  'ONE-TAP OWNER QUICK REPLIES',
  'BUILT FOR APARTMENTS & OFFICES',
  'PRIVACY-FIRST VEHICLE BEACON',
];

const walkthroughSteps = [
  {
    step: '01',
    title: 'One-Tap Google Sign-In',
    desc: 'Create your Who Park owner profile in seconds without remembering another password.',
    previewTitle: 'Owner Account Verified',
    previewSub: 'Google Auth • Mobile Linked Privately',
    previewBadge: 'Step 1 of 4',
    image: '/images/hero-car-qr.jpg',
  },
  {
    step: '02',
    title: 'Register Your Vehicle Plate',
    desc: 'Add your license plate number to mint a permanent, unique QR identifier in your garage.',
    previewTitle: 'MH 12 AB 1234 Registered',
    previewSub: 'Unique Tag Slug: /v/wp-89a4x',
    previewBadge: 'Step 2 of 4',
    image: '/images/hero-car-qr.jpg',
  },
  {
    step: '03',
    title: 'Mount Windshield QR Decal',
    desc: 'Print your clean windshield sticker card and place it inside the lower corner of your glass.',
    previewTitle: 'Windshield Sticker Ready',
    previewSub: 'High-contrast scannable QR decal',
    previewBadge: 'Step 3 of 4',
    image: '/images/scan-windshield.jpg',
  },
  {
    step: '04',
    title: 'Receive Instant Alerts',
    desc: 'Anyone scans with their phone camera and pings you—you reply in one tap without sharing your number.',
    previewTitle: 'Incoming Alert: Lights Left ON',
    previewSub: 'Reply sent: "Coming in 2 mins!"',
    previewBadge: 'Step 4 of 4',
    image: '/images/basement-headlights.jpg',
  },
];

const faqs = [
  {
    q: 'What is Who Park?',
    a: 'Who Park is a privacy-first QR vehicle communication platform. It lets anyone near your parked car alert you instantly without ever seeing your personal mobile number.',
  },
  {
    q: 'Does a visitor need an app to scan my QR?',
    a: 'Zero downloads required. Any standard smartphone camera scans your windshield decal and opens the instant alert interface directly in their browser.',
  },
  {
    q: 'How is my phone number protected?',
    a: 'Your mobile number is never printed on the sticker or displayed on the scan page. All alerts and quick replies are routed securely through Who Park.',
  },
  {
    q: 'How do I get my QR sticker?',
    a: 'Sign in with Google, add your vehicle registration plate in your dashboard, and download your ready-to-print windshield QR decal in seconds.',
  },
  {
    q: 'Is Who Park free?',
    a: 'Yes. Account creation, vehicle registration, QR sticker generation, and receiving instant alerts are completely free to start.',
  },
];

function SpotlightCard({
  children,
  className = '',
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
        style={{
          opacity,
          background: dark
            ? `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(255, 214, 0, 0.16), transparent 45%)`
            : `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(255, 214, 0, 0.24), transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}

export default function UltraModernHomePage() {
  const [activeScenario, setActiveScenario] = useState(scenarios[0]);
  const [activeStep, setActiveStep] = useState(0);
  const [privacyReveal, setPrivacyReveal] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll-driven walkthrough state
  const walkthroughRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: walkthroughRef,
    offset: ['start 65%', 'end 65%'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const stepIndex = Math.min(
      walkthroughSteps.length - 1,
      Math.max(0, Math.floor(latest * walkthroughSteps.length))
    );
    setActiveStep(stepIndex);
  });

  // 3D Tilt Physics for Hero HUD
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 280,
    damping: 28,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 280,
    damping: 28,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FFD600] selection:text-[#050505] overflow-x-clip">
      {/* =====================================================================
          1. SPATIAL DARK HERO WITH AUTOMOTIVE SHOWCASE & 3D HUD
      ===================================================================== */}
      <section className="relative pt-16 pb-28 lg:pt-24 lg:pb-36 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[540px] bg-[radial-gradient(ellipse_at_top,rgba(255,214,0,0.2),transparent_70%)] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_85%_65%_at_50%_0%,#000_70%,transparent_100%)]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            {/* Left Editorial Column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD600] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD600]" />
                </span>
                <span className="text-xs font-medium tracking-wide text-neutral-300">
                  Park Smart. Stay Connected.
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold tracking-[-0.04em] leading-[1.02] text-white">
                Smart QR alerts for {' '}
                <span className="bg-gradient-to-r from-[#FFD600] via-[#FFF2A6] to-[#FFD600] bg-clip-text text-transparent">
                  your parked car.
                </span>
                <br />
                <span className="text-neutral-400">Zero numbers shared.</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-lg font-normal">
                Replace exposed dashboard phone notes with an intelligent windshield QR beacon.
                One camera scan lets anyone alert you about blocked exits, open windows, or
                headlights left ON.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={siteConfig.links.register}
                  className="group relative inline-flex items-center justify-center gap-3 bg-[#FFD600] hover:bg-[#ffe033] text-[#050505] font-semibold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-[0_0_50px_-10px_rgba(255,214,0,0.55)]"
                >
                  <span>Get Started Free</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.09] text-white font-medium text-sm sm:text-base px-7 py-4 rounded-full border border-white/10 backdrop-blur-md transition"
                >
                  How It Works
                </Link>
              </div>

              <div className="pt-6 flex items-center gap-8 border-t border-white/10 text-sm">
                <div>
                  <p className="font-semibold text-white">0 Digits Shown</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Complete number privacy</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="font-semibold text-white">Camera Scan</p>
                  <p className="text-xs text-neutral-500 mt-0.5">No app needed for visitors</p>
                </div>
                <div className="h-8 w-px bg-white/10" />
                <div>
                  <p className="font-semibold text-white">1-Tap Reply</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Instant owner response</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Automotive Photo Stage + Floating Live HUD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 perspective-1000"
            >
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative rounded-[36px] bg-gradient-to-b from-white/[0.14] to-white/[0.03] p-px shadow-[0_40px_100px_-20px_rgba(0,0,0,0.95)]"
              >
                <div className="rounded-[35px] bg-[#0B0B0D] overflow-hidden">
                  {/* Top AI Car Visual Banner */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                    <img
                      src="/images/hero-car-qr.jpg"
                      alt="Modern SUV parked with Who Park windshield QR decal"
                      className="w-full h-full object-cover object-center scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/30 to-transparent" />

                    {/* Top Floating Status Bar */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white">
                        <Radio className="w-3.5 h-3.5 text-[#FFD600]" />
                        Windshield Beacon Active
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[11px] font-medium text-emerald-300">
                        <Lock className="w-3 h-3" /> Number Masked
                      </span>
                    </div>

                    {/* Bottom Plate Overlay */}
                    <div className="absolute bottom-3 inset-x-5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                          Registered Vehicle
                        </p>
                        <p className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-white">
                          {activeScenario.plate}
                        </p>
                      </div>
                      <div className="relative w-12 h-12 rounded-xl bg-[#FFD600] text-[#050505] flex items-center justify-center overflow-hidden shadow-lg">
                        <QrCode className="w-7 h-7" strokeWidth={2} />
                        <motion.div
                          animate={{ y: [-20, 20, -20] }}
                          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                          className="absolute inset-x-0 h-0.5 bg-[#050505]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive Telemetry Console */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Scenario Switcher */}
                    <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10">
                      {scenarios.map((sc) => {
                        const active = activeScenario.id === sc.id;
                        return (
                          <button
                            key={sc.id}
                            type="button"
                            onClick={() => setActiveScenario(sc)}
                            className={`flex-1 py-1.5 px-2.5 rounded-full text-xs font-medium transition-all ${active
                                ? 'bg-[#FFD600] text-[#050505] shadow-sm'
                                : 'text-neutral-400 hover:text-white'
                              }`}
                          >
                            {sc.label}
                          </button>
                        );
                      })}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScenario.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22 }}
                        className="space-y-2.5"
                      >
                        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-3.5 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                              <ScanLine className="w-4 h-4 text-[#FFD600]" />
                            </div>
                            <div>
                              <p className="text-[10px] font-medium text-neutral-400">
                                {activeScenario.alertTitle}
                              </p>
                              <p className="text-xs sm:text-sm font-medium text-white">
                                &ldquo;{activeScenario.visitorMsg}&rdquo;
                              </p>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500">0.3s</span>
                        </div>

                        <div className="rounded-2xl bg-[#FFD600] text-[#050505] p-3.5 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#050505] text-[#FFD600] flex items-center justify-center shrink-0">
                              <BellRing className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold text-[#050505]/70">
                                Owner One-Tap Reply
                              </p>
                              <p className="text-xs sm:text-sm font-semibold">
                                &ldquo;{activeScenario.ownerReply}&rdquo;
                              </p>
                            </div>
                          </div>
                          <span className="w-6 h-6 rounded-full bg-[#050505]/10 flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. KINETIC INFINITE TICKER RIBBON
      ===================================================================== */}
      <div className="relative bg-[#FFD600] text-[#050505] py-3.5 overflow-hidden border-y border-black/10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          className="flex items-center gap-10 whitespace-nowrap w-max"
        >
          {[...marqueeItems, ...marqueeItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className="font-mono text-xs font-bold tracking-[0.2em]">{text}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#050505]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================================
          3. SPOTLIGHT BENTO GRID WITH AUTOMOTIVE PHOTOGRAPHY
      ===================================================================== */}
      <section className="bg-white text-[#0A0A0B] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
              <Zap className="w-3.5 h-3.5 text-[#0A0A0B]" /> Everyday Friction
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] leading-[1.08]">
              Parking problems solved with silent precision.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Large Visual Photo Card: Smartphone Scanning Windshield */}
            <SpotlightCard
              dark
              className="md:col-span-7 rounded-[32px] bg-[#0A0A0B] text-white min-h-[360px] group"
            >
              <img
                src="/images/scan-windshield.jpg"
                alt="Scanning Who Park QR decal on windshield"
                className="absolute inset-0 w-full h-full object-cover opacity-55 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent" />

              <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-between h-full">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD600] text-[#0A0A0B] flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>

                <div className="mt-16">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FFD600]">
                    01 • Blocked Vehicle
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-1">
                    Double-parked in a tight lane or basement?
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-lg leading-relaxed">
                    Instead of honking endlessly or searching nearby offices for the driver,
                    scan the windshield QR sticker to alert the owner immediately.
                  </p>
                </div>
              </div>
            </SpotlightCard>

            {/* Right 2-Card Stack with Basement Headlights Visual */}
            <div className="md:col-span-5 grid grid-rows-2 gap-5">
              <SpotlightCard
                dark
                className="rounded-[32px] bg-[#0A0A0B] text-white border border-white/10 group"
              >
                <img
                  src="/images/basement-headlights.jpg"
                  alt="Sedan parked with headlights accidentally left on"
                  className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/65 to-transparent" />

                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD600] text-[#0A0A0B] flex items-center justify-center">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-neutral-300">
                      02 • Battery Saver
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold">Headlights Left ON</h3>
                    <p className="text-sm text-neutral-300 mt-1.5">
                      Passersby can notify you in seconds before your battery drains completely.
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              <SpotlightCard className="rounded-[32px] bg-[#FFD600] text-[#0A0A0B] p-8">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] text-[#FFD600] flex items-center justify-center">
                    <Wind className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#0A0A0B]/70">
                    03 • Cabin Safety
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">Window Left Open</h3>
                  <p className="text-sm text-[#0A0A0B]/80 mt-1.5">
                    Get alerted immediately if your vehicle is unattended with an open window.
                  </p>
                </div>
              </SpotlightCard>
            </div>

            {/* Interactive Privacy Comparison Bento */}
            <div className="md:col-span-12 rounded-[32px] bg-[#F5F5F7] border border-neutral-200/70 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white px-3.5 py-1.5 rounded-full shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" /> Interactive Privacy Shield
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  See what a visitor sees when they scan your sticker.
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Toggle the preview card to compare traditional handwritten dashboard notes
                  against Who Park&apos;s masked QR relay.
                </p>

                <button
                  type="button"
                  onClick={() => setPrivacyReveal((prev) => !prev)}
                  className="inline-flex items-center gap-2 bg-[#0A0A0B] text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-neutral-800 transition"
                >
                  {privacyReveal ? (
                    <>
                      <EyeOff className="w-4 h-4 text-[#FFD600]" />
                      <span>Switch to Who Park Protected View</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4 text-[#FFD600]" />
                      <span>Compare With Old Dashboard Note</span>
                    </>
                  )}
                </button>
              </div>

              <div className="lg:col-span-6">
                <AnimatePresence mode="wait">
                  {!privacyReveal ? (
                    <motion.div
                      key="protected"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-3xl bg-[#0A0A0B] text-white p-6 sm:p-7 shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#FFD600]">
                          WHO PARK PROTECTED VIEW
                        </span>
                        <span className="text-[11px] bg-emerald-500/15 text-emerald-400 px-2.5 py-0.5 rounded-full">
                          Number Hidden
                        </span>
                      </div>
                      <p className="font-mono text-2xl font-bold mt-4">MH 12 AB 1234</p>
                      <p className="text-xs text-neutral-400 mt-1">
                        Owner Mobile: ••••• ••210 (Encrypted Relay)
                      </p>
                      <div className="mt-5 grid grid-cols-2 gap-2.5 text-xs font-semibold">
                        <div className="bg-[#FFD600] text-[#0A0A0B] py-2.5 px-3 rounded-xl text-center">
                          Send Blocking Alert
                        </div>
                        <div className="bg-white/10 text-white py-2.5 px-3 rounded-xl text-center">
                          Headlights ON Ping
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="exposed"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="rounded-3xl bg-white border-2 border-dashed border-red-300 p-6 sm:p-7"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-red-600">
                          OLD PAPER NOTE ON DASHBOARD
                        </span>
                        <span className="text-[11px] bg-red-50 text-red-600 px-2.5 py-0.5 rounded-full font-semibold">
                          Privacy Risk
                        </span>
                      </div>
                      <p className="font-mono text-2xl font-bold text-neutral-900 mt-4">
                        +91 98765 43210
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">
                        Visible to every stranger walking past your parked vehicle—vulnerable to
                        spam and unwanted calls.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SCROLL-DRIVEN 4-STEP WALKTHROUGH WITH STICKY CAR VISUAL STAGE
      ===================================================================== */}
      <section
        id="how-it-works"
        ref={walkthroughRef}
        className="bg-[#F5F5F7] text-[#0A0A0B] py-28 lg:py-36"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              How It Works
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.035em]">
              Active on your windshield in 60 seconds.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Scrollable Steps Track */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-12">
              {walkthroughSteps.map((s, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <motion.div
                    key={s.step}
                    onViewportEnter={() => setActiveStep(idx)}
                    viewport={{ amount: 0.6 }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`w-full text-left rounded-3xl p-6 sm:p-8 transition-all duration-300 ${isSelected
                          ? 'bg-[#0A0A0B] text-white shadow-2xl scale-[1.01]'
                          : 'bg-white/80 hover:bg-white text-[#0A0A0B] border border-neutral-200/70'
                        }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`w-10 h-10 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${isSelected
                              ? 'bg-[#FFD600] text-[#0A0A0B]'
                              : 'bg-[#F5F5F7] text-[#0A0A0B]'
                            }`}
                        >
                          {s.step}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold">{s.title}</h3>
                          <p
                            className={`text-sm sm:text-base mt-2 leading-relaxed ${isSelected ? 'text-neutral-300' : 'text-neutral-600'
                              }`}
                          >
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Sticky Car Visual & Live Preview Console */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="rounded-[36px] bg-[#0A0A0B] text-white shadow-2xl relative overflow-hidden min-h-[440px] sm:min-h-[480px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={walkthroughSteps[activeStep].image}
                    src={walkthroughSteps[activeStep].image}
                    alt={walkthroughSteps[activeStep].previewTitle}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-black/30" />

                <div className="relative z-10 p-8 sm:p-10 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FFD600] bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                    {walkthroughSteps[activeStep].previewBadge}
                  </span>
                  <QrCode className="w-6 h-6 text-white/60" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 p-8 sm:p-10 space-y-3"
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-[#FFD600]">
                      <Check className="w-3.5 h-3.5" /> Live Preview
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                      {walkthroughSteps[activeStep].previewTitle}
                    </h3>
                    <p className="text-base text-neutral-300">
                      {walkthroughSteps[activeStep].previewSub}
                    </p>

                    <div className="pt-4 flex items-center gap-2">
                      {walkthroughSteps.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          aria-label={`Go to step ${i + 1}`}
                          onClick={() => setActiveStep(i)}
                          className={`h-1.5 rounded-full transition-all ${i === activeStep ? 'w-10 bg-[#FFD600]' : 'w-2.5 bg-white/25 hover:bg-white/40'
                            }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: UserCheck, title: 'Individual Drivers', desc: 'Daily street & mall parking' },
              { icon: Users, title: 'Families', desc: 'Multiple cars under one login' },
              { icon: Building2, title: 'Apartments', desc: 'Tandem & visitor bay clarity' },
              { icon: ParkingCircle, title: 'Offices & Lots', desc: 'Faster lane clearance' },
            ].map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-2xs"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F5F5F7] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#0A0A0B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[#0A0A0B]">{aud.title}</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">{aud.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PRICING: CLEAN MODERN TIERS
      ===================================================================== */}
      <section className="bg-white text-[#0A0A0B] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Pricing
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-[-0.035em]">
              Simple plans for every driver.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition ${plan.popular
                    ? 'bg-[#0A0A0B] text-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)]'
                    : 'bg-[#F5F5F7] text-[#0A0A0B]'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.badge && (
                      <span className="bg-[#FFD600] text-[#0A0A0B] text-[11px] font-semibold px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${plan.popular ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm ${plan.popular ? 'text-neutral-400' : 'text-neutral-600'
                      }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-8 pt-6 border-t border-current/10 space-y-3.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-[#FFD600]' : 'text-[#16A34A]'
                            }`}
                        />
                        <span>
                          {f.text}{' '}
                          {f.status === 'planned' && (
                            <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-white/10 ml-1">
                              Soon
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={plan.ctaHref}
                    className={`block w-full text-center font-semibold text-sm py-4 rounded-full transition ${plan.popular
                        ? 'bg-[#FFD600] hover:bg-[#ffe033] text-[#0A0A0B]'
                        : 'bg-[#0A0A0B] hover:bg-neutral-800 text-white'
                      }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. MINIMAL FAQ + CLOSING SPATIAL CTA
      ===================================================================== */}
      <section className="bg-[#F5F5F7] text-[#0A0A0B] py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={item.q}
                  className="bg-white rounded-2xl px-6 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-semibold text-base"
                  >
                    <span>{item.q}</span>
                    <Plus
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${isOpen ? 'rotate-45 text-[#0A0A0B]' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed pr-8">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing Card */}
          <div className="mt-24 rounded-[36px] bg-[#0A0A0B] text-white p-10 sm:p-16 text-center relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#FFD600]/20 blur-3xl rounded-full"
            />
            <span className="relative inline-flex items-center gap-1.5 text-xs font-medium text-[#FFD600]">
              <Sparkles className="w-3.5 h-3.5" /> Park Smart. Stay Connected.
            </span>
            <h2 className="relative mt-3 text-3xl sm:text-5xl font-semibold tracking-[-0.035em]">
              Ready to protect your privacy?
            </h2>
            <p className="relative mt-4 text-sm sm:text-base text-neutral-400 max-w-md mx-auto">
              Create your vehicle&apos;s QR tag in under a minute and experience stress-free
              parking.
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
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}