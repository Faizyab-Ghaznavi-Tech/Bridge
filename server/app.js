import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import articleRoutes from './routes/articles.js';
import userRoutes from './routes/users.js';
import { connectDB } from './db.js';

dotenv.config();

const app = express();

const defaultAllowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://bridge-rouge-zeta.vercel.app',
];

const envAllowedOrigins = (process.env.CLIENT_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const allowedOrigins = new Set([...defaultAllowedOrigins, ...envAllowedOrigins]);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }

    callback(null, false);
  },
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const requireDB = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({
      message: process.env.MONGODB_URI
        ? 'Database connection failed'
        : 'MongoDB is not configured on the server',
    });
  }
};

app.use('/api/auth', requireDB, authRoutes);
app.use('/api/articles', requireDB, articleRoutes);
app.use('/api/users', requireDB, userRoutes);

app.get('/api/health', (req, res) => {
  res.json({ message: 'BRIDGEB API is running!' });
});

export default app;
