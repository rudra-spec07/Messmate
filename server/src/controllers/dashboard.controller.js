import User from "../models/User.js";
import Attendance from "../models/Attendance.js";
import Complaint from "../models/Complaint.js";

export const getDashboardStats =
  async (req, res) => {
    try {
      const totalStudents =
        await User.countDocuments({
          role: "student",
        });

      const totalComplaints =
        await Complaint.countDocuments();

      const pendingComplaints =
        await Complaint.countDocuments({
          status: "pending",
        });

      const todayAttendance =
        await Attendance.countDocuments({
          date:
            new Date()
              .toISOString()
              .split("T")[0],
        });

      res.json({
        totalStudents,
        totalComplaints,
        pendingComplaints,
        todayAttendance,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };