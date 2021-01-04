import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// set token 
// TO-DO

const getAll = async () => {
    const {data, error} = await axios.get(`${baseUrl}bul/languages/?populated`);
    return {
        data,
        error
    };
};

export default {
    getAll
}