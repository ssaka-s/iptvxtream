import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OffreIPTV — TV en direct en France',
    short_name: 'OffreIPTV',
    description: 'Regardez la TV en direct en France, partout et à tout moment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4524DB',
    lang: 'fr',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/opengraph-image',
        sizes: '1200x630',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
