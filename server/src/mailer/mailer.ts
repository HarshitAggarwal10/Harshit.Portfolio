// src/mailer/mailer.ts
import { transporter } from "./transporter";

export const sendMail = async (to: string, subject: string, text: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};
