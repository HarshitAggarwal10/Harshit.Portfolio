import { Router } from "express";
import Contact from "../models/Contact";
import { sendMail } from "../utils/mailer";

const router = Router();

router.post("/", async (req, res): Promise<any> => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, msg: "All fields are required" });
    }

    // Save in DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 1️⃣ Send mail to YOU with user details
    await sendMail(
      process.env.EMAIL_USER as string,
      `📩 New Contact Form Submission from ${name}`,
      `You received a new message via your portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`
    );

    // 2️⃣ Send confirmation mail to USER
    await sendMail(
      email,
      "✅ Thanks for contacting me!",
      `Hi ${name},\n\nI’ve received your message:\n"${message}"\n\nI’ll get back to you soon!\n\nRegards,\nHarshit Aggarwal`
    );

    return res.status(201).json({ success: true, msg: "Message sent successfully" });
  } catch (error) {
    console.error("❌ Contact Route Error:", error);
    return res.status(500).json({ success: false, error: "Server error. Please try again later." });
  }
});

export default router;
