import { transporter } from "../lib/mailing.js";

export const SendEmail = (req, res) => {
  let mailOptions = {
    to: req.body.email,
    subject: "this is a test mail",
    text: req.body.message,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    err ? console.log("error", err) : console.log("Email sent", info.response);
  });
  //Pour arreter la requete
  res.json({
    message: "message sent",
  });
};
