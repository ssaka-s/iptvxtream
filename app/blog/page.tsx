import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { buildMetadata } from '@/lib/metadata';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = buildMetadata({
  title: 'Blog TV en streaming et conseils',
  description:
    'Guides pour regarder la TV en ligne légalement en France : streaming, appareils, Ligue 1, Smart TV et alternatives à la box.',
  path: '/blog',
});

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative -mt-20 bg-gray-50 pb-12 pt-28 sm:pb-16 sm:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#4524DB] px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -right-4 top-12 h-44 w-44 rounded-full bg-white/10" aria-hidden />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/10" aria-hidden />

            <div className="relative max-w-xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">Blog</p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Blog TV en streaming
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Guides pratiques, conseils et actualités pour regarder la TV en ligne légalement en France.
              </p>
            </div>

            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link
                href="/trial"
                className="flex min-w-[200px] items-center justify-between rounded-2xl bg-white px-6 py-4 font-semibold text-[#4524DB] transition-colors hover:bg-white/90"
              >
                <span>Essai gratuit 24 h</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
              <Link
                href="/contact"
                className="flex min-w-[200px] items-center justify-between rounded-2xl border border-white/40 bg-white/10 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/20"
              >
                <span>Nous contacter</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="rounded-2xl border border-gray-200 bg-surface p-6 shadow-card transition hover:border-gray-300 hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="light">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow rounded"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-muted">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-sm font-medium text-brand-blue hover:text-brand-dark"
                  >
                    Lire l&apos;article →
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          {posts.length === 0 && (
            <p className="text-center text-muted">Aucun article publié pour le moment.</p>
          )}
        </div>
      </section>
    </>
  );
}
