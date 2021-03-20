import { get } from './api';

export default {
    getAll: async (user) => {
        const { data, error } = await get(`/proposals?user=id`);
        return data;
    }
}