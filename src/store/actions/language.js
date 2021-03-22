import { GET_ALL_LANGUAGES, SET_LANGUAGE } from './actionTypes';

export const initializeLanguages = (data) => {
    return {
        type: GET_ALL_LANGUAGES,
        data: data
    }
};

export const setLanguage = (language) => {
    return {
        type: SET_LANGUAGE,
        data: language
    }
}