import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4524DB',
          light: '#6B52E8',
          dark: '#3a1ec4',
          glow: '#7B65EF',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#6D28D9',
          glow: '#A855F7',
        },
        ink: {
          DEFAULT: '#111827',
          muted: '#374151',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F7FA',
        },
        muted: {
          DEFAULT: '#64748B',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'system-ui', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 90% 70% at 50% -10%, rgba(255,255,255,0.18) 0%, transparent 55%), linear-gradient(180deg, #6B52E8 0%, #4524DB 45%, #3a1ec4 100%)',
        'hero-purple':
          'radial-gradient(ellipse 120% 100% at 60% 40%, #3D006B 0%, #220047 45%, #08000F 100%), linear-gradient(180deg, #09000F 0%, #150030 100%)',
        'nav-purple': 'linear-gradient(180deg, #120028 0%, #1A003A 100%)',
        'glow-purple': 'radial-gradient(circle at center, rgba(139,92,246,0.30) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, #6B52E8 0%, #4524DB 100%)',
        'glow-radial': 'radial-gradient(circle at center, rgba(69,36,219,0.25) 0%, transparent 70%)',
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
      boxShadow: {
        glow: '0 0 60px rgba(69, 36, 219, 0.35)',
        'glow-purple': '0 0 70px rgba(139, 92, 246, 0.45)',
        card: '0 4px 24px rgba(15, 23, 42, 0.08)',
        'card-dark': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
