import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using Who Park.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#111111] py-10 sm:py-14">
      <main className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-[32px] border border-neutral-200/90 p-7 sm:p-10 space-y-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
          <div className="border-b border-neutral-100 pb-5">
            <span className="inline-block bg-[#FFD600] text-[#111111] text-xs font-bold px-3 py-1 rounded-full">
              Legal
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#111111]">
              Terms &amp; Conditions
            </h1>
            <p className="mt-1 text-xs text-neutral-400">Effective Date: 2026</p>
          </div>

          <p>
            By accessing or using Who Park, you agree to use the platform responsibly and solely
            for legitimate vehicle and parking communication.
          </p>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">1. Acceptable Use</h2>
            <p>
              Visitors scanning a vehicle QR code may only send genuine parking or vehicle safety
              alerts. Misuse, spam, or harassment is strictly prohibited.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">2. Vehicle Ownership</h2>
            <p>
              Users must only register vehicles they own or are explicitly authorized to manage.
            </p>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-bold text-[#111111]">3. Service Scope</h2>
            <p>
              Who Park facilitates communication between passersby and registered vehicle owners on
              a best-effort basis and does not replace official emergency services.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}