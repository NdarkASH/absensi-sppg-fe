import {
  changePasswordRequest,
  changePasswordResponse,
} from "@/types/changePassword";
import apiClient from "@/types/client";
import { loginRequest, loginResponse } from "@/types/login";

const authService = {
  async login(payload: loginRequest): Promise<loginResponse> {
    const response = await apiClient.post("/login", payload);

    localStorage.setItem("token", response.data.data.token);

    return response.data.data;
  },

  async logout(): Promise<void> {
    await apiClient.post("/logout");
    localStorage.removeItem("token");
  },

  async changePassword(
    payload: changePasswordRequest,
  ): Promise<changePasswordResponse> {
    const response = await apiClient.post("/change-password", payload);

    return response.data;
  },
};

export default authService;
