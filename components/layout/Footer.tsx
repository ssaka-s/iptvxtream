import Link from 'next/link';
import { Tv } from 'lucide-react';
import { FOOTER_LINKS, SITE_NAME } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue">
                <Tv className="h-4 w-4 text-white" aria-hidden />
              </span>
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              TV en streaming légale en France. Regardez vos chaînes préférées sur tous vos
              appareils, sans engagement.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink">
              Liens utiles
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink">
              Service
            </p>
            <p className="mt-4 text-sm text-muted">
              Une solution de TV en direct conforme aux droits de diffusion. Support disponible
              7j/7.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-medium text-brand-blue transition-colors hover:text-brand-dark"
            >
              Nous contacter →
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-muted">
          <p>
            © {year} {SITE_NAME}. Tous droits réservés. Service de TV en streaming proposé en
            conformité avec la réglementation française.
          </p>
        </div>
      </div>
    </footer>
  );
}
