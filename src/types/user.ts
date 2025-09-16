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

export interface userRequest {
  username: string;
  password: string;
  email: string;
}
