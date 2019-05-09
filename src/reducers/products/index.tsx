import { actionType } from './actions';

export interface IProductData {
  id: number;
  name: string;
  sold: number;
  price: number;
  inventory: number;
  description: string;
}

export type IProductState = Array<IProductData>;

const products = (state: IProductState = [], action: { type: actionType, payload: IProductState}): IProductState => {
  switch (action.type) {
    case 'API_GET_PRODUCTS_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}

export default products;