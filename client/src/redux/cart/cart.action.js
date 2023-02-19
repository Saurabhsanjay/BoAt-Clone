import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
} from "./cart.types";

export const cartData = (id) => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    let res = await axios.get(
      `https://dark-sweater-moth.cyclic.app/user/cart/${id}`
    );
    dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    return "OK";
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    console.log(error);
  }
};


export const postCartData = (creds) => async (dispatch) => {
  dispatch({ type: POST_DATA_REQUEST });

  try {
    let res = await axios.post(
      "https://dark-sweater-moth.cyclic.app/user/cart",creds
    );
    
    dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    dispatch({type:POST_DATA_FAILURE})
  }
};