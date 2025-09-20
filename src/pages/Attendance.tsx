import { useEffect, useState } from "react";
import { Calendar } from "@heroui/react";
import { getLocalTimeZone, parseDate } from "@internationalized/date";

import { PagingResponse } from "../types/Paging";

import attendanceService from "@/service/attendanceService";
import { AttendanceResponse } from "@/types/attendance";

export default function AttendanceList() {
  const [attendancePage, setAttendancePage] =
    useState<PagingResponse<AttendanceResponse> | null>(null);

  const dateNow = getLocalTimeZone();

  useEffect(() => {
    // fetch page 0, size 5, sort by date descending
    attendanceService
      .getAllAttendance(0, 5, "dates,desc")
      .then(setAttendancePage);
  }, []);

  return (
    <div>
      <div>
        <Calendar aria-label="Date (No Selection)" />
        <Calendar
          aria-label="Date (Uncontrolled)"
          defaultValue={parseDate(dateNow)}
        />
      </div>

      <h1>Attendance List</h1>
      {attendancePage && (
        <ul>
          {attendancePage.data.map((a) => (
            <li key={a.attendanceId} className="bold">
              {a.dates.id} - {a.dates.active ? "active" : "inactive"} -
              {a.dates.date} - {a.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
