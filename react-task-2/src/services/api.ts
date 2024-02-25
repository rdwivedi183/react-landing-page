import axios from 'axios';
import authenticate from './auth';

const axiosInstance = axios.create({
  baseURL: 'https://example.com/api',
});

// Function to refresh token and retry the request
const refreshTokenAndRetry = async (originalRequest: any): Promise<any> => {
  try {
    const token = await authenticate('username', 'password');
    if (token) {
      originalRequest.headers.Authorization = `Bearer ${token}`;
      return axiosInstance(originalRequest);
    } else {
      throw new Error('Failed to refresh token');
    }
  } catch (error) {
    console.error('Failed to refresh token:', error);
    throw error;
  }
};

// Intercepting requests to handle expired tokens
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshTokenAndRetry(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
