// src/mailer/transporter.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { EMAIL_USER, EMAIL_PASS } = process.env;
if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error("EMAIL_USER or EMAIL_PASS missing in environment");
}

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL immediately
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS, // 16-char App Password
  },
});

export async function verifyTransport() {
  try {
    await transporter.verify();
    console.log("✅ Email transporter ready");
  } catch (err) {
    console.error("❌ Email transporter error:", err);
  }
}
