import { apiResponse } from "./apiResponse";
import apiClient from "./client";

export interface changePasswordRequest {
  email: string;
}

export interface changePasswordResponse {
  message: string;
}

export async function changePassword(
  payload: changePasswordRequest,
): Promise<changePasswordResponse> {
  const response = await apiClient.post<apiResponse<changePasswordResponse>>(
    "/change-password",
    payload,
  );

  return response.data.data;
}
