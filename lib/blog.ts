import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  tags: string[];
  featured: boolean;
  coverImage?: string;
  content: string;
}

function validateFrontMatter(data: Record<string, unknown>, filename: string): void {
  const required = ['title', 'description', 'slug', 'date'] as const;
  for (const field of required) {
    if (!data[field] || typeof data[field] !== 'string') {
      throw new Error(`Missing required front-matter field "${field}" in ${filename}`);
    }
  }
  const slug = data.slug as string;
  if (slug.includes('iptv') || slug.includes('IPTV')) {
    throw new Error(`Slug must not contain "IPTV" in ${filename}`);
  }
}

function parsePost(filename: string): Post {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  validateFrontMatter(data, filename);

  const slug = data.slug as string;
  const baseName = filename.replace(/\.mdx?$/, '');
  if (slug !== baseName) {
    throw new Error(`Slug "${slug}" must match filename "${baseName}" in ${filename}`);
  }

  return {
    title: data.title as string,
    description: data.description as string,
    slug,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    featured: Boolean(data.featured),
    coverImage: data.coverImage as string | undefined,
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  return files
    .map(parsePost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  if (fs.existsSync(mdxPath)) return parsePost(`${slug}.mdx`);
  if (fs.existsSync(mdPath)) return parsePost(`${slug}.md`);
  return null;
}
