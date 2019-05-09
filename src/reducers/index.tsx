import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
});

export default createStore(rootReducer, {}, composeWithDevTools());