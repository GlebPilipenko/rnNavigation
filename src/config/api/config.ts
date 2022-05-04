// @ts-ignore
import { REACT_APP_BASE_URL } from '@env';
import axios from 'axios';

export const API_CONFIG = axios.create({
  baseURL: REACT_APP_BASE_URL,
});
