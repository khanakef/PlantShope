import db from "../db.js";
import bcrypt from "bcryptjs";

export const createLoginTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      register_id INTEGER NOT NULL,          -- ✅ Foreign key (link with register.id)
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      status TEXT DEFAULT 'active',          -- ✅ Active / Inactive
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (register_id) REFERENCES register(id) ON DELETE CASCADE
    )
  `, [], (err) => {
    if (err) {
      console.error("❌ Error creating users table:", err.message);
    } else {
      console.log("✅ Users (Login) table created");
    }
  });
};
