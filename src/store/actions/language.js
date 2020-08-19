import languageService from '../../services/language';
import { GET_ALL_LANGUAGES } from './actionTypes';

export const initializeLanguages = () => {
    return async dispatch => {
        const langs = await languageService.getAll();
        dispatch ({
            type: GET_ALL_LANGUAGES,
            data: langs.result
        })
    }
};
