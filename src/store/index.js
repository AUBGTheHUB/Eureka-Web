import React, { createContext, useReducer } from 'react';
import GlobalReducer from './reducer';

const initialState = {
    user: {
        email: "",
        token: null
    },
    languages: [],
    selectedLanguage: {
        walsCode: "all",
        name: "All" 
    },
    editedForms: {},
    error: null
}

const Store = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState);

export default Store;