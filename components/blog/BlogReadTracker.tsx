'use client';

import { useEffect, useRef } from 'react';
import { trackBlogRead } from '@/lib/analytics';

interface BlogReadTrackerProps {
  slug: string;
}

export function BlogReadTracker({ slug }: BlogReadTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tracked.current) return;
      const scrollPercent =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5) {
        tracked.current = true;
        trackBlogRead(slug);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  return null;
}
