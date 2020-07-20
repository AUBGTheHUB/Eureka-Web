import wordService from '../../services/word';

const initialState = [];

const wordReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL_WORDS':
            return action.data
        case 'GET_WORD':
            return action.data;
        default:
            return state
    }
}

export default wordReducer;