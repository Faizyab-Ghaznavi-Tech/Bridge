import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('bridgeb_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('bridgeb_token');
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (name: string, email: string, password: string) =>
    api.post('/auth/register', { name, email, password }),
  
  getProfile: () =>
    api.get('/users/profile'),
  
  updateProfile: (userData: any) =>
    api.put('/users/profile', userData),
};

// Articles API
export const articlesAPI = {
  getAll: () =>
    api.get('/articles'),
  
  getMine: () =>
    api.get('/articles/mine'),
  
  getById: (id: string) =>
    api.get(`/articles/${id}`),
  
  create: (title: string, content: string) =>
    api.post('/articles', { title, content }),
  
  update: (id: string, title: string, content: string) =>
    api.put(`/articles/${id}`, { title, content }),
  
  delete: (id: string) =>
    api.delete(`/articles/${id}`),
};

export default api;