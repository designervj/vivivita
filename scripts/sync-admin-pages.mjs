/**
 * sync-admin-pages.mjs
 *
 * Syncs pages from kalp-admin/pages/*.json & kalp-admin/homepage/home.json → src/lib/pages/pages.json
 *
 * Usage:
 *   node scripts/sync-admin-pages.mjs
 *   npm run sync
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PAGES_DIR = resolve(__dirname, '../kalp-admin/pages');
const HOMEPAGE_JSON = resolve(__dirname, '../kalp-admin/homepage/home.json');
const MASTER_PAGES_JSON = resolve(__dirname, '../src/lib/pages/pages.json');

const pageMap = new Map();

// 1. Load homepage from kalp-admin/homepage/home.json if exists
if (existsSync(HOMEPAGE_JSON)) {
  try {
    const home = JSON.parse(readFileSync(HOMEPAGE_JSON, 'utf-8'));
    if (home.slug) pageMap.set(home.slug, home);
  } catch (e) {
    console.error('Error reading home.json:', e);
  }
}

// 2. Load all pages from kalp-admin/pages/
if (existsSync(PAGES_DIR)) {
  const files = readdirSync(PAGES_DIR).filter((f) => f.endsWith('.json'));
  for (const file of files) {
    try {
      const pageData = JSON.parse(readFileSync(resolve(PAGES_DIR, file), 'utf-8'));
      if (pageData.slug) {
        pageMap.set(pageData.slug, pageData);
        console.log(`Synced page [${pageData.slug}] from kalp-admin/pages/${file}`);
      }
    } catch (e) {
      console.error(`Error reading ${file}:`, e);
    }
  }
}

// 3. Write out to src/lib/pages/pages.json
const allPages = Array.from(pageMap.values());
writeFileSync(MASTER_PAGES_JSON, JSON.stringify(allPages, null, 2) + '\n', 'utf-8');
console.log(`\n✅  Synced ${allPages.length} total page(s) into src/lib/pages/pages.json`);
