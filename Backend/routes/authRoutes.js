// backend/authroutes.js
import express from "express";
import bcrypt from "bcryptjs";
import db from "../database/db.js";

const router = express.Router();

// Unified Login Route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Step 1: Check in admins table first
  db.get("SELECT * FROM admins WHERE email = ?", [email], async (err, admin) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });

      req.session.user = { id: admin.id, email: admin.email, username: admin.username, role: admin.role || "admin" };
      const tabToken = Date.now() + "-" + Math.random();

      return res.json({
        success: true,
        tabToken,
        user: req.session.user
      });
    }

    // Step 2: If not admin, check users table
    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
      if (err) {
        console.error("DB error:", err);
        return res.status(500).json({ error: "Database error" });
      }

      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ error: "Invalid email or password" });

      req.session.user = { id: user.id, email: user.email, username: user.username, role: "user" };
      const tabToken = Date.now() + "-" + Math.random();

      res.json({
        success: true,
        tabToken,
        user: req.session.user
      });
    });
  });
});

// Check auth
router.get("/check-auth", (req, res) => {
  if (req.session.user) {
    res.json({ authenticated: true, user: req.session.user });
  } else {
    res.json({ authenticated: false });
  }
});

export default router;
