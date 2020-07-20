import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

/**
 * Get all dimension names
 */
const getAll = async () => {
    const { data, error } = await axios.get(`${baseUrl}/dimensions/`);
    return data.results.map(dim => dim.name);
}

/**
 * Get specific dimension with feature options
 * @param {name} name of the dimension 
 */
const getOne = async (name) => {
    const { data, error } = await axios.get(`${baseUrl}/dimensions/${name}/`);
    return {
        data,
        error
    }
}

export default {
    getAll,
    getOne
};
