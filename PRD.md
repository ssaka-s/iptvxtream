# PRD — French Live TV Streaming Website

**Version:** 1.0  
**Last updated:** May 2026  
**Status:** Approved for development

---

## 1. Vision

Build a French-language marketing website for a legal live TV streaming service targeting residents of France. The site captures organic SEO traffic, builds brand credibility around legal streaming, and converts visitors into subscribers via external payment links. No on-site payments, no streaming player, no user accounts in v1.

---

## 2. Goals

| # | Goal | Success metric |
|---|------|----------------|
| G1 | Rank on page 1 of Google.fr for core queries ("TV en direct", "regarder la TV sur internet", "chaînes TV en ligne") | Position 1–10 within 6 months of launch |
| G2 | Drive qualified clicks on external "S'abonner" / "Voir les offres" CTAs | ≥ 5 % outbound click-through rate from Offres page |
| G3 | Establish topical authority with a blog on legal streaming in France | ≥ 20 published articles at launch; organic traffic growth MoM |
| G4 | Achieve strong Core Web Vitals across all pages | Lighthouse Performance ≥ 90, LCP < 2.5 s |

### Non-goals (v1)
- On-site checkout or payment processing
- User login, registration, or account management
- Streaming player or EPG integration
- Multi-language support beyond French
- CRM or ticketing system

---

## 3. Target Users

### 3.1 Primary
- Residents of France seeking a legal, convenient way to watch live TV and sports online on smart TVs, mobile devices, or web browsers.
- "Cord-cutters" looking for alternatives to traditional cable or satellite subscriptions.

### 3.2 Secondary
- French-speaking users outside France interested in accessing French channels (dedicated blog content in a future phase).

### 3.3 User profile
- Non-technical to moderately technical adults.
- Comfortable with online subscriptions and streaming apps.
- Primary concerns: legality, content quality (HD/4K), reliability, device compatibility, ease of cancellation.

---

## 4. Positioning & Legal Framework

- The service is presented exclusively as a **legal live TV streaming solution**, not as a pirate IPTV provider.
- Preferred terminology: *"TV en direct"*, *"TV en streaming"*, *"regarder la TV sur internet"*, *"offres de TV en ligne"*.
- The word *"IPTV"* may appear in neutral, educational blog content only (e.g., explaining differences between IPTV, OTT, and cable). It must **not** appear in brand copy, page titles, or URL slugs.
- The site must never promise access to obviously illegal content (all sports leagues worldwide for unrealistically low prices, etc.).
- Mandatory legal pages: Mentions légales, Politique de confidentialité, Conditions générales.

---

## 5. Information Architecture

### 5.1 URL Map

| Page | URL |
|------|-----|
| Home | `/` |
| Offers | `/offre` |
| Channels | `/chaines` |
| How it works | `/comment-ca-marche` |
| Devices | `/appareils` |
| FAQ | `/faq` |
| Blog index | `/blog` |
| Blog post | `/blog/[slug]` |
| Contact | `/contact` |
| Legal — Mentions légales | `/mentions-legales` |
| Legal — Confidentialité | `/confidentialite` |
| Legal — CGU | `/conditions-generales` |

### 5.2 Navigation

**Header:** Accueil · Offres · Chaînes · Comment ça marche · Appareils · Blog · FAQ · Contact

**Footer:** Mentions légales · Confidentialité · Conditions générales · FAQ · Blog

### 5.3 Key Internal Links
- Home → Offres, Comment ça marche, Appareils, Blog
- Blog posts → Offres, Comment ça marche (contextual)
- FAQ → related pages and blog posts

---

## 6. Key User Journeys

### 6.1 Discovery → Subscription
1. User searches "regarder la TV en direct sans box" on Google.
2. Lands on a blog post or the home page.
3. Reads content reassured by legal positioning.
4. Navigates to `/offre`, compares plans.
5. Clicks "S'abonner" → external payment page opens in a new tab.

### 6.2 Support / Setup
1. User searches "comment regarder la TV sur Fire Stick en France".
2. Lands on a blog tutorial or `/appareils`.
3. Follows setup steps; if stuck, navigates to `/contact`.

### 6.3 Authority Building
1. User reads multiple blog articles about Ligue 1, Champions League, French channels online.
2. Repeated brand exposure builds trust → eventual conversion.

---

## 7. Page Requirements

### 7.1 Home `/`

**Purpose:** Introduce the service, communicate legality, drive clicks to Offres and Comment ça marche.

**Content:**
- **H1:** "Regardez la TV en direct en France, partout et à tout moment."
- Subheading: simplicity, no engagement, multi-device.
- Primary CTA: "Voir les offres" (external or `/offre`).
- Secondary CTA: "Comment ça marche" (link/scroll).
- **Sections:**
  1. Hero — copy + abstract streaming illustration (no copyrighted channel logos in v1).
  2. Benefits — channel variety, HD/4K quality, stable service, quick support.
  3. Devices — icons for smart TV, Android/Apple, boxes, browser.
  4. How it works — three-step summary.
  5. Testimonials — 3–4 short, realistic French testimonials.
  6. FAQ preview — 3–4 key questions linking to `/faq`.

