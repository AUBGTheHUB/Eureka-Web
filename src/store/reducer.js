const { 
    LOGIN_SUCCESS, SIGNOUT_SUCCESS, 
    SIGNUP_SUCCESS, 
    SET_LANGUAGE, 
    GET_ALL_LANGUAGES,
    ADD_EDITED_FORM,
    SET_ERROR,
    EMPTY_EDITED_FORMS
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
            return {
                ...state,
                selectedLanguage: action.data
            }
        }
        case ADD_EDITED_FORM: {
            return {
                ...state,
                editedForms: {
                    ...state.editedForms,
                    [action.data[0]]: action.data[1]
                }
            }
        }
        case EMPTY_EDITED_FORMS: {
            return {
                ...state,
                editedForms: {}
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.data
            }
        }
        default:{
            return state;
        }
    }
}

export default GlobalReducer;