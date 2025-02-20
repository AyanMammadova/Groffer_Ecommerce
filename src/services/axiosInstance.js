import axios from 'axios';
import config from '../config/config';

const apiInstance = axios.create({
  baseURL: config.apiBaseUrl,
  headers: {
    'Content-Type': 'multipart/form-data', 
  },
});
// console.log(localStorage.getItem('accessToken'))
  
apiInstance.interceptors.request.use((config) => {
  // console.log(localStorage.getItem('accessToken'))
  const accessToken = localStorage.getItem('accessToken'); 
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error); 
});

export default apiInstance;