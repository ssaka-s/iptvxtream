import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OffreIPTV — TV en direct en France';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a0d5e 0%, #4524DB 60%, #3b82f6 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 100,
            padding: '8px 20px',
            marginBottom: 28,
            border: '1px solid rgba(255,255,255,0.25)',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 18, fontWeight: 600, letterSpacing: 2 }}>
            📺 TV EN STREAMING LÉGALE EN FRANCE
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: 900,
            letterSpacing: -1,
          }}
        >
          OffreIPTV
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            marginTop: 16,
            maxWidth: 700,
          }}
        >
          Regardez vos chaînes en HD et 4K, sans box, sans engagement
        </div>

        {/* Features pills */}
        <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
          {['HD & 4K', 'Sans engagement', 'Support 24h/48h'].map((feat) => (
            <div
              key={feat}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 100,
                padding: '10px 24px',
                color: '#fff',
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              ✓ {feat}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 18,
            letterSpacing: 1,
          }}
        >
          www.offreiptv.com
        </div>
      </div>
    ),
    { ...size },
  );
}
