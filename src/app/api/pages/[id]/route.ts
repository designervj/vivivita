import { proxyRequest } from '@/lib/apiProxy';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  return proxyRequest(req, `pages/${id}`);
}

export async function PUT(req: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  return proxyRequest(req, `pages/${id}`);
}

export async function DELETE(req: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  return proxyRequest(req, `pages/${id}`);
}
