import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Biodata from "./pages/biodata";
import Home from "./pages/home";
import { AuthProvider } from "./components/AuthUser";
import RegisterPage from "./pages/register";
import ChangePassword from "./pages/changePassword";

import IndexPage from "@/pages/login";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LoginPage from "@/pages/login";
import Attendance from "@/pages/attendance";

function App() {
  return (
    <AuthProvider>
      <Toaster />
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<IndexPage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<Home />} path="/home" />
        <Route element={<ChangePassword />} path="/change-password" />
        <Route element={<Biodata />} path="/me" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<Attendance />} path="/attendance" />
      </Routes>
    </AuthProvider>
  );
}

export default App;
