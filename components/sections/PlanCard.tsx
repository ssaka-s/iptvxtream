import { Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SubscribeButton } from '@/components/ui/SubscribeButton';

export interface Plan {
  id: 'basic' | 'standard' | 'premium';
  name: string;
  price: string;
  devices: string;
  quality: string;
  support: string;
  features: string[];
  checkoutUrl: string;
  highlighted?: boolean;
}

interface PlanCardProps {
  plan: Plan;
  lightBg?: boolean;
}

export function PlanCard({ plan, lightBg = false }: PlanCardProps) {
  const headingClass = plan.highlighted
    ? 'text-white'
    : lightBg
      ? 'text-gray-900'
      : 'text-white';

  const priceAmountClass = plan.highlighted
    ? 'text-white'
    : lightBg
      ? 'text-gray-900'
      : 'text-white';

  const featureTextClass = plan.highlighted
    ? 'text-white/90'
    : lightBg
      ? 'text-gray-600'
      : 'text-muted-light';

  const priceSubtextClass = plan.highlighted
    ? 'text-white/80'
    : lightBg
      ? 'text-gray-500'
      : 'text-muted';

  const cardClassName = [
    'flex flex-col h-full',
    !plan.highlighted && lightBg
      ? '!bg-surface-muted !border-gray-200 hover:!bg-gray-100 !shadow-card'
      : '',
    plan.highlighted && lightBg ? '!ring-offset-white' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Card
      highlighted={plan.highlighted}
      glowHighlight={plan.highlighted}
      className={cardClassName}
    >
      <h3 className={`text-xl font-bold ${headingClass}`}>{plan.name}</h3>
      <p className="mt-2">
        <span className={`text-3xl font-bold ${priceAmountClass}`}>{plan.price}</span>
        <span className={`text-sm ${priceSubtextClass}`}>/mois</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        <li className={`flex items-center gap-2 text-sm ${featureTextClass}`}>
          <Check className="h-4 w-4 shrink-0 text-brand-light" aria-hidden />
          {plan.devices}
        </li>
        <li className={`flex items-center gap-2 text-sm ${featureTextClass}`}>
          <Check className="h-4 w-4 shrink-0 text-brand-light" aria-hidden />
          Qualité {plan.quality}
        </li>
        <li className={`flex items-center gap-2 text-sm ${featureTextClass}`}>
          <Check className="h-4 w-4 shrink-0 text-brand-light" aria-hidden />
          {plan.support}
        </li>
        {plan.features.map((f) => (
          <li key={f} className={`flex items-center gap-2 text-sm ${featureTextClass}`}>
            <Check className="h-4 w-4 shrink-0 text-brand-light" aria-hidden />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <SubscribeButton
          plan={plan.id}
          checkoutUrl={plan.checkoutUrl}
          className="w-full justify-center"
        />
      </div>
    </Card>
  );
}
