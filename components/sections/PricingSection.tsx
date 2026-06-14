import { Activity, CreditCard, Headphones, Infinity } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { PlanCard } from '@/components/sections/PlanCard';
import { getPlans } from '@/lib/plans';

export function PricingSection() {
  const plans = getPlans();

  return (
    <section className="bg-surface-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            Nos offres
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Des formules <span className="text-brand-blue">sans engagement</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Choisissez la formule adaptée à votre foyer. Paiement sécurisé, activation rapide.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} lightBg />
          ))}
        </div>

        <div
          className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:gap-4"
          role="list"
          aria-label="Garanties et confiance"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-surface px-4 py-2 text-sm text-muted shadow-card"
            role="listitem"
          >
            <CreditCard className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
            Paiement Stripe
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-surface px-4 py-2 text-sm text-muted shadow-card"
            role="listitem"
          >
            <Activity className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
            99,9% de disponibilité
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-surface px-4 py-2 text-sm text-muted shadow-card"
            role="listitem"
          >
            <Headphones className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
            Support réactif
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-surface px-4 py-2 text-sm text-muted shadow-card"
            role="listitem"
          >
            <Infinity className="h-4 w-4 shrink-0 text-brand-blue" aria-hidden />
            Sans engagement
          </span>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted">
          Ce service est destiné à un usage personnel et légal, dans le respect des droits de
          diffusion. L&apos;abonnement est géré via une page de paiement externe sécurisée. Les
          prix affichés sont indicatifs et peuvent évoluer.
        </p>
      </div>
    </section>
  );
}
