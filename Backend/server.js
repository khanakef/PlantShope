import express from "express";
import sqlite3pkg from "sqlite3";
import cors from "cors";
import bcrypt from "bcryptjs";
import session from "express-session";

const sqlite3 = sqlite3pkg.verbose();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use(session({
  secret: "super_secret_key_here",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60
  }
}));

// Database
const db = new sqlite3.Database("./backend/mydatabase.db", (err) => {
  if (err) return console.error("Error opening database:", err.message);
  console.log("Connected to SQLite");

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, [], (err) => {
    if (!err) {
      db.get("SELECT * FROM users WHERE email = ?", ["admin@gmail.com"], async (err, row) => {
        if (!row) {
          const hashedPassword = await bcrypt.hash("4595", 10);
          db.run(
            `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
            ["Admin", "admin@gmail.com", hashedPassword]
          );
          console.log("Admin user created");
        }
      });
    }
  });
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(401).json({ error: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, row.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });

    req.session.userId = row.id;
    res.json({ message: "Login successful" });
  });
});

// Check session
app.get("/check-auth", (req, res) => {
  res.json({ authenticated: !!req.session.userId });
});

// Logout
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
