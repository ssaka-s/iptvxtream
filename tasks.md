# Tasks — French Live TV Streaming Website

Organised by sprint. Each task has a unique ID, description, acceptance criteria, and dependencies.

---

## Sprint 0 — Project Setup & Foundation

### T-001 · Initialise Next.js project
**Type:** Chore  
**Priority:** P0  
**Estimate:** 1 h

**Steps:**
- `npx create-next-app@latest` with TypeScript, Tailwind CSS, ESLint, App Router.
- Set `strict: true` in `tsconfig.json`.
- Confirm folder structure matches dev-rules §3.2.

**Acceptance criteria:**
- [ ] `npm run build` passes with zero errors.
- [ ] `app/layout.tsx` exists with `<html lang="fr">`.
- [ ] Tailwind CSS applies a test utility class correctly.

---

### T-002 · Configure linting & formatting
**Type:** Chore  
**Priority:** P0  
**Depends on:** T-001  
**Estimate:** 30 min

**Steps:**
- Add `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`.
- Add Prettier with a `.prettierrc` (`semi: true`, `singleQuote: true`, `printWidth: 100`).
- Add Husky and lint-staged: run ESLint + Prettier on pre-commit.

**Acceptance criteria:**
- [ ] `npm run lint` passes with zero errors on the fresh project.
- [ ] Pre-commit hook blocks a commit with an ESLint error.

---

### T-003 · Set up environment variables
**Type:** Chore  
**Priority:** P0  
**Depends on:** T-001  
**Estimate:** 15 min

**Steps:**
- Create `.env.example` with all variables from dev-rules §15 and descriptive comments.
- Create `.env.local` with placeholder values.
- Add `.env.local` to `.gitignore`.

**Acceptance criteria:**
- [ ] `.env.example` committed and documents all five required variables.
- [ ] `.env.local` is gitignored.

---

### T-004 · Create shared root layout (Header + Footer)
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-001, T-002  
**Estimate:** 3 h

**Steps:**
- Build `components/layout/Header.tsx`: logo placeholder, nav links matching PRD §5.2, mobile hamburger menu.
- Build `components/layout/Footer.tsx`: legal links, blog link, FAQ link, copyright notice.
- Integrate both into `app/layout.tsx`.
- Add skip-to-main-content link as first focusable element.

**Acceptance criteria:**
- [ ] Header renders all nav items from PRD (Accueil, Offres, Chaînes, Comment ça marche, Appareils, Blog, FAQ, Contact).
- [ ] Footer renders legal links + Blog + FAQ.
- [ ] Skip-to-main-content link exists and is the first focusable element.
- [ ] Mobile menu opens and closes correctly.
- [ ] All nav links have a visible focus ring.

---

### T-005 · Implement global metadata defaults & JSON-LD helpers
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-003  
**Estimate:** 1 h

**Steps:**
- Create `lib/metadata.ts` with a `buildMetadata()` helper that merges page-level overrides with sane defaults (OG image fallback, locale `fr_FR`, canonical URL from `NEXT_PUBLIC_SITE_URL`).
- Create `components/JsonLd.tsx` that renders `<script type="application/ld+json">`.
- Add `WebSite` JSON-LD in root layout.

**Acceptance criteria:**
- [ ] Every page's `<head>` contains `og:locale = fr_FR`.
- [ ] `WebSite` JSON-LD present in root layout output.
- [ ] `buildMetadata()` is typed and exported.

---

### T-006 · Configure next-sitemap and robots.txt
**Type:** Chore  
**Priority:** P0  
**Depends on:** T-001  
**Estimate:** 30 min

**Steps:**
- Install `next-sitemap`.
- Configure `next-sitemap.config.js` to include all static routes and exclude nothing.
- Ensure `public/robots.txt` allows all pages and references the sitemap.

**Acceptance criteria:**
- [ ] `npm run postbuild` generates `sitemap.xml` at the site root.
- [ ] `robots.txt` contains `Sitemap:` directive.
- [ ] All 12 static pages appear in the sitemap.

---

## Sprint 1 — Core Marketing Pages

### T-101 · Home page `/`
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-004, T-005  
**Estimate:** 6 h

