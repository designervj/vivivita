import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const submissions = await db
      .collection('form_submissions')
      .find({ form: 'contact' })
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({ success: true, data: submissions.map(serializeDocument) });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch contact submissions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Record<string, unknown>;
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const submission = {
      form: 'contact',
      payload: body,
      status: 'new',
      source: 'vivivita-website',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('form_submissions').insertOne(submission);

    return NextResponse.json({
      success: true,
      data: serializeDocument({ ...submission, _id: result.insertedId }),
    });
  } catch (error) {
    console.error('Error saving contact submission:', error);
    return NextResponse.json({ success: false, error: 'Failed to save contact submission' }, { status: 500 });
  }
}
