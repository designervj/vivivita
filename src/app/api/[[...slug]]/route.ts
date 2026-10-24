import { proxyRequest } from '@/lib/apiProxy';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type ApiContext = { params: Promise<{ slug?: string[] }> };

export async function GET(req: NextRequest, context: ApiContext) {
  return handleProxy(req, context);
}

export async function POST(req: NextRequest, context: ApiContext) {
  return handleProxy(req, context);
}

export async function PUT(req: NextRequest, context: ApiContext) {
  return handleProxy(req, context);
}

export async function PATCH(req: NextRequest, context: ApiContext) {
  return handleProxy(req, context);
}

export async function DELETE(req: NextRequest, context: ApiContext) {
  return handleProxy(req, context);
}

async function handleProxy(req: NextRequest, context: ApiContext) {
  const { slug } = await context.params;

  if (!slug || slug.length === 0) {
    return NextResponse.json({ error: 'Invalid API endpoint' }, { status: 404 });
  }

  const base = slug[0];
  const rest = slug.slice(1).join('/');
  let targetPath = slug.join('/');

  if (base === 'commerce') {
    targetPath = `commerce/${rest}`;
  } else if (base === 'auth') {
    if (rest === 'login') {
      const isAdmin = req.headers.get('x-auth-type') === 'admin' || req.headers.get('x-admin-portal') === 'true';
      targetPath = isAdmin ? 'auth/login' : 'auth/customer/login';
    } else if (rest === 'me') {
      const isAdmin = req.headers.get('x-auth-type') === 'admin' || req.headers.get('x-admin-portal') === 'true';
      targetPath = isAdmin ? 'auth/me' : 'auth/customer/me';
    } else {
      targetPath = `auth/${rest}`;
    }
  } else if (base === 'form-data') {
    targetPath = 'form-data';
  }

  return proxyRequest(req, targetPath);
}
