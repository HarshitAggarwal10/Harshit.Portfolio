import { Schema, model } from "mongoose";

const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("Contact", contactSchema);
