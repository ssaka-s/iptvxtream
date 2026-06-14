import type { Metadata, ReactNode } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Essai gratuit — Testez la TV en streaming avant de vous abonner',
  description:
    'Demandez un essai gratuit de notre service de TV en direct. Chaînes françaises, sport et VOD en HD. Aucun paiement requis pour démarrer.',
  path: '/trial',
});

export default function TrialLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
