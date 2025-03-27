import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { instance } from './instance';

export const getRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await instance.get<T>(url, config as InternalAxiosRequestConfig);
    return response.data;
  } catch (error) {
    console.error(`GET request to ${url} failed:`, error);
    throw error;
  }
};

export const postRequest = async <T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await instance.post<T>(url, data, config as InternalAxiosRequestConfig);
    return response.data;
  } catch (error) {
    console.error(`POST request to ${url} failed:`, error);
    throw error;
  }
};
