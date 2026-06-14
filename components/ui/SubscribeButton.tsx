'use client';

import { ExternalLink } from 'lucide-react';
import { trackSubscribeClick } from '@/lib/analytics';
import { Button } from './Button';

interface SubscribeButtonProps {
  plan: 'basic' | 'standard' | 'premium';
  checkoutUrl: string;
  label?: string;
  className?: string;
}

export function SubscribeButton({
  plan,
  checkoutUrl,
  label = "S'abonner",
  className,
}: SubscribeButtonProps) {
  if (!checkoutUrl) {
    return (
      <p className="text-sm text-muted">
        L&apos;abonnement en ligne est temporairement indisponible.{' '}
        <a href="/contact" className="text-brand-blue underline">
          Contactez-nous
        </a>{' '}
        pour vous abonner.
      </p>
    );
  }

  return (
    <Button
      href={checkoutUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      icon={<ExternalLink className="h-4 w-4" />}
      onClick={() => trackSubscribeClick(plan)}
    >
      {label}
    </Button>
  );
}
