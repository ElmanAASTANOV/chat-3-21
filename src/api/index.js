import axios from 'axios';
import apiConfig from 'config/apiConfig'
import { apiConfig1 } from 'config';

const instance = axios.create({
  baseURL: apiConfig.url
});

const axiosInstance = axios.create({
  baseURL: apiConfig1.url,
  timeout:5000
});

export default instance;
export {axiosInstance}