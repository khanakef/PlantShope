import sqlite3pkg from "sqlite3";

const sqlite3 = sqlite3pkg.verbose();

const db = new sqlite3.Database("./backend/mydatabase.db", (err) => {
  if (err) console.error("Error opening database:", err.message);
  else console.log("Connected to SQLite");
});

export default db;
