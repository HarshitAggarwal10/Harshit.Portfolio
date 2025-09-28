// src/models/Contact.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  date: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export default mongoose.model<IContact>("Contact", ContactSchema);
