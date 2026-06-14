'use client';

import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

interface VimeoAutoplayProps {
  videoId: number;
  className?: string;
}

export function VimeoAutoplay({ videoId, className }: VimeoAutoplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const player = new Player(containerRef.current, {
      id: videoId,
      autoplay: true,
      muted: true,
      loop: true,
      background: true,
      responsive: true,
    });

    player.play().catch(() => {
      // Autoplay blocked — silent fail, video will remain paused
    });

    return () => {
      player.destroy();
    };
  }, [videoId]);

  return <div ref={containerRef} className={className} />;
}
