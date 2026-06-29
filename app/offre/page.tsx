import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Shield, Zap, HeadphonesIcon, RotateCcw } from 'lucide-react';
import { JsonLd } from '@/components/ui/JsonLd';
import { OffrePacksSection } from '@/components/sections/OffrePacksSection';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Offres & Tarifs — TV en streaming en France',
  description:
    'Choisissez votre pack de TV en direct : Standard ou Premium. Sans engagement, activation immédiate. Commandez via WhatsApp ou demandez un essai gratuit.',
  path: '/offre',
});

const trust = [
  { icon: Shield,         label: 'Paiement 100 % sécurisé' },
  { icon: Zap,            label: 'Activation immédiate' },
  { icon: RotateCcw,      label: 'Sans engagement' },
  { icon: HeadphonesIcon, label: 'Support réactif 24h–48h' },
];

const faqItems = [
  {
    q: "Y a-t-il un engagement ou une durée minimale ?",
    a: "Non. Toutes nos offres sont sans engagement. Vous pouvez résilier à tout moment depuis votre espace client ou en nous contactant.",
  },
  {
    q: "Comment se déroule l'activation ?",
    a: "Dès votre commande confirmée via WhatsApp, vous recevez vos identifiants et accès par email. L'activation est généralement immédiate (moins de 15 minutes).",
  },
  {
    q: "Puis-je changer d'offre après avoir souscrit ?",
    a: "Oui. Vous pouvez passer à une offre supérieure ou inférieure à tout moment en nous contactant via WhatsApp.",
  },
  {
    q: "Quelle est la différence entre Standard et Premium ?",
    a: "L'offre Premium inclut un support technique prioritaire disponible 7j/7, idéale si vous souhaitez une assistance rapide à tout moment.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function OffrePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />
            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                Tarifs & abonnements
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Choisissez votre offre de TV en streaming
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Des packs flexibles, sans engagement. Commandez directement via WhatsApp ou testez gratuitement avant de vous abonner.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {trust.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white"
                  >
                    <Icon className="h-3.5 w-3.5 text-white/70" aria-hidden />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packs (client component with tab switcher) ────────────── */}
      <OffrePacksSection />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-ink">Questions sur les offres</h2>
          <div className="space-y-4">
            {faqItems.map(({ q, a }) => (
              <div key={q} className="rounded-2xl border border-gray-200 bg-surface p-5 shadow-card">
                <h3 className="font-semibold text-ink">{q}</h3>
                <p className="mt-2 text-sm text-muted">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            D&apos;autres questions ?{' '}
            <Link href="/faq" className="font-medium text-[#4524DB] hover:underline">
              Consultez notre FAQ complète
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
