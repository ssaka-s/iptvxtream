'use client';

import { type ReactNode } from 'react';
import { trackSubscribeClick } from '@/lib/analytics';

interface TrackOfferClickProps {
  children: ReactNode;
  plan?: string;
}

export function TrackOfferClick({ children, plan = 'offers' }: TrackOfferClickProps) {
  return (
    <span onClick={() => trackSubscribeClick(plan)} role="presentation">
      {children}
    </span>
  );
}
