import { actionType } from './actions';

export interface IOrderFormData {
  name: string;
  address: string;
  email: string;
  product_ids: Array<number>;
}

const initData: IOrderFormData = {
  name: '',
  address: '',
  email: '',
  product_ids: []
}

const orderform = (state: IOrderFormData = initData, action: { type: actionType, payload: any}): IOrderFormData => {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CHECKBOX':
      let indexOf = state.product_ids.indexOf(action.payload.id);
      indexOf === -1 ?
        state.product_ids.push(action.payload.id) :
        state.product_ids.splice(indexOf, 1);
      return {
        ...state,
        product_ids: [...state.product_ids]
      };
    default:
      return state;
  }
}

export default orderform;