# OffreIPTV — Site marketing TV en streaming (France)

Site vitrine Next.js 14 pour un service de TV en direct légale en France.

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Voir `.env.example` pour `NEXT_PUBLIC_SITE_URL`, les URLs de paiement par forfait et l'ID analytics.

## Scripts

- `npm run dev` — serveur de développement
- `npm run build` — build production + génération sitemap
- `npm run lint` — ESLint

## Structure

- `app/` — pages App Router (routes FR du PRD)
- `components/` — UI, layout, sections
- `content/blog/` — articles MDX
- `lib/` — blog, metadata, plans, FAQ

## Design

Palette navy / bleu électrique, glassmorphism, inspirée de la maquette dans `Design/`.
