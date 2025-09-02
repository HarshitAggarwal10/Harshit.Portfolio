"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_1 = __importDefault(require("./routes/contact"));
dotenv_1.default.config(); // ✅ Load .env first
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/contact", contact_1.default);
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error("❌ MONGO_URI is not defined in .env file");
}
else {
    console.log(`✅ MONGO_URI is defined: ${mongoUri}`);
}
mongoose_1.default
    .connect(mongoUri)
    .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log(`✅ Server running on http://localhost:${process.env.PORT || 5000}`));
})
    .catch((err) => console.error("❌ MongoDB connection error:", err));
//# sourceMappingURL=index.js.map