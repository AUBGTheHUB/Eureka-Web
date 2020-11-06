import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

// set token 
// TO-DO

/**
 * Get all languages with a specific format
 */
// random number generator for lemmas and words. Demo purposes only, will be removed in next stage
function getRandomInt(min, max) {
    return Math.floor(Math.random(min) * Math.floor(max));
}

const getAll = async () => {
    const {data, error} = await axios.get(`${baseUrl}eng/languages/`);
    const result = data.results.map(lang => {
        return {
            name: lang.name,
            walsCode: lang.walsCode,
            family: lang.family ? lang.family.name : null,
            genus: lang.genus? lang.genus.name : null,
            lemmas: getRandomInt(10000, 50000),
            words: getRandomInt(50000, 500000) // number of words and lemmas are mocked for this iteration
        }
    });

    return {
        result,
        error
    };
};

export default {
    getAll
}