**Sections to build:**
1. `HeroSection` — H1, subheading, primary CTA "Voir les offres", secondary CTA "Comment ça marche", abstract illustration.
2. `BenefitsSection` — 4 benefit cards (channel variety, HD/4K, stability, support).
3. `DevicesSection` — icons for smart TV, Android, Apple, box, browser.
4. `HowItWorksSection` — 3-step summary.
5. `TestimonialsSection` — 3–4 French testimonials.
6. `FaqPreviewSection` — 3–4 questions linking to `/faq`.

**Acceptance criteria:**
- [ ] Single `<h1>` matches PRD copy.
- [ ] Primary CTA links to `/offre`; secondary to `/comment-ca-marche`.
- [ ] `generateMetadata` returns unique title, description, OG tags.
- [ ] Page renders without hydration errors.
- [ ] Lighthouse Performance ≥ 85 (mobile) on local build.

---

### T-102 · Offers page `/offre`
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-004, T-005, T-003  
**Estimate:** 4 h

**Steps:**
- Build `PlanCard` component showing plan name, price, devices, quality, support.
- Build comparison table / card grid with 2–3 plans.
- "S'abonner" button reads from env vars; hidden with fallback message if env var is empty.
- Track outbound clicks via analytics event `subscribe_click`.

**Acceptance criteria:**
- [ ] All plan CTAs open in a new tab with `rel="noopener noreferrer"`.
- [ ] CTA hidden and fallback message shown when env var is not set.
- [ ] `subscribe_click` event fires on button click.
- [ ] Unique title and meta description for this page.

---

### T-103 · Channels page `/chaines`
**Type:** Feature  
**Priority:** P1  
**Depends on:** T-004, T-005  
**Estimate:** 3 h

**Steps:**
- Intro paragraph.
- Category sections: généralistes, films, séries, sports, documentaires, jeunesse, information.
- No channel logos in v1 — use generic category icons.
- Mention EPG in general terms.

**Acceptance criteria:**
- [ ] All six-plus category sections present.
- [ ] No copyrighted logos used.
- [ ] Unique title and meta description.

---

### T-104 · How It Works page `/comment-ca-marche`
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-004, T-005  
**Estimate:** 3 h

**Steps:**
- 4-step section with icons/illustrations (placeholders in v1).
- Setup-specific FAQ at bottom (3–5 questions) with `FAQPage` JSON-LD.

**Acceptance criteria:**
- [ ] 4 steps clearly numbered.
- [ ] FAQ block has `FAQPage` JSON-LD.
- [ ] Unique title and meta description.

---

### T-105 · Devices page `/appareils`
**Type:** Feature  
**Priority:** P1  
**Depends on:** T-004, T-005  
**Estimate:** 2 h

**Steps:**
- Intro text.
- Device cards: smart TV, Android TV / Fire TV, iOS, Android mobile, web browser.
- Mention app availability.

**Acceptance criteria:**
- [ ] At least 5 device types presented.
- [ ] Unique title and meta description.

---

### T-106 · FAQ page `/faq`
**Type:** Feature  
**Priority:** P1  
**Depends on:** T-004, T-005  
**Estimate:** 3 h

**Steps:**
- Build `FAQAccordion` component.
- Add 10–15 questions from PRD §7.6.
- Add `FAQPage` JSON-LD.
- Add internal links per answer.

**Acceptance criteria:**
- [ ] Minimum 10 questions.
- [ ] `FAQPage` JSON-LD present.
- [ ] Each answer contains at least one internal link where applicable.
- [ ] Unique title and meta description.

---

### T-107 · Contact page `/contact`
**Type:** Feature  
**Priority:** P1  
**Depends on:** T-004, T-005  
**Estimate:** 2 h

**Steps:**
- Simple form: name, email, message.
- Form fields have `<label>` elements.
- Submission via `mailto:` link or a serverless function (MVP: mailto).
- Support availability note.

**Acceptance criteria:**
- [ ] All form fields have visible labels.
- [ ] Form can be submitted (mailto MVP).
- [ ] Unique title and meta description.

---

## Sprint 2 — Legal Pages & Blog System

