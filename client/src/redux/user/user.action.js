import axios from "axios";


import {
  USER_LOGOUT,
  USER_SIGN_IN_ERROR,
  USER_SIGN_IN_LOADING,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP_ERROR,
  USER_SIGN_UP_LOADING,
  USER_SIGN_UP_SUCCESS,
} from "./user.types";

export const action_signin =  (creds, handleSignInSuccess, handlesigninError) => async (dispatch) => {
    dispatch({ type: USER_SIGN_IN_LOADING });

    try {
      let res = await axios.post("https://dark-sweater-moth.cyclic.app/user/login", creds);
      dispatch({ type: USER_SIGN_IN_SUCCESS, payload: res.data });
      handleSignInSuccess();
      return res.data;
    } catch (error) {
      dispatch({ type: USER_SIGN_IN_ERROR, payload: error.message });

      if (error.response) {
        const message =
          error.response.data.message || error.response.statusText;
        
        handlesigninError(message);
    } else {
     
        handlesigninError(error.message);
      }
    }
  };
export const action_signup =(creds, handleSignupSuccess, handlesignupError) => async (dispatch) => {
    dispatch({ type: USER_SIGN_UP_LOADING });

    try {
      let res = await axios.post("https://dark-sweater-moth.cyclic.app/user/register", creds);
      dispatch({ type: USER_SIGN_UP_SUCCESS, payload: res.data });
      if (res.status === 200) {
        handleSignupSuccess(res.data.message);

       
      }
      return res.data;
    } catch (error) {
      dispatch({ type: USER_SIGN_UP_ERROR, payload: error.message });

      if (error.response) {
        const message =
          error.response.data.message || error.response.statusText;
          handlesignupError(message)
          
        } else {
          handlesignupError(error.message)
       
      }
    }
  };

export const action_logout = (handleLogutSuccess) => (dispatch) => {
  // Clear user details from local storage
  localStorage.removeItem("token");
  localStorage.removeItem("username");

  // Dispatch logout action
  dispatch({ type: USER_LOGOUT });
  handleLogutSuccess();
};
