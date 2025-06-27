import axios from 'axios';
import router from '@/router';

const request = axios.create({
  baseURL: 'api/v1',
  timeout: 5000,
})

request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  }
)

request.interceptors.response.use(
  response => {
    const code = response.data.code;
    if (response.status === 200 && code === '200') {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response) {
      const { status } = error.response;
      if (status === 403 || status === 401) {
        router.push({ path: '/login' });
        return;
      }
      // Message.error(`HTTP ERROR: ${status}`);
    } else {
      // Message.error(API_GENERAL_ERROR_MESSAGE);
    }
    return Promise.reject(error);
  }
)

export default request;
