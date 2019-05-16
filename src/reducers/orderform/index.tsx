import { ActionType, ActionPayloadType } from './actions';
import { IOrderFormData } from './interface'

const initData: IOrderFormData = {
  name: '',
  address: '',
  email: '',
  product_ids: []
}

const resetInitData = JSON.stringify(initData);

const orderform = (state: IOrderFormData = initData, action: { type: ActionType, payload: ActionPayloadType}): IOrderFormData => {
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
    case 'ON_INPUT_CHANGE':
      const key = action.payload.key;
      if (
        'name' === key ||
        'address' === key ||
        'email' === key
      ) {
        state[key] = action.payload.value;
      }
      return {...state};
    case 'API_POST_ORDERS_SUCCESS':
      alert('訂購成功 !');
      state = JSON.parse(resetInitData);
      return state;
    default:
      return state;
  }
}

export default orderform;