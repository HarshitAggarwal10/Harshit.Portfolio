// src/index.ts
import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); // Load env first

import mongoose from "mongoose";
import contactRoute from "./routes/contact";
import { verifyTransport } from "./mailer/transporter";

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Debug env safely
console.log("Loaded ENV:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "******" : "MISSING",
  MONGO_URI: process.env.MONGO_URI ? "SET" : "MISSING",
});

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongo
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
app.use("/api/contact", contactRoute);

app.get("/", (_req: Request, res: Response) => {
  res.json({
    status: "Backend is running ✅",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, async () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(
    `📧 Email service: ${
      process.env.EMAIL_USER && process.env.EMAIL_PASS ? "✅ Configured" : "❌ Missing"
    }`
  );
  await verifyTransport();
});
