import axios from 'axios';
import config from '../constants';

const baseUrl = config.url.ACCOUNTS_URL;
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const login = async (credentials) => {
    try{
        const data = await axios.post(
            `${baseUrl}token/`, 
            credentials
        );
        return data;
    }catch(error){
        console.error(Error("Error creating user: " + error.message));
        return error;
    }
}

const register = async (formData) => {
    try{
        const response = await axios.post(
            `${baseUrl}create/`,
            formData
        );
        return response;
    }catch(error){
        console.error(Error("Error creating user: " + error.message));
        return error;
    }
}

const getUser = async (token) => {
    try{
        const data = await axios.get(
            `${baseUrl}me/`,
            {
            headers: {
                Authorization: `Token ${token}`
            }
            }
        );
        return data;
    }catch(error){
        console.error(Error("Error getting user: " + error.message));
        return error;
    }
}

export default {
    login, getUser, register,
}