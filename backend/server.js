import dotenv from "dotenv";
dotenv.config(); // Ensure this is at the very top!

import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use("/api/auth", userRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI) // ✅ Check if MONGO_URI is being read correctly
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to AlphaInsights Backend!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