**SEO:**
- Title: `TV en direct en ligne en France | [BrandName]`
- Meta description: French summary including "TV en streaming" and "sans engagement".
- H2/H3 headings include phrases: "TV en streaming", "regarder la TV sur internet".

---

### 7.2 Offers `/offre`

**Purpose:** Explain plans and drive clicks to external payment links.

**Content:**
- Intro: "offres de TV en streaming sans engagement".
- Plan comparison table (2–3 plans):
  - Plan name, monthly price (static text), simultaneous devices, video quality (HD / Full HD / 4K), support level.
  - Each plan: primary CTA "S'abonner" → external `NEXT_PUBLIC_CHECKOUT_URL_[PLAN]`.
- Disclaimer about legal use and rights compliance.

**SEO:**
- Title: `Offres de TV en streaming sans engagement | [BrandName]`
- Meta description: "offres TV en ligne", "sans engagement".

---

### 7.3 Channels `/chaines`

**Purpose:** Give an overview of channel categories; reassure on content diversity without listing exhaustive or illegal lineups.

**Content:**
- Intro explaining categories: généralistes, films, séries, sports, documentaires, jeunesse, information.
- Category sections with textual examples (no copyrighted logos in v1).
- General mention of EPG / programme guide availability where applicable.

**SEO:**
- Title: `Chaînes TV disponibles en streaming | [BrandName]`
- Phrases: "chaînes TV en ligne", "chaînes françaises en direct".

---

### 7.4 How It Works `/comment-ca-marche`

**Purpose:** Explain onboarding; remove friction for potential subscribers.

**Content:**
- 3–4 steps:
  1. Choisir l'offre qui vous convient.
  2. Finaliser l'abonnement sur la page sécurisée de paiement externe.
  3. Recevoir vos instructions par email.
  4. Installer l'application et commencer à regarder la TV en direct.
- Device screenshots or simple diagrams (placeholder images in v1).
- Small setup-specific FAQ at the bottom.

**SEO:**
- Target: "comment regarder la TV en streaming", "comment fonctionne la TV en ligne".

---

### 7.5 Devices `/appareils`

**Purpose:** Show service works on many devices; reduce compatibility objections.

**Content:**
- Intro: watch on smart TV, TV box, smartphone, tablette, ordinateur.
- Cards or list per device type with short explanation.
- OS/app availability: Android, iOS, Fire TV, web browser.

**SEO:**
- Target: "regarder la TV sur Fire Stick", "TV en streaming sur Smart TV".

---

### 7.6 FAQ `/faq`

**Purpose:** Answer common objections; reduce support load.

**Content (10–15 questions minimum):**
- Is the service legal?
- What internet speed is required?
- Which devices are compatible?
- How do I cancel?
- What if I travel or move abroad?
- Difference between this service and a traditional IPTV box?
- Internal links to relevant pages and blog posts per answer.

**SEO:**
- Question-style H2 headings targeting featured snippets.
- Example: "Comment regarder la TV sans box ?"

---

### 7.7 Blog Index `/blog`

**Purpose:** Showcase articles; support SEO content strategy.

**Content:**
- Short intro about guides for watching TV online legally, streaming tips, device guides.
- Article list: title, excerpt, category, publication date.
- Pagination or "load more" for scalability.

**SEO:**
- Title: `Blog TV en streaming et conseils pour regarder la TV en ligne | [BrandName]`

---

### 7.8 Blog Post `/blog/[slug]`

**Purpose:** Capture long-tail queries; build topical authority.

**Target topics (seed list):**
- "comment regarder la ligue 1 en streaming légal en France"
- "regarder la TV française à l'étranger légalement"
- "meilleures alternatives légales à la box TV"
- "TV en direct sur Smart TV sans abonnement câble"
- "différence entre IPTV, OTT et câble"

**Content structure:**
1. Intro — restate the problem, promise a clear solution.
2. Body — H2/H3 sections: legal options, step-by-step guides, device recommendations.
3. Internal links: Offres, Comment ça marche, Appareils, related posts.
4. FAQ block — 3–5 related questions at the end.

**Minimum length:** 1 000–1 500 words of unique, helpful content per article.

**SEO:**
- Unique title and meta description per post.
- Semantic keywords and synonyms; no keyword stuffing.

**MDX front-matter schema:**
```yaml
---
title: ""
description: ""
slug: ""
date: "YYYY-MM-DD"
tags: []
featured: false
coverImage: ""
---
```

---

### 7.9 Contact `/contact`

**Purpose:** Provide a simple support/sales contact channel.

**Content:**
- Short intro.
- Simple form: name, email, message (or mailto link for MVP).
- Support availability / expected response time.

