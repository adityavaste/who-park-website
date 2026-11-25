import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WHO PARK — Smart Car QR Sticker',
    short_name: 'WHO PARK',
    description:
      'Scan the windshield QR sticker to alert a parked car owner privately without sharing phone numbers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF7',
    theme_color: '#FFD600',
    icons: [
      {
        src: '/icon/medium',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon/large',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}