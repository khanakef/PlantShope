import express from "express";
import db from "../database/db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// ✅ Register new user
router.post("/register", async (req, res) => {
  const { name, number, email, password } = req.body;

  // ✅ added: basic validation
  if (!name || !number || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    db.run(
      `INSERT INTO register (name, number, email, password) 
       VALUES (?, ?, ?, ?)`,
      [name, number, email, password],
      function (err) {
        if (err) {
          console.error("❌ Register Error:", err.message);

          // ✅ added: more descriptive error response
          if (err.message.includes("UNIQUE")) {
            return res.status(400).json({ error: "Email already exists" });
          }

          return res.status(500).json({ error: "Registration failed" });
        }

        const registerId = this.lastID;

        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            console.error("❌ Hash Error:", err.message);
            return res.status(500).json({ error: "Password hashing failed" });
          }

          db.run(
            `INSERT INTO login (register_id, email, password, status) 
             VALUES (?, ?, ?, ?)`,
            [registerId, email, hashedPassword, "off"],
            (err) => {
              if (err) {
                console.error("❌ Login Insert Error:", err.message);
                return res.status(500).json({ error: "Failed to create login entry" });
              }

              console.log("✅ User registered and login entry created");
              res.json({ message: "Registration successful", registerId });
            }
          );
        });
      }
    );
  } catch (error) {
    console.error("❌ Unexpected Error:", error.message);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Fetch all registered users
router.get("/register-users", (req, res) => {
  db.all("SELECT * FROM register", [], (err, rows) => {
    if (err) {
      console.error("❌ Error fetching users:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});

// ✅ Fetch single registered user by ID
router.get("/register/:id", (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM register WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("❌ Error fetching registered user:", err.message);
      return res.status(500).json({ error: "Database error" });
    }
    if (!row) return res.status(404).json({ error: "User not found" });
    res.json(row);
  });
});

export default router;
