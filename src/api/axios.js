import axios from 'axios';
import { API_KEY, BASE_URL } from '../utils/constants';

export const axiosInstance = axios.create({
    baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(config => {
    config.params = {api_key: API_KEY}
    return config;
});