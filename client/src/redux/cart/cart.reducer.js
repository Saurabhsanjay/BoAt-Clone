import {
  CART_DATA_FAILURE,
  CART_DATA_REQUEST,
  CART_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./cart.types";

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CART_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };

    case CART_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
