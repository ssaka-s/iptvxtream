'use client';

import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const WHATSAPP_NUMBER = '12267051311';

interface DurationPlan {
  name: string;
  pass: string;
  price: number;
  recommended?: boolean;
}

const STANDARD: DurationPlan[] = [
  { name: 'Pack Neptune', pass: 'PASS 1 MOIS',  price: 15 },
  { name: 'Pack Uranus',  pass: 'PASS 3 MOIS',  price: 25 },
  { name: 'Pack Venus',   pass: 'PASS 6 MOIS',  price: 35 },
  { name: 'Pack Jupiter', pass: 'PASS 12 MOIS', price: 45, recommended: true },
];

const PREMIUM: DurationPlan[] = [
  { name: 'Pack Neptune', pass: 'PASS 1 MOIS',  price: 20 },
  { name: 'Pack Uranus',  pass: 'PASS 3 MOIS',  price: 35 },
  { name: 'Pack Venus',   pass: 'PASS 6 MOIS',  price: 55 },
  { name: 'Pack Jupiter', pass: 'PASS 12 MOIS', price: 70, recommended: true },
];

const FEATURES_STANDARD = [
  'Streaming Full HD (1080p)',
  'Chaînes françaises et thématiques',
  'Sport, cinéma, jeunesse, info',
  'Guide des programmes (EPG)',
  'Replay 7 jours inclus',
  'Fonctionne sur tous les appareils',
  'Activation immédiate par email',
  'Mises à jour régulières',
  'Support technique réactif',
  'Sans engagement',
  'Paiement 100 % sécurisé',
  'Livraison instantanée',
];

const FEATURES_PREMIUM = [
  'Streaming Full HD (1080p)',
  'Chaînes françaises et thématiques',
  'Sport, cinéma, jeunesse, info',
  'Guide des programmes (EPG)',
  'Replay 7 jours inclus',
  'Fonctionne sur tous les appareils',
  'Activation immédiate par email',
  'Mises à jour régulières',
  'Support technique prioritaire 24h/7j',
  'Sans engagement',
  'Paiement 100 % sécurisé',
  'Livraison instantanée',
];

function PriceCard({ plan, features }: { plan: DurationPlan; features: string[] }) {
  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl border p-6 transition-shadow',
        plan.recommended
          ? 'border-brand-blue/30 bg-blue-50 shadow-[0_4px_32px_rgba(45,124,246,0.15)]'
          : 'border-gray-200 bg-white shadow-card hover:shadow-md',
      ].join(' ')}
    >
      <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted">{plan.pass}</p>

      {plan.recommended && (
        <span className="mt-3 inline-flex w-fit items-center rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          Recommandé
        </span>
      )}

      <p className={['font-bold text-ink', plan.recommended ? 'mt-3 text-5xl' : 'mt-5 text-5xl'].join(' ')}>
        {plan.price} €
      </p>

      <ul className="mt-6 flex-1 divide-y divide-gray-100">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 py-2 text-sm text-ink-muted">
            <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="/offre"
        className={[
          'mt-8 block rounded-full py-3 text-center text-xs font-bold uppercase tracking-widest transition-colors',
          plan.recommended
            ? 'bg-amber-400 text-white hover:bg-amber-500'
            : 'bg-ink text-white hover:bg-ink-muted',
        ].join(' ')}
      >
        Sélectionner ce pack
      </a>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Bonjour, je souhaite commander le ${plan.name} (${plan.pass}) à ${plan.price}€. Pouvez-vous m'aider ?`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block w-full rounded-full bg-[#25D366] py-3 text-center text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#1ebe5d]"
      >
        Commander via WhatsApp
      </a>
    </div>
  );
}

export function TabPricingSection() {
  const [tab, setTab] = useState<'standard' | 'premium'>('standard');

  const plans = tab === 'standard' ? STANDARD : PREMIUM;
  const features = tab === 'standard' ? FEATURES_STANDARD : FEATURES_PREMIUM;

  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            Nos offres
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            TV en streaming en France —{' '}
            <span className="text-brand-blue">tarifs & abonnements</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Choisissez la durée de votre abonnement. Tous nos packs incluent la qualité HD, le
            support et plus de 200 chaînes. Pas de contrat, résiliable à tout moment.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1.5">
            <button
              type="button"
              onClick={() => setTab('standard')}
              className={[
                'rounded-full px-7 py-2.5 text-sm font-bold transition-all',
                tab === 'standard'
                  ? 'bg-blue-100 text-ink shadow-sm'
                  : 'text-muted hover:text-ink',
              ].join(' ')}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setTab('premium')}
              className={[
                'flex items-center gap-2 rounded-full px-7 py-2.5 text-sm font-bold transition-all',
                tab === 'premium'
                  ? 'bg-blue-100 text-ink shadow-sm'
                  : 'text-muted hover:text-ink',
              ].join(' ')}
            >
              Premium
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-brand-blue">
                VIP
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PriceCard key={plan.name} plan={plan} features={features} />
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-brand-blue" />
            Paiement sécurisé
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-brand-blue" />
            Activation immédiate
          </span>
          <span className="flex items-center gap-1">
            <Check className="h-4 w-4 text-brand-blue" />
            Sans engagement
          </span>
          <span className="flex items-center gap-1">
            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
            Support réactif
          </span>
        </div>
      </div>
    </section>
  );
}
