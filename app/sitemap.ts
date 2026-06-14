import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.offreiptv.com';

const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '',                       priority: 1.0, freq: 'weekly'  },
  { path: '/offre',                 priority: 1.0, freq: 'weekly'  },
  { path: '/chaines',               priority: 0.9, freq: 'weekly'  },
  { path: '/appareils',             priority: 0.9, freq: 'monthly' },
  { path: '/comment-ca-marche',    priority: 0.9, freq: 'monthly' },
  { path: '/installation',         priority: 0.9, freq: 'monthly' },
  { path: '/trial',                priority: 0.8, freq: 'monthly' },
  { path: '/faq',                  priority: 0.8, freq: 'monthly' },
  { path: '/blog',                 priority: 0.8, freq: 'weekly'  },
  { path: '/contact',              priority: 0.6, freq: 'monthly' },
  { path: '/mentions-legales',     priority: 0.3, freq: 'yearly'  },
  { path: '/confidentialite',      priority: 0.3, freq: 'yearly'  },
  { path: '/conditions-generales', priority: 0.3, freq: 'yearly'  },
  { path: '/dmca',                 priority: 0.2, freq: 'yearly'  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, freq }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: freq,
    priority,
    // lastModified intentionally omitted for static pages — content dates are unknown
    // Google will discover the real modified date via crawl
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
