import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
      unique: true,
    },

    breakfast: [String],

    lunch: [String],

    dinner: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Menu",
  menuSchema
);