import axios from 'axios';
// @ts-ignore
import {REACT_APP_BASE_URL} from '@env';

export const API_CONFIG = axios.create({
  baseURL: REACT_APP_BASE_URL,
});
