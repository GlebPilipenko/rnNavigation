import axios from 'axios';

export const API_CONFIG = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
