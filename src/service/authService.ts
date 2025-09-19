import { apiResponse } from "../types/apiResponse";

import {
  changePasswordRequest,
  changePasswordResponse,
} from "@/types/changePassword";
import apiClient from "@/types/client";
import { loginRequest, loginResponse } from "@/types/login";
import { registerRequest, registerResponse } from "@/types/register";

const authService = {
  async login(payload: loginRequest): Promise<loginResponse> {
    const response = await apiClient.post("/login", payload);

    localStorage.setItem("token", response.data.data.token);

    return response.data.data;
  },

  async logout(): Promise<void> {
    await apiClient.get("/logout");
    localStorage.removeItem("token");
  },

  async changePassword(
    payload: changePasswordRequest,
  ): Promise<changePasswordResponse> {
    const response = await apiClient.put("/change-password", payload);

    return response.data;
  },
  async register(payload: registerRequest): Promise<registerResponse> {
    const response = await apiClient.post<apiResponse<registerResponse>>(
      "/register",
      payload,
    );

    return response.data.data;
  },
};

export default authService;
