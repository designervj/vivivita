import { NextRequest, NextResponse } from 'next/server';
import localPages from '@/lib/pages/pages.json';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';
import { syncEnglishEditsToCroatian } from '@/lib/pages/locale-normalize';

export const dynamic = 'force-dynamic';

function recordFromPages(pages: Record<string, unknown>[]) {
  return pages.reduce<Record<string, Record<string, unknown>>>((acc, page) => {
    const normalizedPage = serializeDocument(page);
    const slug = String(normalizedPage.slug || '');
    if (slug) acc[slug] = normalizedPage;
    return acc;
  }, {});
}

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const [cmsPages, sitePages] = await Promise.all([
      db.collection('pages').find({}).toArray(),
      db.collection('site_pages').find({}).toArray(),
    ]);

    const pageMap = new Map<string, Record<string, unknown>>();
    for (const page of sitePages) pageMap.set(String(page.slug || ''), page);
    for (const page of cmsPages) pageMap.set(String(page.slug || ''), page);

    if (pageMap.size === 0) {
      const seedPages = (localPages as Record<string, unknown>[]).map(({ _id, ...page }) => ({
        ...page,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      if (seedPages.length > 0) await db.collection('pages').insertMany(seedPages);
      return NextResponse.json({ success: true, data: recordFromPages(seedPages) });
    }

    return NextResponse.json({ success: true, data: recordFromPages(Array.from(pageMap.values())) });
  } catch (error) {
    console.error('Error fetching CMS pages:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch pages' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const pages = Array.isArray(body) ? body : Array.isArray(body?.data) ? body.data : [body?.data || body];
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));

    const results = await Promise.all(
      pages.map((page: Record<string, unknown>) => {
        const { _id, createdAt, ...pageData } = page;
        const slug = String(pageData.slug || '');
        if (!slug) throw new Error('Page slug is required');
        return (async () => {
          const previousPage =
            (await db.collection('pages').findOne({ slug })) ||
            (await db.collection('site_pages').findOne({ slug }));
          const normalizedPageData = syncEnglishEditsToCroatian(pageData, previousPage || undefined);

          return db.collection('pages').updateOne(
            { slug },
            { $set: { ...normalizedPageData, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
            { upsert: true },
          );
        })();
      }),
    );

    return NextResponse.json({ success: true, count: results.length });
  } catch (error) {
    console.error('Error saving CMS pages:', error);
    return NextResponse.json({ success: false, error: 'Failed to save pages' }, { status: 500 });
  }
}
