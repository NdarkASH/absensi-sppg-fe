import { apiResponse } from "@/types/apiResponse";
import apiClient from "@/types/client";
import { userRequest, userResponse } from "@/types/user";

const userService = {
  async getUser(): Promise<userResponse> {
    try {
      const response =
        await apiClient.get<apiResponse<userResponse>>("/home/me");

      return response.data.data;
    } catch (error: any) {
      throw error;
    }
  },
  async updateUser(payload: userRequest): Promise<userResponse> {
    const respone = await apiClient.put<apiResponse<userResponse>>(
      "/home/me",
      payload,
    );

    return respone.data.data;
  },
};

export default userService;
