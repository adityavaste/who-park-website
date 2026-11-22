import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFD600] border-2 border-[#111111] rounded-[2.25rem] p-8 sm:p-14 text-center shadow-[10px_10px_0px_#111111]">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
            Make Every Parking Experience Smarter.
          </h2>
          <p className="mt-4 text-base sm:text-lg font-semibold text-[#111111]/85 max-w-xl mx-auto">
            Join Who Park and make vehicle communication easier, one scan at a time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.links.register}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#222222] text-[#FFD600] font-black text-base px-8 py-4 rounded-2xl transition"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#FAFAF7] text-[#111111] font-extrabold text-base px-8 py-4 rounded-2xl border-2 border-[#111111] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}