import express from "express";
import db from "../database/db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// ✅ Register new user
router.post("/register", async (req, res) => {
  const { fullName, email, password, phone, address, city, country, pinCode, dob, gender } = req.body;

  try {
    // First insert into register table
    db.run(
      `INSERT INTO register (fullName, email, password, phone, address, city, country, pinCode, dob, gender)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [fullName, email, password, phone, address, city, country, pinCode, dob, gender],
      function (err) {
        if (err) {
          console.error("❌ Register Error:", err.message);
          return res.status(500).json({ error: "Registration failed" });
        }

        const registerId = this.lastID; // ✅ inserted register row id

        // Hash password for login table
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            console.error("❌ Hash Error:", err.message);
            return res.status(500).json({ error: "Password hashing failed" });
          }

          // ✅ Insert into users (login) table
          db.run(
            `INSERT INTO users (register_id, email, password, status)
             VALUES (?, ?, ?, ?)`,
            [registerId, email, hashedPassword, "active"],
            (err) => {
              if (err) {
                console.error("❌ Users Insert Error:", err.message);
                return res.status(500).json({ error: "Failed to create login entry" });
              }

              console.log("✅ User registered and login entry created");
              res.json({ message: "Registration successful" });
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

export default router;
