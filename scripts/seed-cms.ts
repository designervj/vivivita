import 'dotenv/config';
import { MongoClient } from 'mongodb';
import pages from '../src/lib/pages/pages.json' assert { type: 'json' };

const tenantDb = process.env.TENANT_DB_NAME || process.env.NEXT_PUBLIC_TENANT_DB || 'kp_vivivita';
let mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error('MONGODB_URI is required');
}

if (!mongoUri.includes('directConnection=true')) {
  mongoUri += `${mongoUri.includes('?') ? '&' : '?'}directConnection=true`;
}

const client = new MongoClient(mongoUri);

async function main() {
  await client.connect();
  const db = client.db(tenantDb);
  const now = new Date();

  for (const page of pages) {
    const { _id, ...pageData } = page as Record<string, unknown>;
    const slug = String(pageData.slug || '');
    if (!slug) continue;

    await db.collection('pages').updateOne(
      { slug },
      {
        $set: { ...pageData, updatedAt: now },
        $setOnInsert: { createdAt: now },
      },
      { upsert: true },
    );
  }

  console.log(`Seeded ${pages.length} CMS page(s) into ${tenantDb}.pages`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await client.close();
  });
