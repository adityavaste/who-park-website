'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Plus, ArrowUpRight, Sparkles } from 'lucide-react';
import { pricingPlans, siteConfig } from '@/lib/config';

const comparisonRows = [
  { feature: 'Google Account Registration', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Vehicle QR Code Generation', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Printable Windshield Sticker Card', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Instant Vehicle Alerts & Quick Replies', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Multiple Vehicles Under One Account', free: 'Basic', premium: 'Included', business: 'Included' },
  { feature: 'Premium Custom Decal Designs', free: '—', premium: 'Coming Soon', business: 'Coming Soon' },
  { feature: 'Centralized Family / Facility Controls', free: '—', premium: '—', business: 'Coming Soon' },
  { feature: 'Support Tier', free: 'Standard', premium: 'Priority (Planned)', business: 'Dedicated (Planned)' },
];

const pricingFaqs = [
  {
    q: 'Can I start using Who Park for free?',
    a: 'Yes. Account creation, vehicle registration, QR sticker generation, and receiving alerts are free on the Free Plan.',
  },
  {
    q: 'When will Premium and Family / Business pricing be finalized?',
    a: 'Paid tiers are currently in planning. You can join early access or contact our team for apartment and office parking requirements.',
  },
  {
    q: 'Do visitors pay anything to scan my QR code?',
    a: 'Never. Scanning a Who Park QR sticker and sending an alert is always free for visitors.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#050505] text-white selection:bg-[#FFD600] selection:text-[#050505]">
      {/* Dark Hero Header */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[460px] bg-[radial-gradient(ellipse_at_top,rgba(255,214,0,0.18),transparent_70%)] blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-[#FFD600]">
            <Sparkles className="w-3.5 h-3.5" /> Transparent Plans
          </span>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.04em] leading-[1.04]">
            Choose the Right Plan for Your{' '}
            <span className="text-[#FFD600]">Parking Needs.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto">
            Start free with instant QR alerts. Upcoming multi-vehicle and facility tiers are
            clearly labeled below.
          </p>
        </div>
      </section>

      {/* Light Pricing Cards & Comparison Matrix */}
      <section className="bg-white text-[#0A0A0B] py-24 lg:py-32 rounded-t-[40px] -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition ${
                  plan.popular
                    ? 'bg-[#0A0A0B] text-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)]'
                    : 'bg-[#F5F5F7] text-[#0A0A0B]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">{plan.name}</h2>
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
                      className={`text-sm ${
                        plan.popular ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm ${
                      plan.popular ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="mt-8 pt-6 border-t border-current/10 space-y-3.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? 'text-[#FFD600]' : 'text-[#16A34A]'
                          }`}
                        />
                        <span>
                          {f.text}{' '}
                          {f.status === 'planned' && (
                            <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-white/10 ml-1">
                              Coming Soon
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
                    className={`block w-full text-center font-semibold text-sm py-4 rounded-full transition ${
                      plan.popular
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

          {/* Comparison Matrix */}
          <div className="mt-24">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.03em] text-center mb-10">
              Feature Comparison
            </h2>

            <div className="rounded-[28px] bg-[#F5F5F7] border border-neutral-200/80 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#0A0A0B] text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Capability</th>
                    <th className="py-4 px-6 font-semibold">Free</th>
                    <th className="py-4 px-6 font-semibold text-[#FFD600]">Premium</th>
                    <th className="py-4 px-6 font-semibold">Family / Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200/80 text-sm">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/60 transition">
                      <td className="py-4 px-6 font-medium text-[#0A0A0B]">{row.feature}</td>
                      <td className="py-4 px-6 text-neutral-600">{row.free}</td>
                      <td className="py-4 px-6 font-semibold text-[#0A0A0B] bg-[#FFD600]/10">
                        {row.premium}
                      </td>
                      <td className="py-4 px-6 text-neutral-600">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pricing FAQs */}
          <div className="max-w-3xl mx-auto mt-24">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center mb-8">
              Pricing Questions
            </h3>
            <div className="space-y-3">
              {pricingFaqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="bg-[#F5F5F7] rounded-2xl px-6 py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left font-semibold text-base"
                    >
                      <span>{item.q}</span>
                      <Plus
                        className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform ${
                          isOpen ? 'rotate-45 text-[#0A0A0B]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-24 rounded-[36px] bg-[#0A0A0B] text-white p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Start protecting your number today.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-md mx-auto">
              Create your account for free and print your first vehicle QR sticker in minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={siteConfig.links.register}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#ffe033] text-[#0A0A0B] font-semibold text-sm px-8 py-4 rounded-full transition"
              >
                Get Started Free <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-medium text-sm px-8 py-4 rounded-full transition"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}