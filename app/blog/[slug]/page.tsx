import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MdxContent } from '@/components/blog/MdxContent';
import { BlogReadTracker } from '@/components/blog/BlogReadTracker';
import { JsonLd } from '@/components/ui/JsonLd';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { buildMetadata, getSiteUrl } from '@/lib/metadata';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const base = buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    ogImage: post.coverImage,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      authors: ['OffreIPTV'],
      tags: post.tags,
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const siteUrl = getSiteUrl();
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: postUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    image: post.coverImage
      ? `${siteUrl}${post.coverImage}`
      : `${siteUrl}/opengraph-image`,
    author: {
      '@type': 'Organization',
      name: 'OffreIPTV',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'OffreIPTV',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/opengraph-image`,
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <BlogReadTracker slug={post.slug} />
      <article className="bg-surface-muted py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags.map((tag) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">{post.title}</h1>
          <div className="mt-10">
            <MdxContent source={post.content} />
          </div>
          <div className="mt-12 rounded-2xl border border-gray-200 bg-surface p-6 text-center shadow-card">
            <p className="text-muted">Prêt à regarder la TV en direct ?</p>
            <Button href="/offre" className="mt-4" variant="primary">
              Voir les offres
            </Button>
          </div>
          <p className="mt-8">
            <Link href="/blog" className="text-sm text-brand-blue hover:text-brand-dark">
              ← Retour au blog
            </Link>
          </p>
        </div>
      </article>
    </>
  );
}
