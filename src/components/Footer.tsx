import Link from 'next/link';
import { QrCode, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFD600] text-[#050505] flex items-center justify-center">
                <QrCode className="w-5 h-5" strokeWidth={2.4} />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                WHO <span className="text-[#FFD600]">PARK</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Smart QR-code-based vehicle communication and parking assistance platform.{' '}
              <span className="text-white font-medium">{siteConfig.tagline}</span>
            </p>
            <p className="text-xs text-neutral-500">
              Support: <span className="text-neutral-300">{siteConfig.contact.email}</span>
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/" className="hover:text-[#FFD600] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFD600] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#FFD600] transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#FFD600] transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD600] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product App */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Product App
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a
                  href={siteConfig.links.register}
                  className="inline-flex items-center gap-1 hover:text-[#FFD600] transition"
                >
                  Register Vehicle <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.login}
                  className="inline-flex items-center gap-1 hover:text-[#FFD600] transition"
                >
                  Owner Login <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.dashboard}
                  className="inline-flex items-center gap-1 hover:text-[#FFD600] transition"
                >
                  User Dashboard <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link href="/privacy" className="hover:text-[#FFD600] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FFD600] transition">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Who Park. All Rights Reserved.</p>
          <p>{siteConfig.altTagline}</p>
        </div>
      </div>
    </footer>
  );
}