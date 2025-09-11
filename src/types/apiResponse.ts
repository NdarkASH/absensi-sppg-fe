export interface apiResponse<T> {
  code: number;
  message: string;
  data: T;
}
