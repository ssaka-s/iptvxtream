'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  ClipboardList,
  AlertTriangle,
  RefreshCw,
  Send,
  ChevronRight,
  CheckCircle,
  Mail,
  User,
  Phone,
  MapPin,
  Scale,
  Clock,
  ExternalLink,
} from 'lucide-react';

const sections = [
  { id: 'politique-protection', label: 'Politique de protection', icon: ShieldCheck },
  { id: 'deposer-plainte', label: 'Déposer une plainte DMCA', icon: FileText },
  { id: 'processus-examen', label: "Processus d'examen", icon: ClipboardList },
  { id: 'fausses-declarations', label: 'Fausses déclarations', icon: AlertTriangle },
  { id: 'contre-notification', label: 'Contre-notification', icon: RefreshCw },
  { id: 'soumettre-avis', label: 'Soumettre un avis', icon: Send },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-30% 0px -60% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

function SectionAnchor({ id }: { id: string }) {
  return <span id={id} className="-mt-28 block pt-28" aria-hidden />;
}

function StepCard({
  step,
  icon: Icon,
  title,
  description,
}: {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <span className="mb-1 inline-block rounded-full bg-brand-blue/10 px-2 py-0.5 text-xs font-semibold text-brand-blue">
          Étape {step}
        </span>
        <h3 className="font-semibold text-ink">{title}</h3>
        <p className="mt-1 text-sm text-muted">{description}</p>
      </div>
    </div>
  );
}

function RequirementItem({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10">
        <Icon className="h-3.5 w-3.5 text-brand-blue" />
      </span>
      <span className="text-sm text-ink-muted">{label}</span>
    </li>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
      <span className="text-sm text-ink-muted">{children}</span>
    </li>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
      <p className="text-sm text-amber-800">{children}</p>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-5">
      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
      <p className="text-sm text-ink-muted">{children}</p>
    </div>
  );
}

export function DmcaContent() {
  const sectionIds = sections.map((s) => s.id);
  const active = useActiveSection(sectionIds);

  return (
    <div className="bg-surface-muted">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 text-center">
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gray-200/50 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gray-100 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue/10">
            <ShieldCheck className="h-8 w-8 text-brand-blue" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Avis de droits d&apos;auteur DMCA
          </h1>
          <p className="mt-4 text-lg text-ink-muted">
            Politique de conformité DMCA, processus de plainte, détails de contre-notification et
            engagement de réponse de OffreIPTV.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                Navigation rapide
              </p>
              <nav aria-label="Navigation DMCA">
                <ul className="space-y-1">
                  {sections.map(({ id, label, icon: Icon }) => {
                    const isActive = active === id;
                    return (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-brand-blue text-white shadow-sm'
                              : 'text-muted hover:bg-white hover:text-ink'
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          {label}
                          {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Clock className="h-4 w-4 text-brand-blue" />
                  Délai de réponse
                </div>
                <p className="mt-2 text-sm text-muted">
                  Toutes les demandes DMCA sont traitées dans les{' '}
                  <span className="font-semibold text-ink">24 heures</span> suivant leur réception.
                </p>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="space-y-16">
            {/* Section 1 — Copyright Protection Policy */}
            <section aria-labelledby="politique-protection-heading">
              <SectionAnchor id="politique-protection" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <h2 id="politique-protection-heading" className="text-2xl font-bold text-ink">
                  Politique de protection des droits d'auteur
                </h2>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted">
                <p>
                  OffreIPTV respecte les droits de propriété intellectuelle et se conforme au Digital
                  Millennium Copyright Act (DMCA). Nous prenons très au sérieux toute violation de
                  droits d'auteur et répondons rapidement aux avis valides de violations présumées.
                </p>
                <p>
                  Si vous pensez qu'un contenu accessible via notre service porte atteinte à vos
                  droits d'auteur, veuillez nous en informer immédiatement afin que nous puissions
                  enquêter et prendre les mesures appropriées.
                </p>
                <InfoBox>
                  <strong>Important :</strong> Pour nous aider à traiter votre demande rapidement,
                  veuillez inclure des informations claires et complètes dans votre avis.
                </InfoBox>
              </div>
            </section>

            {/* Section 2 — How to File */}
            <section aria-labelledby="deposer-plainte-heading">
              <SectionAnchor id="deposer-plainte" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <FileText className="h-5 w-5" />
                </span>
                <h2 id="deposer-plainte-heading" className="text-2xl font-bold text-ink">
                  Comment déposer une plainte DMCA
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Pour soumettre un avis de retrait DMCA valide, veuillez inclure les informations
                suivantes :
              </p>

              <div className="mt-8 space-y-6">
                {/* 1 — Contact */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                      1
                    </span>
                    <h3 className="font-semibold text-ink">Vos coordonnées</h3>
                  </div>
                  <ul className="space-y-3">
                    <RequirementItem icon={User} label="Votre nom légal complet" />
                    <RequirementItem icon={Mail} label="Adresse e-mail" />
                    <RequirementItem icon={Phone} label="Numéro de téléphone" />
                    <RequirementItem icon={MapPin} label="Adresse postale physique" />
                  </ul>
                </div>

                {/* 2 — Work */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                      2
                    </span>
                    <h3 className="font-semibold text-ink">Description de l'œuvre protégée</h3>
                  </div>
                  <ul className="space-y-3">
                    <RequirementItem
                      icon={FileText}
                      label="Identifiez l'œuvre dont vous pensez que les droits ont été violés"
                    />
                    <RequirementItem
                      icon={ClipboardList}
                      label="Décrivez le contenu de manière suffisamment claire pour que nous puissions comprendre votre réclamation"
                    />
                  </ul>
                </div>

                {/* 3 — Location */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                      3
                    </span>
                    <h3 className="font-semibold text-ink">Emplacement du contenu litigieux</h3>
                  </div>
                  <ul className="space-y-3">
                    <RequirementItem
                      icon={ExternalLink}
                      label="Indiquez l'emplacement exact ou la description de l'endroit où le contenu apparaît sur notre service"
                    />
                    <RequirementItem
                      icon={ClipboardList}
                      label="Incluez les URL, noms de chaînes, titres de contenu ou tout autre détail d'identification pertinent"
                    />
                  </ul>
                </div>

                {/* 4 — Legal */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                      4
                    </span>
                    <h3 className="font-semibold text-ink">Déclarations juridiques requises</h3>
                  </div>
                  <ul className="space-y-3">
                    <CheckItem>
                      Une déclaration selon laquelle vous avez de bonne foi la conviction que
                      l'utilisation n'est pas autorisée par le titulaire des droits, son mandataire
                      ou la loi
                    </CheckItem>
                    <CheckItem>
                      Une déclaration selon laquelle les informations contenues dans votre avis sont
                      exactes
                    </CheckItem>
                    <CheckItem>
                      Une déclaration faite sous peine de parjure, le cas échéant
                    </CheckItem>
                    <CheckItem>Votre signature physique ou électronique</CheckItem>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 — Review Process */}
            <section aria-labelledby="processus-examen-heading">
              <SectionAnchor id="processus-examen" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <ClipboardList className="h-5 w-5" />
                </span>
                <h2 id="processus-examen-heading" className="text-2xl font-bold text-ink">
                  Processus d'examen DMCA
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Une fois votre avis reçu, nous l'examinons aussi rapidement que possible et prenons
                les mesures appropriées si la plainte est valide.
              </p>

              <div className="mt-8 space-y-4">
                <StepCard
                  step={1}
                  icon={Send}
                  title="Soumettre l'avis"
                  description="Envoyez votre plainte DMCA avec tous les détails requis à notre adresse e-mail dédiée."
                />
                <StepCard
                  step={2}
                  icon={ClipboardList}
                  title="Nous examinons"
                  description="Notre équipe vérifie l'exhaustivité et la validité de l'avis dans les meilleurs délais."
                />
                <StepCard
                  step={3}
                  icon={CheckCircle}
                  title="Mesures prises"
                  description="Les plaintes valides sont examinées et traitées dans les 24 heures, conformément au droit d'auteur applicable."
                />
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-5">
                <Clock className="h-5 w-5 shrink-0 text-green-600" />
                <p className="text-sm text-green-800">
                  <strong>Engagement de délai de réponse :</strong> Nous traitons toutes les
                  demandes DMCA dans les 24 heures suivant leur réception. Les plaintes valides sont
                  examinées rapidement et les mesures appropriées sont prises conformément à la
                  législation applicable en matière de droits d'auteur.
                </p>
              </div>
            </section>

            {/* Section 4 — False Claims */}
            <section aria-labelledby="fausses-declarations-heading">
              <SectionAnchor id="fausses-declarations" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <AlertTriangle className="h-5 w-5" />
                </span>
                <h2 id="fausses-declarations-heading" className="text-2xl font-bold text-ink">
                  Avertissement concernant les fausses déclarations
                </h2>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted">
                <p>
                  Veuillez noter qu'en vertu de l'article 512(f) du DMCA, toute personne qui
                  déclare faussement en connaissance de cause qu'un contenu est en infraction peut
                  être tenue responsable.
                </p>
                <WarningBox>
                  <strong>Avertissement :</strong> Nous vous recommandons de consulter un conseiller
                  juridique avant de soumettre une plainte DMCA si vous n'êtes pas certain que le
                  contenu est en infraction.
                </WarningBox>
              </div>
            </section>

            {/* Section 5 — Counter-Notification */}
            <section aria-labelledby="contre-notification-heading">
              <SectionAnchor id="contre-notification" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <RefreshCw className="h-5 w-5" />
                </span>
                <h2 id="contre-notification-heading" className="text-2xl font-bold text-ink">
                  Contre-notification
                </h2>
              </div>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-muted">
                <p>
                  Si vous pensez qu'un contenu a été supprimé par erreur, vous pouvez soumettre une
                  contre-notification à la même adresse e-mail de contact.
                </p>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
                  <h3 className="mb-4 font-semibold text-ink">
                    La contre-notification doit inclure
                  </h3>
                  <ul className="space-y-3">
                    <RequirementItem
                      icon={User}
                      label="Votre nom, adresse, numéro de téléphone et adresse e-mail"
                    />
                    <RequirementItem
                      icon={FileText}
                      label="Identification du matériel supprimé ou désactivé"
                    />
                    <RequirementItem
                      icon={Scale}
                      label="Une déclaration sous peine de parjure que vous croyez de bonne foi que le matériel a été supprimé par erreur"
                    />
                    <RequirementItem
                      icon={MapPin}
                      label="Votre consentement à la juridiction des tribunaux français compétents"
                    />
                    <RequirementItem
                      icon={CheckCircle}
                      label="Votre signature physique ou électronique"
                    />
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 — Submit */}
            <section aria-labelledby="soumettre-avis-heading">
              <SectionAnchor id="soumettre-avis" />
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white">
                  <Send className="h-5 w-5" />
                </span>
                <h2 id="soumettre-avis-heading" className="text-2xl font-bold text-ink">
                  Soumettre votre avis DMCA
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                Envoyez votre plainte pour violation de droits d'auteur à notre adresse e-mail
                dédiée :
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-blue/20 bg-white shadow-card">
                <div className="bg-[#4524DB] px-6 py-8 text-center text-white">
                  <Mail className="mx-auto mb-3 h-10 w-10 opacity-90" />
                  <p className="text-sm font-medium text-white/80">Adresse e-mail de contact</p>
                  <a
                    href="mailto:dmca@streamtv.fr"
                    className="mt-2 block text-2xl font-bold text-white transition-opacity hover:opacity-80"
                  >
                    dmca@streamtv.fr
                  </a>
                </div>
                <div className="px-6 py-5">
                  <p className="text-center text-sm text-muted">
                    Pour un traitement plus rapide, veuillez utiliser{' '}
                    <span className="font-semibold text-ink">« Avis DMCA »</span> comme objet de
                    votre e-mail.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href="mailto:dmca@streamtv.fr?subject=Avis%20DMCA"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
                    >
                      <Mail className="h-4 w-4" />
                      Envoyer un avis DMCA
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-muted">
                OffreIPTV ne stocke ni ne diffuse aucun contenu protégé par des droits d'auteur. Tout
                le contenu est fourni par des prestataires tiers. Les utilisateurs sont responsables
                de s'assurer qu'ils ont le droit de visionner le contenu dans leur juridiction.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
