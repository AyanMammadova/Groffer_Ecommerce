import axios from 'axios';
import config from '../config/config';

const apiInstance = axios.create({
  baseURL: config.apiBaseUrl, // Base URL
  headers: {
    'Content-Type': 'multipart/form-data', 
  },
});
// console.log(localStorage.getItem('accessToken'))
  
apiInstance.interceptors.request.use((config) => {
  // console.log(localStorage.getItem('accessToken'))
  const accessToken = localStorage.getItem('accessToken'); // Get refresh token from localStorage
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`; // Set Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error); // Handle request error
});

export default apiInstance;