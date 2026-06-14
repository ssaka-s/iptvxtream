export const SITE_NAME = 'OffreIPTV';
export const SITE_DESCRIPTION =
  'Regardez la TV en direct en France, partout et à tout moment. Offres de TV en streaming sans engagement.';

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/offre', label: 'Offres' },
  { href: '/chaines', label: 'Chaînes' },
  { href: '/appareils', label: 'Appareils' },
  { href: '/comment-ca-marche', label: 'Comment ça marche' },
  { href: '/installation', label: 'Installation' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_LINKS = [
  { href: '/faq', label: 'FAQ' },
  { href: '/installation', label: 'Guide d\'installation' },
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/confidentialite', label: 'Confidentialité' },
  { href: '/conditions-generales', label: 'Conditions générales' },
  { href: '/dmca', label: 'DMCA' },
] as const;

export const CHECKOUT_URLS = {
  basic: process.env.NEXT_PUBLIC_CHECKOUT_URL_BASIC ?? '',
  standard: process.env.NEXT_PUBLIC_CHECKOUT_URL_STANDARD ?? '',
  premium: process.env.NEXT_PUBLIC_CHECKOUT_URL_PREMIUM ?? '',
} as const;
