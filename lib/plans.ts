import { CHECKOUT_URLS } from './constants';
import type { Plan } from '@/components/sections/PlanCard';

const SHARED_FEATURES = [
  'Toutes les chaînes incluses',
  'Sport & cinéma compris',
  'Replay 7 jours',
  'Guide des programmes (EPG)',
  'Activation immédiate',
];

export function getPlans(): Plan[] {
  return [
    {
      id: 'basic',
      name: 'Essentiel',
      price: '9,99 €',
      devices: '1 appareil simultané',
      quality: 'Full HD',
      support: 'Support par email',
      features: SHARED_FEATURES,
      checkoutUrl: CHECKOUT_URLS.basic,
      highlighted: false,
    },
    {
      id: 'standard',
      name: 'Confort',
      price: '14,99 €',
      devices: '2 appareils simultanés',
      quality: 'Full HD',
      support: 'Support prioritaire',
      features: SHARED_FEATURES,
      checkoutUrl: CHECKOUT_URLS.standard,
      highlighted: true,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '19,99 €',
      devices: '3 appareils simultanés',
      quality: 'Full HD',
      support: 'Support 7j/7',
      features: SHARED_FEATURES,
      checkoutUrl: CHECKOUT_URLS.premium,
      highlighted: false,
    },
  ];
}
