import express from "express";

import {
  createMenu,
  getTodayMenu,
  getMenus,
  updateMenu,
  deleteMenu,
} from "../controllers/menu.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  roleMiddleware("manager"),
  createMenu
);

router.get(
  "/",
  authMiddleware,
  getMenus
);

router.get(
  "/today",
  authMiddleware,
  getTodayMenu
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("manager"),
  updateMenu
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("manager"),
  deleteMenu
);

export default router;