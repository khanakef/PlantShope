import express from "express";
import authRoutes from "./authRoutes.js";

const router = express.Router();

// yaha aur bhi routes add kar sakte ho future me
router.use("/auth", authRoutes);

export default router;
