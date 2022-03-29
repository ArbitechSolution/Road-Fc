import allReducres from './combineReducer';
import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));
const configureStore = () => {
    return createStore(allReducres, composeEnhancers);
}

const store = configureStore();

export default store;