import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Tv,
  Smartphone,
  Monitor,
  Wifi,
  CheckCircle2,
  ArrowRight,
  Download,
} from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Appareils compatibles — TV en streaming sur tous vos écrans',
  description:
    'Regardez la TV en streaming sur Smart TV, Fire TV Stick, iPhone, Android, iPad, PC et Mac. Guide de compatibilité complet et installation en 5 minutes.',
  path: '/appareils',
});

interface Device {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  models: string[];
  steps: string[];
  badge?: string;
}

const devices: Device[] = [
  {
    id: 'smart-tv',
    emoji: '📺',
    title: 'Smart TV',
    subtitle: 'Samsung, LG, Android TV / Google TV',
    badge: 'Le plus populaire',
    models: ['Samsung (Tizen OS)', 'LG (webOS)', 'Android TV', 'Google TV (Sony, Philips…)', 'Hisense', 'TCL'],
    steps: [
      'Ouvrez l\'app store de votre TV (Samsung Store, LG Content Store ou Google Play)',
      'Recherchez et installez l\'application recommandée (fournie par email)',
      'Lancez l\'application et connectez-vous avec vos identifiants',
      'Sélectionnez votre chaîne et profitez en HD',
    ],
  },
  {
    id: 'fire-tv',
    emoji: '🔥',
    title: 'Amazon Fire TV Stick',
    subtitle: 'Fire TV Stick, Fire TV Cube',
    badge: 'Recommandé',
    models: ['Fire TV Stick (4K, 4K Max)', 'Fire TV Cube', 'Fire TV Edition (TV intégrée)'],
    steps: [
      'Depuis votre Fire TV, accédez à « Paramètres » → « Mon Fire TV » → « Options de développement »',
      'Activez « Applications de sources inconnues »',
      'Installez Downloader depuis l\'Amazon Store',
      'Entrez le code ou l\'URL fourni dans votre email de confirmation',
      'Installez et lancez l\'application — connectez-vous avec vos identifiants',
    ],
  },
  {
    id: 'android',
    emoji: '🤖',
    title: 'Android',
    subtitle: 'Smartphones & tablettes Android',
    models: ['Samsung Galaxy', 'Xiaomi / Redmi', 'OnePlus', 'Google Pixel', 'Huawei (sans GMS : APK)'],
    steps: [
      'Téléchargez l\'application via le lien fourni dans votre email (APK ou Google Play)',
      'Si APK : autorisez l\'installation depuis « sources inconnues » dans les paramètres',
      'Installez et ouvrez l\'application',
      'Connectez-vous avec vos identifiants',
    ],
  },
  {
    id: 'ios',
    emoji: '🍎',
    title: 'iPhone & iPad',
    subtitle: 'iOS 13 et supérieur',
    models: ['iPhone (12 et supérieur recommandé)', 'iPad (tous modèles récents)', 'iPod Touch'],
    steps: [
      'Suivez le lien de téléchargement fourni dans votre email de confirmation',
      'Installez l\'application depuis l\'App Store',
      'Ouvrez l\'application et entrez vos identifiants',
      'Profitez de vos chaînes en HD sur votre iPhone ou iPad',
    ],
  },
  {
    id: 'mac-pc',
    emoji: '💻',
    title: 'PC & Mac',
    subtitle: 'Navigateur web ou application dédiée',
    models: ['Windows 10 / 11', 'macOS (Safari, Chrome, Firefox)', 'Chromebook'],
    steps: [
      'Option 1 — Navigateur : ouvrez Chrome, Firefox ou Safari et accédez au lecteur web fourni',
      'Option 2 — Application : téléchargez et installez le client desktop (lien dans votre email)',
      'Connectez-vous avec vos identifiants',
      'Choisissez votre chaîne et lancez la lecture',
    ],
  },
  {
    id: 'apple-tv',
    emoji: '🖥️',
    title: 'Apple TV',
    subtitle: 'Apple TV 4K & HD',
    models: ['Apple TV 4K (2e et 3e génération)', 'Apple TV HD'],
    steps: [
      'Ouvrez l\'App Store sur votre Apple TV',
      'Installez l\'application recommandée (lien dans votre email)',
      'Lancez l\'application et connectez-vous',
      'Profitez de vos chaînes en 4K sur grand écran',
    ],
  },
];

