import { useEffect, useState } from "react";
import API from "../../api/axios";
import SkeletonLoader from "../../components/SkeletonLoader";

function ComplaintManagement() {
  const [complaints, setComplaints] =
    useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    setLoading(true);
    try {
      const { data } =
        await API.get(
          "/complaints"
        );

      setComplaints(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (
    id,
    status
  ) => {
    try {
      await API.patch(
        `/complaints/${id}`,
        { status }
      );

      fetchComplaints();
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
        Complaint Management ⚠️
      </h1>

      {loading ? (
        <SkeletonLoader count={3} />
      ) : (
        <div className="space-y-4">
          {complaints.map(
            (complaint) => (
              <div
                key={complaint._id}
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
                  font-bold
                  text-lg
                  dark:text-white
                "
                >
                  {complaint.title}
                </h2>

                <p
                  className="
                  mt-2
                  dark:text-slate-300
                "
                >
                  {
                    complaint.description
                  }
                </p>

                <p className="mt-2">
                  Student:
                  {" "}
                  {
                    complaint.student
                      ?.name
                  }
                </p>

                <p className="mt-2">
                  Status:
                  {" "}
                  {
                    complaint.status
                  }
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() =>
                      updateStatus(
                        complaint._id,
                        "Resolved"
                      )
                    }
                    className="
                    bg-green-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                  >
                    Resolve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        complaint._id,
                        "Pending"
                      )
                    }
                    className="
                    bg-yellow-500
                    text-white
                    px-4
                    py-2
                    rounded-lg
                  "
                  >
                    Pending
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default ComplaintManagement;