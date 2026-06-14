import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
  /** When true with highlighted, use blue gradient fill. */
  glowHighlight?: boolean;
  /** Use white card styling for light section backgrounds. */
  lightSurface?: boolean;
}

export function Card({
  children,
  className = '',
  highlighted = false,
  glowHighlight = false,
  lightSurface = false,
}: CardProps) {
  let surface: string;
  if (highlighted && glowHighlight) {
    surface =
      'bg-card-gradient border border-brand-light/30 shadow-glow shadow-card text-white hover:border-brand-light/50';
  } else if (highlighted) {
    surface = 'bg-brand-blue border border-brand-light/50 shadow-glow text-white';
  } else if (lightSurface) {
    surface =
      'border border-gray-200 bg-surface shadow-card hover:border-gray-300 hover:shadow-md text-ink';
  } else {
    surface = 'glass shadow-card-dark hover:border-white/20 hover:bg-white/[0.08]';
  }

  return (
    <div className={['rounded-2xl p-6 transition-all duration-300', surface, className].join(' ')}>
      {children}
    </div>
  );
}
