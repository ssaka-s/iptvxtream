import { Monitor, Smartphone, Tablet, Tv } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';

const devices = [
  { icon: Tv, name: 'Smart TV', desc: 'Samsung, LG, Android TV' },
  { icon: Monitor, name: 'Box TV', desc: 'Fire TV, Apple TV' },
  { icon: Smartphone, name: 'Mobile', desc: 'Android et iOS' },
  { icon: Tablet, name: 'Tablette', desc: 'iPad et tablettes Android' },
  { icon: Monitor, name: 'Navigateur', desc: 'Chrome, Safari, Firefox' },
];

export function DevicesSection() {
  return (
    <section className="bg-surface-muted py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            Multi-appareils
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            Regardez sur tous vos <span className="text-brand-blue">écrans</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Smart TV, box, smartphone, tablette ou ordinateur : la TV en direct vous suit partout.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {devices.map((device) => (
            <div
              key={device.name}
              className="flex w-40 flex-col items-center rounded-2xl border border-gray-200 bg-surface p-6 text-center shadow-card transition hover:border-gray-300 hover:shadow-md"
            >
              <device.icon className="h-10 w-10 text-brand-blue" aria-hidden />
              <h3 className="mt-4 font-semibold text-ink">{device.name}</h3>
              <p className="mt-1 text-xs text-muted">{device.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/appareils"
            className="font-medium text-brand-blue transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow rounded"
          >
            Voir tous les appareils compatibles →
          </Link>
        </p>
      </div>
    </section>
  );
}
