import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const login = JSON.parse(localStorage.getItem("logindata")) || false;

  //console.log(typeof login);

  return !login ? <Navigate to="/login" /> : children;
};
