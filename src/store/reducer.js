const { 
    LOGIN_SUCCESS, SIGNOUT_SUCCESS, 
    SIGNUP_SUCCESS, 
    SET_LANGUAGE, 
    GET_ALL_LANGUAGES
} = require("./actions/actionTypes");

const GlobalReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_LANGUAGES: {
            return {
                ...state,
                languages: action.data
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                user: {
                    email: action.data.email,
                    token: action.data.token
                }
            }
        }
        case SIGNOUT_SUCCESS: {
            return {
                ...state,
                user : {
                    token: null,
                    email: ""
                }
            }
        }
        case SIGNUP_SUCCESS:{
            return {
                ...state,
                user: {
                    token: action.data.token,
                    email: action.data.email
                }
            }
        }
        case SET_LANGUAGE: {
            console.log(action.data);
            return {
                ...state,
                selectedLanguage: action.data
            }
        }
        default:{
            return state;
        }
    }
}

export default GlobalReducer;