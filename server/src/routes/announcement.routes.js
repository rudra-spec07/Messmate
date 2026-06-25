import express from "express";

import {
  createAnnouncement,
  getAnnouncements,
} from "../controllers/announcement.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  createAnnouncement
);

router.get(
  "/",
  authMiddleware,
  getAnnouncements
);

export default router;