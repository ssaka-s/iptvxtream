import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { JsonLd } from '@/components/ui/JsonLd';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { buildMetadata } from '@/lib/metadata';
import { FAQ_CATEGORIES } from '@/lib/faq-data';

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Questions fréquentes sur notre TV en streaming',
  description:
    'Toutes les réponses à vos questions : légalité, connexion, appareils compatibles, abonnement, paiement, chaînes disponibles et support client.',
  path: '/faq',
});

const allItems = FAQ_CATEGORIES.flatMap((c) => c.items);

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer.replace(/<[^>]*>/g, ''),
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute bottom-8 right-24 h-32 w-32 rounded-full bg-white/5" aria-hidden />

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                Centre d&apos;aide
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Questions fréquentes
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                Tout ce que vous devez savoir sur notre service de TV en streaming — légalité,
                connexion, appareils, abonnement et plus.
              </p>

              {/* Category pills */}
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {FAQ_CATEGORIES.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <span>{cat.emoji}</span>
                    {cat.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
            <div className="px-4">
              <p className="text-2xl font-bold text-[#4524DB]">{allItems.length}</p>
              <p className="mt-0.5 text-xs text-gray-500">questions répondues</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold text-[#4524DB]">{FAQ_CATEGORIES.length}</p>
              <p className="mt-0.5 text-xs text-gray-500">catégories</p>
            </div>
            <div className="px-4">
              <p className="text-2xl font-bold text-[#4524DB]">24 h</p>
              <p className="mt-0.5 text-xs text-gray-500">délai de réponse support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ categories ───────────────────────────────────────── */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {FAQ_CATEGORIES.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                {/* Category header */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4524DB]/10 text-xl">
                    {cat.emoji}
                  </span>
                  <h2 className="text-xl font-bold text-ink">{cat.title}</h2>
                  <span className="ml-auto rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                    {cat.items.length} questions
                  </span>
                </div>
                <FAQAccordion items={cat.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────────── */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#4524DB]/20 bg-gradient-to-r from-[#4524DB]/5 via-[#4524DB]/10 to-[#4524DB]/5 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4524DB]/10">
                <MessageCircle className="h-6 w-6 text-[#4524DB]" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#4524DB]">
                  Vous n&apos;avez pas trouvé votre réponse ?
                </p>
                <h3 className="mt-1 text-xl font-bold text-ink">Notre équipe est là pour vous</h3>
                <p className="mt-1 text-sm text-muted">
                  Écrivez-nous à{' '}
                  <a
                    href="mailto:contact@iptv-xtream.com"
                    className="font-medium text-[#4524DB] hover:underline"
                  >
                    contact@iptv-xtream.com
                  </a>{' '}
                  — réponse sous 24 à 48 h ouvrées.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#4524DB] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#3a1ec4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4524DB]/50"
            >
              Nous contacter <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
