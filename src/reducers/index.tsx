import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleWare from '../middleware';
import products from './products';

export interface IAppReduxState {
  products: ReturnType<typeof products>;
}

const rootReducer = combineReducers({
  products,
});

export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleWare)));