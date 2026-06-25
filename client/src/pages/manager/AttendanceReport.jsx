import { useEffect, useState } from "react";
import API from "../../api/axios";
import SkeletonLoader from "../../components/SkeletonLoader";

function AttendanceReport() {
  const [records, setRecords] =
    useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance =
    async () => {
      setLoading(true);
      try {
        const { data } =
          await API.get(
            "/attendance"
          );

        setRecords(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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

      {loading ? (
        <SkeletonLoader count={4} />
      ) : (
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
      )}
    </div>
  );
}

export default AttendanceReport;