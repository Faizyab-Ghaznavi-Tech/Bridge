import express from 'express';
import { getDatabase } from '../database/init.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all articles (public)
router.get('/', (req, res) => {
  try {
    const db = getDatabase();
    
    db.all(
      'SELECT id, title, content, author_name, created_at, updated_at FROM articles ORDER BY created_at DESC',
      (err, articles) => {
        if (err) {
          return res.status(500).json({ message: 'Database error' });
        }
        res.json({ articles });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user's articles
router.get('/mine', authenticateToken, (req, res) => {
  try {
    const db = getDatabase();
    
    db.all(
      'SELECT * FROM articles WHERE author_id = ? ORDER BY created_at DESC',
      [req.user.id],
      (err, articles) => {
        if (err) {
          return res.status(500).json({ message: 'Database error' });
        }
        res.json({ articles });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single article
router.get('/:id', (req, res) => {
  try {
    const db = getDatabase();
    
    db.get('SELECT * FROM articles WHERE id = ?', [req.params.id], (err, article) => {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      if (!article) {
        return res.status(404).json({ message: 'Article not found' });
      }

      res.json({ article });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create article
router.post('/', authenticateToken, (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    if (title.length < 3) {
      return res.status(400).json({ message: 'Title must be at least 3 characters' });
    }

    if (content.length < 10) {
      return res.status(400).json({ message: 'Content must be at least 10 characters' });
    }

    const db = getDatabase();
    
    db.run(
      'INSERT INTO articles (title, content, author_id, author_name) VALUES (?, ?, ?, ?)',
      [title, content, req.user.id, req.user.name],
      function(err) {
        if (err) {
          return res.status(500).json({ message: 'Error creating article' });
        }

        res.status(201).json({
          message: 'Article published successfully',
          article: {
            id: this.lastID,
            title,
            content,
            author_name: req.user.name,
            created_at: new Date().toISOString()
          }
        });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update article
router.put('/:id', authenticateToken, (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const db = getDatabase();
    
    db.run(
      'UPDATE articles SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND author_id = ?',
      [title, content, req.params.id, req.user.id],
      function(err) {
        if (err) {
          return res.status(500).json({ message: 'Error updating article' });
        }

        if (this.changes === 0) {
          return res.status(404).json({ message: 'Article not found or unauthorized' });
        }

        res.json({ message: 'Article updated successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete article
router.delete('/:id', authenticateToken, (req, res) => {
  try {
    const db = getDatabase();
    
    db.run(
      'DELETE FROM articles WHERE id = ? AND author_id = ?',
      [req.params.id, req.user.id],
      function(err) {
        if (err) {
          return res.status(500).json({ message: 'Error deleting article' });
        }

        if (this.changes === 0) {
          return res.status(404).json({ message: 'Article not found or unauthorized' });
        }

        res.json({ message: 'Article deleted successfully' });
      }
    );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;