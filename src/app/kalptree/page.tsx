'use client';

import { useState } from 'react';
import { Lock, Mail, Loader2, ArrowRight, Leaf } from 'lucide-react';
import { generateCodeChallenge, generateCodeVerifier } from '@/lib/pkce';

export default function KalptreePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tenantSlug = process.env.NEXT_PUBLIC_TENANT_SLUG || 'vivivita';
  const tenantDb = process.env.NEXT_PUBLIC_TENANT_DB || 'kp_vivivita';

  const getAdminBaseUrl = () => {
    const configuredUrl = process.env.NEXT_PUBLIC_ADMIN_URL?.trim();
    const prodUrl = (process.env.NEXT_PUBLIC_PROD_ADMIN_URL || 'https://zerolive.kalptree.xyz').trim();

    // If configuredUrl is explicitly set to a production domain (not localhost)
    if (configuredUrl && !configuredUrl.includes('localhost') && !configuredUrl.includes('127.0.0.1')) {
      return configuredUrl;
    }

    if (typeof window !== 'undefined') {
      const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname);
      if (isLocal) {
        return configuredUrl || 'http://localhost:5177';
      }
      return prodUrl;
    }

    if (process.env.NODE_ENV === 'production') {
      return prodUrl;
    }
    return configuredUrl || 'http://localhost:5177';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) return;

    setError(null);
    setLoading(true);

    try {
      // Step 1: Authenticate with Kalptree API
      const loginRes = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-tenant-db': tenantDb,
          'x-tenant-slug': tenantSlug,
          'x-auth-type': 'admin',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
          tenant_slug: tenantSlug,
        }),
      });

      const loginData = await loginRes.json();

      if (!loginRes.ok || !loginData.access_token) {
        throw new Error(
          loginData.detail || loginData.message || 'Invalid credentials. Please try again.'
        );
      }

      const token = loginData.access_token;
      const maxAge = 60 * 60 * 24 * 30; // 30 days

      // Step 2: Set cookies
      document.cookie = `auth_token=${token}; path=/; max-age=${maxAge}; SameSite=Lax`;
      document.cookie = `${tenantDb}_auth_token=${token}; path=/; max-age=${maxAge}; SameSite=Lax`;
      document.cookie = `auth_token_${tenantDb}=${token}; path=/; max-age=${maxAge}; SameSite=Lax`;

      try {
        localStorage.setItem('token', token);
      } catch (_) {}

      // Step 3: Generate PKCE for SSO handoff
      const codeVerifier = generateCodeVerifier();
      const codeChallenge = await generateCodeChallenge(codeVerifier);

      const adminBaseUrl = getAdminBaseUrl().replace(/\/+$/, '');
      const redirectUri = `${adminBaseUrl}/auth/callback`;

      // Step 4: Create SSO session
      const ssoRes = await fetch('/api/auth/sso/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'x-tenant-db': tenantDb,
          'x-tenant-slug': tenantSlug,
        },
        body: JSON.stringify({ redirectUri, codeChallenge, codeVerifier }),
      });

      const ssoData = await ssoRes.json();

      if (!ssoRes.ok || !ssoData.success || !ssoData.code) {
        throw new Error(
          ssoData.detail || ssoData.message || 'Failed to establish admin session.'
        );
      }

      // Step 5: Redirect to kalp-admin dashboard with SSO code
      const callbackUrl = `${redirectUri}?code=${encodeURIComponent(ssoData.code)}`;
      window.location.href = callbackUrl;
    } catch (err: any) {
      console.error('[VivivitaAdminLogin] Error:', err);
      setError(err.message || 'Login failed. Please verify your credentials.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden"
        style={{
          backgroundImage: `url('/image/Rectangle 1795.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(25,107,117,0.85) 0%, rgba(58,159,179,0.65) 55%, rgba(110,192,227,0.45) 100%)',
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/image/Icon.svg" alt="Vivivita" className="h-10 w-10 brightness-0 invert" />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.75rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.02em',
            }}
          >
            Vivivita
          </span>
        </div>

        {/* Bottom copy */}
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-white/70" size={16} />
            <span className="text-white/70 text-sm uppercase tracking-widest font-medium">
              Wellness Studio
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '2.6rem',
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Vaš wellbeing
            <br />
            <em>journey</em> počinje ovdje
          </h2>
          <p className="text-white/75 text-sm leading-relaxed max-w-xs">
            Upravljajte programima, sadržajem i zajednicom Vivivita studija sa jednog mjesta.
          </p>
        </div>

        {/* Decorative circles */}
        <div
          className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        />
        <div
          className="absolute -top-16 -right-16 w-56 h-56 rounded-full"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/image/Icon.svg" alt="Vivivita" className="h-8 w-8" />
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#196b75',
              }}
            >
              Vivivita
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2rem',
                fontWeight: 600,
                color: '#1c1917',
                marginBottom: '0.4rem',
              }}
            >
              Admin Login
            </h1>
            <p className="text-sm text-neutral-500">
              Unesite podatke za pristup studio panelu
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 p-3 flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Email adresa
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-[#3a9fb3] transition-colors">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  required
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-2xl bg-neutral-50 focus:bg-white text-sm focus:outline-none focus:border-[#3a9fb3] focus:ring-2 focus:ring-[#3a9fb3]/15 disabled:opacity-50 transition-all"
                  placeholder="admin@vivivita.com"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                Lozinka
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-[#3a9fb3] transition-colors">
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  required
                  disabled={loading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-2xl bg-neutral-50 focus:bg-white text-sm focus:outline-none focus:border-[#3a9fb3] focus:ring-2 focus:ring-[#3a9fb3]/15 disabled:opacity-50 transition-all"
                  placeholder="••••••••"
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-white text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2 hover:brightness-110 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #196b75 0%, #3a9fb3 100%)',
                boxShadow: '0 4px 20px rgba(58,159,179,0.35)',
              }}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span>Prijavljivanje...</span>
                </>
              ) : (
                <>
                  <span>Prijava</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-neutral-400">
            © {new Date().getFullYear()} Vivivita Studio · All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
