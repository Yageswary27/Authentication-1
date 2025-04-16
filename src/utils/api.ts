import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api.com', // 🔁 replace with actual base URL
  headers: {
    'Content-Type': 'application/json',
    'X-api-header': 'your-api-key-here', // 🔁 replace with actual key
  },
});

export default api;
