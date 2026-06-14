import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Page introuvable',
  description: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
  path: '/404',
});

const suggestions = [
  { href: '/', label: 'Accueil', desc: 'Retour à la page principale' },
  { href: '/offre', label: 'Nos offres', desc: 'Voir les abonnements disponibles' },
  { href: '/chaines', label: 'Chaînes TV', desc: 'Explorer le catalogue de chaînes' },
  { href: '/blog', label: 'Blog', desc: 'Guides et conseils TV en streaming' },
  { href: '/contact', label: 'Support', desc: 'Contacter notre équipe' },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-lg text-muted">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-gray-200 bg-surface p-4 text-left transition-colors hover:border-brand-blue hover:bg-blue-50"
            >
              <p className="font-semibold text-ink">{link.label}</p>
              <p className="mt-1 text-sm text-muted">{link.desc}</p>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-sm text-muted">
          Besoin d&apos;aide ?{' '}
          <Link href="/contact" className="text-brand-blue hover:text-brand-dark">
            Contactez notre support
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
