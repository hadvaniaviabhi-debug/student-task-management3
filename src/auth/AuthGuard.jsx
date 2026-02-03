import { Navigate } from "react-router-dom";
import React from "react";

const AuthGuard = ({ children, required = true, redirect = "/login" }) => {
const formData = JSON.parse(localStorage.getItem("loginData"));
const isAuthenticated = !!formData;

if (required && !isAuthenticated) {
return <Navigate to={redirect} replace />;
}
if (!required && isAuthenticated) {
return <Navigate to="/daskbord" replace />;
}
return children;
};

export default AuthGuard;


