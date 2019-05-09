export interface IProductData {
  id: number;
  name: string;
  sold: number;
  price: number;
  inventory: number;
  description: string;
}

export interface IProductState {
  [index: number]: IProductData;
}

const products = (state: IProductState = [], action: { type: string, payload?: object}) => {
  switch (action.type) {
    default:
      return state
  }
}

export default products;