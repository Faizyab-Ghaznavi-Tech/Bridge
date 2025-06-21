import React, { useState, useEffect } from 'react';
import { Users, FileText, Clock, CheckCircle, XCircle, BarChart3, Eye } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

interface PendingArticle {
  _id: string;
  title: string;
  abstract: string;
  content: string;
  author: {
    username: string;
    email: string;
    institution?: string;
  };
  category: string;
  createdAt: string;
  keywords: string[];
}

interface AdminStats {
  totalUsers: number;
  totalArticles: number;
  pendingArticles: number;
  approvedArticles: number;
}

const AdminDashboard: React.FC = () => {
  const { state } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'pending' | 'users'>('overview');
  const [pendingArticles, setPendingArticles] = useState<PendingArticle[]>([]);
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalArticles: 0,
    pendingArticles: 0,
    approvedArticles: 0
  });
  const [selectedArticle, setSelectedArticle] = useState<PendingArticle | null>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE = 'http://localhost:3001/api';

  useEffect(() => {
    if (state.user?.role === 'admin') {
      fetchStats();
      fetchPendingArticles();
    }
  }, [state.user]);

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

  const fetchPendingArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/articles/admin/pending`, {
        headers: { Authorization: `Bearer ${state.token}` }
      });
      const data = await response.json();
      setPendingArticles(data);
    } catch (error) {
      console.error('Failed to fetch pending articles:', error);
      toast.error('Failed to load pending articles');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApproveArticle = async (articleId: string) => {
    try {
      const response = await fetch(`${API_BASE}/articles/${articleId}/approve`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${state.token}` }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success('Article approved successfully!');
      fetchStats();
      fetchPendingArticles();
      setSelectedArticle(null);
    } catch (error: any) {
      toast.error(error.message || 'Failed to approve article');
    }
  };

  const handleRejectArticle = async (articleId: string) => {
    if (!rejectionReason.trim()) {
      toast.error('Please provide a rejection reason');
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/articles/${articleId}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.token}`
        },
        body: JSON.stringify({ reason: rejectionReason })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success('Article rejected');
      fetchStats();
      fetchPendingArticles();
      setSelectedArticle(null);
      setRejectionReason('');
    } catch (error: any) {
      toast.error(error.message || 'Failed to reject article');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (state.user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage articles, users, and platform content.
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
              onClick={() => setActiveTab('pending')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'pending'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300'
              }`}
            >
              <Clock className="w-5 h-5 inline mr-2" />
              Pending Articles ({pendingArticles.length})
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalUsers}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Total Articles</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalArticles}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <Clock className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Pending Review</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pendingArticles}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Published</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.approvedArticles}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveTab('pending')}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Review Pending Articles</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {stats.pendingArticles} articles waiting for review
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pending' && (
          <div>
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
              </div>
            ) : pendingArticles.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pendingArticles.map(article => (
                  <div key={article._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        By {article.author.username} • {formatDate(article.createdAt)}
                      </p>
                      <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {article.abstract}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => setSelectedArticle(article)}
                        className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Review
                      </button>
                      
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApproveArticle(article._id)}
                          className="inline-flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </button>
                        <button
                          onClick={() => {
                            setSelectedArticle(article);
                            setRejectionReason('');
                          }}
                          className="inline-flex items-center px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Clock className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No pending articles
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All articles have been reviewed. Great job!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Article Review Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedArticle.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      By {selectedArticle.author.username} • {formatDate(selectedArticle.createdAt)}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      setRejectionReason('');
                    }}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                </div>
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
                      {selectedArticle.keywords.map((keyword, index) => (
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
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="mb-4">
                    <label htmlFor="rejectionReason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Rejection Reason (if rejecting)
                    </label>
                    <textarea
                      id="rejectionReason"
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Provide a reason for rejection..."
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => handleRejectArticle(selectedArticle._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject Article
                    </button>
                    <button
                      onClick={() => handleApproveArticle(selectedArticle._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Approve Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;