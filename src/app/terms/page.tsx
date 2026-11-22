import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using Who Park.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-black text-[#111111]">Terms &amp; Conditions</h1>
      <p className="text-xs text-[#777777]">Last updated: 2026</p>

      <div className="bg-white border-2 border-[#111111] rounded-3xl p-6 sm:p-8 space-y-4 text-sm text-[#333333] leading-relaxed">
        <p>
          By accessing Who Park, you agree to use the QR vehicle alert platform responsibly and
          only for legitimate vehicle and parking communication.
        </p>
        <h2 className="text-lg font-black text-[#111111]">1. Responsible Usage</h2>
        <p>
          Visitors scanning a QR code must only send genuine vehicle alerts. Spamming or
          harassing vehicle owners is strictly prohibited.
        </p>
        <h2 className="text-lg font-black text-[#111111]">2. Vehicle Registration</h2>
        <p>
          Vehicle owners must only register vehicles they own or are authorized to manage.
        </p>
        <h2 className="text-lg font-black text-[#111111]">3. Service Availability</h2>
        <p>
          Who Park provides alert notifications on a best-effort basis and is not a substitute for
          official emergency services.
        </p>
      </div>
    </div>
  );
}