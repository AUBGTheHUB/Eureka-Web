import axios from "axios";
import config from '../constants';
const baseUrl = config.url.API_URL;

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const getProposals = (user) => {
    const { data, error } = await axios.get(`${baseUrl}$proposals?user=id`)
} 