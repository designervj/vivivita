import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getRequestDbName } from '@/lib/db-utils';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const dbName = getRequestDbName(req);
    await client.db(dbName).command({ ping: 1 });

    return NextResponse.json({
      success: true,
      database: dbName,
      status: 'connected',
    });
  } catch (error) {
    console.error('Database health check failed:', error);
    return NextResponse.json(
      { success: false, database: getRequestDbName(req), status: 'unavailable' },
      { status: 500 },
    );
  }
}
