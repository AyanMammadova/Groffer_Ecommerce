
import axios from 'axios';
import config from '../config/config';

const apiInstance = axios.create({
  baseURL: config.apiBaseUrl, // Base URL
  headers: {
    'Authorization': `Bearer ${config.token}`, 
    'Content-Type': 'multipart/form-data',
  },
});

export default apiInstance;
