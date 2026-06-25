import Attendance from "../models/Attendance.js";

export const markAttendance = async (
  req,
  res
) => {
  try {
    const date =
      new Date()
        .toISOString()
        .split("T")[0];

    const existing =
      await Attendance.findOne({
        student: req.user._id,
        mealType: req.body.mealType,
        date,
      });

    if (existing) {
      return res.status(400).json({
        success: false,
        message:
          "Attendance already marked",
      });
    }

    const attendance =
      await Attendance.create({
        student: req.user._id,
        mealType: req.body.mealType,
        date,
      });

    res.status(201).json({
      success: true,
      attendance,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAttendance =
  async (req, res) => {
    try {
      const filter =
        req.user?.role === "student"
          ? { student: req.user._id }
          : {};

      const records =
        await Attendance.find(filter)
          .populate(
            "student",
            "name email"
          );

      res.json(records);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };