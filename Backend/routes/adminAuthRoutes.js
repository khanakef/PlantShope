import express from "express";
import bcrypt from "bcryptjs";
import db from "../database/db.js";

const router = express.Router();

// 🔑 Admin Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM admins WHERE email = ?", [email], async (err, admin) => {
    if (err) {
      console.error("DB error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    if (!admin) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    req.session.user = { id: admin.id, email: admin.email, username: admin.username, role: admin.role };
    const tabToken = Date.now() + "-" + Math.random();

    res.json({
      success: true,
      tabToken,
      user: { id: admin.id, email: admin.email, username: admin.username, role: admin.role }
    });
  });
});

export default router;
