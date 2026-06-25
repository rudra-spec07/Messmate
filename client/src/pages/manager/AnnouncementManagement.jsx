import { useState } from "react";
import API from "../../api/axios";

function CreateAnnouncement() {
  const [title, setTitle] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleSubmit = async () => {
    try {
      await API.post(
        "/announcements",
        {
          title,
          message,
        }
      );

      setSuccess(
        "Announcement Created Successfully ✅"
      );

      setTitle("");
      setMessage("");
    } catch (error) {
      setSuccess(
        error.response?.data
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
        Create Announcement 📢
      </h1>

      <div
        className="
        bg-white
        dark:bg-slate-900
        p-6
        rounded-2xl
        shadow-lg
      "
      >
        <input
          type="text"
          placeholder="Title"
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
          placeholder="Announcement Message"
          value={message}
          onChange={(e) =>
            setMessage(
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
          onClick={handleSubmit}
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
          Publish
        </button>

        {success && (
          <p className="mt-4">
            {success}
          </p>
        )}
      </div>
    </div>
  );
}

export default CreateAnnouncement;