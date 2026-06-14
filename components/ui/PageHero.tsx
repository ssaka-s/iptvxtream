import { type ReactNode } from 'react';
import { Badge } from './Badge';

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function PageHero({ badge, title, description, children }: PageHeroProps) {
  return (
    <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-gray-200/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gray-100 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <Badge variant="light" className="mb-6">
            {badge}
          </Badge>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
