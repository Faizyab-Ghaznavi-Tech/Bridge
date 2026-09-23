import mongoose from 'mongoose';
import { createAdminUser } from './utils/createAdmin.js';
import { getMongoConnectionOptions, getMongoUri } from './utils/mongodb.js';

let connectionPromise;

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (!connectionPromise) {
    const mongoUri = getMongoUri();
    connectionPromise = mongoose
      .connect(mongoUri, getMongoConnectionOptions(mongoUri))
      .then(async () => {
        console.log('✅ Connected to MongoDB');
        await createAdminUser();
      })
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  await connectionPromise;
};
