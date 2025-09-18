import { apiResponse } from "@/types/apiResponse";
import apiClient from "@/types/client";
import { registerRequest, registerResponse } from "@/types/register";

export async function createUser(
  register: registerRequest,
): Promise<registerResponse> {
  const response = await apiClient.post<apiResponse<registerResponse>>(
    "/register",
    register,
  );

  return response.data.data;
}
