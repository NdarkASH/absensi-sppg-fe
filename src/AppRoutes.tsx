import { Navigate, Route, Routes } from "react-router-dom";

import { useAuth } from "./components/AuthUser";
import DefaultLayout from "./layouts/default";
import Home from "./pages/home";
import ChangePassword from "./pages/changePassword";
import Attendance from "./pages/attendance";
import Biodata from "./pages/biodata";
import DatePage from "./pages/date";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route
          element={
            <Navigate replace to={isAuthenticated ? "/home" : "/login"} />
          }
          path="/"
        />

        <Route
          element={
            isAuthenticated ? <Navigate replace to="/home" /> : <LoginPage />
          }
          path="/login"
        />
        <Route
          element={
            isAuthenticated ? <Navigate replace to="/home" /> : <RegisterPage />
          }
          path="/register"
        />

        <Route
          element={
            isAuthenticated ? <Home /> : <Navigate replace to="/login" />
          }
          path="/home"
        />
        <Route
          element={
            isAuthenticated ? <DatePage /> : <Navigate replace to="/login" />
          }
          path="/date"
        />
        <Route
          element={
            isAuthenticated ? (
              <ChangePassword />
            ) : (
              <Navigate replace to="/login" />
            )
          }
          path="/change-password"
        />
        <Route
          element={
            isAuthenticated ? <Biodata /> : <Navigate replace to="/login" />
          }
          path="/me"
        />
        <Route
          element={
            isAuthenticated ? <Attendance /> : <Navigate replace to="/login" />
          }
          path="/attendance"
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
