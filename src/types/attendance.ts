export enum status {
  "ALFA",
  "HADIR",
  "IZIN",
  "SAKIT",
}

export interface AttendanceRequest {
  attendanceId: string;
  checkInDate: string;
  checkOutDate: string;
  status: status;
  totalHours: number;
  notes: string;
}

export interface AttendanceResponse {
  attendanceId: string;
  checkInDate: string;
  checkOutDate: string;
  status: status;
  totalHours: number;
  notes: string;
  dates: string;
  user: string;
}
