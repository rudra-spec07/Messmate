import { useEffect, useState } from "react";
import API from "../../api/axios";
import StatCard from "../../components/StatCard";

function Dashboard() {
  const [stats, setStats] = useState({
    menuCount: 0,
    attendanceCount: 0,
    complaintsCount: 0,
    announcementsCount: 0,
  });

  useEffect(() => {
    const fetchStudentDashboard = async () => {
      try {
        const [menuRes, attendanceRes, complaintsRes, announcementsRes] = await Promise.all([
          API.get("/menu"),
          API.get("/attendance"),
          API.get("/complaints"),
          API.get("/announcements"),
        ]);

        setStats({
          menuCount: menuRes?.data?.length || 0,
          attendanceCount: attendanceRes?.data?.length || 0,
          complaintsCount: complaintsRes?.data?.length || 0,
          announcementsCount: announcementsRes?.data?.length || 0,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentDashboard();
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
        Welcome Back 👋
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
        <StatCard title="Today's Menu" value={`${stats.menuCount} Items`} />
        <StatCard title="Attendance" value={`${stats.attendanceCount} Records`} />
        <StatCard title="Complaints" value={stats.complaintsCount} />
        <StatCard title="Announcements" value={stats.announcementsCount} />
      </div>
    </div>
  );
}

export default Dashboard;