import Link from 'next/link';
import { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  target?: never;
  rel?: never;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  type?: never;
  onClick?: () => void;
  disabled?: never;
  target?: string;
  rel?: string;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-black hover:bg-gray-800 text-white border border-black',
  dark: 'bg-black hover:bg-gray-800 text-white border border-black',
  secondary: 'bg-[#4524DB] hover:bg-[#3a1ec4] text-white border border-[#4524DB]',
  outline:
    'bg-transparent hover:bg-[#4524DB]/10 text-[#4524DB] border border-[#4524DB] hover:border-[#4524DB]',
  ghost: 'bg-transparent hover:bg-black/5 text-ink border border-transparent',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

function getClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return [
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className, icon } = props;
  const classes = getClasses(variant, size, className);

  if ('href' in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        target={props.target}
        rel={props.rel}
        onClick={props.onClick}
      >
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
      {icon}
    </button>
  );
}
