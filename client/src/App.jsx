import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/student/Dashboard";
import ManagerDashboard from "./pages/manager/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Menu from "./pages/student/Menu";
import Attendance from "./pages/student/Attendance";
import Complaints from "./pages/student/Complaints";

import Announcements from "./pages/student/Announcements";

import ComplaintManagement
from "./pages/manager/ComplaintManagement";

import CreateAnnouncement from "./pages/manager/AnnouncementManagement";
import ManagerMenu from "./pages/manager/MenuManagement";

import AttendanceReport from "./pages/manager/AttendanceReport";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/manager/dashboard"
            element={<ManagerDashboard />}
          />

          <Route
            path="/menu"
            element={<Menu />}
          />
          <Route
  path="/attendance"
  element={<Attendance />}
/>
          <Route
  path="/complaints"
  element={<Complaints />}
/>
          <Route
  path="/announcements"
  element={<Announcements />}
/>
         <Route
  path="/manager/complaints"
  element={<ComplaintManagement />}
/>
         <Route
  path="/manager/announcements"
  element={<CreateAnnouncement />}
/>
         <Route
  path="/manager/menu"
  element={<ManagerMenu />}
/>
         <Route
  path="/manager/attendance"
  element={<AttendanceReport />}
/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;