import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './db.js';

dotenv.config();

const PORT = process.env.PORT || 3001;

// Start server
const startServer = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
  
  app.listen(PORT, () => {
    console.log(`🚀 BRIDGEB Server running on port ${PORT}`);
    console.log(`📱 API available at http://localhost:${PORT}/api`);
  });
};

startServer().catch(console.error);
