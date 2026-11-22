import Link from 'next/link';
import { Check, Clock } from 'lucide-react';
import { pricingPlans } from '@/lib/config';

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-[#FFD600] border border-[#111111] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
            Choose the Right Plan for Your Parking Needs.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#333333]">
            Start free today. Paid tiers are currently being finalized and marked transparently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14 items-stretch">
          {pricingPlans.map((plan) => {
            const isExternal = plan.ctaHref.startsWith('http');
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-2 border-[#111111] ${
                  plan.popular
                    ? 'bg-[#FFD600] shadow-[8px_8px_0px_#111111]'
                    : 'bg-[#FAFAF7] shadow-[5px_5px_0px_#111111]'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 right-6 bg-[#111111] text-[#FFD600] text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-black text-[#111111]">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-[#111111]">
                      {plan.price}
                    </span>
                    <span className="text-sm font-bold text-[#333333]">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#333333] leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-black/15 pt-6">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm">
                        {f.status === 'available' ? (
                          <Check className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" strokeWidth={3} />
                        ) : (
                          <Clock className="w-4 h-4 text-[#333333] shrink-0 mt-0.5" />
                        )}
                        <span className="font-semibold text-[#111111]">
                          {f.text}{' '}
                          {f.status === 'planned' && (
                            <span className="inline-block text-[10px] font-extrabold uppercase bg-white/80 border border-[#111111] px-2 py-0.5 rounded-full ml-1">
                              Coming Soon
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  {isExternal ? (
                    <a
                      href={plan.ctaHref}
                      className={`block w-full text-center font-black text-sm py-3.5 px-5 rounded-2xl border-2 border-[#111111] transition ${
                        plan.popular
                          ? 'bg-[#111111] text-[#FFD600] hover:bg-[#222222]'
                          : 'bg-[#FFD600] text-[#111111] hover:bg-[#f5cd00]'
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                  ) : (
                    <Link
                      href={plan.ctaHref}
                      className={`block w-full text-center font-black text-sm py-3.5 px-5 rounded-2xl border-2 border-[#111111] transition ${
                        plan.popular
                          ? 'bg-[#111111] text-[#FFD600] hover:bg-[#222222]'
                          : 'bg-[#FFD600] text-[#111111] hover:bg-[#f5cd00]'
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}