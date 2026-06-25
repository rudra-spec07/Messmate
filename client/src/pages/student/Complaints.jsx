import { useState } from "react";
import API from "../../api/axios";

function Complaints() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [message, setMessage] =
    useState("");

  const submitComplaint = async () => {
    try {
      const token =
        localStorage.getItem("token");

      await API.post(
        "/complaints",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(
        "Complaint submitted successfully ✅"
      );

      setTitle("");
      setDescription("");
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <div>
      <h1
        className="
        text-4xl
        font-bold
        mb-8
        text-slate-800
        dark:text-white
      "
      >
        Complaints 📝
      </h1>

      <div
        className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        shadow-lg
        p-6
      "
      >
        <input
          type="text"
          placeholder="Complaint Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="
          w-full
          border
          p-3
          rounded-xl
          mb-4
          dark:bg-slate-800
          dark:text-white
        "
        />

        <textarea
          rows="5"
          placeholder="Describe your issue..."
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="
          w-full
          border
          p-3
          rounded-xl
          dark:bg-slate-800
          dark:text-white
        "
        />

        <button
          onClick={submitComplaint}
          className="
          mt-4
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-6
          py-3
          rounded-xl
        "
        >
          Submit Complaint
        </button>

        {message && (
          <p className="mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Complaints;