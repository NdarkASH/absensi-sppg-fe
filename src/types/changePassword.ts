import { AxiosResponse } from "axios";

import apiClient from "./client";
import { apiResponse } from "./apiResponse";

interface changePasswordRequest {
  email: string;
}

interface changePasswordResponse {
  message: string;
}

export async function changePassword(
  payload: changePasswordRequest,
): Promise<changePasswordResponse> {
  const response: AxiosResponse<apiResponse<changePasswordResponse>> =
    await apiClient.post("/change-password", payload);

  return response.data.data;
}
