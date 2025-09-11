import { AxiosResponse } from "axios";

import { apiResponse } from "./apiResponse";
import apiClient from "./client";

interface loginRequest {
  email: string;
  password: string;
}

interface loginResponse {
  token: string;
  expiresIn: number;
}

export async function login(payload: loginRequest): Promise<loginResponse> {
  const response: AxiosResponse<apiResponse<loginResponse>> =
    await apiClient.post("/login", payload);

  localStorage.setItem("token", response.data.data.token);

  return response.data.data;
}

export async function logout(): Promise<void> {
  localStorage.removeItem("token");
}

const AxiosInterceptor = apiClient;

AxiosInterceptor.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { AxiosInterceptor as api };
