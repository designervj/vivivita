import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const pageSlug = req.nextUrl.searchParams.get('pageSlug');
    const query = pageSlug ? { pageSlug } : {};
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const comments = await db.collection('comments').find(query).sort({ createdAt: -1 }).limit(200).toArray();

    return NextResponse.json({ success: true, data: comments.map(serializeDocument) });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch comments' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const comment = {
      ...body,
      source: 'vivivita-website',
      status: body.status || 'open',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('comments').insertOne(comment);

    return NextResponse.json({ success: true, data: serializeDocument({ ...comment, _id: result.insertedId }) });
  } catch (error) {
    console.error('Error saving comment:', error);
    return NextResponse.json({ success: false, error: 'Failed to save comment' }, { status: 500 });
  }
}
