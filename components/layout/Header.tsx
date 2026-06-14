'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Tv, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-gray-200/80 bg-white/90 backdrop-blur-md shadow-card'
          : 'bg-transparent backdrop-blur-none',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg text-xl font-bold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100">
            <Tv className="h-5 w-5 text-brand-blue" aria-hidden />
          </span>
          iptvxtream
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow',
                pathname === link.href
                  ? 'bg-gray-100 text-ink'
                  : 'text-ink-muted hover:bg-gray-50 hover:text-ink',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/trial" size="sm" variant="primary">
            Essai gratuit
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    'block rounded-lg px-4 py-3 text-sm font-medium',
                    pathname === link.href
                      ? 'bg-gray-100 text-ink'
                      : 'text-ink-muted hover:text-ink',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/trial" className="w-full justify-center" variant="primary">
                Essai gratuit
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
