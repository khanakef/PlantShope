import express from "express";
import db from "../database/db.js";

const router = express.Router();

// ✅ Fetch all login users
router.get("/login-users", (req, res) => {
  db.all("SELECT * FROM login", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching login users:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});

// ✅ Fetch single login user by ID
router.get("/login-users/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM login WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("❌ Error fetching login user:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    if (!row) return res.status(404).json({ error: "User not found" });
    res.json(row);
  });
});

// ✅ Fetch login users + register details (JOIN)
router.get("/login-users-details/:id", (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT l.id, l.email, l.status, l.created_at, l.updated_at,
           r.name, r.number
    FROM login l
    JOIN register r ON l.register_id = r.id
    WHERE l.id = ?
  `;
  db.get(query, [id], (err, row) => {
    if (err) {
      console.error("❌ Error fetching login user details:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    if (!row) return res.status(404).json({ error: "User not found" });
    res.json(row);
  });
});

export default router;
