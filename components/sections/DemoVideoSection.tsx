import { Play } from 'lucide-react';

const DEMO_VIDEO_URL = 'https://player.vimeo.com/video/916781453?autoplay=1&muted=1&loop=1';

export function DemoVideoSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            TV en Streaming en France — Découvrez OffreIPTV en action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            Explorez l'interface que vous utiliserez sur votre Smart TV, mobile ou navigateur.
            Chaînes en direct, replay et lecture HD fluide — avant même de démarrer votre essai gratuit.
          </p>
        </div>

        {/* Video player */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-card">
          <div className="relative aspect-video w-full bg-ink">
            {DEMO_VIDEO_URL ? (
              <iframe
                src={DEMO_VIDEO_URL}
                title="Démonstration OffreIPTV"
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-ink via-ink-muted to-ink">
                <button
                  type="button"
                  aria-label="Lire la démonstration"
                  className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-md transition-transform hover:scale-105"
                >
                  <Play className="ml-1 h-9 w-9 text-white" fill="currentColor" aria-hidden />
                </button>
                <p className="text-sm font-medium text-white/70">
                  Ajoutez votre lien vidéo dans <code className="rounded bg-white/10 px-1">DemoVideoSection.tsx</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
