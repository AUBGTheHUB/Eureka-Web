import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import languageReducer from './reducers/languageReducer';
import dimensionReducer from './reducers/dimensionReducer';
import userReducer from './reducers/user';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const reducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        languages: languageReducer,
        dimensions: dimensionReducer,
        user: userReducer
    });
};

const store = createStore(
    reducer(history),
    composeWithDevTools(
        applyMiddleware(
            thunk,
            routerMiddleware(history)
            )
    )
);

export default store;