
import {
  USER_LOGOUT,
  USER_SIGN_IN_ERROR,
  USER_SIGN_IN_LOADING,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
  USER_SIGN_UP_SUCCESS,
} from "./user.types";

const initialState = {
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || null,
  id: localStorage.getItem("id") || null,
  auth: false,
  loading: false,
  error: null,
};

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
         localStorage.setItem("token", action.payload.token);
         localStorage.setItem("username", action.payload.username);
         localStorage.setItem("id", action.payload.id);
        return {
          ...state,
          auth: true,
          loading: false,
          token: action.payload.token,
          username: action.payload.username,
          error: false,
        };
      case USER_SIGN_IN_ERROR:
        return {
          ...state,
          auth:false,
          loading: false,
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
          
        };
   
          case USER_LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      return {
        ...state,
        token: null,
        auth:false,
        username: null,
      };
      default: {
        return state;
      }
    }
}