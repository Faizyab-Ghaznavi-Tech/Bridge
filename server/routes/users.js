import express from 'express';
import bcrypt from 'bcryptjs';
import { getDatabase } from '../database/init.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get current user profile
router.get('/profile', authenticateToken, (req, res) => {
  try {
    const db = getDatabase();
    
    db.get('SELECT id, name, email, bio, institution, created_at FROM users WHERE id = ?', 
      [req.user.id], (err, user) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({ user });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update user profile
router.put('/profile', authenticateToken, (req, res) => {
  try {
    const { name, bio, institution } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const db = getDatabase();
    
    db.run(
      'UPDATE users SET name = ?, bio = ?, institution = ? WHERE id = ?',
      [name, bio || '', institution || '', req.user.id],
      function(err) {
        if (err) {
          return res.status(500).json({ message: 'Error updating profile' });
        }

        if (this.changes === 0) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Profile updated successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;