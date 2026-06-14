'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;
    const subject = encodeURIComponent(`Contact OffreIPTV — ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:support@example.fr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const fieldCls =
    'mt-2 w-full rounded-lg border border-gray-200 bg-surface px-4 py-3 text-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-glow';

  if (submitted) {
    return (
      <p className="rounded-2xl border border-gray-200 bg-surface p-6 text-center text-muted shadow-card">
        Votre client mail va s&apos;ouvrir. Si ce n&apos;est pas le cas, écrivez-nous à{' '}
        <a href="mailto:support@example.fr" className="text-brand-blue underline">
          support@example.fr
        </a>
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-gray-200 bg-surface p-8 shadow-card"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Nom
        </label>
        <input id="name" name="name" type="text" required className={fieldCls} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input id="email" name="email" type="email" required className={fieldCls} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={fieldCls} />
      </div>
      <Button type="submit" variant="primary" className="w-full justify-center">
        Envoyer le message
      </Button>
    </form>
  );
}
