import React from "react";
import { Navigate, Route } from "react-router-dom";

interface PrivateRouteProps {
  children?: JSX.Element;
  dependOn: boolean;
}

const PrivateRoute = ({ children, dependOn }: PrivateRouteProps) => {
  if (dependOn) {
    return <>{children}</>;
  }

  return <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
