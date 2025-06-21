import React from 'react';
import { Calendar, Clock, User, Eye, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  _id: string;
  title: string;
  abstract: string;
  author: {
    username: string;
    institution?: string;
  };
  category: string;
  createdAt: string;
  readTime: number;
  views: number;
  status?: string;
}

interface ArticleCardProps {
  article: Article;
  showStatus?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, showStatus = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
      <div className="flex justify-between items-start mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          <Tag className="w-3 h-3 mr-1" />
          {article.category}
        </span>
        {showStatus && article.status && (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(article.status)}`}>
            {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
        <Link 
          to={`/articles/${article._id}`}
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {article.title}
        </Link>
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
        {article.abstract}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{article.author.username}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formatDate(article.createdAt)}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{article.readTime} min read</span>
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            <span>{article.views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;