import Announcement from "../models/Announcement.js";

export const createAnnouncement =
  async (req, res) => {
    try {
      const announcement =
        await Announcement.create({
          title: req.body.title,
          message:
            req.body.message,
          createdBy:
            req.user._id,
        });

      res.status(201).json({
        success: true,
        announcement,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const getAnnouncements =
  async (req, res) => {
    try {
      const announcements =
        await Announcement.find()
          .sort({
            createdAt: -1,
          });

      res.json(announcements);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };