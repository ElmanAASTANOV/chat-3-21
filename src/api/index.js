import axios from 'axios';
import apiConfig from 'config/apiConfig'

const instance = axios.create({
  baseURL: apiConfig.url
});

export default instance;