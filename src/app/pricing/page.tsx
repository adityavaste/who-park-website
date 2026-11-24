'use client';

import { useState } from 'react';
import { Check, Plus, ArrowRight } from 'lucide-react';
import { pricingPlans, siteConfig } from '@/lib/config';

const comparisonRows = [
  { feature: 'Google Account Sign-In', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Digital Vehicle QR Code', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Printable Windshield Sticker Card', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Instant Alerts & 1-Tap Quick Replies', free: 'Included', premium: 'Included', business: 'Included' },
  { feature: 'Multiple Vehicles Under One Login', free: 'Basic', premium: 'Included', business: 'Included' },
  { feature: 'Custom Sticker Designs', free: '—', premium: 'Coming Soon', business: 'Coming Soon' },
  { feature: 'Apartment / Fleet Management', free: '—', premium: '—', business: 'Coming Soon' },
];

const pricingFaqs = [
  {
    q: 'Is the digital QR sticker really free?',
    a: 'Yes. Creating your account, registering your vehicle, downloading your printable QR sticker, and receiving alerts are completely free.',
  },
  {
    q: 'How do I order a physical sticker with Cash on Delivery (COD)?',
    a: 'Click "Order Sticker (COD)" on the homepage or contact page with your delivery address and vehicle details, and our team will arrange COD dispatch.',
  },
  {
    q: 'Do passersby pay anything to scan my QR?',
    a: 'Never. Scanning a Who Park sticker and alerting the vehicle owner is always 100% free.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] overflow-x-hidden selection:bg-[#FFD600] selection:text-[#111111]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-0 pb-10 sm:py-14 space-y-10 sm:space-y-12">
        {/* Header: Flush White Banner on Mobile, Centered Header on Laptop */}
        <section className="-mx-4 sm:mx-0 bg-white sm:bg-transparent border-b sm:border-0 border-neutral-200/90 px-5 pt-6 pb-8 sm:p-0 text-center max-w-2xl sm:mx-auto space-y-3">
          <span className="inline-block bg-[#FFD600] text-xs font-bold px-3.5 py-1 rounded-full">
            Simple &amp; Honest Pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Choose the Right Plan
          </h1>
          <p className="text-sm sm:text-base text-neutral-600">
            Start free today. Paid upgrades for multi-car families and societies are clearly
            marked below.
          </p>
        </section>

        {/* Plan Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[28px] p-7 flex flex-col justify-between ${
                plan.popular
                  ? 'bg-[#111111] text-white shadow-lg'
                  : 'bg-white border border-neutral-200/90 text-[#111111]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold">{plan.name}</h2>
                  {plan.badge && (
                    <span className="bg-[#FFD600] text-[#111111] text-[11px] font-bold px-3 py-0.5 rounded-full">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.popular ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  className={`mt-2.5 text-xs sm:text-sm ${
                    plan.popular ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  {plan.description}
                </p>

                <ul className="mt-6 pt-5 border-t border-current/10 space-y-3 text-xs sm:text-sm">
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
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-neutral-500/15 ml-1">
                            Soon
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <a
                  href={plan.ctaHref}
                  className={`block w-full text-center font-bold text-xs sm:text-sm py-3.5 rounded-2xl transition ${
                    plan.popular
                      ? 'bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111]'
                      : 'bg-[#111111] hover:bg-neutral-800 text-white'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Feature Table */}
        <section className="bg-white rounded-[28px] border border-neutral-200/90 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[580px]">
            <thead>
              <tr className="border-b border-neutral-200 text-xs uppercase tracking-wider text-neutral-500">
                <th className="py-4 px-6 font-bold">Feature</th>
                <th className="py-4 px-6 font-bold text-[#111111]">Free</th>
                <th className="py-4 px-6 font-bold text-[#111111] bg-[#FFD600]/20">Premium</th>
                <th className="py-4 px-6 font-bold text-[#111111]">Family / Business</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="py-3.5 px-6 font-semibold">{row.feature}</td>
                  <td className="py-3.5 px-6 text-neutral-600">{row.free}</td>
                  <td className="py-3.5 px-6 font-semibold bg-[#FFD600]/10">{row.premium}</td>
                  <td className="py-3.5 px-6 text-neutral-600">{row.business}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Pricing FAQ */}
        <section className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Common Questions</h2>
          {pricingFaqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={item.q}
                className="bg-white rounded-2xl border border-neutral-200/90 px-6 py-4"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  <Plus
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-45 text-[#111111]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#FFD600] rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Start for free in 60 seconds</h2>
          <p className="text-xs sm:text-sm text-[#111111]/80 max-w-md mx-auto">
            Register your vehicle and download your printable windshield QR card today.
          </p>
          <a
            href={siteConfig.links.register}
            className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-neutral-800 text-white font-bold text-sm px-7 py-4 rounded-2xl transition"
          >
            <span>Create Free QR Tag</span>
            <ArrowRight className="w-4 h-4 text-[#FFD600]" />
          </a>
        </section>
      </main>
    </div>
  );
}