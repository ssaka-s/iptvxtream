import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const steps = [
  {
    number: '1',
    title: 'Choisissez votre offre',
    description: 'Comparez nos formules sans engagement et sélectionnez celle qui vous convient.',
  },
  {
    number: '2',
    title: 'Finalisez l\'abonnement',
    description: 'Paiement sécurisé sur notre page externe dédiée.',
  },
  {
    number: '3',
    title: 'Installez et regardez',
    description: 'Recevez vos instructions par email et commencez à regarder la TV en direct.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            Comment ça marche
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            3 étapes pour <span className="text-brand-blue">commencer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Un processus simple pour accéder à la TV en streaming en quelques minutes.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-200 bg-surface-muted p-8 text-center shadow-card transition-all duration-300 hover:border-gray-300 hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/comment-ca-marche" variant="outline">
            En savoir plus
          </Button>
          <Button href="/offre" variant="primary">Voir les offres</Button>
        </div>
      </div>
    </section>
  );
}
