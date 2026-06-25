import { useEffect, useState } from "react";
import API from "../../api/axios";

function AttendanceReport() {
  const [records, setRecords] =
    useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance =
    async () => {
      try {
        const { data } =
          await API.get(
            "/attendance"
          );

        setRecords(data);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
      <h1
        className="
        text-3xl
        font-bold
        mb-6
        dark:text-white
      "
      >
        Attendance Report 📊
      </h1>

      <div className="space-y-4">

        {records.map(
          (record) => (
            <div
              key={record._id}
              className="
              bg-white
              dark:bg-slate-900
              p-5
              rounded-2xl
              shadow-lg
            "
            >
              <p>
                👤 {
                  record.student
                    ?.name
                }
              </p>

              <p>
                🍽️ {
                  record.mealType
                }
              </p>

              <p>
                📅 {
                  record.date
                }
              </p>
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default AttendanceReport;