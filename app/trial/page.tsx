'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  CheckCircle,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  Settings,
  Shield,
  Tv,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const includes = [
  'Chaînes françaises sélectionnées : TF1, M6, Canal+, beIN Sports, sport, cinéma — découvrez nos chaînes',
  'Streaming Full HD et fonctionnalités de replay',
  'Appel d\'installation guidé si vous avez besoin d\'accompagnement',
  'Option de mise à niveau instantanée une fois satisfait — voir nos offres',
];

const trustPoints = [
  { icon: Users, text: 'Support disponible pendant l\'activation' },
  { icon: Tv, text: 'Compatible Smart TV, Fire TV, Apple TV et plus — voir nos appareils' },
  { icon: CheckCircle, text: 'Aucun paiement requis pour démarrer votre test' },
];

const features = [
  {
    icon: Settings,
    title: 'Configuration personnalisée',
    description:
      'Nous vérifions votre appareil, votre version d\'application et votre débit pour vous fournir le bon format de playlist et les instructions adaptées.',
  },
  {
    icon: Shield,
    title: 'Activation sécurisée',
    description:
      'Les lignes d\'essai sont générées sur une infrastructure conforme, protégée par SSL et des identifiants uniques qui expirent après 24 heures.',
  },
  {
    icon: MessageCircle,
    title: 'Support en direct',
    description:
      'Besoin d\'aide ? Rejoignez-nous sur Telegram ou par e-mail et nous résoudrons le problème avec vous.',
  },
];

const stats = [
  { value: '22 500+', label: 'chaînes TV en direct disponibles' },
  { value: '80 000+', label: 'titres VOD avec filtres de genre' },
  { value: '100 %', label: 'sources légales de partenaires licenciés' },
  { value: '9h–22h', label: 'heures de réponse pour l\'assistance' },
];

const steps = [
  {
    n: 1,
    title: 'Vérification & configuration',
    description:
      'Notre équipe vérifie vos informations et prépare la playlist, l\'EPG et les identifiants de connexion adaptés à votre appareil.',
  },
  {
    n: 2,
    title: 'Livraison & instructions',
    description:
      'Vous recevez un e-mail (ou un message Telegram) avec vos identifiants d\'essai et un guide d\'installation pas à pas.',
  },
  {
    n: 3,
    title: 'Évaluation de 24 heures',
    description:
      'Regardez sur vos écrans préférés. En cas de problème de buffering ou de chaînes, répondez-nous et nous ajusterons en temps réel.',
  },
  {
    n: 4,
    title: 'Mise à niveau facile',
    description:
      'Prêt à continuer ? Choisissez une offre — nous pouvons convertir votre essai en abonnement complet instantanément.',
  },
];

const faqs = [
  {
    q: 'Dois-je fournir mes coordonnées bancaires ?',
    a: 'Non. Nous demandons uniquement des informations de contact pour vous livrer vos identifiants. Le paiement n\'est demandé que si vous choisissez de vous abonner.',
  },
  {
    q: 'Puis-je prolonger l\'essai ?',
    a: 'Les essais durent 24 heures. Si vous avez besoin de plus de temps en raison de problèmes d\'installation, contactez-nous — nous prolongeons souvent d\'une journée supplémentaire une fois ceux-ci résolus.',
  },
  {
    q: 'Et si mon appareil n\'est pas dans la liste ?',
    a: 'Sélectionnez « Autre appareil » et décrivez-le dans le champ notes. Nous prenons en charge la plupart des applications et matériels compatibles IPTV.',
  },
  {
    q: 'Combien de temps prend l\'activation ?',
    a: 'Pendant les heures ouvrables, nous répondons généralement en moins de 2 heures. Les demandes en soirée sont traitées en priorité le lendemain matin.',
  },
];

const devices = [
  'Smart TV (Samsung, LG)',
  'Amazon Fire TV / Firestick',
  'Apple TV',
  'Android TV (Nvidia Shield, Formuler)',
  'Mobile / Tablette',
  'PC / Mac',
  'Autre appareil',
];

const contacts = [
  { id: 'email', label: 'E-mail', icon: Mail },
  { id: 'phone', label: 'Appel téléphonique', icon: Phone },
  { id: 'telegram', label: 'Telegram', icon: MessageCircle },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
];

function inputCls() {
  return 'w-full rounded-lg border border-gray-200 bg-surface px-4 py-2.5 text-ink placeholder-muted outline-none transition focus:border-brand-blue focus:ring-1 focus:ring-brand-blue';
}

