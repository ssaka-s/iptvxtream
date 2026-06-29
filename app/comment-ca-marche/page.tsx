import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CreditCard,
  Mail,
  ShoppingCart,
  Wifi,
  Monitor,
  Smartphone,
  Tv,
  CheckCircle2,
  Shield,
  Zap,
  Ban,
  HeadphonesIcon,
  ArrowRight,
  ArrowUpRight,
  Play,
  Users,
  Clock,
  Star,
} from 'lucide-react';
import { JsonLd } from '@/components/ui/JsonLd';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Badge } from '@/components/ui/Badge';
import { buildMetadata } from '@/lib/metadata';
import { SETUP_FAQ_ITEMS } from '@/lib/faq-data';

export const metadata: Metadata = buildMetadata({
  title: 'Comment regarder la TV en streaming',
  description:
    "Découvrez comment fonctionne la TV en ligne : choisir une offre, payer en sécurité, recevoir vos accès et installer l'application en quelques minutes.",
  path: '/comment-ca-marche',
});

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const steps = [
  {
    icon: ShoppingCart,
    number: '01',
    title: 'Choisissez votre formule',
    description:
      'Comparez nos formules sans engagement — Essentiel, Confort ou Premium — et sélectionnez celle qui correspond à votre foyer.',
    detail: '< 2 minutes',
    color: 'from-blue-500 to-brand-blue',
    highlight: 'Sans engagement',
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Finalisez votre abonnement',
    description:
      'Paiement 100 % sécurisé sur notre page dédiée. Aucune donnée bancaire stockée sur ce site. CB, PayPal et plus.',
    detail: 'Paiement sécurisé',
    color: 'from-violet-500 to-purple-600',
    highlight: '100 % sécurisé',
  },
  {
    icon: Mail,
    number: '03',
    title: 'Recevez vos accès par e-mail',
    description:
      'Dans les minutes suivant votre paiement, vous recevez vos identifiants et les liens de téléchargement.',
    detail: 'Envoi immédiat',
    color: 'from-emerald-500 to-teal-600',
    highlight: 'Instantané',
  },
  {
    icon: Play,
    number: '04',
    title: 'Installez et regardez',
    description:
      "Téléchargez l'application sur votre Smart TV, mobile ou navigateur. Connectez-vous et profitez en HD ou 4K.",
    detail: 'En moins de 5 min',
    color: 'from-orange-500 to-amber-500',
    highlight: 'HD & 4K',
  },
];

const stats = [
  { icon: Clock, value: '10 min', label: 'Pour démarrer' },
  { icon: Users, value: '+50 000', label: 'Abonnés actifs' },
  { icon: Tv, value: 'HD & 4K', label: 'Qualité garantie' },
  { icon: Star, value: '4.8/5', label: 'Satisfaction client' },
];

const guarantees = [
  {
    icon: Shield,
    title: 'Paiement sécurisé',
    description: 'Transactions chiffrées SSL. Aucune donnée bancaire stockée sur nos serveurs.',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Zap,
    title: 'Accès immédiat',
    description: 'Vos identifiants arrivent en quelques minutes après validation du paiement.',
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-100',
  },
  {
    icon: Ban,
    title: 'Sans engagement',
    description: 'Résiliez à tout moment depuis votre espace client, sans frais ni justification.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support 7j/7',
    description: 'Notre équipe est disponible tous les jours pour vous accompagner.',
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-100',
  },
];

const devices = [
  { emoji: '📺', label: 'Smart TV', sub: 'Samsung, LG, Sony' },
  { emoji: '🔥', label: 'Fire TV', sub: 'Firestick, Fire Cube' },
  { emoji: '📱', label: 'Android', sub: 'Téléphone & tablette' },
  { emoji: '🍎', label: 'iPhone / iPad', sub: 'iOS & Apple TV' },
  { emoji: '💻', label: 'PC / Mac', sub: 'Tous navigateurs' },
  { emoji: '🟣', label: 'Roku', sub: 'TV & Stick' },
  { emoji: '👽', label: 'Android TV', sub: 'Nvidia Shield, TCL…' },
  { emoji: '📡', label: 'BuzzTV', sub: 'Tous modèles' },
];

