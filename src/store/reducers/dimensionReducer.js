import {GET_ALL_DIMENSIONS} from '../actions/actionTypes';
const initialState = [];

const dimensionReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ALL_DIMENSIONS':
            return action.data;
        default:
            return state;
    }
}

export default dimensionReducer;