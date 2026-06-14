import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ArrowRight, Shield, Zap, HeadphonesIcon, RotateCcw, Star } from 'lucide-react';
import { JsonLd } from '@/components/ui/JsonLd';
import { PlanCard } from '@/components/sections/PlanCard';
import { buildMetadata } from '@/lib/metadata';
import { getPlans } from '@/lib/plans';

export const metadata: Metadata = buildMetadata({
  title: 'Offres & Tarifs — TV en streaming en France',
  description:
    'Comparez nos offres de TV en direct : Essentiel, Confort et Premium. Sans engagement, activation immédiate. À partir de 9,99 €/mois.',
  path: '/offre',
});

const trust = [
  { icon: Shield,          label: 'Paiement 100 % sécurisé' },
  { icon: Zap,             label: 'Activation immédiate' },
  { icon: RotateCcw,       label: 'Sans engagement' },
  { icon: HeadphonesIcon,  label: 'Support réactif 24h–48h' },
];

const comparison = [
  { feature: 'Appareils simultanés',   basic: '1',          standard: '2',          premium: '3' },
  { feature: 'Qualité vidéo',           basic: 'Full HD',    standard: 'Full HD',    premium: 'Full HD' },
  { feature: 'Toutes les chaînes',      basic: '✓',          standard: '✓',          premium: '✓' },
  { feature: 'Sport & cinéma',          basic: '✓',          standard: '✓',          premium: '✓' },
  { feature: 'Replay 7 jours',          basic: '✓',          standard: '✓',          premium: '✓' },
  { feature: 'Guide des programmes',    basic: '✓',          standard: '✓',          premium: '✓' },
  { feature: 'Activation immédiate',    basic: '✓',          standard: '✓',          premium: '✓' },
  { feature: 'Support',                 basic: 'Email',      standard: 'Prioritaire', premium: '7j/7' },
];

const faqItems = [
  {
    q: 'Y a-t-il un engagement ou une durée minimale ?',
    a: 'Non. Toutes nos offres sont sans engagement. Vous pouvez résilier à tout moment depuis votre espace client ou en nous contactant.',
  },
  {
    q: 'Comment se déroule l\'activation ?',
    a: 'Dès votre paiement confirmé, vous recevez vos identifiants et accès par email. L\'activation est généralement immédiate (moins de 15 minutes).',
  },
  {
    q: 'Puis-je changer d\'offre après avoir souscrit ?',
    a: 'Oui. Vous pouvez passer à une offre supérieure ou inférieure à tout moment en contactant notre support.',
  },
  {
    q: 'Quels modes de paiement sont acceptés ?',
    a: 'Carte bancaire (Visa, Mastercard), PayPal et d\'autres solutions selon disponibilité sur la page de paiement sécurisée.',
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
  const plans = getPlans();

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
                Des formules flexibles, sans engagement, adaptées à votre foyer. À partir de{' '}
                <strong className="text-white">9,99 €/mois</strong>.
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

      {/* ── Pricing cards ────────────────────────────────────────── */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} lightBg />
            ))}
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-500" aria-hidden /> Paiement sécurisé SSL
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-500" aria-hidden /> Aucune donnée bancaire stockée
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-4 w-4 text-emerald-500" aria-hidden /> Résiliable à tout moment
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-400" fill="currentColor" aria-hidden /> Support réactif
            </span>
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-ink">
            Comparatif des offres
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-5 py-4 text-left font-semibold text-ink">Fonctionnalité</th>
                  <th className="px-5 py-4 text-center font-semibold text-ink">Essentiel</th>
                  <th className="px-5 py-4 text-center font-bold text-[#4524DB]">
                    Confort ⭐
                  </th>
                  <th className="px-5 py-4 text-center font-semibold text-ink">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}
                  >
                    <td className="px-5 py-3 font-medium text-ink">{row.feature}</td>
                    <td className="px-5 py-3 text-center text-muted">{row.basic}</td>
                    <td className="px-5 py-3 text-center font-semibold text-[#4524DB]">{row.standard}</td>
                    <td className="px-5 py-3 text-center text-muted">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="bg-surface-muted py-16">
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
            </Link>{' '}
            ou{' '}
            <Link href="/contact" className="font-medium text-[#4524DB] hover:underline">
              contactez le support
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Try CTA ──────────────────────────────────────────────── */}
      <section className="bg-surface py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#4524DB]/20 bg-[#4524DB]/5 p-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4524DB]">
                Pas encore sûr ?
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">
                Testez le service avant de vous abonner
              </h3>
              <p className="mt-1 text-sm text-muted">
                Demandez un essai gratuit et évaluez la qualité sur vos appareils.
              </p>
            </div>
            <Link
              href="/trial"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#4524DB] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#3a1ec4]"
            >
              Essai gratuit <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
