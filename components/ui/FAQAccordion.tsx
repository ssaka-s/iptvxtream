'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/lib/faq-data';

interface FAQAccordionProps {
  items: FaqItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="overflow-hidden rounded-xl border border-gray-200 bg-surface shadow-card">
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
          {openIndex === index && (
            <div
              className="border-t border-gray-200 px-6 py-4 text-sm text-muted [&_a]:text-brand-blue [&_a]:underline"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
