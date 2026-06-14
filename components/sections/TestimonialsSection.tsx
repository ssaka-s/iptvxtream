import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

const testimonials = [
  {
    quote:
      'Installation très simple sur ma Smart TV. Je regarde mes chaînes préférées en HD sans problème.',
    author: 'Marie L.',
    plan: 'Abonnée Essentiel',
    ville: 'Lyon',
  },
  {
    quote:
      'Enfin une solution claire et sans engagement. Le support m\'a aidé à configurer l\'application en quelques minutes.',
    author: 'Thomas D.',
    plan: 'Abonné Confort',
    ville: 'Paris',
  },
  {
    quote:
      'Parfait pour suivre le sport en direct. La qualité d\'image est excellente sur ma connexion fibre.',
    author: 'Sophie M.',
    plan: 'Abonnée Premium',
    ville: 'Marseille',
  },
  {
    quote:
      'Interface fluide et prix honnête. Mes parents ont pu s\'y mettre sans difficulté sur la box.',
    author: 'Karim B.',
    plan: 'Abonné Essentiel',
    ville: 'Toulouse',
  },
  {
    quote:
      'Très stable le soir et le week-end. Je recommande pour les infos et les chaînes généralistes.',
    author: 'Julie R.',
    plan: 'Abonnée Confort',
    ville: 'Nantes',
  },
  {
    quote:
      'Après deux semaines d\'essai, je suis resté : zéro prise de tête et réponses rapides par email.',
    author: 'Nicolas P.',
    plan: 'Abonné Premium',
    ville: 'Bordeaux',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            Témoignages
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Ce que disent nos <span className="text-brand-blue">abonnés</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              key={`${t.author}-${t.ville}`}
              className="!border-gray-200 !bg-surface-muted !shadow-card hover:!border-gray-300 hover:!shadow-md"
            >
              <p className="text-lg leading-none text-amber-400" role="img" aria-label="5 sur 5">
                <span aria-hidden>★★★★★</span>
              </p>
              <p className="mt-3 text-muted">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-ink">{t.author}</p>
              <p className="text-sm text-muted">
                {t.plan} · {t.ville}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
