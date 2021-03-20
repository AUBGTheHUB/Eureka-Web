import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.ACCOUNTS_URL;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const apiClient = axios.create({baseURL: baseUrl});

export default {
    login: async (credentials) => {
        try{
            const data = await apiClient.post(
                `/token/`, 
                credentials
            );
            return data;
        } catch(error) {
            console.error(Error("Error logging in user: " + error.message));
            return error;
        }
    },
    register: async (formData) => {
        try{
            const response = await apiClient.post(
                `/create/`,
                formData
            );
            return response;
        } catch(error){
            console.error(Error("Error creating user: " + error.message));
            return error;
        }
    },
    getUser: async (token) => {
        try{
            const data = await apiClient.get(
                `/me/`,
                {
                headers: {
                    Authorization: `Token ${token}`
                }
                }
            );
            return data;
        } catch(error){
            console.error(Error("Error getting user: " + error.message));
            return error;
        }
    }
}