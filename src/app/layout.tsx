// src/app/layout.tsx (in who-park-website)
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
    default: 'WHO PARK — Smart Car QR Sticker | Contact Parked Car Owner',
    template: '%s | WHO PARK',
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon/small', sizes: '48x48', type: 'image/png' },
      { url: '/icon/medium', sizes: '192x192', type: 'image/png' },
      { url: '/icon/large', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.siteUrl,
    siteName: 'WHO PARK',
    title: 'WHO PARK — One Scan. Instant Connection.',
    description: siteConfig.description,
    images: [
      {
        url: '/icon/large',
        width: 512,
        height: 512,
        alt: 'WHO PARK Smart Car QR Sticker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHO PARK — Park Smart. Stay Connected.',
    description: siteConfig.description,
    images: ['/icon/large'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WHO PARK',
    alternateName: ['Who Park', 'whopark.in'],
    url: 'https://whopark.in/',
  };

  return (
    <html lang="en-IN" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#111111] font-sans antialiased selection:bg-[#FFD600] selection:text-[#111111]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}