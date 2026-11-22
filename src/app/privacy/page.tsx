import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Who Park website and mobile application.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-black text-[#111111]">Privacy Policy</h1>
      <p className="text-xs text-[#777777]">Last updated: 2026</p>

      <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 space-y-4 text-sm text-[#333333] leading-relaxed">
        <p>
          <strong>Who Park</strong> operates the website at {siteConfig.siteUrl} and the vehicle
          alert application at {siteConfig.appUrl}.
        </p>
        <h2 className="text-lg font-black text-[#111111]">1. Information We Collect</h2>
        <p>
          When you register an account, we collect your Google account email address, name,
          registered mobile number, and vehicle registration details so we can route vehicle
          alerts to you.
        </p>
        <h2 className="text-lg font-black text-[#111111]">2. How Your Data Is Used</h2>
        <p>
          Your contact number is used to identify your owner account and deliver vehicle alerts.
          Your personal phone number is not displayed publicly on your vehicle QR scan page.
        </p>
        <h2 className="text-lg font-black text-[#111111]">3. Device Permissions</h2>
        <p>
          Our mobile application may request camera access to scan QR codes, notification
          permissions to deliver incoming vehicle alerts, and microphone permissions if you choose
          to answer a voice call.
        </p>
        <h2 className="text-lg font-black text-[#111111]">4. Account Deletion &amp; Contact</h2>
        <p>
          To request account or vehicle data deletion, contact us at{' '}
          <strong>{siteConfig.contact.email}</strong>.
        </p>
      </div>
    </div>
  );
}