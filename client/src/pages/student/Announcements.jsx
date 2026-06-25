import { useEffect, useState } from "react";
import API from "../../api/axios";
import SkeletonLoader from "../../components/SkeletonLoader";

function Announcements() {
  const [announcements, setAnnouncements] =
    useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements =
    async () => {
      setLoading(true);
      try {
        const { data } =
          await API.get(
            "/announcements"
          );

        setAnnouncements(data);
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
        Announcements 📢
      </h1>

      {loading ? (
        <SkeletonLoader count={3} />
      ) : (
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
      )}
    </div>
  );
}

export default Announcements;