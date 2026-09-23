import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';
import { syncEnglishEditsToCroatian } from '@/lib/pages/locale-normalize';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const page =
      (await db.collection('pages').findOne({ slug })) ||
      (await db.collection('site_pages').findOne({ slug }));

    if (!page) {
      return NextResponse.json({ success: false, message: `Page not found: ${slug}` }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: serializeDocument(page) });
  } catch (error) {
    console.error('Error fetching CMS page:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch page' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const body = (await req.json()) as Record<string, unknown>;
    const { _id, createdAt, ...pageData } = body?.data && typeof body.data === 'object'
      ? (body.data as Record<string, unknown>)
      : body;
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const previousPage =
      (await db.collection('pages').findOne({ slug })) ||
      (await db.collection('site_pages').findOne({ slug }));
    const normalizedPageData = syncEnglishEditsToCroatian(pageData, previousPage || undefined);

    await db.collection('pages').updateOne(
      { slug },
      { $set: { ...normalizedPageData, slug, updatedAt: new Date() }, $setOnInsert: { createdAt: new Date() } },
      { upsert: true },
    );

    return NextResponse.json({ success: true, message: 'Page saved successfully' });
  } catch (error) {
    console.error('Error saving CMS page:', error);
    return NextResponse.json({ success: false, error: 'Failed to save page' }, { status: 500 });
  }
}
