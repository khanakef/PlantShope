import express from "express";
import db from "../database/db.js";   // ✅ apke db.js ka path adjust karna

const router = express.Router();

// ✅ Fetch all login users
router.get("/login-users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching login users:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});

// ✅ Fetch login users + register details (JOIN)
router.get("/login-users-details", (req, res) => {
  const query = `
    SELECT u.id, u.email, u.password, u.status, u.created_at, u.updated_at,
           r.fullName, r.phone, r.address, r.city, r.country
    FROM users u
    JOIN register r ON u.register_id = r.id
  `;
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching login user details:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});

export default router;
