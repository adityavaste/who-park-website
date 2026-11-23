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
    <header className="bg-white/95 backdrop-blur-md border-b border-neutral-200/80 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-[#FFD600] text-[#111111] flex items-center justify-center">
            <QrCode className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-bold text-lg tracking-tight text-[#111111]">WHO PARK</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#FAF9F5] p-1 rounded-full border border-neutral-200/80">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  isActive
                    ? 'bg-[#111111] text-white'
                    : 'text-neutral-600 hover:text-[#111111]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={siteConfig.links.login}
            className="text-xs font-semibold text-neutral-700 hover:text-[#111111] px-3 py-2"
          >
            Login
          </a>
          <a
            href={siteConfig.links.register}
            className="bg-[#FFD600] hover:bg-[#f5cd00] text-[#111111] text-xs font-bold px-4 py-2.5 rounded-full transition"
          >
            Get Free Sticker
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden w-10 h-10 rounded-xl border border-neutral-200 flex items-center justify-center text-[#111111]"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-5 space-y-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive
                    ? 'bg-[#FFD600] text-[#111111]'
                    : 'text-neutral-700 hover:bg-[#FAF9F5]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 grid grid-cols-2 gap-2.5 border-t border-neutral-100">
            <a
              href={siteConfig.links.login}
              className="text-center py-2.5 rounded-xl border border-neutral-200 text-xs font-bold text-[#111111]"
            >
              Login
            </a>
            <a
              href={siteConfig.links.register}
              className="text-center py-2.5 rounded-xl bg-[#FFD600] text-xs font-bold text-[#111111]"
            >
              Get Free Sticker
            </a>
          </div>
        </div>
      )}
    </header>
  );
}