export default function TrialPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [contact, setContact] = useState('email');

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            <div className="relative max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
                Accès IPTV 24 heures
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Testez OffreIPTV sur vos appareils avant de vous abonner.
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Dites-nous comment vous regardez la TV et nous créerons une ligne d&apos;essai personnalisée, avec chaînes françaises, sport et VOD, prête en quelques heures.
              </p>
              <ul className="mt-6 space-y-2">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-sm text-white/80">
                    <Icon className="h-4 w-4 shrink-0 text-white/60" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link
                href="#form"
                className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
              >
                <span>Demander l&apos;essai gratuit</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/offre"
                className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Comparer les offres</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's included ── */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-ink sm:text-3xl">Ce qui est inclus</h2>
          <ul className="space-y-4">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Form ── */}
      <section id="form" className="bg-surface-muted py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="mb-2 text-2xl font-bold text-ink sm:text-3xl">Demandez votre essai gratuit</h2>
          <p className="mb-8 text-muted">
            Remplissez le formulaire ci-dessous pour que nous puissions personnaliser votre expérience. Plus vous fournissez de détails, plus vite nous pouvons activer votre essai.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-surface p-6 shadow-card sm:p-8">
            <form className="space-y-6" action="#" method="POST">
              {/* Contact details */}
              <fieldset>
                <legend className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
                  Coordonnées
                </legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="trial-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Nom complet <span className="text-brand-blue">*</span>
                    </label>
                    <input id="trial-name" name="name" type="text" autoComplete="name" required className={inputCls()} placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label htmlFor="trial-email" className="mb-1.5 block text-sm font-medium text-ink">
                      Adresse e-mail <span className="text-brand-blue">*</span>
                    </label>
                    <input id="trial-email" name="email" type="email" autoComplete="email" required className={inputCls()} placeholder="vous@exemple.fr" />
                  </div>
                  <div>
                    <label htmlFor="trial-phone" className="mb-1.5 block text-sm font-medium text-ink">
                      Numéro de téléphone <span className="text-brand-blue">*</span>
                    </label>
                    <input id="trial-phone" name="phone" type="tel" autoComplete="tel" required className={inputCls()} placeholder="+33 6 00 00 00 00" />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-ink">Canal de contact préféré</p>
                    <div className="flex flex-wrap gap-3">
                      {contacts.map(({ id, label, icon: Icon }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setContact(id)}
                          className={[
                            'flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition',
                            contact === id
                              ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                              : 'border-gray-200 bg-surface-muted text-muted hover:border-gray-300 hover:text-ink',
                          ].join(' ')}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Streaming preferences */}
              <fieldset>
                <legend className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
                  Préférences de streaming
                </legend>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="trial-device" className="mb-1.5 block text-sm font-medium text-ink">
                      Appareil principal <span className="text-brand-blue">*</span>
                    </label>
                    <select id="trial-device" name="device" required className={inputCls()}>
                      <option value="" disabled selected>Sélectionnez un appareil</option>
                      {devices.map((d) => (
                        <option key={d} value={d} className="bg-surface">{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="trial-app" className="mb-1.5 block text-sm font-medium text-ink">
                      Application / lecteur que vous prévoyez d&apos;utiliser
                    </label>
                    <input id="trial-app" name="app" type="text" className={inputCls()} placeholder="ex: IPTV Smarters, TiviMate…" />
                  </div>
                  <div>
                    <label htmlFor="trial-notes" className="mb-1.5 block text-sm font-medium text-ink">
                      Dites-nous tout ce qui peut nous aider (facultatif)
                    </label>
                    <textarea id="trial-notes" name="notes" rows={3} className={inputCls()} placeholder="Chaînes souhaitées, débit internet, remarques…" />
                  </div>
                </div>
              </fieldset>

              <Button type="submit" size="lg" variant="primary" className="w-full justify-center">
                Demander l&apos;accès à l&apos;essai
              </Button>

              <p className="text-center text-xs text-muted">
                Nous répondons pendant les heures ouvrables. Aucun paiement requis — nous vous enverrons les options de mise à niveau après votre essai si vous êtes satisfait.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── Setup in minutes ── */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">Configuré en quelques minutes, streamé pendant une journée.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              Chaque essai est configuré manuellement par notre équipe pour correspondre à votre appareil, votre débit et vos préférences de chaînes. Ainsi, vous pouvez juger la qualité et la fiabilité avant de payer quoi que ce soit.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-surface-muted p-6 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <Icon className="h-6 w-6 text-brand-blue" aria-hidden />
                </div>
                <h3 className="mb-2 font-semibold text-ink">{title}</h3>
                <p className="text-sm text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-surface-muted py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold text-ink sm:text-3xl">Pourquoi les Français choisissent OffreIPTV</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-gray-200 bg-surface p-6 text-center shadow-card">
                <p className="text-3xl font-bold text-brand-blue">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-gray-200 bg-surface p-6 text-center text-sm text-muted shadow-card">
            <strong className="text-ink">Engagement de conformité.</strong> OffreIPTV respecte la législation française sur le droit d&apos;auteur et la protection des données. En soumettant ce formulaire, vous acceptez nos{' '}
            <a href="/conditions-generales" className="text-brand-blue underline">Conditions générales</a>,{' '}
            <a href="/confidentialite" className="text-brand-blue underline">Politique de confidentialité</a> et{' '}
            <a href="/mentions-legales" className="text-brand-blue underline">Mentions légales</a>.
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-ink sm:text-3xl">Que se passe-t-il après votre soumission ?</h2>
          <div className="space-y-6">
            {steps.map(({ n, title, description }) => (
              <div key={n} className="flex gap-6 rounded-2xl border border-gray-200 bg-surface-muted p-6 shadow-card">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue font-bold text-white">
                  {n}
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-ink">{title}</h3>
                  <p className="text-sm text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-surface-muted py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">FAQ sur l&apos;essai gratuit</h2>
            <p className="mt-3 text-muted">Réponses rapides avant de demander votre ligne de test de 24 heures.</p>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <div key={q} className="overflow-hidden rounded-xl border border-gray-200 bg-surface shadow-card">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} aria-hidden />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-200 px-6 py-4 text-sm text-muted">{a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
