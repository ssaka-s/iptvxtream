import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/ui/JsonLd';
import { ConsentBanner } from '@/components/ConsentBanner';
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/constants';
import { getSiteUrl } from '@/lib/metadata';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `TV en direct en ligne en France | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    locale: 'fr_FR',
    siteName: SITE_NAME,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — TV en direct en France`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@offreiptv',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = getSiteUrl();

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: 'French',
      url: `${siteUrl}/contact`,
    },
    sameAs: [],
  };

  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <JsonLd data={[websiteJsonLd, organizationJsonLd]} />
        <Header />
        <main id="main-content" className="pt-20">
          {children}
        </main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
