'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, QrCode } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Homepage renders its own integrated header
  if (pathname === '/') return null;

  return (
   
      <header className="bg-white border-b border-neutral-200/80 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FFD600] text-[#111111] flex items-center justify-center shrink-0">
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </span>
            <span className="font-bold text-base sm:text-lg tracking-tight whitespace-nowrap">
              WHO PARK
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={siteConfig.links.login}
              className="text-xs sm:text-sm font-semibold text-neutral-700 hover:text-[#111111] px-2 py-1.5 whitespace-nowrap"
            >
              Login
            </a>
            <a
              href={siteConfig.links.register}
              className="bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full transition whitespace-nowrap"
            >
              Get Free Sticker
            </a>
          </div>
        </div>
      </header>
  );
}