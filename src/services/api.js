import axios from 'axios';
import config from '../constants';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const apiClient = axios.create({
    baseURL: config.url.API_URL
});

const {patch, get, post, put, delete: remove } = apiClient;

export { get, post, put, remove, patch };
