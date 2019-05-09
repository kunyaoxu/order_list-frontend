import { apiUrl } from '../const';

const API_GET_PRODUCTS_REQ = "API_GET_PRODUCTS_REQ";
const API_GET_PRODUCTS_SUCCESS = "API_GET_PRODUCTS_SUCCESS";
const API_GET_PRODUCTS_FAILURE = "API_GET_PRODUCTS_FAILURE";

export const callGetProductsApi = () => {
  return (dispatch: any) => {
    dispatch(getProductsReq());
    fetch(apiUrl + '/products', {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then((data) => {
        dispatch(getProductsSuccess(data));
      })
      .catch((data) => {
        dispatch(getProductsFailure(data));
      });
  };
}

const getProductsReq = () => {
  return {
    type: API_GET_PRODUCTS_REQ
  };
}

const getProductsSuccess = (data: any) => {
  return {
    type: API_GET_PRODUCTS_SUCCESS,
    payload: data
  };
}

const getProductsFailure = (data: any) => {
  return {
    type: API_GET_PRODUCTS_FAILURE
  };
}

export type actionType =
  typeof API_GET_PRODUCTS_REQ |
  typeof API_GET_PRODUCTS_SUCCESS |
  typeof API_GET_PRODUCTS_FAILURE;