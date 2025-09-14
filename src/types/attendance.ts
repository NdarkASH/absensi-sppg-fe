const checkIn = new Date();
const checkOut = new Date();

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
  dates: string;
  user: string;
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
