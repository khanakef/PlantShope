import express from "express";
import db from "../database/db.js";

const router = express.Router();

// ✅ Delete All Tables
router.delete("/delete-all-tables", (req, res) => {
  const tables = ["register", "admins", "users"];
  let completed = 0;

  tables.forEach((table) => {
    db.run(`DROP TABLE IF EXISTS ${table}`, [], (err) => {
      completed++;
      if (err) {
        console.error(`❌ Error deleting ${table}:`, err.message);
      } else {
        console.log(`✅ ${table} table deleted successfully`);
      }

      if (completed === tables.length) {
        res.json({ message: "✅ All tables deleted successfully" });
      }
    });
  });
});

export default router;
