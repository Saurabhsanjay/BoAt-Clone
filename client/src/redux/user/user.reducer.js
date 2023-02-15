
import {
  USER_SIGN_IN_ERROR,
  USER_SIGN_IN_LOADING,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
  USER_SIGN_UP_SUCCESS,
} from "./user.types";

const initialState={
   auth:false,
    loading:false,
 error:null   
}

export const userReducer=(state=initialState,action)=>{
    switch (action.type) {
      case USER_SIGN_IN_LOADING:
        return {
          ...state,
          auth: false,
          loading: true,
          error: false,
        };
      case USER_SIGN_IN_SUCCESS:
        return {
          ...state,
          auth:true,
          loading: false,
          data: action.payload,
          error: false,
        };
      case USER_SIGN_IN_ERROR:
        return {
          ...state,
          auth:false,
          loading: false,
          error: true,
          error: true,
        };
      case USER_SIGN_UP_LOADING:
        return {
          ...state,
          auth: false,
          loading: true,
          error: false,
        };
      case USER_SIGN_UP_SUCCESS:
        return {
          ...state,
          
          loading: false,
          data: action.payload,
          error: false,
        };
      case USER_SIGN_UP_ERROR:
        return {
          ...state,
          auth:false,
          loading: false,
          error: true,
          error: true,
        };
      default: {
        return state;
      }
    }
}