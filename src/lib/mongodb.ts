import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn('Missing MONGODB_URI. MongoDB-backed API routes will be unavailable.');
}

const options = {
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

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  const globalWithMongo = global as typeof globalThis & {
    _vivivitaMongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._vivivitaMongoClientPromise) {
    globalWithMongo._vivivitaMongoClientPromise = uri
      ? new MongoClient(withDirectConnection(uri), options).connect()
      : Promise.resolve(null as unknown as MongoClient);
  }

  clientPromise = globalWithMongo._vivivitaMongoClientPromise;
} else {
  clientPromise = uri
    ? new MongoClient(withDirectConnection(uri), options).connect()
    : Promise.resolve(null as unknown as MongoClient);
}

export default clientPromise;
