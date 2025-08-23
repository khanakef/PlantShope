import db from "../db.js";

export const createRegisterTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS register (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      number TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, [], (err) => {
    if (err) {
      console.error("❌ Error creating register table:", err.message);
    } else {
      console.log("✅ Register table created/updated with only id, name, number, email, password");
    }
  });
};

