

// // api.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Update with your actual API base URL
// });

// export default api;

// api.js
import axios from 'axios';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000', // Update with your actual API base URL
});

// Interceptor to add token to headers
api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage or any other storage method
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
