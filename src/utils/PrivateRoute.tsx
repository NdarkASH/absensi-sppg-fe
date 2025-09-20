import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  return token ? <Navigate replace to="/login" /> : <Outlet />;
};

export default PrivateRoute;
