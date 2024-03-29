import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({
  isAllowed,
  redirectTo = "/login",
  children,
}) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  console.log(children);

  return <div style={{}}>{children ? children : <Outlet />}</div>;
}
