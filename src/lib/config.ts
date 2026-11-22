export const siteConfig = {
  name: 'WHO PARK',
  tagline: 'Park Smart. Stay Connected.',
  altTagline: 'One Scan. Instant Connection.',
  description:
    'Smart QR-code-based vehicle communication and parking assistance platform. Resolve blocked cars, open windows, and headlights left ON without sharing personal phone numbers.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://whopark.in',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.whopark.in',
  links: {
    login: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.whopark.in'}/login`,
    register: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.whopark.in'}/login`,
    dashboard: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.whopark.in'}/dashboard`,
  },
  contact: {
    email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'Configure via NEXT_PUBLIC_SUPPORT_EMAIL',
    phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || '',
    location: process.env.NEXT_PUBLIC_OFFICE_LOCATION || 'India',
  },
};

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: {
    text: string;
    status: 'available' | 'planned';
  }[];
}

export const pricingPlans: PricingTier[] = [
  {
    id: 'free',
    name: 'Free Plan',
    price: '₹0',
    period: '/month',
    description: 'Essential QR vehicle communication for individual drivers.',
    ctaText: 'Get Started Free',
    ctaHref: siteConfig.links.register,
    features: [
      { text: 'Google account registration', status: 'available' },
      { text: 'Vehicle registration & unique QR code', status: 'available' },
      { text: 'Printable windshield QR sticker', status: 'available' },
      { text: 'Instant vehicle alerts & quick replies', status: 'available' },
    ],
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    badge: 'Most Popular',
    price: '₹XX',
    period: '/month',
    description: 'Enhanced capabilities for multi-vehicle owners who want extra control.',
    popular: true,
    ctaText: 'Join Early Access',
    ctaHref: '/contact?subject=Premium%20Plan%20Enquiry',
    features: [
      { text: 'Everything in Free Plan', status: 'available' },
      { text: 'Multiple vehicle registrations', status: 'available' },
      { text: 'Premium QR sticker customization', status: 'planned' },
      { text: 'Priority support & extended alert logs', status: 'planned' },
    ],
  },
  {
    id: 'family-business',
    name: 'Family / Business Plan',
    price: '₹XX',
    period: '/month',
    description: 'Centralized vehicle management for households, offices, and fleets.',
    ctaText: 'Contact Sales',
    ctaHref: '/contact?subject=Family%20%2F%20Business%20Plan',
    features: [
      { text: 'Multi-vehicle management under one account', status: 'available' },
      { text: 'Centralized vehicle dashboard', status: 'available' },
      { text: 'Shared family or facility access roles', status: 'planned' },
      { text: 'Dedicated onboarding & support', status: 'planned' },
    ],
  },
];