import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Clock, MessageCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Assistance et support client',
  description:
    "Contactez l'équipe OffreIPTV pour toute question sur votre abonnement, installation ou support technique. Réponse sous 24 à 48 h.",
  path: '/contact',
});

const channels = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Pour toute demande générale, support ou facturation.',
    value: 'contact@iptv-xtream.com',
    href: 'mailto:contact@iptv-xtream.com',
    label: 'Envoyer un email',
    delay: '24–48 h',
  },
  {
    icon: MessageCircle,
    title: 'Chat en direct',
    description: 'Disponible depuis l\'interface de votre espace client.',
    value: 'Accéder à mon espace',
    href: '/trial',
    label: 'Ouvrir le chat',
    delay: 'Temps réel',
  },
];

const faqLinks = [
  { question: 'Comment installer le service ?', href: '/installation' },
  { question: 'Comment annuler mon abonnement ?', href: '/faq#abonnement' },
  { question: 'Quels appareils sont compatibles ?', href: '/faq#appareils' },
  { question: 'La TV buffe ou coupe — que faire ?', href: '/faq#connexion' },
  { question: 'Je n\'ai pas reçu mes identifiants', href: '/faq#support' },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-14 text-center sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                Assistance client
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Comment pouvons-nous vous aider ?
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Notre équipe est disponible pour répondre à toutes vos questions sur l&apos;abonnement,
                l&apos;installation ou le support technique.
              </p>

              {/* Response time badge */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <Clock className="h-4 w-4 text-white/70" aria-hidden />
                Réponse garantie sous 24 à 48 h ouvrées
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact channels ─────────────────────────────────────── */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-ink">Nous contacter</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {channels.map((ch) => (
              <div
                key={ch.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-surface p-6 shadow-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#4524DB]/10">
                  <ch.icon className="h-6 w-6 text-[#4524DB]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ink">{ch.title}</h3>
                <p className="mt-1 text-sm text-muted">{ch.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                  <Clock className="h-3.5 w-3.5 shrink-0 text-[#4524DB]" aria-hidden />
                  <span>Délai de réponse : <strong className="text-ink">{ch.delay}</strong></span>
                </div>
                <div className="mt-auto pt-5">
                  <a
                    href={ch.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#4524DB] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#3a1ec4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4524DB]/50"
                  >
                    {ch.label} <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Email address callout */}
          <div className="mt-8 rounded-2xl border border-[#4524DB]/20 bg-[#4524DB]/5 p-5 text-center">
            <p className="text-sm text-muted">
              Vous pouvez aussi nous écrire directement à{' '}
              <a
                href="mailto:contact@iptv-xtream.com"
                className="font-semibold text-[#4524DB] hover:underline"
              >
                contact@iptv-xtream.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ quick links ──────────────────────────────────────── */}
      <section className="bg-surface py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4524DB]/10">
                <HelpCircle className="h-5 w-5 text-[#4524DB]" aria-hidden />
              </span>
              <h2 className="text-xl font-bold text-ink">Questions fréquentes</h2>
            </div>
            <Link
              href="/faq"
              className="text-sm font-medium text-[#4524DB] hover:underline"
            >
              Voir toute la FAQ →
            </Link>
          </div>

          <ul className="space-y-3">
            {faqLinks.map((item) => (
              <li key={item.question}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-surface px-5 py-4 text-sm font-medium text-ink shadow-sm transition-all hover:border-[#4524DB]/30 hover:shadow-md"
                >
                  {item.question}
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
