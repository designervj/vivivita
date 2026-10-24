import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import BlogPostView from '../../../views/blog/BlogPostView';
import { getBlogPost, blogPosts } from '../../../lib/blog/posts';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Članak nije pronađen | Vivi Vita',
    };
  }

  return {
    title: `${post.title.hr} | Vivi Vita Blog`,
    description: post.excerpt.hr,
    openGraph: {
      title: post.title.hr,
      description: post.excerpt.hr,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return <BlogPostView post={post} relatedPosts={relatedPosts} />;
}
