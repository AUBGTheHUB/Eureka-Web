const { LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_SUCCESS } = require("../actions/actionTypes");

const initialState = {
    email: "",
    token: null
};

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:{
            return action.data;
        }
        case SIGNOUT_SUCCESS: {
            return initialState;
        }
        case SIGNUP_SUCCESS:{
            return action.data;
        }
        default:{
            return state;
        }
    }
}

export default userReducer;