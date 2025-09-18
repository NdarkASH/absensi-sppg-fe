export interface registerRequest {
  username: string;
  email: string;
  password: string;
}

export interface registerResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
