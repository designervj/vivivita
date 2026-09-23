import { NextRequest, NextResponse } from 'next/server';
import { getConfiguredDatabaseName } from '@/lib/database-authority';

const FASTAPI_URL = (process.env.FASTAPI_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

export async function proxyRequest(
  req: NextRequest,
  targetPath: string,
  options: { addApiPrefix?: boolean } = {},
) {
  let databaseName: string;
  try {
    databaseName = getConfiguredDatabaseName();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Server database configuration is unavailable' },
      { status: 500 },
    );
  }

  const searchParams = req.nextUrl.searchParams.toString();
  const baseBackendUrl = options.addApiPrefix ? `${FASTAPI_URL}/api` : FASTAPI_URL;
  const url = `${baseBackendUrl}/${targetPath}${searchParams ? `?${searchParams}` : ''}`;

  const headers = new Headers();
  ['authorization', 'cookie', 'content-type', 'accept', 'tenant-slug', 'tenant_slug', 'auth-token', 'idempotency-key'].forEach(
    (headerName) => {
      const value = req.headers.get(headerName);
      if (value) headers.set(headerName, value);
    },
  );
  headers.set('x-tenant-db', databaseName);

  const fetchOptions: RequestInit = {
    method: req.method,
    headers,
  };

  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const contentType = req.headers.get('content-type');
    try {
      fetchOptions.body = contentType?.includes('application/json')
        ? JSON.stringify(await req.json())
        : await req.blob();
    } catch {}
  }

  try {
    const response = await fetch(url, fetchOptions);
    const contentType = response.headers.get('content-type');
    const nextResponse = contentType?.includes('application/json')
      ? NextResponse.json(await response.json(), { status: response.status })
      : new NextResponse(await response.text(), {
          status: response.status,
          headers: { 'Content-Type': contentType || 'text/plain' },
        });

    const setCookies =
      typeof response.headers.getSetCookie === 'function'
        ? response.headers.getSetCookie()
        : response.headers.get('set-cookie')
          ? [response.headers.get('set-cookie')!]
          : [];

    const isSecureRequest =
      req.nextUrl.protocol === 'https:' || req.headers.get('x-forwarded-proto') === 'https';

    setCookies.forEach((cookie) => {
      const parts = cookie.split(';').map((part) => part.trim());
      const [nameValue, ...attrParts] = parts;
      const eqIndex = nameValue.indexOf('=');
      if (eqIndex === -1) return;

      const cookieOptions: Parameters<typeof nextResponse.cookies.set>[2] = { path: '/' };
      attrParts.forEach((attr) => {
        const lowerAttr = attr.toLowerCase();
        if (lowerAttr.startsWith('max-age=')) cookieOptions.maxAge = parseInt(attr.substring(8), 10);
        else if (lowerAttr.startsWith('path=')) cookieOptions.path = attr.substring(5);
        else if (lowerAttr === 'httponly') cookieOptions.httpOnly = true;
        else if (lowerAttr === 'secure') cookieOptions.secure = true;
        else if (lowerAttr.startsWith('samesite=')) {
          const sameSiteValue = attr.substring(9).toLowerCase();
          if (sameSiteValue === 'lax' || sameSiteValue === 'strict' || sameSiteValue === 'none') {
            cookieOptions.sameSite = sameSiteValue;
          }
        }
      });

      if (!isSecureRequest) {
        cookieOptions.secure = false;
        if (cookieOptions.sameSite === 'none') cookieOptions.sameSite = 'lax';
      }

      nextResponse.cookies.set(nameValue.substring(0, eqIndex), nameValue.substring(eqIndex + 1), cookieOptions);
    });

    return nextResponse;
  } catch (error) {
    console.error(`[Proxy Error] ${url}:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to connect to backend service' },
      { status: 500 },
    );
  }
}
