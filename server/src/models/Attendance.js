import mongoose from "mongoose";

const attendanceSchema =
  new mongoose.Schema(
    {
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      mealType: {
        type: String,
        enum: [
          "Breakfast",
          "Lunch",
          "Dinner",
        ],
      },

      date: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Attendance",
  attendanceSchema
);