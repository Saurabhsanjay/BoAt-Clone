import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const PrivateRoute = ({ children }) => {
  const { auth } = useSelector((state) => state.user);
    

  if (!auth) {
    return (
    <>
    <Navigate to="/login" />
    {   toast.error("You need to Login First", {
           position: "top-center",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
         })}
    </>
    );
  }

  return children;
}

export default PrivateRoute;
