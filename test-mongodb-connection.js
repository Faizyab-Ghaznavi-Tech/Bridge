import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  getMongoConnectionOptions,
  getMongoUri,
  maskMongoUri,
  resolveMongoDbName,
} from './server/utils/mongodb.js';

dotenv.config();

const testConnection = async () => {
  const mongoUri = getMongoUri();

  try {
    console.log('Testing MongoDB connection...');
    console.log('Connection URI:', maskMongoUri(mongoUri));
    console.log('Database:', resolveMongoDbName(mongoUri));

    await mongoose.connect(mongoUri, getMongoConnectionOptions(mongoUri));
    console.log('MongoDB connected successfully.');

    const testCollection = mongoose.connection.db.collection('test');
    const result = await testCollection.insertOne({
      test: 'Hello MongoDB!',
      timestamp: new Date(),
      from: 'BRIDGEB connection test',
    });
    console.log('Test document inserted with ID:', result.insertedId);

    await testCollection.deleteOne({ _id: result.insertedId });
    console.log('Test document cleaned up.');

    await mongoose.disconnect();
    console.log('MongoDB disconnected successfully.');
  } catch (error) {
    console.error('MongoDB connection failed.');
    console.error('Error message:', error.message);

    if (error.message.includes('ECONNREFUSED')) {
      console.log('');
      console.log('Troubleshooting tips:');
      console.log('1. Make sure MongoDB is installed and running if using a local URI.');
      console.log('2. Check if port 27017 is available for local MongoDB.');
      console.log('3. For MongoDB Atlas, use mongodb+srv:// and allow your current IP address.');
    }

    process.exitCode = 1;
  }
};

testConnection();
