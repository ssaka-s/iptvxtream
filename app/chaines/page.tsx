import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Tv } from 'lucide-react';
import { JsonLd } from '@/components/ui/JsonLd';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Chaînes TV disponibles — TV en streaming en France',
  description:
    'Découvrez toutes les chaînes TV disponibles en streaming : chaînes françaises, sport, cinéma, séries, jeunesse et actualités. Guide des programmes inclus.',
  path: '/chaines',
});

interface Channel {
  name: string;
  type?: 'hd' | '4k';
}

interface Category {
  id: string;
  emoji: string;
  title: string;
  description: string;
  channels: Channel[];
  plan: 'Essentiel' | 'Confort' | 'Premium';
}

const categories: Category[] = [
  {
    id: 'generalistes',
    emoji: '📡',
    title: 'Chaînes généralistes',
    description: 'Les grandes chaînes françaises en clair, disponibles dès l\'offre Essentiel.',
    plan: 'Essentiel',
    channels: [
      { name: 'TF1', type: 'hd' },
      { name: 'France 2', type: 'hd' },
      { name: 'France 3', type: 'hd' },
      { name: 'Canal+', type: 'hd' },
      { name: 'France 5', type: 'hd' },
      { name: 'M6', type: 'hd' },
      { name: 'Arte', type: 'hd' },
      { name: 'C8' },
      { name: 'W9' },
      { name: 'TMC' },
      { name: 'TFX' },
      { name: 'TMC' },
      { name: 'NRJ 12' },
      { name: 'LCP' },
      { name: 'France 4' },
      { name: 'BFM TV' },
      { name: 'CNEWS' },
      { name: 'CStar' },
      { name: 'Gulli' },
      { name: 'TF1 Séries Films' },
    ],
  },
  {
    id: 'sport',
    emoji: '⚽',
    title: 'Sport & événements',
    description: 'Football, tennis, rugby, basket et bien plus — en direct HD.',
    plan: 'Confort',
    channels: [
      { name: 'beIN Sports 1', type: 'hd' },
      { name: 'beIN Sports 2', type: 'hd' },
      { name: 'beIN Sports 3', type: 'hd' },
      { name: 'Eurosport 1', type: 'hd' },
      { name: 'Eurosport 2', type: 'hd' },
      { name: 'Canal+ Sport', type: 'hd' },
      { name: 'L\'Équipe' },
      { name: 'RMC Sport 1', type: 'hd' },
      { name: 'RMC Sport 2' },
      { name: 'Foot+ 24/24' },
      { name: 'Golf+' },
      { name: 'Automoto' },
    ],
  },
  {
    id: 'cinema',
    emoji: '🎬',
    title: 'Cinéma & Séries',
    description: 'Films récents, séries françaises et internationales, documentaires.',
    plan: 'Confort',
    channels: [
      { name: 'Canal+ Cinéma', type: 'hd' },
      { name: 'Canal+ Séries', type: 'hd' },
      { name: 'Ciné+', type: 'hd' },
      { name: 'OCS Max', type: 'hd' },
      { name: 'OCS City' },
      { name: 'OCS Géants' },
      { name: 'AB1' },
      { name: 'Série Club' },
      { name: 'TCM Cinéma' },
      { name: 'TV Breizh' },
      { name: 'Polar+' },
      { name: 'Comedy Central' },
    ],
  },
  {
    id: 'info',
    emoji: '🌍',
    title: 'Information & Culture',
    description: 'Actualités en continu, documentaires et chaînes culturelles.',
    plan: 'Essentiel',
    channels: [
      { name: 'BFM TV' },
      { name: 'CNews' },
      { name: 'France 24', type: 'hd' },
      { name: 'LCI', type: 'hd' },
      { name: 'Euronews' },
      { name: 'RFI' },
      { name: 'TV5 Monde', type: 'hd' },
      { name: 'Arte' },
      { name: 'Histoire TV' },
      { name: 'Planète+' },
      { name: 'Voyage' },
      { name: 'Ushuaïa TV' },
    ],
  },
  {
    id: 'jeunesse',
    emoji: '🧒',
    title: 'Jeunesse & Famille',
    description: 'Dessins animés et programmes pour enfants, disponibles toute la journée.',
    plan: 'Essentiel',
    channels: [
      { name: 'Gulli' },
      { name: 'France 4' },
      { name: 'TiJi' },
      { name: 'Cartoon Network' },
      { name: 'Boomerang' },
      { name: 'Disney Channel' },
      { name: 'Nickelodeon' },
      { name: 'Nick Jr.' },
      { name: 'Canal J' },
      { name: 'Piwi+' },
    ],
  },
  {
    id: 'divertissement',
    emoji: '🎵',
    title: 'Musique & Divertissement',
    description: 'Clips, concerts, émissions de variétés et chaînes de divertissement.',
    plan: 'Essentiel',
    channels: [
      { name: 'MTV' },
      { name: 'MCM' },
      { name: 'M6 Music' },
      { name: 'Virgin Radio TV' },
      { name: 'NRJ Hits' },
      { name: '6ter' },
      { name: 'Paris Première' },
      { name: 'Comédie+' },
      { name: 'Rire & Chansons' },
    ],
  },
  {
    id: '4k',
    emoji: '🔮',
    title: 'Chaînes 4K Ultra HD',
    description: 'Une sélection de chaînes en résolution 4K pour une expérience cinématographique.',
    plan: 'Premium',
    channels: [
      { name: 'TF1 4K', type: '4k' },
      { name: 'France 2 4K', type: '4k' },
      { name: 'M6 4K', type: '4k' },
      { name: 'Canal+ 4K', type: '4k' },
      { name: 'beIN 4K', type: '4k' },
      { name: 'Eurosport 4K', type: '4k' },
    ],
  },
];

