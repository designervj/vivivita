import 'dotenv/config';
import { MongoClient } from 'mongodb';
import blueprint from '../src/lib/blueprint/vivivita-blueprint.json' assert { type: 'json' };

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
  const document = {
    ...blueprint,
    updatedAt: new Date(),
  };

  await db.collection('business_blueprints').updateOne(
    { document_key: blueprint.document_key },
    { $set: document, $setOnInsert: { createdAt: new Date() } },
    { upsert: true },
  );

  console.log(`Seeded ${blueprint.document_key} into ${tenantDb}.business_blueprints`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await client.close();
  });
