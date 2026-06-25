import express from "express";
import cors from "cors";
import menuRoutes from "./routes/menu.routes.js";
import attendanceRoutes from "./routes/attendance.routes.js";
import complaintRoutes from "./routes/complaint.routes.js";

import announcementRoutes from "./routes/announcement.routes.js";

import dashboardRoutes from "./routes/dashboard.routes.js";




import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

app.use(
  "/api/attendance",
  attendanceRoutes
);

app.use(
  "/api/complaints",
  complaintRoutes
);

app.use(
  "/api/announcements",
  announcementRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

export default app;