---

### 7.10 Legal Pages

| Page | URL | Requirement |
|------|-----|-------------|
| Mentions légales | `/mentions-legales` | Editor identity, host details, publication director |
| Politique de confidentialité | `/confidentialite` | GDPR-compliant data policy |
| Conditions générales | `/conditions-generales` | Terms of use, external payment disclaimer |

---

## 8. SEO Requirements (Global)

- All content in French, `lang="fr"` on `<html>`, locale `fr-FR`.
- One `<h1>` per page; hierarchical `<h2>`/`<h3>` structure.
- No duplicate meta titles or descriptions across pages.
- Clean, human-readable French URL slugs; no auto-generated IDs.
- Open Graph and Twitter Card meta tags on every page (title, description, image).
- XML sitemap at `/sitemap.xml`.
- `robots.txt` allowing crawling of all public pages.
- Canonical tags to prevent duplicate content.
- Structured data (JSON-LD): `WebSite`, `BlogPosting` (per article), `FAQPage` (on `/faq` and FAQ blocks).

---

## 9. Technical Architecture

### 9.1 Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14+ (App Router) — TypeScript |
| Styling | Tailwind CSS v3 |
| Blog content | MDX files in `content/blog/` |
| Image optimisation | `next/image` |
| Icons | Lucide React or Heroicons |
| Analytics | Plausible Analytics (privacy-first) or GA4 + consent banner |
| Hosting | Vercel (recommended) or any static/hybrid host |

### 9.2 Routing (App Router)
```
app/
  layout.tsx              ← shared header, footer, metadata defaults
  page.tsx                ← /
  offre/page.tsx
  chaines/page.tsx
  comment-ca-marche/page.tsx
  appareils/page.tsx
  faq/page.tsx
  blog/
    page.tsx              ← /blog index
    [slug]/page.tsx       ← /blog/[slug]
  contact/page.tsx
  mentions-legales/page.tsx
  confidentialite/page.tsx
  conditions-generales/page.tsx
```

### 9.3 Content Layer
- `content/blog/*.mdx` — all blog articles.
- Helper functions in `lib/blog.ts`: `getAllPosts()`, `getPostBySlug(slug)`.
- Build-time static generation for all blog posts via `generateStaticParams`.

### 9.4 External Payment Integration
- Environment variables:
  ```
  NEXT_PUBLIC_CHECKOUT_URL_BASIC=
  NEXT_PUBLIC_CHECKOUT_URL_STANDARD=
  NEXT_PUBLIC_CHECKOUT_URL_PREMIUM=
  ```
- All "S'abonner" buttons: `target="_blank" rel="noopener noreferrer"`.
- No server-side payment logic in this codebase.

---

## 10. Non-Functional Requirements

### 10.1 Performance
- Lighthouse Performance score ≥ 90 on mobile.
- LCP < 2.5 s; CLS < 0.1; FID/INP < 200 ms.
- All images served via `next/image` with explicit `width`/`height`.
- No heavy client-side libraries loaded synchronously.

### 10.2 Accessibility
- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- Proper `<label>` elements and ARIA attributes on forms.
- Colour contrast ratio ≥ 4.5:1 for body text.
- Keyboard-navigable interactive elements.

### 10.3 Security
- No sensitive user data stored on the site.
- HTTPS enforced; HSTS header recommended.
- No third-party scripts loaded without consent (analytics behind cookie consent).

### 10.4 Analytics & Tracking
- Track: page views, outbound "S'abonner" clicks (goal events), blog article reads.
- Consent banner required before loading any non-essential scripts.

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| ARCOM / ISP blocking for piracy association | Medium | High | Keep positioning clearly legal; avoid piracy terminology; respond quickly to legal notices |
| Google de-indexing for "pirate IPTV" association | Medium | High | Focus brand on legal streaming; use "IPTV" only in neutral educational posts; maintain high-quality E-E-A-T content |
| External payment provider downtime | Low | Medium | Display a friendly fallback message; provide contact link when checkout is unreachable |
| Thin content / duplicate SEO content penalty | Low | Medium | Enforce 1 000-word minimum per article; unique titles and meta descriptions; no spun content |

---

## 12. Out of Scope (v1)

- User login / registration / account management
- Streaming player or EPG integration
- Multi-language support beyond French
- Full CRM or ticketing system
- On-site checkout or payment processing
- Email marketing automation

---

## 13. Open Questions

| # | Question | Owner | Due |
|---|----------|-------|-----|
| OQ1 | Final brand name and domain | Business | Before dev start |
| OQ2 | Exact external payment URLs per plan | Business | Before Offres page build |
| OQ3 | Privacy-respecting analytics provider (Plausible vs GA4) | Tech | Sprint 1 |
| OQ4 | Legal pages content (drafted by lawyer or owner?) | Business/Legal | Before launch |
| OQ5 | Initial 20 blog article topics approved | Content | Before Sprint 3 |
