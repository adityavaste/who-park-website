'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Homepage renders its own footer
  if (pathname === '/') return null;

  return (
    <footer className="border-t border-neutral-200/80 bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#16A34A]" />© 2026 Who Park. Park Smart. Stay
          Connected.
        </span>
        <div className="flex flex-wrap items-center justify-center gap-5 font-medium">
          <Link href="/about" className="hover:text-[#111111] transition">
            About
          </Link>
          <Link href="/how-it-works" className="hover:text-[#111111] transition">
            How It Works
          </Link>
          <Link href="/pricing" className="hover:text-[#111111] transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-[#111111] transition">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-[#111111] transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[#111111] transition">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}