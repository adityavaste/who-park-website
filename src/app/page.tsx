// src/app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  QrCode,
  ArrowRight,
  ShieldCheck,
  Search,
  BellRing,
  ScanLine,
  PhoneOff,
  CheckCircle2,
  ChevronRight,
  Package,
  Truck,
  Share2,
} from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function HomePage() {
  const [tagCode, setTagCode] = useState('');

  const youtubeId =
    siteConfig.media?.youtubeDemoId ||
    process.env.NEXT_PUBLIC_YOUTUBE_DEMO_ID ||
    'ou0phHbzz-0';
  const activeTagsStat =
    siteConfig.highlights?.activeTags ||
    process.env.NEXT_PUBLIC_ACTIVE_TAGS_LABEL ||
    'FREE';
  const ratingStat =
    siteConfig.highlights?.rating ||
    process.env.NEXT_PUBLIC_RATING_LABEL ||
    '5.0 ★';
  const stickerOrderHref =
    siteConfig.links?.stickerOrder ||
    process.env.NEXT_PUBLIC_STICKER_ORDER_URL ||
    '/contact?subject=Order%20Windshield%20QR%20Sticker%20(COD)';
  const playStoreUrl =
    siteConfig.links?.playStore ||
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    siteConfig.appUrl;

  function handleLookup(e: React.FormEvent) {
    e.preventDefault();
    const clean = tagCode.trim();
    if (!clean) return;

    const slug = clean.includes('/v/')
      ? clean.split('/v/')[1].split('/')[0]
      : clean;

    window.location.href = `${siteConfig.appUrl}/v/${slug}`;
  }

  function handleShareWhatsApp() {
    const shareText = encodeURIComponent(
      'Protect your phone number when parking! Put a free Who Park QR sticker on your car so anyone can alert you without seeing your number: https://whopark.in'
    );
    window.open(`https://wa.me/?text=${shareText}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] flex flex-col justify-between overflow-x-hidden selection:bg-[#FFD600] selection:text-[#111111]">
      {/* Simple Top Bar */}
      <header className="bg-white border-b border-neutral-200/80 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-[#FFD600] text-[#111111] flex items-center justify-center">
              <QrCode className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="font-bold text-lg tracking-tight">WHO PARK</span>
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href={siteConfig.links.login}
              className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#111111] px-3 py-2"
            >
              Login
            </a>
            <a
              href={siteConfig.links.register}
              className="bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition"
            >
              Get Free Sticker
            </a>
          </div>
        </div>
      </header>

      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
        {/* =================================================================
            1. ULTRA-SIMPLE HERO: EXPLAINED IN 3 SECONDS
        ================================================================= */}
        <section className="bg-white rounded-[32px] border border-neutral-200/90 p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Plain, Effortless Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-neutral-200 text-xs font-semibold text-[#111111]">
                <PhoneOff className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>No Phone Number Needed</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.12] text-[#111111]">
                Car blocking your way?{' '}
                <span className="bg-[#FFD600] px-2.5 py-0.5 rounded-xl inline-block">
                  Scan &amp; tell the driver.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Put a Who Park QR sticker on your car glass. If your car is blocking someone or
                your lights are left ON, anyone can scan it to message you—without seeing your
                phone number.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1z"
                    />
                    <path
                      fill="#34A853"
                      d="M16 15.5l-3.1-3.1v-.2L16 9.1l.1.1 3.6 2.1c1 .6 1 1.5 0 2.1l-3.6 2.1-.1 0z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M16.1 15.4L12.9 12.3 3.6 21.6c.3.4.9.4 1.6 0l10.9-6.2z"
                    />
                    <path
                      fill="#EA4335"
                      d="M16.1 9.1L5.2 2.9c-.7-.4-1.3-.4-1.6 0l9.3 9.3 3.2-3.1z"
                    />
                  </svg>
                  <span>Get Who Park App</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href={stickerOrderHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl transition"
                >
                  <Package className="w-5 h-5 text-[#FFD600]" />
                  <span>Order Sticker (COD)</span>
                </Link>
              </div>

              {/* Simple Visual 1-2-3 Story Strip */}
              <div className="pt-4 border-t border-neutral-100 grid grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFD600] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <span className="font-semibold text-neutral-800">Stick QR on car</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFD600] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <span className="font-semibold text-neutral-800">Person scans QR</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFD600] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <span className="font-semibold text-neutral-800">Your phone rings</span>
                </div>
              </div>
            </div>

            {/* Right: Clear Visual Picture Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden bg-[#111111] aspect-[4/3] shadow-md">
                <img
                  src="/images/scan-windshield.jpg"
                  alt="Scanning QR sticker on car windshield"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD600] flex items-center justify-center shrink-0">
                    <BellRing className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#111111]">
                      &ldquo;Your car is blocking my exit&rdquo;
                    </p>
                    <p className="text-[11px] text-[#16A34A] font-semibold flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Sent safely • Phone number hidden
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. WATCH HOW IT WORKS (AUTOPLAY ON LOAD, EDGE-TO-EDGE ON MOBILE)
        ================================================================= */}
        <section className="-mx-4 sm:mx-0 bg-white sm:rounded-[32px] border-y sm:border border-neutral-200/90 py-6 sm:p-8 space-y-4 sm:space-y-5">
          <div className="px-4 sm:px-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111111]">
                Watch how it works in 45 seconds
              </h2>
              <p className="text-sm text-neutral-600">
                See how easy it is to put the sticker on your car and get alerts.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="text-xs font-bold text-[#111111] underline decoration-[#FFD600] decoration-2 underline-offset-4"
            >
              Read Step-by-Step Guide →
            </Link>
          </div>

          <div className="relative aspect-video w-full sm:rounded-2xl overflow-hidden bg-[#111111]">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&rel=0&playsinline=1&modestbranding=1`}
              title="How Who Park Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* =================================================================
            3. ACTIVE TAGS, RATINGS & COD AVAILABLE STRIP
        ================================================================= */}
        <section className="bg-white rounded-3xl border border-neutral-200/90 py-5 px-4 grid grid-cols-3 divide-x divide-neutral-200 text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="px-2">
            <p className="text-lg sm:text-2xl font-black text-[#111111]">{activeTagsStat}</p>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mt-0.5">
              Active Tags
            </p>
          </div>

          <div className="px-2">
            <p className="text-lg sm:text-2xl font-black text-[#111111] flex items-center justify-center gap-1">
              <span>{ratingStat}</span>
            </p>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mt-0.5">
              Driver Rating
            </p>
          </div>

          <div className="px-2">
            <p className="text-lg sm:text-2xl font-black text-[#111111] flex items-center justify-center gap-1.5">
              <Truck className="w-5 h-5 text-[#16A34A] hidden sm:inline" />
              <span>COD</span>
            </p>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-500 mt-0.5">
              Available
            </p>
          </div>
        </section>

        {/* =================================================================
            4. QUICK STICKER CODE SEARCH & SCAN BAR
        ================================================================= */}
        <section className="max-w-xl mx-auto text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Standing near a car with a Who Park sticker?
          </p>
          <form
            onSubmit={handleLookup}
            className="bg-white rounded-2xl border border-neutral-200/90 p-2 pl-4 flex items-center gap-2 shadow-2xs"
          >
            <Search className="w-4 h-4 text-neutral-400 shrink-0" />
            <input
              type="text"
              placeholder="Type sticker code (e.g. a9b2c3d4)"
              value={tagCode}
              onChange={(e) => setTagCode(e.target.value)}
              className="flex-1 bg-transparent text-sm text-[#111111] placeholder:text-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#111111] hover:bg-neutral-800 text-[#FFD600] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition shrink-0"
            >
              Go
            </button>
            <a
              href={siteConfig.appUrl}
              className="bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-bold text-xs sm:text-sm px-3.5 py-2.5 rounded-xl transition shrink-0 inline-flex items-center gap-1.5"
            >
              <ScanLine className="w-4 h-4" />
              <span className="hidden sm:inline">Scan</span>
            </a>
          </form>
        </section>

        {/* =================================================================
            5. ORDER STICKER BANNER (CASH ON DELIVERY)
        ================================================================= */}
        <section className="bg-[#111111] text-white rounded-[32px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFD600] text-[#111111] flex items-center justify-center shrink-0">
              <Package className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[#FFD600] text-[#111111] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  COD Available
                </span>
                <span className="text-xs text-neutral-400">Weatherproof Windshield Decal</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold">
                Want a ready-made Who Park sticker delivered?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                Print your digital QR for free anytime, or order a durable windshield sticker
                with Cash on Delivery.
              </p>
            </div>
          </div>

          <Link
            href={stickerOrderHref}
            className="w-full sm:w-auto bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] font-bold text-xs sm:text-sm px-6 py-4 rounded-2xl transition inline-flex items-center justify-center gap-2 shrink-0"
          >
            <span>Order Sticker (COD)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* =================================================================
            6. WHY PEOPLE USE WHO PARK (3 SIMPLE CARDS)
        ================================================================= */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#111111] text-center">
            When is Who Park helpful?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 space-y-2">
              <span className="inline-block bg-[#FFD600] text-xs font-bold px-2.5 py-1 rounded-lg">
                Blocked Car
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Someone blocked your car
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Scan their sticker and ask them to move their car right away.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 space-y-2">
              <span className="inline-block bg-[#FFD600] text-xs font-bold px-2.5 py-1 rounded-lg">
                Lights or Window
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                Headlights ON or window open
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Warn the car owner before their battery dies or rain gets inside.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 space-y-2">
              <span className="inline-block bg-[#FFD600] text-xs font-bold px-2.5 py-1 rounded-lg">
                Safe Privacy
              </span>
              <h3 className="text-base font-bold text-[#111111]">
                No phone number on glass
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Strangers cannot see or copy your personal mobile number.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. SIMPLE PAGE LINKS
        ================================================================= */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-semibold">
          {[
            { href: '/how-it-works', label: 'How It Works' },
            { href: '/about', label: 'About Us' },
            { href: '/pricing', label: 'Plans & Pricing' },
            { href: '/contact', label: 'Help & Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white hover:bg-neutral-50 border border-neutral-200/90 rounded-2xl px-4 py-3.5 flex items-center justify-between text-[#111111] transition"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </Link>
          ))}
        </section>

        {/* =================================================================
            8. GOOGLE PLAY STORE & WHATSAPP SHARE ACTION ROW
        ================================================================= */}
        <section className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Google Play Store Badge Button */}
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#111111] hover:bg-neutral-800 active:scale-[0.99] text-white py-3.5 px-6 rounded-2xl transition flex items-center justify-center gap-3.5 shadow-xs"
          >
            {/* Official Play Triangle SVG */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 shrink-0"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1z"
              />
              <path
                fill="#34A853"
                d="M16 15.5l-3.1-3.1v-.2L16 9.1l.1.1 3.6 2.1c1 .6 1 1.5 0 2.1l-3.6 2.1-.1 0z"
              />
              <path
                fill="#FBBC05"
                d="M16.1 15.4L12.9 12.3 3.6 21.6c.3.4.9.4 1.6 0l10.9-6.2z"
              />
              <path
                fill="#EA4335"
                d="M16.1 9.1L5.2 2.9c-.7-.4-1.3-.4-1.6 0l9.3 9.3 3.2-3.1z"
              />
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Get it on
              </span>
              <span className="block text-sm sm:text-base font-bold text-white">
                Google Play
              </span>
            </div>
          </a>

          {/* WhatsApp Share CTA */}
          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="w-full bg-[#FFD600] hover:bg-[#f5cd00] active:scale-[0.99] text-[#111111] font-bold text-sm sm:text-base py-4 px-6 rounded-2xl transition flex items-center justify-center gap-2.5 shadow-xs"
          >
            <Share2 className="w-5 h-5" />
            <span>Share us on WhatsApp</span>
          </button>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-neutral-200/80 bg-white py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" />© 2026 Who Park. Park Smart. Stay
            Connected.
          </span>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-[#111111] transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#111111] transition">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}