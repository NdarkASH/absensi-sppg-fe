import { AxiosResponse } from "axios";

import apiClient from "./client";
import { apiResponse } from "./apiResponse";

export enum Role {
  ADMIN,
  USER,
}

export interface userResponse {
  userId: string;

  username: string;

  email: string;

  role: Role;

  isActive: boolean;

  createdAt: Date;

  updatedAt: Date;
}

export async function getUser(): Promise<userResponse> {
  try {
    const response: AxiosResponse<apiResponse<userResponse>> =
      await apiClient.get("/home");

    return response.data.data;
  } catch (error: any) {
    throw error;
  }
}

export default getUser;
