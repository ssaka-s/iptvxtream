'use client';

const CONSENT_KEY = 'analytics-consent';

export type ConsentStatus = 'accepted' | 'declined' | null;

export function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === 'accepted' || value === 'declined') return value;
  return null;
}

export function setConsent(status: 'accepted' | 'declined'): void {
  localStorage.setItem(CONSENT_KEY, status);
  if (status === 'accepted') {
    loadAnalytics();
  }
}

export function loadAnalytics(): void {
  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!analyticsId || typeof window === 'undefined') return;

  if (analyticsId.includes('.')) {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = analyticsId;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }
}

export function trackEvent(
  eventName: string,
  props?: Record<string, string | number | boolean>
): void {
  if (getConsent() !== 'accepted') return;

  const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!analyticsId) return;

  if (typeof window !== 'undefined' && 'plausible' in window) {
    (window as Window & { plausible?: (e: string, o?: { props: Record<string, unknown> }) => void }).plausible?.(
      eventName,
      props ? { props } : undefined
    );
  }
}

export function trackSubscribeClick(plan: string): void {
  trackEvent('subscribe_click', { plan });
}

export function trackBlogRead(slug: string): void {
  trackEvent('blog_read', { slug });
}
