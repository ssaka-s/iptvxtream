'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '12267051311';

interface Pack {
  name: string;
  pass: string;
  duration: string;
  price: number;
  recommended?: boolean;
  features: string[];
}

const STANDARD_PACKS: Pack[] = [
  {
    name: 'Pack Neptune',
    pass: 'PASS 1 MOIS',
    duration: '1 mois',
    price: 15,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Support technique réactif',
      'Sans engagement',
    ],
  },
  {
    name: 'Pack Uranus',
    pass: 'PASS 3 MOIS',
    duration: '3 mois',
    price: 25,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Support technique réactif',
      'Sans engagement',
    ],
  },
  {
    name: 'Pack Venus',
    pass: 'PASS 6 MOIS',
    duration: '6 mois',
    price: 35,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Mises à jour régulières',
      'Support technique réactif',
      'Sans engagement',
    ],
  },
  {
    name: 'Pack Jupiter',
    pass: 'PASS 12 MOIS',
    duration: '12 mois',
    price: 45,
    recommended: true,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Mises à jour régulières',
      'Support technique réactif',
      'Sans engagement',
      'Meilleur rapport qualité / prix',
    ],
  },
];

const PREMIUM_PACKS: Pack[] = [
  {
    name: 'Pack Neptune',
    pass: 'PASS 1 MOIS',
    duration: '1 mois',
    price: 20,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Support prioritaire 24h/7j',
      'Sans engagement',
    ],
  },
  {
    name: 'Pack Uranus',
    pass: 'PASS 3 MOIS',
    duration: '3 mois',
    price: 35,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Support prioritaire 24h/7j',
      'Sans engagement',
    ],
  },
  {
    name: 'Pack Venus',
    pass: 'PASS 6 MOIS',
    duration: '6 mois',
    price: 55,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Mises à jour régulières',
      'Support prioritaire 24h/7j',
      'Sans engagement',
    ],
  },
  {
    name: 'Pack Jupiter',
    pass: 'PASS 12 MOIS',
    duration: '12 mois',
    price: 70,
    recommended: true,
    features: [
      'Streaming Full HD (1080p)',
      'Chaînes françaises et thématiques',
      'Sport, cinéma, jeunesse, info',
      'Guide des programmes (EPG)',
      'Replay 7 jours inclus',
      'Compatible tous appareils',
      'Activation immédiate par email',
      'Mises à jour régulières',
      'Support prioritaire 24h/7j',
      'Sans engagement',
      'Meilleur rapport qualité / prix',
    ],
  },
];

function PackCard({ pack, tier }: { pack: Pack; tier: string }) {
  const whatsappMsg = encodeURIComponent(
    `Bonjour, je souhaite commander le ${pack.name} ${tier} (${pack.pass}) à ${pack.price}€. Pouvez-vous m'aider ?`
  );

  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl border p-6 transition-shadow',
        pack.recommended
          ? 'border-[#4524DB]/30 bg-[#4524DB]/5 shadow-[0_4px_32px_rgba(69,36,219,0.15)]'
          : 'border-gray-200 bg-white shadow-card hover:shadow-md',
      ].join(' ')}
    >
      {pack.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4524DB] px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow">
          Recommandé
        </span>
      )}

      <div className="mb-1 text-xs font-bold uppercase tracking-widest text-muted">{pack.pass}</div>
      <h3 className="text-2xl font-extrabold text-ink">{pack.name}</h3>

      <div className="mt-4 flex items-end gap-1">
        <span className="text-5xl font-extrabold text-ink">{pack.price} €</span>
        <span className="mb-1 text-sm text-muted">/ {pack.duration}</span>
      </div>

      <ul className="mt-6 flex-1 divide-y divide-gray-100">
        {pack.features.map((f) => (
          <li key={f} className="flex items-center gap-2 py-2 text-sm text-ink-muted">
            <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-full bg-[#25D366] py-3 text-center text-sm font-bold text-white transition-colors hover:bg-[#1ebe5d]"
        >
          Commander via WhatsApp
        </a>
        <Link
          href="/trial"
          className={[
            'block w-full rounded-full border py-3 text-center text-sm font-bold transition-colors',
            pack.recommended
              ? 'border-[#4524DB] text-[#4524DB] hover:bg-[#4524DB] hover:text-white'
              : 'border-gray-300 text-ink hover:border-ink hover:bg-gray-50',
          ].join(' ')}
        >
          Demander un essai gratuit
        </Link>
      </div>
    </div>
  );
}

export function OffrePacksSection() {
  const [tab, setTab] = useState<'standard' | 'premium'>('standard');
  const packs = tab === 'standard' ? STANDARD_PACKS : PREMIUM_PACKS;
  const tierLabel = tab === 'standard' ? 'Standard' : 'Premium';

  return (
    <section className="bg-surface-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Tab switcher */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1.5">
            <button
              type="button"
              onClick={() => setTab('standard')}
              className={[
                'rounded-full px-8 py-2.5 text-sm font-bold transition-all',
                tab === 'standard' ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink',
              ].join(' ')}
            >
              Standard
            </button>
            <button
              type="button"
              onClick={() => setTab('premium')}
              className={[
                'flex items-center gap-2 rounded-full px-8 py-2.5 text-sm font-bold transition-all',
                tab === 'premium' ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink',
              ].join(' ')}
            >
              Premium
              <span className="rounded-full bg-[#4524DB]/10 px-2 py-0.5 text-[10px] font-bold text-[#4524DB]">
                VIP
              </span>
            </button>
          </div>
        </div>

        {/* Pack cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packs.map((pack) => (
            <PackCard key={pack.name} pack={pack} tier={tierLabel} />
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" aria-hidden /> Paiement sécurisé SSL
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" aria-hidden /> Activation immédiate
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
  );
}
