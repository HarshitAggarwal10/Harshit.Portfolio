"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)("Contact", contactSchema);
//# sourceMappingURL=Contact.js.map