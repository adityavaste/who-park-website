'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight, QrCode } from 'lucide-react';
import { siteConfig } from '@/lib/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-2xl border-b border-white/10 text-white">
      {/* Subtle Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="h-[2px] bg-[#FFD600] origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-[#FFD600] text-[#050505] flex items-center justify-center shadow-[0_0_25px_rgba(255,214,0,0.3)] group-hover:scale-105 transition-transform">
            <QrCode className="w-5 h-5" strokeWidth={2.4} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight text-white leading-none">
              WHO <span className="text-[#FFD600]">PARK</span>
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-neutral-400 mt-1">
              Park Smart
            </span>
          </div>
        </Link>

        {/* Center Glass Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#FFD600] text-[#050505] font-semibold'
                    : 'text-neutral-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.links.login}
            className="text-xs font-medium text-neutral-300 hover:text-white px-4 py-2.5 rounded-full transition"
          >
            Owner Login
          </a>
          <a
            href={siteConfig.links.register}
            className="inline-flex items-center gap-1.5 bg-[#FFD600] hover:bg-[#ffe033] text-[#050505] font-semibold text-xs px-5 py-2.5 rounded-full transition shadow-[0_0_30px_-5px_rgba(255,214,0,0.45)]"
          >
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden w-10 h-10 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Animated Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0B] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-2xl text-sm font-medium ${
                      isActive
                        ? 'bg-[#FFD600] text-[#050505] font-semibold'
                        : 'text-neutral-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 grid grid-cols-2 gap-3 border-t border-white/10">
                <a
                  href={siteConfig.links.login}
                  className="text-center py-3 rounded-full border border-white/15 text-xs font-medium text-white"
                >
                  Owner Login
                </a>
                <a
                  href={siteConfig.links.register}
                  className="text-center py-3 rounded-full bg-[#FFD600] text-xs font-semibold text-[#050505]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}