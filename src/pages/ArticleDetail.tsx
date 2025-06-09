import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, BookOpen, Edit, Trash2 } from 'lucide-react';
import { articlesAPI } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import toast from 'react-hot-toast';

interface Article {
  id: number;
  title: string;
  content: string;
  author_id: number;
  author_name: string;
  created_at: string;
  updated_at: string;
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchArticle(id);
    }
  }, [id]);

  const fetchArticle = async (articleId: string) => {
    try {
      const response = await articlesAPI.getById(articleId);
      setArticle(response.data.article);
    } catch (error: any) {
      if (error.response?.status === 404) {
        toast.error('Article not found');
        navigate('/research-articles');
      } else {
        toast.error('Failed to load article');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!article || !window.confirm('Are you sure you want to delete this article?')) {
      return;
    }

    try {
      await articlesAPI.delete(article.id.toString());
      toast.success('Article deleted successfully');
      navigate('/published-articles');
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to delete article');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const isAuthor = user && article && user.id === article.author_id;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <LoadingSpinner size="lg\" text="Loading article..." />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Article Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/research-articles"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
        </div>

        {/* Article */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    <span className="font-medium">{article.author_name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Published {formatDate(article.created_at)}</span>
                  </div>
                  {article.updated_at !== article.created_at && (
                    <div className="flex items-center">
                      <Edit className="h-5 w-5 mr-2" />
                      <span>Updated {formatDate(article.updated_at)}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Author Actions */}
              {isAuthor && (
                <div className="flex items-center space-x-2 ml-6">
                  <Link
                    to="/published-articles"
                    className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    title="Edit Article"
                  >
                    <Edit className="h-5 w-5" />
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="Delete Article"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Article Stats */}
            <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <span>{article.content.split(' ').length} words</span>
              <span>~{Math.ceil(article.content.split(' ').length / 200)} min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-900 dark:text-gray-100 leading-relaxed whitespace-pre-wrap">
                {article.content}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-8 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Published by <span className="font-medium">{article.author_name}</span> on {formatDate(article.created_at)}
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/research-articles"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Browse More Articles
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Actions */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              to="/research-articles"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Explore More Research
            </Link>
            {user && !isAuthor && (
              <Link
                to="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                Share Your Research
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;