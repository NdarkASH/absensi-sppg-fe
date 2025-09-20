import { apiResponse } from "@/types/apiResponse";
import { AttendanceRequest, AttendanceResponse } from "@/types/attendance";
import apiClient from "@/types/client";
import { PagingResponse } from "@/types/Paging";

const attendanceService = {
  async createAttendance(
    payload: AttendanceRequest,
  ): Promise<AttendanceResponse> {
    const response = await apiClient.post<apiResponse<AttendanceResponse>>(
      "/attendance",
      payload,
    );

    return response.data.data;
  },

  async getAllAttendance(page: number, size: number, sort?: string) {
    const params: Record<string, any> = {
      page,
      size,
    };

    if (sort) params.sort = sort;

    const response = await apiClient.get<
      apiResponse<PagingResponse<AttendanceResponse>>
    >("/attendance", { params });

    return response.data.data;
  },
};

export default attendanceService;
