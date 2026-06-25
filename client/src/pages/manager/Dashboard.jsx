import { useEffect, useState } from "react";
import API from "../../api/axios";
import StatCard from "../../components/StatCard";

function ManagerDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    todayAttendance: 0,
    pendingComplaints: 0,
    announcementsCount: 0,
  });

  useEffect(() => {
    const fetchManagerDashboard = async () => {
      try {
        const [statsRes, announcementsRes] = await Promise.all([
          API.get("/dashboard/stats"),
          API.get("/announcements"),
        ]);

        setStats({
          totalStudents: statsRes?.data?.totalStudents || 0,
          todayAttendance: statsRes?.data?.todayAttendance || 0,
          pendingComplaints: statsRes?.data?.pendingComplaints || 0,
          announcementsCount: announcementsRes?.data?.length || 0,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchManagerDashboard();
  }, []);

  return (
    <div>
      <h1
        className="
        text-3xl
        font-bold
        mb-8
        dark:text-white
      "
      >
        Manager Dashboard 📊
      </h1>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
      "
      >
        <StatCard title="Total Students" value={stats.totalStudents} />
        <StatCard title="Today's Attendance" value={stats.todayAttendance} />
        <StatCard title="Pending Complaints" value={stats.pendingComplaints} />
        <StatCard title="Announcements" value={stats.announcementsCount} />
      </div>
    </div>
  );
}

export default ManagerDashboard;