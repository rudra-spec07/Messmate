import express from "express";

import {
  createComplaint,
  getComplaints,
  updateComplaint,
} from "../controllers/complaint.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("student"),
  createComplaint
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("student", "manager", "admin"),
  getComplaints
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("manager", "admin"),
  updateComplaint
);

export default router;