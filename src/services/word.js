import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

/**
 * Returns all words
 * @param {*} page page number
 * @param {*} search search pattern
 */

const getAll = async (pattern) => {
  let url = `${baseUrl}/words/${pattern}`;
  const response = await axios.get(url);
  return response.data;
}

/**
 * Returns one word if it exists, otherwise an error
 * @param {*} name name of the word
 */

const getOne = async (name) => {
  let url = `${baseUrl}/words/${name}/`;
  const { data, error } = await axios.get(url);
  return error ? error : data;
}

export default {
  getAll,
  getOne
}