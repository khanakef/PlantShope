import db from "../db.js";

export const createLoginTable = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS login (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      register_id INTEGER NOT NULL,          -- ✅ Foreign key (link with register.id)
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      status TEXT DEFAULT 'off',             -- ✅ "on" when logged in, "off" when logged out
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (register_id) REFERENCES register(id) ON DELETE CASCADE
    )
  `, [], (err) => {
    if (err) {
      console.error("❌ Error creating login table:", err.message);
    } else {
      console.log("✅ Login table created with status ON/OFF system");
    }
  });
};
