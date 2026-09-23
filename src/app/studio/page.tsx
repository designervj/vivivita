const tenantDb = process.env.NEXT_PUBLIC_TENANT_DB || process.env.TENANT_DB_NAME || 'kp_vivivita';
const adminUrl = process.env.NEXT_PUBLIC_KALP_ADMIN_URL || 'https://zero.kalptree.xyz';

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-16 text-[var(--foreground)]">
      <section className="mx-auto max-w-3xl rounded-3xl border border-[#dfe6e8] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Vivivita Studio</p>
        <h1 className="mt-4 text-3xl font-semibold">Kalp admin connection is configured</h1>
        <p className="mt-4 text-neutral-600">
          Tenant database: <span className="font-semibold text-[var(--foreground)]">{tenantDb}</span>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn-primary" href={adminUrl} target="_blank" rel="noreferrer">
            Open Kalp Admin
          </a>
          <a className="rounded-full border px-5 py-2.5 text-sm font-semibold text-[var(--primary)]" href="/api/cms/pages" style={{ borderColor: 'color-mix(in srgb, var(--primary) 30%, transparent)' }}>
            Check CMS API
          </a>
        </div>
      </section>
    </main>
  );
}
