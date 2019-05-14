import { apiUrl } from '../const';

const TOGGLE_PRODUCT_CHECKBOX = 'TOGGLE_PRODUCT_CHECKBOX';

export const toggleCheckbox = (id: number) => {
  return {
    type: TOGGLE_PRODUCT_CHECKBOX,
    payload: {
      id
    }
  };
}

export type actionType = typeof TOGGLE_PRODUCT_CHECKBOX;