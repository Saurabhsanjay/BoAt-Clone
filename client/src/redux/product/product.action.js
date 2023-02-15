
import axios from 'axios';
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./product.types";

export const fetchData = () => async (dispatch) => {
  dispatch({ type: FETCH_DATA_REQUEST });

  try {
    let res = await axios.get("http://localhost:8080/api/getallproducts");
    dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    return "OK";
  } catch (error) {
    dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
    console.log(error);
  }
};