const requirements = [
  {
    icon: Wifi,
    title: 'Connexion internet',
    items: ['10 Mbps pour le HD', '15 Mbps pour le Full HD', '25 Mbps pour le 4K'],
  },
  {
    icon: Tv,
    title: 'Smart TV',
    items: ['Samsung Tizen', 'LG WebOS', 'Android TV / Google TV'],
  },
  {
    icon: Monitor,
    title: 'Ordinateur & Box',
    items: ['Chrome, Safari, Firefox', 'Amazon Fire TV', 'Apple TV'],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Tablette',
    items: ['Android 6.0+', 'iOS 13+', 'iPad récent'],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function CommentCaMarchePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SETUP_FAQ_ITEMS.map((item) => ({
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            {/* left: text */}
            <div className="relative max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                Comment ça marche
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                La TV en direct en 4 étapes
              </h1>
              <p className="mt-4 text-lg text-white/80">
                De la souscription à la première chaîne regardée : moins de{' '}
                <strong className="text-white">10 minutes</strong> vous séparent de votre TV en direct.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Aucune box requise', 'HD & 4K inclus', 'Essai gratuit 24 h', 'Résiliation libre'].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    ✓ {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* right: card buttons */}
            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link
                href="https://wa.me/12267051311?text=Bonjour%2C%20je%20souhaite%20demander%20un%20essai%20gratuit%20IPTV%2C%20merci." target="_blank" rel="noopener noreferrer"
                className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
              >
                <span>Essai gratuit 24 h</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Une question ?</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 lg:grid-cols-4 lg:divide-y-0">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 py-8 text-center">
                <Icon className="mb-1 h-5 w-5 text-brand-blue" aria-hidden />
                <span className="text-2xl font-extrabold text-ink sm:text-3xl">{value}</span>
                <span className="text-sm text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps ────────────────────────────────────────────────── */}
      <section className="bg-surface-muted py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <Badge variant="light" className="mb-4">Processus</Badge>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              De zéro à la TV en direct en{' '}
              <span className="text-brand-blue">quelques minutes</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Un parcours simple et guidé, de l&apos;inscription jusqu&apos;au premier visionnage.
            </p>
          </div>

          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="group relative flex flex-col">
                {/* connector */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-full top-10 z-10 hidden h-px w-6 bg-gradient-to-r from-gray-300 to-gray-200 lg:block"
                    aria-hidden
                  />
                )}

                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-surface p-6 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-blue/20 group-hover:shadow-md">
                  {/* number + icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-xl font-extrabold text-white shadow-md`}
                    >
                      {step.number}
                    </span>
                    <step.icon className="h-5 w-5 text-muted-light" aria-hidden />
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-ink">{step.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>

                  {/* badge */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                      {step.detail}
                    </span>
                    <span className="text-xs font-medium text-muted-light">{step.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical list */}
          <div className="relative flex flex-col gap-5 lg:hidden">
            <div
              className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-brand-blue/60 via-brand-blue/20 to-transparent"
              aria-hidden
            />
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative flex gap-5 rounded-2xl border border-gray-200 bg-surface p-5 shadow-card"
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-lg font-extrabold text-white shadow-md`}
                >
                  {step.number}
                </span>
                <div className="flex-1 pt-0.5">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <span className="ml-auto shrink-0 rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-xs font-medium text-brand-blue">
                      {step.detail}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantees ───────────────────────────────────────────── */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="light" className="mb-4">Nos engagements</Badge>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Conçu pour votre tranquillité
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Sécurité, rapidité et flexibilité — chaque aspect du service est pensé pour vous.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className={`group flex flex-col gap-3 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${bg}`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border border-current/10 bg-white shadow-sm ${color}`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Devices showcase ─────────────────────────────────────── */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Badge variant="light" className="mb-4">Compatibilité</Badge>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Regardez sur tous vos appareils
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Pas de matériel spécifique à acheter — tout fonctionne sur vos équipements existants.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {devices.map((device) => (
              <div
                key={device.label}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-surface p-4 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:shadow-md"
              >
                <span className="text-3xl">{device.emoji}</span>
                <span className="text-xs font-semibold text-ink">{device.label}</span>
                <span className="text-[10px] leading-tight text-muted">{device.sub}</span>
              </div>
            ))}
          </div>

          {/* Detailed requirements grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((req) => (
              <div
                key={req.title}
                className="rounded-2xl border border-gray-200 bg-surface p-5 shadow-card"
              >
                <req.icon className="mb-3 h-7 w-7 text-brand-blue" aria-hidden />
                <h3 className="mb-3 text-sm font-semibold text-ink">{req.title}</h3>
                <ul className="space-y-1.5">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-blue" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Installation CTA banner ──────────────────────────────── */}
      <section className="bg-surface py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-brand-blue/20 bg-gradient-to-r from-brand-blue/5 via-brand-blue/10 to-brand-blue/5 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
                Vous avez déjà votre abonnement ?
              </p>
              <h3 className="mt-1 text-xl font-bold text-ink">
                Suivez notre guide d&apos;installation pas à pas
              </h3>
              <p className="mt-1 text-sm text-muted">
                Firestick, Smart TV, iPhone, Android, PC/Mac — un guide dédié par appareil.
              </p>
            </div>
            <Link
              href="/installation"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-200 hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
            >
              Guide d&apos;installation <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Setup FAQ ────────────────────────────────────────────── */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Badge variant="light" className="mb-4">FAQ Installation</Badge>
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Questions sur l&apos;installation
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Les réponses aux questions les plus fréquentes avant de démarrer.
            </p>
          </div>
          <FAQAccordion items={SETUP_FAQ_ITEMS} />
          <div className="mt-8 text-center">
            <p className="text-sm text-muted">
              Vous ne trouvez pas votre réponse ?{' '}
              <Link
                href="/contact"
                className="font-medium text-brand-blue underline underline-offset-2 hover:text-brand-dark"
              >
                Contactez notre support
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            {/* left: text */}
            <div className="relative max-w-lg">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Lancez-vous en quelques minutes
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Essai gratuit 24 h — sans carte bancaire, sans engagement, annulable à tout moment.
              </p>
            </div>

            {/* right: card buttons */}
            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link
                href="https://wa.me/12267051311?text=Bonjour%2C%20je%20souhaite%20demander%20un%20essai%20gratuit%20IPTV%2C%20merci." target="_blank" rel="noopener noreferrer"
                className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
              >
                <span>Essai gratuit 24 h</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/installation"
                className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Guide d&apos;installation</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
