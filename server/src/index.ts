import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact";

dotenv.config(); // ✅ Load .env first

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("❌ MONGO_URI is not defined in .env file");
}
else {
  console.log(`✅ MONGO_URI is defined: ${mongoUri}`);
}

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
