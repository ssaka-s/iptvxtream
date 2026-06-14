import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CtaSection() {
  return (
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
              Prêt à regarder la TV en direct en quelques minutes ?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Accédez à des centaines de chaînes en HD et 4K, sans engagement.
            </p>
          </div>

          {/* right: card buttons */}
          <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
            <Link
              href="/offre"
              className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
            >
              <span>Voir les offres</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </Link>
            <Link
              href="/comment-ca-marche"
              className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
            >
              <span>Comment ça marche</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
