"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Contact_1 = __importDefault(require("../models/Contact"));
const mailer_1 = require("../utils/mailer");
const router = (0, express_1.Router)();
router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, msg: "All fields are required" });
        }
        // Save in DB
        const newContact = new Contact_1.default({ name, email, message });
        await newContact.save();
        // 1️⃣ Send mail to YOU with user details
        await (0, mailer_1.sendMail)(process.env.EMAIL_USER, `📩 New Contact Form Submission from ${name}`, `You received a new message via your portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`);
        // 2️⃣ Send confirmation mail to USER
        await (0, mailer_1.sendMail)(email, "✅ Thanks for contacting me!", `Hi ${name},\n\nI’ve received your message:\n"${message}"\n\nI’ll get back to you soon!\n\nRegards,\nHarshit Aggarwal`);
        return res.status(201).json({ success: true, msg: "Message sent successfully" });
    }
    catch (error) {
        console.error("❌ Contact Route Error:", error);
        return res.status(500).json({ success: false, error: "Server error. Please try again later." });
    }
});
exports.default = router;
//# sourceMappingURL=contact.js.map