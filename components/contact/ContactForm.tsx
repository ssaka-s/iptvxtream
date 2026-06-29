'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const data = new FormData(e.currentTarget);
    const payload = {
      name: data.get('name') as string,
      email: data.get('email') as string,
      message: data.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const fieldCls =
    'mt-2 w-full rounded-lg border border-gray-200 bg-surface px-4 py-3 text-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-glow';

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-card">
        <p className="text-2xl">✅</p>
        <h3 className="mt-2 text-lg font-bold text-ink">Message envoyé !</h3>
        <p className="mt-1 text-sm text-muted">
          Nous avons bien reçu votre message et vous répondrons sous 24 à 48 h.
        </p>
      </div>
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

      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Une erreur est survenue. Veuillez réessayer ou nous écrire à{' '}
          <a href="mailto:contact@iptv-xtream.com" className="underline">
            contact@iptv-xtream.com
          </a>
          .
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="w-full justify-center"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </Button>
    </form>
  );
}
