import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleWare from '../middleware';
import products from './products';
import orderform from './orderform'

export interface IAppReduxState {
  products: ReturnType<typeof products>;
  orderform: ReturnType<typeof orderform>;
}

const rootReducer = combineReducers({
  products,
  orderform,
});

export default createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleWare)));