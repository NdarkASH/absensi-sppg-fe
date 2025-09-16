export interface loginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  token: string;
  expiresIn: number;
}
