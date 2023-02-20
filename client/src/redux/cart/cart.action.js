import axios from "axios";
import {
  CART_DATA_FAILURE,
  CART_DATA_REQUEST,
  CART_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./cart.types";

export const cartData = (id) => async (dispatch) => {
  dispatch({ type: CART_DATA_REQUEST });

  try {
    let res = await axios.get(
      `https://dark-sweater-moth.cyclic.app/user/cart/${id}`
    );
    dispatch({ type: CART_DATA_SUCCESS, payload: res.data });
    
    return "OK";
  } catch (error) {
    dispatch({ type: CART_DATA_FAILURE, payload: error.message });
    console.log(error);
  }
};


export const postCartData =
  (creds, handleNeedtoLoginfirst, handleAddedtoCart) => async (dispatch) => {
    dispatch({ type: POST_DATA_REQUEST });

    try {
      let res = await axios.post(
        "https://dark-sweater-moth.cyclic.app/user/cart",
        creds
      );

      dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      
      handleAddedtoCart();
      return res.data;
    } catch (error) {
      dispatch({ type: POST_DATA_FAILURE });
      if (error.response.status === 403) {
        handleNeedtoLoginfirst();
      }
      console.log(error.response.status);
    }
  };