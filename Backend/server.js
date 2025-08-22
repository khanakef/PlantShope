import express from "express";
import session from "express-session";
import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";   // ✅ sahi
import registerRoutes from "./routes/registerRoutes.js";
import { createLoginTable } from "./database/tables/loginTable.js";  // ✅ sahi
// import { createAdminsTable } from "./database/tables/adminTable.js";
import { createRegisterTable } from "./database/tables/registerTable.js";
import dataRoutes from "./routes/dataRoutes.js";  // ✅ add this
import db from "./database/db.js";   // ✅ db import zaroori hai
import loginRoutes from "./routes/loginRoutes.js";  // ✅ import

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
createLoginTable();
// createAdminsTable();
createRegisterTable(); // call once at startup

// ✅ Routes (sabko /api prefix pe mount karo taaki clear ho)
app.use("/api", registerRoutes);
// app.use("/api", authRoutes);
app.use("/api", dataRoutes);  // ✅ mount

app.use("/api", loginRoutes);  // ✅ mount

// ✅ Add missing route for fetching users
app.get("/api/register-users", (req, res) => {
  console.log("📢 GET /api/register-users called");

  db.all("SELECT * FROM register", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching users:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    console.log("✅ Users fetched:", rows);
    res.json(rows);
  });
});

app.get("/", (req, res) => {
  res.send("🚀 Backend is running fine!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


// ✅ Login Users fetch route
app.get("/api/login-users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching login users:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});
