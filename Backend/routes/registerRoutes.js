import express from "express";
import db from "../database/db.js";
import bcrypt from "bcryptjs";

const router = express.Router();

// Register API
router.post("/register", async (req, res) => {
  const { fullName, email, password, phone, address, city, country, pinCode, dob, gender } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Insert into DB
    db.run(
      `INSERT INTO register (fullName, email, password, phone, address, city, country, pinCode, dob, gender) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [fullName, email, hashedPassword, phone, address, city, country, pinCode, dob, gender],
      function (err) {
        if (err) {
          console.error("❌ Insert Error:", err.message);
          return res.status(500).json({ message: "Database insert error", error: err.message });
        }
        res.status(201).json({ message: "User registered successfully", userId: this.lastID });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
