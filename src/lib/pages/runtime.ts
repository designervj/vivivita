import clientPromise from '@/lib/mongodb';
import { fallbackDbName, serializeDocument } from '@/lib/db-utils';
import pages from './pages.json';

export type CmsPage = Record<string, unknown> & {
  slug: string;
  content?: Array<Record<string, unknown>>;
};

export function getLocalPage(slug: string): CmsPage | undefined {
  return (pages as CmsPage[]).find((page) => page.slug === slug);
}

export async function getCmsPage(slug: string): Promise<CmsPage | undefined> {
  try {
    const client = await clientPromise;
    const db = client.db(fallbackDbName);
    const page =
      (await db.collection('pages').findOne({ slug })) ||
      (await db.collection('site_pages').findOne({ slug }));
    return page ? serializeDocument(page) as unknown as CmsPage : getLocalPage(slug);
  } catch {
    return getLocalPage(slug);
  }
}
