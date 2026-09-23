import { NextRequest, NextResponse } from 'next/server';
import localPages from '@/lib/pages/pages.json';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName } from '@/lib/db-utils';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const dbName = getRequestDbName(req);
    const db = client.db(dbName);
    const now = new Date();

    const results = await Promise.all(
      (localPages as Record<string, unknown>[]).map((page) => {
        const { _id, ...pageData } = page;
        const slug = String(pageData.slug || '');
        if (!slug) throw new Error('Page slug is required');

        return db.collection('pages').updateOne(
          { slug },
          {
            $set: { ...pageData, updatedAt: now },
            $setOnInsert: { createdAt: now },
          },
          { upsert: true },
        );
      }),
    );

    return NextResponse.json({ success: true, database: dbName, collection: 'pages', count: results.length });
  } catch (error) {
    console.error('CMS seed failed:', error);
    return NextResponse.json({ success: false, error: 'Failed to seed CMS pages' }, { status: 500 });
  }
}
