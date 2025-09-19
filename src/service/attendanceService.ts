import { apiResponse } from "@/types/apiResponse";
import { AttendanceRequest, AttendanceResponse } from "@/types/attendance";
import apiClient from "@/types/client";
import { registerRequest, registerResponse } from "@/types/register";

const attendanceService = async function createUser(
  register: registerRequest,
): Promise<registerResponse> {
  const response = await apiClient.post<apiResponse<registerResponse>>(
    "/register",
    register,
  );

  return response.data.data;
};

async function createAttendance(
  params: string,
  payload: AttendanceRequest,
): Promise<AttendanceResponse> {
  const response = await apiClient.post<apiResponse<AttendanceResponse>>(
    `/attendance/date/${params}`,
    payload,
  );

  return response.data.data;
}

async function updateAttendance(
  params: string,
  payload: AttendanceRequest,
): Promise<AttendanceResponse> {
  const response = await apiClient.post<apiResponse<AttendanceResponse>>(
    `/attendance/${params}`,
    payload,
  );

  return response.data.data;
}

export async function getAllAttendance() {
  const response =
    await apiClient.get<apiResponse<AttendanceResponse>>("/attendance");

  return response.data.data;
}

export default attendanceService;
