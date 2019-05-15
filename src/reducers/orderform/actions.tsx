import { apiUrl } from '../const';
import { IOrderFormData } from './interface';

const TOGGLE_PRODUCT_CHECKBOX = 'TOGGLE_PRODUCT_CHECKBOX';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';
const ON_PRODUCT_SELECT_LESS_THAN_ONE = 'ON_PRODUCT_SELECT_LESS_THAN_ONE';
const API_POST_ORDERS_SUCCESS = 'API_POST_ORDERS_SUCCESS';
const API_POST_ORDERS_FAIL = 'API_POST_ORDERS_FAIL';

export const toggleCheckbox = (id: number) => {
  return {
    type: TOGGLE_PRODUCT_CHECKBOX,
    payload: {
      id
    }
  };
}

export const onInputChange = (obj: {key: string, value: string}) => {
  return {
    type: ON_INPUT_CHANGE,
    payload: {
      ...obj
    }
  };
}

export const postOrdersSuccess = () => {
  return {
    type: API_POST_ORDERS_SUCCESS,
    payload: {
    }
  };
}

export const postOrdersFail = () => {
  return {
    type: API_POST_ORDERS_FAIL,
    payload: {
    }
  };
}

export const callPostOrdersApi = (dataToSend: IOrderFormData) => {
  if (dataToSend.product_ids.length === 0) {
    return {
      type: ON_PRODUCT_SELECT_LESS_THAN_ONE,
      payload: {}
    }
  }
  return (dispatch: any) => {
    fetch(apiUrl + '/orders', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        dispatch(postOrdersSuccess());
      })
      .catch((data) => {
        dispatch(postOrdersFail());
      });
  };
}

export type ActionType =
  typeof TOGGLE_PRODUCT_CHECKBOX |
  typeof ON_INPUT_CHANGE |
  typeof ON_PRODUCT_SELECT_LESS_THAN_ONE |
  typeof API_POST_ORDERS_SUCCESS;

export type ActionPayloadType =
  ReturnType<typeof toggleCheckbox>['payload'] &
  ReturnType<typeof onInputChange>['payload'];
