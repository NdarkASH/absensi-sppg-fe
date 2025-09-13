import { AxiosResponse } from "axios";

import apiClient from "./client";
import { apiResponse } from "./apiResponse";

export enum Role {
  ADMIN,
  USER,
}

export interface userResponse {
  userId: String;

  username: String;

  email: String;

  role: Role;

  isActive: Boolean;

  createdAt: Date;

  updatedAt: Date;
}

export async function getUser(): Promise<userResponse> {
  const response: AxiosResponse<apiResponse<userResponse>> =
    await apiClient.get("/user");

  return response.data.data;
}

export default getUser;
