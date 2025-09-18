import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Biodata from "./pages/biodata";
import Home from "./pages/home";
import { AuthProvider } from "./components/AuthUser";
import RegisterPage from "./pages/register";
import ChangePassword from "./pages/changePassword";
import interceptorService from "./service/interceptorService";
import DefaultLayout from "./layouts/default";

import IndexPage from "@/pages/login";
import LoginPage from "@/pages/login";
import Attendance from "@/pages/attendance";

function App() {
  interceptorService.setup();

  return (
    <AuthProvider>
      <Toaster />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />

          <Route element={<IndexPage />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<ChangePassword />} path="/change-password" />
          <Route element={<Biodata />} path="/me" />
          <Route element={<Attendance />} path="/attendance" />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
