export interface PagingResponse<T> {
  data: T[];
  page: number;
  size: number;
  total: number;
}
