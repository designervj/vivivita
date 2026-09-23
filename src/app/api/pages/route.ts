import { proxyRequest } from '@/lib/apiProxy';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  return proxyRequest(req, 'pages');
}

export async function POST(req: NextRequest) {
  return proxyRequest(req, 'pages');
}
