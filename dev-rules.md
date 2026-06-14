# Dev Rules — French Live TV Streaming Website

These rules are binding for all contributors. They encode the decisions made in the PRD and prevent common mistakes that could hurt SEO, performance, or legal standing.

---

## 1. Language & Copy

- **All user-facing text must be in French.** No English strings in rendered output (error messages, button labels, alt text, etc.).
- Set `lang="fr"` on the root `<html>` element in the root layout.
- The word **"IPTV"** is forbidden in:
  - Page titles (`<title>`)
  - Meta descriptions
  - H1/H2 headings on marketing pages
  - URL slugs
  - Any CTA copy
  - It is **allowed only** in blog post body copy when used neutrally and educationally (e.g., explaining the difference between IPTV, OTT, and cable).
- Never use wording that implies piracy or access to illegal content.
- Review all AI-generated French copy before committing; it must read naturally, not machine-translated.

---

## 2. Routing & URL Slugs

- All URLs must be in **French, lowercase, hyphen-separated**, and human-readable.
- URL slugs must match exactly those defined in the PRD sitemap:

  | Page | Slug |
  |------|------|
  | Home | `/` |
  | Offers | `/offre` |
  | Channels | `/chaines` |
  | How it works | `/comment-ca-marche` |
  | Devices | `/appareils` |
  | FAQ | `/faq` |
  | Blog index | `/blog` |
  | Blog post | `/blog/[slug]` |
  | Contact | `/contact` |
  | Mentions légales | `/mentions-legales` |
  | Confidentialité | `/confidentialite` |
  | CGU | `/conditions-generales` |

- Do not deviate from these slugs without updating the PRD and this document.
- Blog post slugs come from the `slug` field in the MDX front-matter. Slugs must:
  - Be lowercase, French, hyphenated.
  - Not contain "IPTV" (see §1).
  - Not contain auto-generated IDs or hashes.

---

## 3. Framework & Project Structure

### 3.1 Required stack
- **Next.js 14+** with the **App Router** (not Pages Router).
- **TypeScript** — strict mode enabled. No `any` unless unavoidable; add a comment if used.
- **Tailwind CSS v3** — utility classes only; no inline styles, no custom CSS files unless strictly necessary.

### 3.2 Folder layout
```
app/                         ← Next.js App Router
  layout.tsx                 ← root layout: <html lang="fr">, shared Header, Footer, metadata defaults
  page.tsx                   ← /
  offre/page.tsx
  chaines/page.tsx
  comment-ca-marche/page.tsx
  appareils/page.tsx
  faq/page.tsx
  blog/
    page.tsx
    [slug]/page.tsx
  contact/page.tsx
  mentions-legales/page.tsx
  confidentialite/page.tsx
  conditions-generales/page.tsx

components/
  layout/
    Header.tsx
    Footer.tsx
  ui/                        ← reusable, dumb UI components (Button, Card, Badge…)
  sections/                  ← page-level sections (Hero, Benefits, PlanCard, FAQAccordion…)

content/
  blog/                      ← *.mdx blog articles

lib/
  blog.ts                    ← getAllPosts(), getPostBySlug()
  metadata.ts                ← shared generateMetadata helpers

public/
  images/
  robots.txt
  sitemap.xml                ← or use next-sitemap for dynamic generation
```

- Keep `app/` pages thin — they compose sections from `components/sections/`.
- Business logic (blog parsing, metadata generation) lives in `lib/`.

---

## 4. Component Rules

- **One component per file.** File name = component name in PascalCase.
- Components in `components/ui/` must be **stateless and reusable**. They accept only props; no direct data fetching.
- Components in `components/sections/` are page-section-level; they may accept data as props fetched by the page.
- **No default exports for pages or components that are imported elsewhere** — always use named exports so imports are explicit. (Exception: Next.js App Router requires default export for `page.tsx` and `layout.tsx`.)
- Props interfaces must be explicitly typed. No implicit `any`.

---

## 5. SEO Rules (enforced in code)

### 5.1 Metadata
- Every `page.tsx` must export a `generateMetadata` function (or a static `metadata` object) returning:
  - `title` — unique per page, in French.
  - `description` — unique per page, in French, 140–160 characters.
  - `openGraph` — `{ title, description, images, locale: 'fr_FR', type }`.
  - `twitter` — `{ card: 'summary_large_image', title, description, images }`.
  - `alternates.canonical` — absolute URL.
