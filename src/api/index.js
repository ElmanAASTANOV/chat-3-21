import axios from 'axios';
import apiConfig from 'config/apiConfig'

const instance = axios.create({
  baseURL: apiConfig.url,
  timeout:5000
});

export default instance;