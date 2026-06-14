import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { InstallationGuide } from '@/components/sections/InstallationGuide';

export const metadata: Metadata = buildMetadata({
  title: 'Guide d\'installation — TV en streaming sur tous vos appareils',
  description:
    'Installez votre service de TV en streaming en quelques minutes sur Fire TV Stick, Android TV, iPhone, Smart TV, PC/Mac et plus. Tutoriels pas à pas pour tous les appareils.',
  path: '/installation',
});

export default function InstallationPage() {
  return (
    <>
      {/* ── Hero ── */}
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
                Guide d&apos;installation
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Installez votre TV en streaming en quelques minutes
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Choisissez votre appareil ci-dessous et suivez les instructions pas à pas pour commencer à regarder.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Smart TV', 'Firestick', 'Android TV', 'iPhone / iPad', 'PC / Mac'].map((device) => (
                  <span
                    key={device}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
                  >
                    {device}
                  </span>
                ))}
              </div>
            </div>

            {/* right: card buttons */}
            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link
                href="/trial"
                className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
              >
                <span>Essai gratuit 24 h</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Besoin d&apos;aide ?</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InstallationGuide />
    </>
  );
}
