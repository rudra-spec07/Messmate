import mongoose from "mongoose";

const complaintSchema =
  new mongoose.Schema(
    {
      student: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
      },

      title: String,

      description: String,

      status: {
        type: String,
        enum: [
          "pending",
          "resolved",
        ],
        default: "pending",
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Complaint",
  complaintSchema
);