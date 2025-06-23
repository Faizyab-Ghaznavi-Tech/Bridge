import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Eye, Tag, ArrowLeft, Building } from 'lucide-react';
import toast from 'react-hot-toast';

interface Article {
  _id: string;
  title: string;
  content: string;
  abstract: string;
  keywords: string[];
  author: {
    username: string;
    institution?: string;
    bio?: string;
  };
  category: string;
  createdAt: string;
  readTime: number;
  views: number;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const API_BASE = 'http://localhost:3001/api';

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    if (!id) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/articles/${id}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Article not found');
      }

      setArticle(data);
    } catch (error: any) {
      console.error('Failed to fetch article:', error);
      toast.error(error.message || 'Failed to load article');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/articles"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/articles"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <Tag className="w-4 h-4 mr-1" />
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span className="font-medium">{article.author.username}</span>
            </div>
            {article.author.institution && (
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                <span>{article.author.institution}</span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(article.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              <span>{article.views} views</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Abstract
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {article.abstract}
            </p>
          </div>

          {/* Keywords */}
          {article.keywords && article.keywords.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Keywords:
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Article Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              lineHeight: '1.7',
              fontSize: '16px'
            }}
          />
        </div>

        {/* Author Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            About the Author
          </h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                {article.author.username}
              </h4>
              {article.author.institution && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {article.author.institution}
                </p>
              )}
              {article.author.bio && (
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {article.author.bio}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Article Content */}
      <style >{`
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          color: inherit;
          margin-top: 2em;
          margin-bottom: 1em;
        }
        
        .prose h1 { font-size: 2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.25em; }
        
        .prose p {
          margin-bottom: 1.5em;
          line-height: 1.7;
        }
        
        .prose ul, .prose ol {
          margin: 1.5em 0;
          padding-left: 2em;
        }
        
        .prose li {
          margin-bottom: 0.5em;
        }
        
        .prose blockquote {
          border-left: 4px solid #3b82f6;
          padding-left: 1em;
          margin: 1.5em 0;
          font-style: italic;
          background: rgba(59, 130, 246, 0.05);
          padding: 1em;
          border-radius: 0.5em;
        }
        
        .prose code {
          background: rgba(0, 0, 0, 0.1);
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          font-size: 0.9em;
        }
        
        .prose pre {
          background: rgba(0, 0, 0, 0.05);
          padding: 1em;
          border-radius: 0.5em;
          overflow-x: auto;
          margin: 1.5em 0;
        }
        
        .dark .prose code {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .dark .prose pre {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .dark .prose blockquote {
          background: rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  );
};

export default ArticleDetail;