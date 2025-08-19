// backend/authroutes.js
import express from "express";
import bcrypt from "bcryptjs";
import db from "../database/db.js"; // SQLite connection

const router = express.Router();

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Save session
    req.session.user = { id: user.id, email: user.email, username: user.username };
    const tabToken = Date.now() + "-" + Math.random();

    res.json({
      success: true,
      tabToken,
      user: { id: user.id, email: user.email, username: user.username }
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

// Me route
router.get("/me", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

export default router;
