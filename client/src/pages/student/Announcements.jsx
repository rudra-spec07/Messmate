import { useEffect, useState } from "react";
import API from "../../api/axios";

function Announcements() {
  const [announcements, setAnnouncements] =
    useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements =
    async () => {
      try {
        const { data } =
          await API.get(
            "/announcements"
          );

        setAnnouncements(data);
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
        Announcements 📢
      </h1>

      <div className="space-y-4">

        {announcements.map(
          (announcement) => (
            <div
              key={
                announcement._id
              }
              className="
              bg-white
              dark:bg-slate-900
              p-5
              rounded-2xl
              shadow-lg
            "
            >
              <h2
                className="
                text-xl
                font-bold
                dark:text-white
              "
              >
                {
                  announcement.title
                }
              </h2>

              <p
                className="
                mt-2
                text-slate-600
                dark:text-slate-300
              "
              >
                {
                  announcement.message
                }
              </p>
            </div>
          )
        )}

      </div>
    </div>
  );
}

export default Announcements;