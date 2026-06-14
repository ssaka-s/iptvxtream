'use client';

import { useEffect, useState } from 'react';
import { getConsent, loadAnalytics, setConsent } from '@/lib/analytics';

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      setVisible(true);
    } else if (consent === 'accepted') {
      loadAnalytics();
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-surface/95 p-4 backdrop-blur-xl sm:p-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Nous utilisons des cookies pour mesurer l&apos;audience du site. Vous pouvez accepter ou
          refuser le suivi analytique.{' '}
          <a href="/confidentialite" className="text-brand-blue underline hover:text-brand-dark">
            En savoir plus
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => {
              setConsent('declined');
              setVisible(false);
            }}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-ink hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => {
              setConsent('accepted');
              setVisible(false);
            }}
            className="rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
