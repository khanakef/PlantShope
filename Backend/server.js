import express from "express";
import session from "express-session";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";   // ✅ sahi
import registerRoutes from "./routes/registerRoutes.js";
import { createUsersTable } from "./database/tables/usersTable.js";  // ✅ sahi
import { createAdminsTable } from "./database/tables/adminTable.js";
import { createRegisterTable } from "./database/tables/registerTable.js";

const app = express();
const PORT = 5000;

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true,
  })
);
app.use(express.json());

// Sessions
app.use(
  session({
    secret: "super_secret_key_here",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // production me secure: true (with HTTPS)
  })
);

// ✅ Database table create
createUsersTable();
createAdminsTable();
createRegisterTable(); // call once at startup

// ✅ Routes (sabko /api prefix pe mount karo taaki clear ho)
// Routes
app.use("/api", registerRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Backend is running fine!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
