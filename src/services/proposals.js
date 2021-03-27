import { get, post } from './api';

export default {
    getAll: async (lang, token) => {
        const { data, error } = await get(
            `/${lang}/proposals/`,                 
            {
                headers: {
                    Authorization: `Token ${token}`
                }
            }
        );
        return data;
    },
    sendProposals: async (lang, proposals, token, note) => {
        try{
            const { data, error } = await post(
                `/${lang}/proposals/`,
                proposals.map(proposal => {return {...proposal, note}}),
                {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }
            );
            return data;
        } catch(error) {
            throw new Error('Error' + error.message);
        }
    }
}