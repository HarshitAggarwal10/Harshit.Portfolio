import { Router, Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import Contact from "../models/Contact";

const router = Router();

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    res.status(400).json({ success: false, message: "All fields are required." });
    return;
  }

  try {
    // Save to MongoDB
    await Contact.create({ name, email, message });

    /** ========================
     * 1. Email to YOU
     * ======================== */
    const notifyOwner = {
      to: process.env.SENDGRID_TO_EMAIL as string,
      from: process.env.SENDGRID_FROM_EMAIL as string,
      subject: `📩 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background:#f9f9f9; padding:10px; border-left:4px solid #ff6600;">
            ${message}
          </blockquote>
        </div>
      `,
    };

    /** ========================
     * 2. Confirmation Email to USER
     * ======================== */
    const confirmUser = {
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL as string,
      subject: `Thanks for contacting Harshit Aggarwal! 🙌`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out! I have received your message and will get back to you soon.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="background:#f9f9f9; padding:10px; border-left:4px solid #ff6600;">
            ${message}
          </blockquote>
          <p>Warm regards,<br/><strong>Harshit Aggarwal</strong></p>
        </div>
      `,
    };

    // Send both emails simultaneously
    await Promise.all([sgMail.send(notifyOwner), sgMail.send(confirmUser)]);

    console.log("✅ Emails sent successfully!");
    res.status(200).json({ success: true, message: "Message sent successfully!" });
    return;
  } catch (error: any) {
    console.error("❌ SendGrid Error:", error.response?.body || error.message);
    res.status(500).json({ success: false, message: "Failed to send message." });
    return;
  }
});

export default router;
