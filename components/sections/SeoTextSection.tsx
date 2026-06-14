import Link from 'next/link';

export function SeoTextSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-ink sm:text-2xl">
          Pourquoi OffreIPTV est le meilleur service de{' '}
          <Link href="/chaines" className="text-brand-blue underline underline-offset-2 hover:text-brand-dark">
            TV en streaming
          </Link>{' '}
          en France
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-muted">
          En tant que référence française de la{' '}
          <Link href="/chaines" className="text-brand-blue underline underline-offset-2 hover:text-brand-dark">
            TV en ligne
          </Link>
          {' '}et l'un des premiers{' '}
          <Link href="/offre" className="text-brand-blue underline underline-offset-2 hover:text-brand-dark">
            fournisseurs de TV par internet
          </Link>
          , OffreIPTV vous propose plus de{' '}
          <strong>200 chaînes en direct</strong>, des milliers de contenus à la demande et une activation immédiate.
          Comparez nos{' '}
          <Link href="/offre" className="text-brand-blue underline underline-offset-2 hover:text-brand-dark">
            offres de streaming TV
          </Link>
          {' '}et découvrez pourquoi des milliers de foyers en France choisissent OffreIPTV pour leur{' '}
          <Link href="/offre" className="text-brand-blue underline underline-offset-2 hover:text-brand-dark">
            abonnement TV sans engagement
          </Link>
          . Découvrez aussi{' '}
          <Link href="/comment-ca-marche" className="text-brand-blue underline underline-offset-2 hover:text-brand-dark">
            comment choisir le meilleur service de TV en streaming en France
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
