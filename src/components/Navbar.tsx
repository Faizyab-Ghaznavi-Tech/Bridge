import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X, Sun, Moon, User, LogOut, ChevronDown, FileText } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showGuidelinesMenu, setShowGuidelinesMenu] = useState(false);
  const { state, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">BRIDGE</span>
              <p className="text-xs text-gray-600 dark:text-gray-300 -mt-1">
                Bringing Research In Direct Grasp of Educators
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/articles"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/articles') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Research Articles
            </Link>
            <Link
  to="/editorial-board"
  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive('/editorial-board') 
      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
  }`}
>
  Editorial Board
</Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowGuidelinesMenu((v) => !v)}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                  isActive('/articles-types') || isActive('/checklist')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                Guidelines
                <ChevronDown className="w-4 h-4" />
              </button>
              {showGuidelinesMenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 py-2 border dark:border-gray-700 dropdown-animate ring-1 ring-blue-100 dark:ring-blue-900/30">
                  <Link
                    to="/articles-types"
                    className="flex items-center gap-3 px-5 py-3 text-base font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all duration-200"
                    onClick={() => {
                      setShowGuidelinesMenu(false);
                      setIsOpen(false);
                    }}
                  >
                    <BookOpen className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                    Article Types & Author Guidelines
                  </Link>
                  <Link
                    to="/checklist"
                    className="flex items-center gap-3 px-5 py-3 text-base font-medium text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-lg transition-all duration-200"
                    onClick={() => {
                      setShowGuidelinesMenu(false);
                      setIsOpen(false);
                    }}
                  >
                    <FileText className="w-5 h-5 text-teal-500 dark:text-teal-300" />
                    Manuscript Checklist
                  </Link>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Auth Section */}
            {state.user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{state.user.username}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowUserMenu(false)}
                    >
                      Dashboard
                    </Link>
                    {state.user.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setShowUserMenu(false)}
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md shadow-lg hover:from-teal-500 hover:to-blue-700 transition-all duration-300"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md textbase font-medium ${
                  isActive('/') 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/articles"
                className={`block px-3 py-2 rounded-md textbase font-medium ${
                  isActive('/articles') 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Research Articles
              </Link>
              <Link
  to="/editorial-board"
  className={`block px-3 py-2 rounded-md textbase font-medium ${
    isActive('/editorial-board') 
      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
      : 'text-gray-700 dark:text-gray-300'
  }`}
  onClick={() => setIsOpen(false)}
>
  Editorial Board
</Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md textbase font-medium ${
                  isActive('/about') 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <div>
    <button
      type="button"
      onClick={() => setShowGuidelinesMenu((v) => !v)}
      className={`block w-full text-left px-3 py-2 rounded-md textbase font-medium flex items-center gap-1 ${
        isActive('/articles-types') || isActive('/checklist')
          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
          : 'text-gray-700 dark:text-gray-300'
      }`}
    >
      Guidelines
      <ChevronDown className="w-4 h-4" />
    </button>
    {showGuidelinesMenu && (
      <div className="pl-4 dropdown-animate">
        <Link
          to="/articles-types"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
          onClick={() => {
            setShowGuidelinesMenu(false);
            setIsOpen(false);
          }}
        >
          <BookOpen className="w-5 h-5 text-blue-500 dark:text-blue-300" />
          Article Types & Author Guidelines
        </Link>
        <Link
          to="/checklist"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-200"
          onClick={() => {
            setShowGuidelinesMenu(false);
            setIsOpen(false);
          }}
        >
          <FileText className="w-5 h-5 text-teal-500 dark:text-teal-300" />
          Manuscript Checklist
        </Link>
      </div>
    )}
  </div>
              
              {state.user ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md textbase font-medium text-gray-700 dark:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  {state.user.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="block px-3 py-2 rounded-md textbase font-medium text-gray-700 dark:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md textbase font-medium text-red-600 dark:text-red-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md textbase font-medium text-gray-700 dark:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 rounded-md textbase font-medium bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg hover:from-teal-500 hover:to-blue-700 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
              
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-3 py-2 rounded-md textbase font-medium text-gray-700 dark:text-gray-300"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
<style>
{`
  .dropdown-animate {
    animation: dropdown-fade-in 0.25s cubic-bezier(.4,0,.2,1);
    transform-origin: top left;
  }
  @keyframes dropdown-fade-in {
    0% { opacity: 0; transform: scaleY(0.95) translateY(-10px);}
    100% { opacity: 1; transform: scaleY(1) translateY(0);}
  }
`}
</style>