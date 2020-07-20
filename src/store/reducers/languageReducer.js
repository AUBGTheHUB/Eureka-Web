import languageService from '../../services/language';

const initialState = [];

const languageReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL_LANGUAGES':
            return action.data;
        default:
            return state;
    }
}

export default languageReducer;