### T-201 · Legal pages (Mentions légales, Confidentialité, CGU)
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-004, T-005  
**Estimate:** 2 h

**Steps:**
- Create `app/mentions-legales/page.tsx`, `app/confidentialite/page.tsx`, `app/conditions-generales/page.tsx`.
- Content provided by owner/legal; use placeholder text at dev time clearly marked `[À COMPLÉTER]`.

**Acceptance criteria:**
- [ ] All three pages render without errors.
- [ ] Each has a unique title and meta description.
- [ ] Footer links resolve correctly.

---

### T-202 · Blog content system (`lib/blog.ts`)
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-001  
**Estimate:** 3 h

**Steps:**
- Implement `getAllPosts()` and `getPostBySlug(slug)` in `lib/blog.ts`.
- Parse MDX front-matter using `gray-matter`.
- Sort posts by `date` descending.
- Validate required front-matter fields at build time (throw if missing).

**Acceptance criteria:**
- [ ] `getAllPosts()` returns typed `Post[]` sorted by date desc.
- [ ] `getPostBySlug()` returns `Post | null`.
- [ ] Build fails with a clear error if required front-matter field is missing.
- [ ] Unit tests for both functions pass.

---

### T-203 · Blog index page `/blog`
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-202, T-004, T-005  
**Estimate:** 2 h

**Steps:**
- List all posts with title, excerpt (from `description`), tags, and formatted date.
- Pagination (10 posts per page) or "Charger plus" button.

**Acceptance criteria:**
- [ ] All published posts appear.
- [ ] Posts link to `/blog/[slug]`.
- [ ] Unique title and meta description for the index.

---

### T-204 · Blog post template `/blog/[slug]`
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-202, T-004, T-005  
**Estimate:** 4 h

**Steps:**
- `generateStaticParams()` from `getAllPosts()`.
- Render compiled MDX content.
- `BlogPosting` JSON-LD using post front-matter.
- Article header: title, date, tags.
- Sidebar or inline CTAs linking to `/offre`.
- 404 for unknown slugs.

**Acceptance criteria:**
- [ ] All blog posts render correctly at build time.
- [ ] `BlogPosting` JSON-LD present on each post page.
- [ ] Unknown slug returns 404.
- [ ] Each post's `<title>` matches its front-matter `title`.

---

### T-205 · Write initial blog articles (×5 seed articles)
**Type:** Content  
**Priority:** P1  
**Depends on:** T-204  
**Estimate:** 10 h (content work)

**Seed articles:**
1. `comment-regarder-ligue-1-streaming-legal-france`
2. `regarder-tv-francaise-a-letranger-legalement`
3. `meilleures-alternatives-legales-box-tv`
4. `tv-en-direct-sur-smart-tv-sans-abonnement-cable`
5. `difference-entre-iptv-ott-et-cable` *(IPTV used educationally in body only)*

**Acceptance criteria per article:**
- [ ] ≥ 1 000 words of unique French content.
- [ ] Correct front-matter (all required fields present).
- [ ] Internal links to `/offre` and `/comment-ca-marche`.
- [ ] FAQ block at the end (3–5 questions).
- [ ] No "IPTV" in the slug, title, or meta description.

---

## Sprint 3 — Analytics, Performance & Pre-launch

### T-301 · Implement consent banner & analytics
**Type:** Feature  
**Priority:** P0  
**Depends on:** T-001, T-003  
**Estimate:** 3 h

**Steps:**
- Build a minimal GDPR-compliant cookie consent banner (accept / decline).
- Load analytics script only after acceptance.
- Implement `subscribe_click` event on all "S'abonner" buttons.
- Implement `blog_read` event (50 % scroll threshold) on blog post pages.

**Acceptance criteria:**
- [ ] Analytics script does not load until user accepts the banner.
- [ ] Banner state persisted in a cookie/localStorage.
- [ ] `subscribe_click` fires with correct `{ plan }` property.
- [ ] `blog_read` fires after 50 % scroll on a blog post page.

---

### T-302 · Performance audit & optimisation
**Type:** Chore  
**Priority:** P1  
**Depends on:** All Sprint 1–2 tasks  
**Estimate:** 3 h

