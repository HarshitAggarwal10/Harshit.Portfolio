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
        // Save to DB
        const newContact = new Contact_1.default({ name, email, message });
        await newContact.save();
        // Send email confirmation
        await (0, mailer_1.sendMail)(email, "Thanks for contacting me!", `Hi ${name},\n\nI’ve received your message:\n"${message}"\n\nI’ll get back to you soon!\n\nRegards,\nHarshit Aggarwal`);
        res.status(201).json({ success: true, msg: "Message sent" });
    }
    catch (error) {
        res.status(500).json({ success: false, error });
    }
});
exports.default = router;
//# sourceMappingURL=contact.js.map