// src/routes/contact.ts
import { Router, Request, Response } from "express";
import Contact from "../models/Contact";
import { transporter } from "../mailer/transporter";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const safeName = typeof name === "string" ? name.trim() : "";
  const safeEmail = typeof email === "string" ? email.trim() : "";
  const safeMessage = typeof message === "string" ? message.trim() : "";

  if (!safeName || !safeEmail || !safeMessage) {
    return res
      .status(400)
      .json({ success: false, msg: "All fields are required." });
  }

  try {
    await Contact.create({
      name: safeName,
      email: safeEmail,
      message: safeMessage,
      date: new Date(),
    });

    const ownerMail = transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Message from ${safeName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br/>")}</p>
      `,
    });

    const userMail = transporter.sendMail({
      from: `"Harshit Aggarwal" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: "Thanks for contacting me!",
      html: `
        <p>Hi ${safeName},</p>
        <p>Thank you for reaching out. I have received your message and will get back to you shortly.</p>
        <p><strong>Your message:</strong></p>
        <blockquote>${safeMessage.replace(/\n/g, "<br/>")}</blockquote>
        <p>Best regards,<br/>Harshit Aggarwal</p>
      `,
    });

    await Promise.all([ownerMail, userMail]);

    return res.status(200).json({
      success: true,
      msg:
        "Message sent successfully! A confirmation email has been sent to the provided address.",
    });
  } catch (error: any) {
    console.error("❌ Contact form error:", error?.message || error);
    return res.status(500).json({
      success: false,
      msg: "Failed to send message. Please try again later.",
    });
  }
});

export default router;
