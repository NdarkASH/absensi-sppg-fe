import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "@/components/AuthUser";

export function useLogoutService() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout: contextLogout } = useAuth();

  const logout = async () => {
    try {
      setLoading(true);
      contextLogout(); // clear token & state dari AuthContext
      toast.success("Berhasil logout!");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
}
