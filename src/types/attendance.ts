import { apiResponse } from "./apiResponse";
import apiClient from "./client";

export enum status {
  ALFA,
  HADIR,
  IZIN,
  SAKIT,
}

interface AttendanceRequest {
  attendanceId: string;
  checkInDate: string;
  checkOutDate: string;
  status: status;
  totalHours: number;
  notes: string;
}

interface AttendanceResponse {
  attendanceId: string;
  checkInDate: string;
  checkOutDate: string;
  status: status;
  totalHours: number;
  notes: string;
  dates: string;
  user: string;
}

export async function createAttendance(
  params: string,
  payload: AttendanceRequest,
): Promise<AttendanceResponse> {
  const response = await apiClient.post<apiResponse<AttendanceResponse>>(
    `/attendance/date/${params}`,
    payload,
  );

  return response.data.data;
}

export async function updateAttendance(
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
