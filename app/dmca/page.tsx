import type { Metadata } from 'next';
import { DmcaContent } from '@/components/legal/DmcaContent';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: "Avis DMCA – Droits d'auteur",
  description:
    "Politique de conformité DMCA de OffreIPTV : comment déposer un avis de violation de droits d'auteur, notre processus d'examen et les informations de contre-notification.",
  path: '/dmca',
});

export default function DmcaPage() {
  return <DmcaContent />;
}
