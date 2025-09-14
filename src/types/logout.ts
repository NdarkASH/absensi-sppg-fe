import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "@/components/AuthUser";

// Hook untuk logout
export const useLogout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { logout: contextLogout } = useAuth();

  const logout = async () => {
    setLoading(true);
    contextLogout();
    toast.success("Berhasil logout!");
    navigate("/login");
  };

  return { logout, loading };
};
