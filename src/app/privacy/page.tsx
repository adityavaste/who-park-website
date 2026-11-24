import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Who Park website and mobile application.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] pt-0 pb-10 sm:py-14 overflow-x-hidden">
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="-mx-4 sm:mx-0 bg-white sm:rounded-[32px] border-b sm:border border-neutral-200/90 px-5 pt-6 pb-8 sm:p-10 space-y-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
          <div className="border-b border-neutral-100 pb-5">
            <span className="inline-block bg-[#FFD600] text-[#111111] text-xs font-bold px-3 py-1 rounded-full">
              Legal
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111]">Privacy Policy</h1>
            <p className="mt-1 text-xs text-neutral-400">Effective Date: 2026</p>
          </div>

          <p>
            <strong>Who Park</strong> operates the official website at{' '}
            <strong className="text-[#111111]">{siteConfig.siteUrl}</strong> and the vehicle
            communication app at <strong className="text-[#111111]">{siteConfig.appUrl}</strong>.
          </p>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">1. Information We Collect</h2>
            <p>
              When you register on Who Park, we collect your Google account email address, display
              name, mobile contact number, and registered vehicle details to deliver parking
              alerts.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">2. How Information Is Used</h2>
            <p>
              Your mobile number is used to identify your account and route incoming alerts to
              you. Your personal phone number is never displayed publicly on your vehicle&apos;s
              QR scan page.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">3. App Permissions</h2>
            <p>
              The Who Park mobile app may request camera access to scan QR codes, push
              notification permissions to deliver real-time vehicle alerts, and microphone access
              only when you choose to answer an in-app voice call.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">4. Data Deletion &amp; Contact</h2>
            <p>
              To request deletion of your account or registered vehicle records, email us at{' '}
              <strong className="text-[#111111]">{siteConfig.contact.email}</strong>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}