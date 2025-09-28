// src/index.ts
import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import contactRoute from "./routes/contact";
import { verifyTransport } from "./mailer/transporter";

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Build an allowlist; include both local and deployed origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://harshitaggarwal.vercel.app",
];

const corsOptions: cors.CorsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
// IMPORTANT: Express 5 requires a named wildcard here
app.options("/*splat", cors(corsOptions));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug env safely
console.log("Loaded ENV:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "******" : "MISSING",
  MONGO_URI: process.env.MONGO_URI ? "SET" : "MISSING",
});

// MongoDB
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
      process.env.EMAIL_USER && process.env.EMAIL_PASS
        ? "✅ Configured"
        : "❌ Missing"
    }`
  );
  await verifyTransport();
});
