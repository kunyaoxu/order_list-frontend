import { apiUrl } from '../const';

const TOGGLE_PRODUCT_CHECKBOX = 'TOGGLE_PRODUCT_CHECKBOX';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

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

export type ActionType =
  typeof TOGGLE_PRODUCT_CHECKBOX |
  typeof ON_INPUT_CHANGE;

export type ActionPayloadType =
  ReturnType<typeof toggleCheckbox>['payload'] &
  ReturnType<typeof onInputChange>['payload'];
