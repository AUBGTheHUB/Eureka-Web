import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import languageReducer from './reducers/languageReducer';
import dimensionReducer from './reducers/dimensionReducer';

const reducer = combineReducers({
    languages: languageReducer,
    dimensions: dimensionReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;