- No two pages may share the same `title` or `description`. Enforce via code review.

### 5.2 Heading hierarchy
- Exactly **one `<h1>` per page**. Linters or code review must catch duplicates.
- `<h2>` sections are direct children of the page content; `<h3>` are subsections of `<h2>`.
- Never skip heading levels (no `<h1>` → `<h3>`).

### 5.3 Structured data
- `/faq` page and any FAQ block in a blog post: inject `FAQPage` JSON-LD.
- Blog posts: inject `BlogPosting` JSON-LD (name, author, datePublished, description, url).
- Root layout: inject `WebSite` JSON-LD.
- Use a `<JsonLd>` component that renders a `<script type="application/ld+json">` tag.

### 5.4 Sitemap & robots.txt
- `public/robots.txt` must allow all pages and reference the sitemap URL.
- Use `next-sitemap` or a dynamic `app/sitemap.ts` to generate `/sitemap.xml` including all static pages and all blog post URLs.
- Blog posts must be included with `lastmod` derived from the `date` front-matter field.

### 5.5 Canonical tags
- Set `alternates.canonical` to the page's absolute URL in every `generateMetadata` return value.

---

## 6. Images

- **All images must use `next/image`** — never a raw `<img>` tag.
- Always provide explicit `width` and `height` props to avoid CLS.
- Use `sizes` prop for responsive images.
- Store all static images in `public/images/`.
- Filenames: lowercase, hyphenated, descriptive French names (`hero-tv-streaming.webp`).
- No copyrighted channel logos in v1 — use abstract illustrations or generic icons only.
- Provide meaningful French `alt` text for every image. Decorative images: `alt=""`.

---

## 7. Styling

- **Tailwind CSS utility classes only.** No module CSS, no styled-components, no inline `style` props.
- Exception: truly dynamic styles (e.g., a progress width calculated at runtime) may use a `style` prop with a CSS variable.
- Mobile-first responsive design. Use Tailwind's `sm:`, `md:`, `lg:`, `xl:` breakpoints.
- Colour contrast: body text must achieve at least **4.5:1** contrast ratio against its background.
- Do not hard-code colours outside `tailwind.config.ts`. Add all brand colours to the Tailwind theme.

---

## 8. External Payment Links

- CTA buttons linking to external checkout must:
  - Use `target="_blank"` and `rel="noopener noreferrer"`.
  - Read the URL from environment variables — **never hard-code payment URLs** in component source.
  - Accepted env vars: `NEXT_PUBLIC_CHECKOUT_URL_BASIC`, `NEXT_PUBLIC_CHECKOUT_URL_STANDARD`, `NEXT_PUBLIC_CHECKOUT_URL_PREMIUM`.
- All outbound CTA clicks must fire an analytics event (see §10).
- If an env var is missing/empty, the button must be hidden or show a disabled state with a support contact fallback message — never show a broken link.

---

## 9. Blog Content System

### 9.1 MDX front-matter (required fields)
```yaml
---
title: ""          # string, required, unique
description: ""    # string, required, 140–160 chars
slug: ""           # string, required, French, hyphenated, no "IPTV"
date: "YYYY-MM-DD" # string, required
tags: []           # string[], optional
featured: false    # boolean, optional
coverImage: ""     # string, optional, relative path from public/images/
---
```
- All fields above are required except `tags`, `featured`, and `coverImage`.
- `slug` must exactly match the MDX filename (without `.mdx`).
- No duplicate `slug` values allowed.

### 9.2 Content requirements
- Minimum **1 000 words** per published article.
- Each article targets exactly **one primary keyword** stated in a comment at the top of the file.
- Internal links to `/offre`, `/comment-ca-marche`, `/appareils`, and related articles must appear in the body.
- Each article ends with a **FAQ block** (3–5 questions) using an `<FAQ>` component or a `## FAQ` section with `FAQPage` JSON-LD.

### 9.3 `lib/blog.ts` contract
```typescript
interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  content: string; // compiled MDX or raw markdown
}

getAllPosts(): Post[]        // sorted by date desc
getPostBySlug(slug: string): Post | null
```

---

## 10. Analytics

