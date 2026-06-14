import { type ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'light' | 'success';
  className?: string;
}

const variantClasses = {
  default: 'bg-white/10 text-muted-light border-white/20',
  accent: 'bg-brand-blue/20 text-brand-light border-brand-blue/40',
  light: 'bg-[#4524DB]/10 text-[#4524DB] border-[#4524DB]/20',
  success: 'bg-emerald-500/20 text-emerald-600 border-emerald-500/40',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
