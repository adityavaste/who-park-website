import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/config';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'WHO PARK — Park Smart. Stay Connected.',
    template: '%s | WHO PARK',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: 'WHO PARK — One Scan. Instant Connection.',
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHO PARK — Park Smart. Stay Connected.',
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#111111] font-sans antialiased selection:bg-[#FFD600] selection:text-[#111111]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}