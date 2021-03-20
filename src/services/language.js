import { get } from './api';

export default {
    getAll: async () => {
        const {data, error} = await get(`/bul/languages/?populated`);
        return {
            data,
            error
        };
    }
}