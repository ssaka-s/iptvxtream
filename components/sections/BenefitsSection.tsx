import { Headphones, Shield, Tv, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const benefits = [
  {
    icon: Tv,
    title: 'Large choix de chaînes',
    description:
      'Accédez à des chaînes généralistes, sportives, cinéma et documentaires pour toute la famille.',
  },
  {
    icon: Zap,
    title: 'Qualité HD et 4K',
    description: "Profitez d'une image nette et d'un son de qualité, adaptés à votre connexion internet.",
  },
  {
    icon: Shield,
    title: 'Service stable',
    description:
      'Une infrastructure fiable pour regarder la TV en streaming sans interruption majeure.',
  },
  {
    icon: Headphones,
    title: 'Support réactif',
    description: "Une équipe disponible pour vous accompagner lors de l'installation et de l'utilisation.",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            Pourquoi nous choisir
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            La TV en streaming,{' '}
            <span className="text-brand-blue">simplifiée</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Découvrez les avantages d&apos;une solution légale pour regarder la TV sur internet, sans
            engagement et sur tous vos appareils.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group cursor-default rounded-2xl border border-gray-200 bg-surface p-6 shadow-card transition-all duration-300 hover:border-[#4524DB]/30 hover:bg-[#4524DB] hover:shadow-lg"
            >
              <benefit.icon
                className="h-8 w-8 text-[#4524DB] transition-colors duration-300 group-hover:text-white"
                aria-hidden
              />
              <h3 className="mt-4 text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted transition-colors duration-300 group-hover:text-white/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
