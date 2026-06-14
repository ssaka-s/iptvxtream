'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { FAQ_ITEMS } from '@/lib/faq-data';

const PREVIEW_ITEMS = FAQ_ITEMS.slice(0, 6);

export function FaqPreviewSection() {
  return (
    <section className="bg-surface-muted py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="light" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Questions fréquentes</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Les réponses aux questions les plus posées avant de s&apos;abonner.
          </p>
        </div>
        <div className="mt-10">
          <FAQAccordion items={PREVIEW_ITEMS} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-brand-blue px-6 py-2.5 text-sm font-semibold text-brand-blue transition-all hover:bg-brand-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
          >
            Voir toutes les questions <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
