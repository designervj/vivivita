'use client';

import { useEffect } from 'react';
import { applyTheme } from '@/lib/theme/applyTheme';

export default function ThemeProvider() {
  useEffect(() => {
    let isActive = true;

    async function loadTheme() {
      try {
        const response = await fetch('/api/platform/business-blueprint', { cache: 'no-store' });
        if (!response.ok) return;
        const result = await response.json();
        const payload = result?.data?.payload || result?.payload || result?.data || result;
        const theme = payload?.public_theme || payload?.experience?.public?.theme || payload?.theme;
        if (isActive) applyTheme(theme);
      } catch (error) {
        console.warn('Vivivita theme could not be loaded from Kalp admin.', error);
      }
    }

    loadTheme();

    return () => {
      isActive = false;
    };
  }, []);

  return null;
}
