import axios from 'axios';
import type { Axios } from 'axios';

export const instance: Axios = axios.create({
  baseURL: '/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
  timeout: 3000,
});
