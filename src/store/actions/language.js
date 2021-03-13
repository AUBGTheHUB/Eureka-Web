import { GET_ALL_LANGUAGES } from './actionTypes';

export const initializeLanguages = (data) => {
    return {
        type: GET_ALL_LANGUAGES,
        data: data
    }
};

export const setLanguage = (language) => {
    return {
        action: SET_URL,
        data: language
    }
}