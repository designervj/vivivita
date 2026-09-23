import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName, serializeDocument } from '@/lib/db-utils';
import defaultBlueprint from '@/lib/blueprint/vivivita-blueprint.json';

export const dynamic = 'force-dynamic';

const FASTAPI_URL = (process.env.FASTAPI_URL || '').replace(/\/$/, '');

async function fetchKalpAdminBlueprint(req: NextRequest) {
  if (!FASTAPI_URL) return null;

  try {
    const response = await fetch(`${FASTAPI_URL}/platform/business-blueprint`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'x-tenant-db': getRequestDbName(req),
      },
    });

    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

async function fetchMongoBlueprint(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const blueprint =
      (await db.collection('business_blueprints').findOne({ document_key: 'vivivita-blueprint-v1' })) ||
      (await db.collection('business_blueprints').findOne({ document_key: 'blueprint' })) ||
      (await db.collection('business_blueprints').findOne({ document_key: 'blueprint-v2' })) ||
      (await db.collection('blueprints').findOne({ document_key: 'vivivita-blueprint-v1' })) ||
      (await db.collection('theme').findOne({ key: 'vivivita-theme' }));

    return blueprint ? serializeDocument(blueprint) : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const remoteBlueprint = await fetchKalpAdminBlueprint(req);
  if (remoteBlueprint) return NextResponse.json(remoteBlueprint);

  const mongoBlueprint = await fetchMongoBlueprint(req);
  if (mongoBlueprint) return NextResponse.json({ success: true, data: mongoBlueprint });

  return NextResponse.json({ success: true, data: defaultBlueprint });
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const payload = body?.payload || body;
    const client = await clientPromise;
    const db = client.db(getRequestDbName(req));
    const document = {
      ...defaultBlueprint,
      ...body,
      payload: {
        ...(defaultBlueprint as any).payload,
        ...payload,
      },
      document_key: body.document_key || 'vivivita-blueprint-v1',
      updatedAt: new Date(),
    };

    await db.collection('business_blueprints').updateOne(
      { document_key: document.document_key },
      { $set: document, $setOnInsert: { createdAt: new Date() } },
      { upsert: true },
    );

    return NextResponse.json({ success: true, data: document });
  } catch (error) {
    console.error('Error saving Vivivita blueprint:', error);
    return NextResponse.json({ success: false, error: 'Failed to save blueprint' }, { status: 500 });
  }
}
