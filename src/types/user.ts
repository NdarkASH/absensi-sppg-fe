export interface userResponse {
  userId: string;
  username: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface userRequest {
  username: string;
  password: string;
  email: string;
}
