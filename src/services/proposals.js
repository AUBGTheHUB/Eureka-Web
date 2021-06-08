import { get, post, patch } from './api';

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
    },
    getProposalDetail: async (id, token) => {

        const {data} = await get(
            `/dd/proposals/${id}`,
            {
                headers: {
                    Authorization: `Token ${token}`
                }
            }
        )
        return data
    },
    approve_proposal: async (id, token) => {
        const config = {
            headers: { Authorization: `Token ${token}`},
        }
        const {data} = await patch(
            `/dd/proposals/approve/${id}`,
            {},config
        )
        return data
    },
    decline_proposal: async (id, token) => {
        const config = {
            headers: { Authorization: `Token ${token}`},
        }
        const res = await patch(
            `/dd/proposals/decline/${id}`,
            {},
            config
        )
        return res.data
    },
    get_comments: async (id, token) => {
        const config = {
            headers: { Authorization: `Token ${token}`},
        }
        const res = await get(
            `/dd/comments/${id}`,
            config
        )
        return res.data.results
    },
    create_comment: async (payload, token) => {
        const config = {
            headers: { Authorization: `Token ${token}`},
        }
        const res = await post(
            `/dd/comments/`,
            payload,
            config
        )
        return res.data.results
    }

}