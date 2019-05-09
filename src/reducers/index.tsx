import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleWare from '../middleware';

const rootReducer = combineReducers({
});

export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleWare)));