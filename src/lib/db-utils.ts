import { NextRequest } from 'next/server';

export const fallbackDbName =
  process.env.TENANT_DB_NAME || process.env.NEXT_PUBLIC_TENANT_DB || process.env.DB_NAME || 'kp_vivivita';

export function getRequestDbName(req: NextRequest) {
  return req.headers.get('x-tenant-db') || fallbackDbName;
}

export function serializeDocument<T extends Record<string, unknown>>(document: T): T & { _id?: string } {
  return {
    ...document,
    _id: document._id ? String(document._id) : undefined,
  };
}
