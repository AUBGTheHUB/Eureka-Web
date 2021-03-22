import { get } from './api';

export default {
    getAll: async (pattern, lang) => {
        const {data, error} = await get(`/${lang}/lemmas/${pattern}`);
        return data;
    },
    getOne: async (name, lang) => {
        const {data, error} = await get(`/${lang}/lemmas/${name}/`);
        return data;
    },
    autoComplete: async (lang, pattern) => {
        const { data, error } = await get(`/${lang}/lemmas/?search=${pattern}`);
        return data;
    }
}