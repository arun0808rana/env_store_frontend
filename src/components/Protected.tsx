import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

interface IProps {
  children: ReactNode;
}

const Protected: React.FC<IProps> = ({ children }) => {
  const [isAuthorized] = useLocalStorage("isAuthorized", false);
  console.log('--is auth', isAuthorized)
  return isAuthorized ? children : <Navigate to="/login" replace />;
};

export default Protected;
