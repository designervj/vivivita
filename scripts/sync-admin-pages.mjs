/**
 * sync-admin-pages.mjs
 *
 * Syncs homepage from kalp-admin/homepage/home.json → src/lib/pages/pages.json
 *
 * Usage:
 *   node scripts/sync-admin-pages.mjs
 *   # or add to package.json: "sync": "node scripts/sync-admin-pages.mjs"
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ADMIN_HOME = resolve(__dirname, '../kalp-admin/homepage/home.json');
const PAGES_JSON = resolve(__dirname, '../src/lib/pages/pages.json');

if (!existsSync(ADMIN_HOME)) {
  console.error('❌  Not found:', ADMIN_HOME);
  process.exit(1);
}

const adminHome = JSON.parse(readFileSync(ADMIN_HOME, 'utf-8'));
const pages = JSON.parse(readFileSync(PAGES_JSON, 'utf-8'));

const idx = pages.findIndex((p) => p.slug === 'home');
if (idx !== -1) {
  pages[idx] = adminHome;
  console.log('✅  Replaced home page at index', idx);
} else {
  pages.unshift(adminHome);
  console.log('✅  Inserted home page at index 0');
}

writeFileSync(PAGES_JSON, JSON.stringify(pages, null, 2) + '\n', 'utf-8');
console.log('📄  Written:', PAGES_JSON);
console.log('💡  Hot-reload will pick this up. If not, restart: pnpm dev');
