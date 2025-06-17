import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (
    token &&
    !config.url?.includes('Login') &&
    !config.url?.includes('Register')
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
