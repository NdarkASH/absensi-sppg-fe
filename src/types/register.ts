import { AxiosResponse } from "axios";

import { apiResponse } from "./apiResponse";
import apiClient from "./client";

interface registerRequest {
  name: string;
  email: string;
  password: string;
}

interface registerResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export async function createUser(
  register: registerRequest,
): Promise<registerResponse> {
  const response: AxiosResponse<apiResponse<registerResponse>> =
    await apiClient.post("/register", register);

  return response.data.data;
}