const planColors: Record<string, string> = {
  Essentiel: 'bg-gray-100 text-gray-700',
  Confort: 'bg-[#4524DB]/10 text-[#4524DB]',
  Premium: 'bg-amber-100 text-amber-700',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Chaînes TV disponibles sur OffreIPTV',
  numberOfItems: categories.reduce((sum, c) => sum + c.channels.length, 0),
  itemListElement: categories.flatMap((cat, ci) =>
    cat.channels.map((ch, i) => ({
      '@type': 'ListItem',
      position: ci * 100 + i + 1,
      name: ch.name,
    }))
  ),
};

export default function ChainesPage() {
  const totalChannels = categories.reduce((sum, c) => sum + c.channels.length, 0);

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                Catalogue complet
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Toutes vos chaînes TV en streaming
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Généralistes, sport, cinéma, jeunesse, info — découvrez l&apos;ensemble des chaînes
                disponibles selon votre offre.
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white">
                  <p className="text-3xl font-extrabold">{totalChannels}+</p>
                  <p className="text-xs text-white/70">chaînes référencées</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white">
                  <p className="text-3xl font-extrabold">{categories.length}</p>
                  <p className="text-xs text-white/70">catégories</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white">
                  <p className="text-3xl font-extrabold">4K</p>
                  <p className="text-xs text-white/70">Ultra HD disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category nav ─────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-white py-4">
        <div className="mx-auto max-w-5xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 pb-1">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-all hover:border-[#4524DB]/40 hover:bg-[#4524DB]/5 hover:text-[#4524DB]"
              >
                <span>{cat.emoji}</span>
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────── */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                {/* Category header */}
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4524DB]/10 text-xl">
                      {cat.emoji}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-ink">{cat.title}</h2>
                      <p className="text-sm text-muted">{cat.description}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${planColors[cat.plan]}`}
                  >
                    Dès l&apos;offre {cat.plan}
                  </span>
                </div>

                {/* Channel grid */}
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {cat.channels.map((ch) => (
                    <div
                      key={ch.name}
                      className="flex items-center gap-2 rounded-xl border border-gray-200 bg-surface px-3 py-2.5 shadow-sm"
                    >
                      <Tv className="h-4 w-4 shrink-0 text-[#4524DB]/60" aria-hidden />
                      <span className="truncate text-sm font-medium text-ink">{ch.name}</span>
                      {ch.type && (
                        <span
                          className={`ml-auto shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                            ch.type === '4k'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {ch.type}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EPG note ─────────────────────────────────────────────── */}
      <section className="bg-surface py-10">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            <strong className="text-ink">Guide des programmes (EPG) inclus</strong> — consultez les
            programmes en cours et à venir sur 7 jours depuis l&apos;application.
            La disponibilité des chaînes peut varier selon les droits de diffusion. Liste non
            exhaustive et sujette à modifications.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-surface-muted py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#4524DB]/20 bg-[#4524DB]/5 p-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4524DB]">
                Prêt à regarder ?
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">
                Accédez à toutes ces chaînes dès aujourd&apos;hui
              </h3>
              <p className="mt-1 text-sm text-muted">Sans engagement — activation immédiate.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link
                href="/offre"
                className="inline-flex items-center gap-2 rounded-full bg-[#4524DB] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#3a1ec4]"
              >
                Voir les offres <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/trial"
                className="inline-flex items-center gap-2 rounded-full border border-[#4524DB] px-7 py-3 text-sm font-semibold text-[#4524DB] transition-all hover:bg-[#4524DB]/5"
              >
                Essai gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
