import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

/**
 * Returns all lemmas for corresponding queries
 * @param {*} page page number
 * @param {*} search search pattern 
 */

const getAll = async (pattern, lang) => {
    let url = `${baseUrl}${lang}/lemmas/${pattern}`;
    const response = await axios.get(url);
    return response.data;
}

/**
 * Returns plain lemma
 * @param {*} name 
 */
const getLemma = async (name, lang) => {
    const { data, error } = await axios.get(`${baseUrl}${lang}/lemmas/${name}/`);
    if (error){
        throw new Error("Error fetching lemma");
    }
    return data;
}

/**
 * Returns the lemma table with columns and data
 * @param name name of the lemma
 */
const getLemmaTable = async (name, lang) => {
    let dims = [];
    const {data, error} = await axios.get(`${baseUrl}${lang}/lemmas/${name}/`);
    let dimOptions = [];
    data.related_words.map(word => {
        dims = dims.concat(Object.keys(word.dimensions));
        dimOptions = dimOptions.concat(
            Object.keys(word.dimensions).map(key => {
            let opts = {};
            word.dimensions[key].map(feat => {
                opts[feat] = feat;
            })
            return {
                [key]: opts
            }
            })
        )
    })
    // make sure dimensions and options are unique
    dims = [...new Set(dims)];
    let dimOps = Array.from(new Set(dimOptions.map(JSON.stringify))).map(JSON.parse);
    let columns = [];
    columns = columns.concat(dims.map((dim, i) => {
        return {
            title: dim,
            field: dim.toLowerCase(),
            lookup: dimOps[i][dim]
            }
        })
    );
    // set data for table in a corresponding format
    let response_data = data.related_words.map(word => {
        let result = {name: word.name}
        word.tagset.map(tag => {
        result[Object.keys(tag)[0].toLowerCase()] = tag[Object.keys(tag)[0]];
        })
        return result;
    })
    
    return {
        data: response_data,
        columns: columns
    }
}

const searchLemma = async (pattern) => {
    const { data, error } = await axios.get(`${baseUrl}/lemmas/?search=${pattern}`);
    return data;
}

export default {
    getAll,
    getLemma,
    getLemmaTable,
    searchLemma
}