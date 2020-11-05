import config from "../../constants";

const initialState = config.url.API_URL;

const appReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SET_URL':
            return action.data;
        default:
            return state;
    }
}

export default appReducer;