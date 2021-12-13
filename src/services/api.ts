import axios from 'axios';

const api = axios.create({
  baseURL: 'https://adonists.herokuapp.com',
});

export default api;