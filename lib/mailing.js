import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
export let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// let mailOptions = {
//   to: "amelrazinijob5@gmail.com",
//   subject: "this is a test mail",
//   text: "this is a test mail from node mailer ",
// };
