'use client';

import { useActionState } from 'react';
import { login } from '../actions/auth';
import { Lock, Mail } from 'lucide-react';

const initialState = { error: '' };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await login(formData);
      if (result?.error) {
        return { error: result.error };
      }
      return { error: '' };
    },
    initialState
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6f7] px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-serif-hero text-neutral-800 mb-2">Admin Login</h1>
          <p className="text-sm text-neutral-500 font-sans">Enter your credentials to access the studio</p>
        </div>

        <form action={formAction} className="space-y-6">
          {state?.error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-xl border border-red-100">
              {state.error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-neutral-200 rounded-xl bg-neutral-50 focus:bg-white text-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all outline-none"
                  placeholder="admin@vivivita.com"
                  defaultValue="admin@vivivita.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full pl-10 pr-3 py-2.5 border border-neutral-200 rounded-xl bg-neutral-50 focus:bg-white text-sm focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all outline-none"
                  placeholder="••••••••"
                  defaultValue="admin123"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full btn-primary justify-center !py-3 rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
