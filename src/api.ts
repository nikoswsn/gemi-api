// axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

let apiKey = process.env.GEMH_API_KEY

const api: AxiosInstance = axios.create({
  baseURL: 'https://opendata-api.businessportal.gr/api/opendata/v1', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    },
});
// Interceptor to add the api_key to the headers dynamically
api.interceptors.request.use((config) => {
  if (apiKey) {
    config.headers['api_key'] = apiKey;
  }
  return config;
});

export const init = (api_key:string) => {
  apiKey=api_key
}


export default api;
