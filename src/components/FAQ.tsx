'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const faqs = [
  {
    q: 'What is Who Park?',
    a: 'Who Park is a smart QR-code-based vehicle communication and parking assistance platform. It allows anyone near your parked vehicle to scan your windshield QR sticker and send you an instant alert without knowing your personal phone number.',
  },
  {
    q: 'How does Who Park work?',
    a: 'You register on Who Park, add your vehicle details, and generate a unique QR sticker. Once attached to your vehicle, anyone can scan that QR code with their smartphone camera, choose an alert reason (such as a blocked vehicle or headlights left ON), and notify you immediately.',
  },
  {
    q: 'Is Who Park free?',
    a: 'Yes. Account registration, adding your vehicle, generating your unique QR sticker, and receiving vehicle alerts are available on the Free Plan.',
  },
  {
    q: 'How do I register my vehicle?',
    a: `Visit ${siteConfig.appUrl}, sign in with your Google account, link your mobile number once for account setup, and enter your vehicle registration plate number in your dashboard.`,
  },
  {
    q: 'How do I get my QR code?',
    a: 'As soon as you add your vehicle in the Who Park dashboard, your unique QR code is generated automatically. You can download the PNG or open the printable sticker card directly from your dashboard.',
  },
  {
    q: 'Where should I attach my QR sticker?',
    a: 'Attach the printed QR sticker inside your front windshield corner (or on a clean, visible surface on two-wheelers) where passersby can easily scan it without obstruction.',
  },
  {
    q: 'Can anyone scan my QR code?',
    a: 'Yes. Any visitor with a standard smartphone camera or QR scanner can scan your sticker and open the alert page in their browser—they do not need to install an app first.',
  },
  {
    q: 'Is my phone number visible to visitors?',
    a: 'No. Your personal mobile number is never displayed on the public QR scan page. Visitors communicate with you through Who Park alert notifications and quick replies.',
  },
  {
    q: 'How do I contact the Who Park support team?',
    a: 'You can reach our team anytime through the Contact Us page on this website for general enquiries, technical support, or parking facility partnerships.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAF7] border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FFD600] border border-[#111111] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={item.q}
                className="bg-white border-2 border-[#111111] rounded-2xl overflow-hidden shadow-[3px_3px_0px_#111111]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-[#111111]"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#333333] leading-relaxed border-t border-black/10">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}