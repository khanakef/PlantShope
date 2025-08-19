import db from "../db.js";
import bcrypt from "bcryptjs";

export const createUsersTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, [], (err) => {
    if (err) {
      console.error("Error creating users table:", err.message);
      return;
    }

    // Insert default user if not exists
db.get("SELECT * FROM users WHERE email = ?", ["akef123@gmail.com"], async (err, row) => {
  if (!row) {
    const hashedPassword = await bcrypt.hash("mysecurepass", 10);
    db.run(
      `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
      ["Akef", "akef123@gmail.com", hashedPassword]
    );
    console.log("Default user created: akef123@gmail.com");
  }
});

  });
};
