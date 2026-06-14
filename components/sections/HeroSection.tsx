import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 pt-28 pb-16 lg:pb-24">
      <div
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-gray-200/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gray-100 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-left">
            <Badge variant="light" className="mb-6">
              TV en streaming légale en France
            </Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Regardez la TV en direct en France, partout et à tout moment
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Profitez de vos chaînes préférées en HD et 4K avec notre{' '}
              <Link
                href="/chaines"
                className="text-brand-blue underline underline-offset-2 hover:text-brand-dark"
              >
                service de TV en streaming
              </Link>
              , sans engagement, sur Smart TV, mobile, tablette ou navigateur. Découvrez notre{' '}
              <Link
                href="/trial"
                className="text-brand-blue underline underline-offset-2 hover:text-brand-dark"
              >
                essai gratuit
              </Link>
              , comparez nos{' '}
              <Link
                href="/offre"
                className="text-brand-blue underline underline-offset-2 hover:text-brand-dark"
              >
                offres de TV en ligne
              </Link>{' '}
              et installez l&apos;
              <Link
                href="/appareils"
                className="text-brand-blue underline underline-offset-2 hover:text-brand-dark"
              >
                application sur vos appareils
              </Link>
              .
            </p>
            <div className="mt-10 flex max-w-md flex-col gap-4">
              <Button href="/trial" size="lg" className="w-full justify-center sm:w-auto">
                Essai gratuit 24 h
              </Button>
              <Button
                href="/offre"
                variant="outline"
                size="lg"
                className="w-full justify-center sm:w-auto"
              >
                Comparer les offres TV
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted">
              Sans engagement · Résiliable à tout moment · Fonctionne partout en France
            </p>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl drop-shadow-2xl">
              <Image
                src="/hero-devices.png"
                alt="OffreIPTV sur Smart TV, mobile, tablette et ordinateur"
                width={1024}
                height={720}
                className="w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
