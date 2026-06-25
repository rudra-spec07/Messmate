import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

import {
  getDashboardStats,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(
  "/stats",
  authMiddleware,
  roleMiddleware(
    "manager",
    "admin"
  ),
  getDashboardStats
);

export default router;