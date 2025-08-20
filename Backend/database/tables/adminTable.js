import db from "../db.js";
import bcrypt from "bcryptjs";

export const createAdminsTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, [], (err) => {
    if (err) {
      console.error("Error creating admins table:", err.message);
      return;
    }

    // Insert default admin if not exists
    db.get("SELECT * FROM admins WHERE email = ?", ["admin123@gmail.com"], async (err, row) => {
      if (!row) {
        const hashedPassword = await bcrypt.hash("adminpass", 10);
        db.run(
          `INSERT INTO admins (username, email, password, role) VALUES (?, ?, ?, ?)`,
          ["SuperAdmin", "admin123@gmail.com", hashedPassword, "superadmin"]
        );
        console.log("Default admin created: admin123@gmail.com");
      }
    });
  });
};
