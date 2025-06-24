import React, { useState, useEffect } from 'react';
import { PlusCircle, FileText, Clock, CheckCircle, XCircle, BarChart3 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import RichTextEditor from '../components/RichTextEditor';
import ArticleCard from '../components/ArticleCard';
import toast from 'react-hot-toast';

interface Article {
  _id: string;
  title: string;
  abstract: string;
  content: string;
  category: string;
  keywords: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  rejectionReason?: string;
  author: {
    username: string;
    institution?: string;
  };
  readTime: number; // <-- Add this
  views: number;    // <-- And this
}


interface Stats {
  userArticles: number;
  pendingArticles: number;
  approvedArticles: number;
}

const Dashboard: React.FC = () => {
  const { state } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'write' | 'articles'>('overview');
  const [articles, setArticles] = useState<Article[]>([]);
  const [stats, setStats] = useState<Stats>({ userArticles: 0, pendingArticles: 0, approvedArticles: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [articleForm, setArticleForm] = useState({
    title: '',
    abstract: '',
    content: '',
    category: 'Education Technology',
    keywords: ''
  });

  const [articleFilter, setArticleFilter] = useState<'all' | 'pending' | 'approved'>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = [
    'Education Technology',
    'Curriculum Development',
    'Teaching Methods',
    'Student Assessment',
    'Educational Psychology',
    'Special Education',
    'Higher Education',
    'Early Childhood Education',
    'Other'
  ];

  const API_BASE = 'http://localhost:3001/api';

  useEffect(() => {
    fetchStats();
    fetchArticles();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_BASE}/users/dashboard/stats`, {
        headers: { Authorization: `Bearer ${state.token}` }
      });
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/articles/user/mine`, {
        headers: { Authorization: `Bearer ${state.token}` }
      });
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Failed to fetch articles:', error);
      toast.error('Failed to load your articles');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!articleForm.title.trim() || !articleForm.abstract.trim() || !articleForm.content.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`
        },
        body: JSON.stringify({
          ...articleForm,
          keywords: articleForm.keywords.split(',').map(k => k.trim()).filter(k => k)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success('Article submitted successfully!');
      setArticleForm({
        title: '',
        abstract: '',
        content: '',
        category: 'Education Technology',
        keywords: ''
      });
      setActiveTab('articles');
      fetchStats();
      fetchArticles();
    } catch (error: any) {
      toast.error(error.message || 'Failed to submit article');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteArticle = async (articleId: string) => {
    if (!window.confirm('Are you sure you want to delete this article?')) return;

    try {
      const response = await fetch(`${API_BASE}/articles/${articleId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${state.token}` }
      });

      if (!response.ok) {
        throw new Error('Failed to delete article');
      }

      toast.success('Article deleted successfully');
      fetchStats();
      fetchArticles();
    } catch (error: any) {
      toast.error(error.message || 'Failed to delete article');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {state.user?.username}!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your research articles and track your contributions to the BRIDGEB community.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              <BarChart3 className="w-5 h-5 inline mr-2" />
              Overview
            </button>
            <button
              onClick={() => setActiveTab('write')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'write'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              <PlusCircle className="w-5 h-5 inline mr-2" />
              Write Article
            </button>
            <button
              onClick={() => setActiveTab('articles')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'articles'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              My Articles ({articles.length})
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => {
                  setActiveTab('articles');
                  setArticleFilter('all');
                }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left w-full focus:outline-none hover:ring-2 ring-blue-400 transition"
                type="button"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Articles</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.userArticles}</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => {
                  setActiveTab('articles');
                  setArticleFilter('pending');
                }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left w-full focus:outline-none hover:ring-2 ring-yellow-400 transition"
                type="button"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Pending Review</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pendingArticles}</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => {
                  setActiveTab('articles');
                  setArticleFilter('approved');
                }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left w-full focus:outline-none hover:ring-2 ring-green-400 transition"
                type="button"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Published</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.approvedArticles}</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Recent Articles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Articles</h3>
              </div>
              <div className="p-6">
                {articles.length > 0 ? (
                  <div className="space-y-4">
                    {articles.slice(0, 5).map(article => (
                      <div key={article._id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">{article.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {new Date(article.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            article.status === 'approved' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : article.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {article.status}
                          </span>
                          <button
                            onClick={() => handleDeleteArticle(article._id)}
                            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                          >
                            <XCircle className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 text-center py-8">
                    No articles yet. Start by writing your first article!
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'write' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Submit New Research Article
              </h2>
              
              <form onSubmit={handleSubmitArticle} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={articleForm.title}
                    onChange={(e) => setArticleForm({...articleForm, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter a compelling title for your research"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      value={articleForm.category}
                      onChange={(e) => setArticleForm({...articleForm, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      id="keywords"
                      value={articleForm.keywords}
                      onChange={(e) => setArticleForm({...articleForm, keywords: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., machine learning, assessment, pedagogy"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Abstract *
                  </label>
                  <textarea
                    id="abstract"
                    value={articleForm.abstract}
                    onChange={(e) => setArticleForm({...articleForm, abstract: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write a concise abstract (max 1000 characters) that summarizes your research..."
                    maxLength={1000}
                    required
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {articleForm.abstract.length}/1000 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Article Content *
                  </label>
                  <RichTextEditor
                    value={articleForm.content}
                    onChange={(value) => setArticleForm({...articleForm, content: value})}
                    placeholder="Write your research article here. Use the toolbar to format text, add headings, lists, and more..."
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setArticleForm({
                        title: '',
                        abstract: '',
                        content: '',
                        category: 'Education Technology',
                        keywords: ''
                      });
                    }}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Article'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === 'articles' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {articleFilter === 'pending'
                  ? 'Pending Review'
                  : articleFilter === 'approved'
                  ? 'Published Articles'
                  : 'My Articles'}
              </h2>
              <button
                onClick={() => setActiveTab('write')}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                New Article
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
              </div>
            ) : articles.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {articles
                  .filter(article => {
                    if (articleFilter === 'all') return true;
                    return article.status === articleFilter;
                  })
                  .map(article => (
                  <div key={article._id} className="relative">
                    <ArticleCard article={article} showStatus={true} />
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => handleDeleteArticle(article._id)}
                        className="p-2 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-md hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
                        title="Delete article"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="absolute top-4 right-16">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="p-2 bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        title="Preview article"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                    {article.status === 'rejected' && article.rejectionReason && (
                      <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                        <p className="text-sm text-red-800 dark:text-red-200">
                          <strong>Rejection Reason:</strong> {article.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No articles yet
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Start sharing your research with the education community!
                </p>
                <button
                  onClick={() => setActiveTab('write')}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Write Your First Article
                </button>
              </div>
            )}
          </div>
        )}

        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {selectedArticle.author?.username} • {new Date(selectedArticle.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Abstract</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedArticle.abstract}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Content</h3>
                  <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>
                {selectedArticle.keywords.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Keywords</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedArticle.status === 'rejected' && selectedArticle.rejectionReason && (
                  <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <strong>Rejection Reason:</strong> {selectedArticle.rejectionReason}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;