import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Navigate replace to="/home" /> : <Outlet />;
};

export default PublicRoute;
