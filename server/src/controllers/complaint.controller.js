import Complaint from "../models/Complaint.js";

export const createComplaint =
  async (req, res) => {
    try {
      const complaint =
        await Complaint.create({
          student: req.user._id,
          title: req.body.title,
          description:
            req.body.description,
        });

      res.status(201).json({
        success: true,
        complaint,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const getComplaints =
  async (req, res) => {
    try {
      const filter =
        req.user?.role === "student"
          ? { student: req.user._id }
          : {};

      const complaints =
        await Complaint.find(filter)
          .populate(
            "student",
            "name email"
          );

      res.json(complaints);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const updateComplaint =
  async (req, res) => {
    try {
      const complaint =
        await Complaint.findByIdAndUpdate(
          req.params.id,
          {
            status:
              req.body.status,
          },
          {
            new: true,
          }
        );

      res.json(complaint);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };