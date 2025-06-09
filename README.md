# BRIDGEB - Research Platform

**Bringing Research In Direct Grasp of Educators**

A comprehensive full-stack web application that empowers educators worldwide to publish, discover, and collaborate on educational research.

## 🌟 Features

### 🔐 User Authentication
- Secure user registration and login with JWT
- Password hashing with bcrypt
- Protected routes and middleware
- User profile management

### 📝 Article Management
- Publish research articles with rich content
- Edit and delete your own articles
- Browse all published research articles
- Search and filter functionality
- Responsive article viewer

### 🎨 Modern UI/UX
- Beautiful, responsive design with Tailwind CSS
- Dark/Light mode toggle with system preference detection
- Smooth animations and transitions
- Mobile-first responsive design
- Toast notifications for user feedback

### 🔍 Advanced Features
- Real-time search across articles
- Sort articles by date or title
- User dashboard with profile management
- Article statistics and reading time estimation
- SEO-friendly URLs and meta tags

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Hot Toast** for notifications
- **Lucide React** for icons
- **Context API** for state management

### Backend
- **Node.js** with Express
- **SQLite** database with SQL queries
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** enabled for cross-origin requests

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd bridgeb-research-platform
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Start the Application
```bash
# Start both frontend and backend concurrently
npm run dev

# Or start them separately:
# Backend (Terminal 1)
npm run server

# Frontend (Terminal 2)
npm run client
```

### 5. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📁 Project Structure

```
bridgeb-research-platform/
├── src/                          # Frontend React application
│   ├── components/               # Reusable UI components
│   ├── contexts/                 # React Context providers
│   ├── pages/                    # Page components
│   ├── utils/                    # Utility functions and API calls
│   └── App.tsx                   # Main App component
├── server/                       # Backend Express application
│   ├── database/                 # Database setup and connection
│   ├── middleware/               # Express middleware
│   ├── routes/                   # API route handlers
│   └── index.js                  # Server entry point
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### User Management
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Articles
- `GET /api/articles` - Get all articles (public)
- `GET /api/articles/mine` - Get user's articles (protected)
- `GET /api/articles/:id` - Get single article
- `POST /api/articles` - Create new article (protected)
- `PUT /api/articles/:id` - Update article (protected)
- `DELETE /api/articles/:id` - Delete article (protected)

## 🎯 Key Features Explained

### Authentication System
- JWT-based authentication with 7-day expiration
- Secure password hashing using bcrypt
- Protected routes that redirect to login
- Automatic token refresh and validation

### Article Management
- Rich text content support
- Author attribution and timestamps
- Edit/delete permissions for article owners
- Public browsing for all users

### Search & Discovery
- Real-time search across titles, content, and authors
- Sort by publication date or alphabetical order
- Responsive grid layout for article cards
- Reading time estimation

### User Experience
- Smooth page transitions and loading states
- Toast notifications for all user actions
- Dark/light mode with system preference detection
- Mobile-responsive design for all screen sizes

## 🔒 Security Features

- Password hashing with bcrypt (12 rounds)
- JWT token validation on protected routes
- CORS configuration for secure cross-origin requests
- Input validation and sanitization
- SQL injection prevention with parameterized queries

## 🌙 Dark Mode Support

The application includes a comprehensive dark mode implementation:
- System preference detection
- Manual toggle with persistent storage
- Smooth transitions between themes
- Consistent styling across all components

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Heroku)
```bash
# Set environment variables
# Deploy the server folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set
- All the educators and researchers who inspire this platform

---

**BRIDGEB** - Empowering educators through accessible research sharing.