**Steps:**
- Run `@next/bundle-analyzer` and identify any oversized chunks.
- Check `next/image` usage across all pages; fix any raw `<img>` tags.
- Ensure all fonts use `next/font`.
- Run Lighthouse on Home, Offres, and a Blog post page.

**Acceptance criteria:**
- [ ] Lighthouse Performance ≥ 90 (mobile) on Home and a Blog post.
- [ ] No raw `<img>` tags in the codebase.
- [ ] LCP < 2.5 s on Home page.

---

### T-303 · Accessibility audit
**Type:** Chore  
**Priority:** P1  
**Depends on:** All Sprint 1–2 tasks  
**Estimate:** 2 h

**Steps:**
- Run automated audit with `axe-core` or `eslint-plugin-jsx-a11y`.
- Manual keyboard navigation test on Home, Offres, FAQ, Contact pages.
- Check colour contrast for all text/background combinations.

**Acceptance criteria:**
- [ ] Zero critical `axe-core` violations on all main pages.
- [ ] All interactive elements reachable and operable via keyboard.
- [ ] Body text contrast ratio ≥ 4.5:1.

---

### T-304 · SEO meta audit
**Type:** Chore  
**Priority:** P0  
**Depends on:** All Sprint 1–2 tasks  
**Estimate:** 1 h

**Steps:**
- Verify every page has a unique `<title>` and `<meta name="description">`.
- Verify every page has OG and Twitter card tags.
- Verify every page has a canonical tag.
- Verify no page uses "IPTV" in title, description, H1, H2, or URL.

**Acceptance criteria:**
- [ ] All pages pass uniqueness check.
- [ ] All pages have canonical tags pointing to correct absolute URLs.
- [ ] No forbidden "IPTV" in SEO-critical positions.

---

### T-305 · Sitemap & robots.txt final validation
**Type:** Chore  
**Priority:** P0  
**Depends on:** T-006, T-204  
**Estimate:** 30 min

**Steps:**
- Confirm sitemap includes all 12 static pages + all blog post URLs.
- Confirm `robots.txt` is correct.
- Submit sitemap to Google Search Console (post-deployment step).

**Acceptance criteria:**
- [ ] Sitemap URL count matches expected pages (12 static + n blog posts).
- [ ] No `noindex` tags on any indexable page.

---

### T-306 · Final build & deployment setup
**Type:** Chore  
**Priority:** P0  
**Depends on:** All previous tasks  
**Estimate:** 2 h

**Steps:**
- Configure Vercel project (or chosen host) with production environment variables.
- Set up custom domain and HTTPS.
- Enable HSTS header on hosting platform.
- Run a full production build and smoke-test all pages.

**Acceptance criteria:**
- [ ] `npm run build` passes with zero errors and zero TypeScript errors.
- [ ] All 12 static pages and all initial blog posts render correctly in production.
- [ ] HTTPS enforced; HTTP redirects to HTTPS.
- [ ] HSTS header present in production responses.

---

## Backlog (Post-v1)

| ID | Task | Notes |
|----|------|-------|
| B-001 | Add 15 more blog articles | Expand topical authority |
| B-002 | Blog category / tag filter pages | `/blog/tag/[tag]` |
| B-003 | Related posts component on blog post page | Based on shared tags |
| B-004 · | Author profile pages | If multiple content authors |
| B-005 | EPG / channel lineup page (detailed) | When licensed data available |
| B-006 | Multi-language support (French-speaking expats) | Phase 2 |
| B-007 | Contact form with serverless backend | Replace mailto MVP |
| B-008 | A/B test Hero CTA copy | Optimise conversion |
| B-009 | CSP header hardening | Restrict script-src to known domains |
| B-010 | Streaming player integration | Separate product / phase 3 |

---

## Definition of Done (applies to all tasks)

A task is done when all of the following are true:

- [ ] Code merged to `main` via a reviewed PR.
- [ ] `npm run build` passes with zero errors.
- [ ] `npm run lint` passes with zero errors.
- [ ] All acceptance criteria for the task are checked off.
- [ ] No new `<img>` tags, no hard-coded payment URLs, no "IPTV" in SEO-critical positions.
- [ ] Relevant documentation updated if architectural decisions changed.
