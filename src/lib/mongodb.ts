import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

// Check if MONGODB_URI is provided and not an unconfigured placeholder
const isConfigured = Boolean(
  uri &&
    !uri.includes('@HOST:') &&
    !uri.includes('USER:PASSWORD') &&
    !uri.includes('HOST:27017')
);

if (!isConfigured) {
  if (process.env.NODE_ENV === 'development') {
    console.info('[MongoDB] Placeholder or unconfigured MONGODB_URI detected; MongoDB storage is disabled.');
  }
}

const options = {
  serverSelectionTimeoutMS: 2000,
  connectTimeoutMS: 2000,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

const withDirectConnection = (value: string) => {
  if (!value || value.includes('directConnection=true')) return value;
  return `${value}${value.includes('?') ? '&' : '?'}directConnection=true`;
};

let clientPromise: Promise<MongoClient | null>;

if (isConfigured && uri) {
  if (process.env.NODE_ENV === 'development') {
    const globalWithMongo = global as typeof globalThis & {
      _vivivitaMongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._vivivitaMongoClientPromise) {
      globalWithMongo._vivivitaMongoClientPromise = new MongoClient(
        withDirectConnection(uri),
        options
      ).connect().catch((err) => {
        console.warn('[MongoDB] Connection failed:', err.message);
        return null as unknown as MongoClient;
      });
    }

    clientPromise = globalWithMongo._vivivitaMongoClientPromise;
  } else {
    clientPromise = new MongoClient(withDirectConnection(uri), options)
      .connect()
      .catch((err) => {
        console.warn('[MongoDB] Connection failed:', err.message);
        return null as unknown as MongoClient;
      });
  }
} else {
  clientPromise = Promise.resolve(null);
}

export default clientPromise;

