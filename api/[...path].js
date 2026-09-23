import app from '../server/app.js';

export default async function handler(req, res) {
  try {
    app(req, res);
  } catch (error) {
    console.error('API handler error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
