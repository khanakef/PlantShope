import express from "express";
import db from "../db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Admin Registration
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      `INSERT INTO admins (username, email, password) VALUES (?, ?, ?)`,
      [username, email, hashedPassword],
      function (err) {
        if (err) {
          return res.status(400).json({ error: "Email already exists or DB error" });
        }
        res.json({ message: "Admin registered successfully", adminId: this.lastID });
      }
    );
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Admin Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM admins WHERE email = ?`, [email], async (err, admin) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (!admin) return res.status(401).json({ error: "Invalid email or password" });

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) return res.status(401).json({ error: "Invalid email or password" });

    res.json({ message: "Login successful", admin: { id: admin.id, email: admin.email, role: admin.role } });
  });
});

export default router;
