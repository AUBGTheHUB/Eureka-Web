import { LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_SUCCESS } from './actionTypes';

export const login = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data: data
    }
}

export const signOut = async () => {
    return {
        type: SIGNOUT_SUCCESS,
        data: {}
    }
}

export const signUp = async ({email, password}) => {
    const {data, error} = await UserService.login({ email, password });
    return {
        type: SIGNUP_SUCCESS,
        data: {
            email,
            token: data.token
        }
    }
}