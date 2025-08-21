import db from "../db.js";

export const createRegisterTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS register (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fullName TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      phone TEXT NOT NULL,
      address TEXT NOT NULL,
      city TEXT NOT NULL,
      country TEXT NOT NULL,
      pinCode TEXT NOT NULL,
      dob TEXT NOT NULL,
      gender TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, [], (err) => {
    if (err) {
      console.error("❌ Error creating register table:", err.message);
    } else {
      console.log("✅ Register table created (if not exists)");
    }
  });
};