- All analytics scripts are loaded **only after user consent**.
- Use a lightweight consent banner (cookie banner) before loading Plausible or GA4.
- Track the following events:
  - `page_view` — automatic via analytics provider.
  - `subscribe_click` — fired when any "S'abonner" or "Voir les offres" button is clicked, with `{ plan: string }` property.
  - `blog_read` — fired on blog post page when user scrolls ≥ 50 % of the article.
- Do not track personally identifiable information.

---

## 11. Accessibility

- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`.
- Every interactive element (`<button>`, `<a>`) must have a visible focus ring (Tailwind `focus-visible:ring-*`).
- Form fields in `/contact` must have associated `<label>` elements (not just placeholders).
- Icon-only buttons must have an `aria-label`.
- The skip-to-main-content link must be the first focusable element in the layout.

---

## 12. Performance

- **No heavy client-side libraries** (e.g., jQuery, full Lodash, etc.).
- Use `"use client"` directive only when strictly necessary (interactive components). Default to Server Components.
- Lazy-load images below the fold with `loading="lazy"` (handled automatically by `next/image`).
- Keep the JavaScript bundle lean: check with `@next/bundle-analyzer` before each release.
- Fonts: use `next/font` for Google Fonts to avoid render-blocking requests.

---

## 13. Security

- **HTTPS only** — configure HSTS header on the hosting provider.
- No sensitive data (API keys, payment credentials) in the frontend bundle or repository.
- Use `.env.local` for development secrets; `.env.example` with placeholder values committed to the repo.
- `rel="noopener noreferrer"` on all `target="_blank"` links.
- Content Security Policy (CSP) header recommended before launch — at minimum restrict `script-src` to known domains.

---

## 14. Git & Workflow

- Branch naming: `feat/`, `fix/`, `chore/`, `content/` prefixes. Examples:
  - `feat/offre-page`
  - `content/blog-ligue1-article`
  - `fix/hero-cta-missing-env`
- Commit messages: imperative, lowercase, French or English, concise. Examples:
  - `add offre page with plan comparison table`
  - `fix: hide subscribe button when env var missing`
- All PRs require at least one reviewer approval before merging to `main`.
- No direct commits to `main`.
- Run `next build` locally (or in CI) before opening a PR; no PRs with build errors.

---

## 15. Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CHECKOUT_URL_BASIC` | Yes (for launch) | External checkout URL — Basic plan |
| `NEXT_PUBLIC_CHECKOUT_URL_STANDARD` | Yes (for launch) | External checkout URL — Standard plan |
| `NEXT_PUBLIC_CHECKOUT_URL_PREMIUM` | Yes (for launch) | External checkout URL — Premium plan |
| `NEXT_PUBLIC_ANALYTICS_ID` | No | Plausible domain or GA4 measurement ID |
| `NEXT_PUBLIC_SITE_URL` | Yes | Absolute base URL (e.g., `https://www.example.fr`) — used for canonical tags and sitemap |

- All `NEXT_PUBLIC_*` variables are embedded at build time; treat them as public.
- Document every variable in `.env.example` with a descriptive comment.

---

## 16. Linting & Formatting

- ESLint with `next/core-web-vitals` and `@typescript-eslint` configs enabled.
- Prettier for formatting — configured via `.prettierrc`.
- Husky + lint-staged to run ESLint and Prettier on pre-commit.
- Zero ESLint errors allowed in CI; warnings are acceptable but should be resolved before launch.

---

## 17. Testing (recommended, not blocking v1)

- Unit tests for `lib/blog.ts` helper functions using Vitest or Jest.
- Smoke tests: at minimum verify that all static pages render without runtime errors using Playwright or Cypress.
- Test that "S'abonner" buttons are hidden when checkout env vars are not set.

---

## 18. What is Explicitly Forbidden

| Forbidden | Reason |
|-----------|--------|
| Hard-coded payment URLs in source | Security / maintainability |
| `<img>` tags instead of `next/image` | Performance / CLS |
| "IPTV" in titles, descriptions, H1/H2, or slugs | Legal / SEO risk |
| Promises of access to illegal content | ARCOM / legal risk |
| English text in user-facing copy | UX / SEO locale |
| Third-party scripts before consent | GDPR compliance |
| Duplicate `<title>` or meta descriptions across pages | SEO penalty |
| More than one `<h1>` per page | SEO / accessibility |
| Inline styles (except dynamic CSS variables) | Maintainability |
| Direct commits to `main` | Process |