const requirements = [
  {
    icon: Wifi,
    title: 'Connexion internet',
    items: ['HD : 10 Mbps min.', 'Full HD : 15 Mbps', '4K : 25 Mbps', 'Câble Ethernet conseillé'],
  },
  {
    icon: Tv,
    title: 'Smart TV',
    items: ['Samsung 2016+', 'LG webOS 3.5+', 'Android TV 7+', 'Google TV'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    items: ['Android 7.0+', 'iOS 13+', '2 Go RAM minimum', 'Stockage 200 Mo'],
  },
  {
    icon: Monitor,
    title: 'Ordinateur',
    items: ['Chrome 80+', 'Firefox 75+', 'Safari 13+', 'Edge 80+'],
  },
];

export default function AppareilsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-14 sm:px-12 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                  Multi-appareils
                </p>
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  La TV en streaming sur tous vos écrans
                </h1>
                <p className="mt-4 text-lg text-white/80">
                  Smart TV, Fire TV Stick, iPhone, Android, PC, Mac — regardez vos chaînes préférées
                  sur l&apos;appareil de votre choix, en HD ou 4K.
                </p>
                <Link
                  href="/offre"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#4524DB] shadow-md transition-all hover:bg-gray-100"
                >
                  Voir les offres <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>

              {/* Device icons grid */}
              <div className="mt-8 grid grid-cols-3 gap-3 lg:mt-0 lg:shrink-0">
                {[
                  { emoji: '📺', label: 'Smart TV' },
                  { emoji: '🔥', label: 'Fire TV' },
                  { emoji: '💻', label: 'PC / Mac' },
                  { emoji: '🤖', label: 'Android' },
                  { emoji: '🍎', label: 'iPhone' },
                  { emoji: '🖥️', label: 'Apple TV' },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col items-center gap-1 rounded-2xl border border-white/20 bg-white/10 p-3 text-center"
                  >
                    <span className="text-2xl">{d.emoji}</span>
                    <span className="text-xs font-medium text-white/80">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Device category nav ──────────────────────────────────── */}
      <section className="border-b border-gray-200 bg-white py-4">
        <div className="mx-auto max-w-5xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 pb-1">
            {devices.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 transition-all hover:border-[#4524DB]/40 hover:bg-[#4524DB]/5 hover:text-[#4524DB]"
              >
                <span>{d.emoji}</span>
                {d.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Device cards ─────────────────────────────────────────── */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {devices.map((device) => (
              <div
                key={device.id}
                id={device.id}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-gray-200 bg-surface shadow-card"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-gray-100 p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4524DB]/10 text-2xl">
                      {device.emoji}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-ink">{device.title}</h2>
                        {device.badge && (
                          <span className="rounded-full bg-[#4524DB] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                            {device.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted">{device.subtitle}</p>
                    </div>
                  </div>
                  <Link
                    href="/installation"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#4524DB]/30 px-4 py-1.5 text-xs font-semibold text-[#4524DB] transition-all hover:bg-[#4524DB]/5"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden />
                    Guide détaillé
                  </Link>
                </div>

                <div className="grid gap-0 p-6 sm:grid-cols-2 sm:gap-8">
                  {/* Models */}
                  <div>
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                      Modèles compatibles
                    </h3>
                    <ul className="space-y-1.5">
                      {device.models.map((m) => (
                        <li key={m} className="flex items-center gap-2 text-sm text-ink">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div className="mt-6 sm:mt-0">
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted">
                      Installation en {device.steps.length} étapes
                    </h3>
                    <ol className="space-y-2">
                      {device.steps.map((step, i) => (
                        <li key={step} className="flex gap-3 text-sm text-muted">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4524DB]/10 text-[10px] font-bold text-[#4524DB]">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements table ───────────────────────────────────── */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-ink">
            Configuration minimale requise
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((req) => (
              <div
                key={req.title}
                className="rounded-2xl border border-gray-200 bg-surface p-5 shadow-card"
              >
                <req.icon className="mb-3 h-7 w-7 text-[#4524DB]" aria-hidden />
                <h3 className="mb-3 text-sm font-bold text-ink">{req.title}</h3>
                <ul className="space-y-1.5">
                  {req.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#4524DB]" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-surface-muted py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#4524DB]/20 bg-[#4524DB]/5 p-7 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4524DB]">
                Vous avez déjà votre abonnement ?
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink">
                Suivez notre guide d&apos;installation pas à pas
              </h3>
              <p className="mt-1 text-sm text-muted">
                Un tutoriel dédié pour chaque appareil — installation en moins de 5 minutes.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link
                href="/installation"
                className="inline-flex items-center gap-2 rounded-full bg-[#4524DB] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#3a1ec4]"
              >
                Guide d&apos;installation <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/offre"
                className="inline-flex items-center gap-2 rounded-full border border-[#4524DB] px-7 py-3 text-sm font-semibold text-[#4524DB] transition-all hover:bg-[#4524DB]/5"
              >
                Voir les offres
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
