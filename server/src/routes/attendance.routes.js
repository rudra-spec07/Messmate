import express from "express";

import {
  markAttendance,
  getAttendance,
} from "../controllers/attendance.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("student"),
  markAttendance
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("student", "manager", "admin"),
  getAttendance
);

export default router;