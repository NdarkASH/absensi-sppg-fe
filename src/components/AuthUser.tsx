// components/AuthUser.tsx
import {
  useState,
  useEffect,
  useCallback,
  createContext,
  useContext,
} from "react";

import authService from "@/service/authService";
import { loginRequest } from "@/types/login";

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (payload: loginRequest) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );

  useEffect(() => {
    if (token) setIsAuthenticated(true);
  }, [token]);

  const login = useCallback(async (payload: loginRequest) => {
    const data = await authService.login(payload);

    localStorage.setItem("token", data.token);
    setToken(data.token);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(async () => {
    await authService.logout();
    setToken(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (!ctx) throw new Error("useAuth must be used within AuthProvider");

  return ctx;
};
