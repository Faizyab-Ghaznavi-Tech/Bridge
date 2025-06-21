import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, BookOpen } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 transition-colors duration-200">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <BookOpen className="w-24 h-24 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring educational research!
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 w-full justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
          </Link>
          
          <Link
            to="/articles"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 w-full justify-center"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Browse Articles
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 w-full justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>

        <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Quick Links
          </h3>
          <div className="space-y-2 text-sm">
            <Link to="/about" className="block text-blue-600 dark:text-blue-400 hover:underline">
              About BRIDGEB
            </Link>
            <Link to="/login" className="block text-blue-600 dark:text-blue-400 hover:underline">
              Sign In
            </Link>
            <Link to="/register" className="block text-blue-600 dark:text-blue-400 hover:underline">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;