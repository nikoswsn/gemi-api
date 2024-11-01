// axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api: AxiosInstance = axios.create({
  baseURL: 'https://opendata-api.businessportal.gr/api/opendata/v1', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'api_key': process.env.GEMH_API_KEY,
    },
});




export default api;
