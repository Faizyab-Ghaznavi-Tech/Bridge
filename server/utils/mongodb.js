export const DEFAULT_MONGODB_URI = 'mongodb://localhost:27017/bridgeb';
export const DEFAULT_MONGODB_DB_NAME = 'bridgeb';

export const resolveMongoDbName = (uri) => {
  if (process.env.MONGODB_DB_NAME) {
    return process.env.MONGODB_DB_NAME;
  }

  try {
    const { pathname } = new URL(uri);
    const dbName = pathname.replace(/^\//, '');
    return dbName || DEFAULT_MONGODB_DB_NAME;
  } catch {
    return DEFAULT_MONGODB_DB_NAME;
  }
};

export const getMongoUri = () => process.env.MONGODB_URI || DEFAULT_MONGODB_URI;

export const getMongoConnectionOptions = (uri) => ({
  dbName: resolveMongoDbName(uri),
  serverSelectionTimeoutMS: Number(process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS || 10000),
});

export const maskMongoUri = (uri) =>
  uri.replace(/(mongodb(?:\+srv)?:\/\/)([^@]+)@/, '$1***@');
