import { useState } from "react";
import API from "../../api/axios";

function Attendance() {
  const [message, setMessage] =
    useState("");

  const markAttendance = async (
    mealType
  ) => {
    try {
      const { data } =
        await API.post(
          "/attendance",
          {
            mealType,
          }
        );

      setMessage(
        `${mealType} attendance marked successfully`
      );

      console.log(data);
    } catch (error) {
      setMessage(
        error?.response?.data
          ?.message ||
          "Something went wrong"
      );
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
        Attendance 📅
      </h1>

      {message && (
        <div
          className="
          mb-5
          p-3
          rounded-lg
          bg-green-100
          text-green-700
        "
        >
          {message}
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
          bg-white
          dark:bg-slate-900
          p-6
          rounded-2xl
          shadow-lg
        "
        >
          <h2 className="text-xl font-bold dark:text-white">
            🍳 Breakfast
          </h2>

          <button
            onClick={() =>
              markAttendance(
                "Breakfast"
              )
            }
            className="
            mt-4
            bg-orange-500
            text-white
            px-4
            py-2
            rounded-lg
          "
          >
            Mark Attendance
          </button>
        </div>

        <div
          className="
          bg-white
          dark:bg-slate-900
          p-6
          rounded-2xl
          shadow-lg
        "
        >
          <h2 className="text-xl font-bold dark:text-white">
            🍛 Lunch
          </h2>

          <button
            onClick={() =>
              markAttendance(
                "Lunch"
              )
            }
            className="
            mt-4
            bg-orange-500
            text-white
            px-4
            py-2
            rounded-lg
          "
          >
            Mark Attendance
          </button>
        </div>

        <div
          className="
          bg-white
          dark:bg-slate-900
          p-6
          rounded-2xl
          shadow-lg
        "
        >
          <h2 className="text-xl font-bold dark:text-white">
            🍽 Dinner
          </h2>

          <button
            onClick={() =>
              markAttendance(
                "Dinner"
              )
            }
            className="
            mt-4
            bg-orange-500
            text-white
            px-4
            py-2
            rounded-lg
          "
          >
            Mark Attendance
          </button>
        </div>

      </div>
    </div>
  );
}

export default Attendance;