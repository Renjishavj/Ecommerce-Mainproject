const nodeMailer = require("nodemailer");
const dotenv = require("dotenv").config();

const pass = process.env.PASS;

const sendMail = async (toEmail, otp, resetLink) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "renjishavj@gmail.com",
      pass: pass,
    },
  });

  const info = await transporter.sendMail({
    from: '"Nodemailer" <renjishavj@gmail.com>',
    to: toEmail,
    subject: "Password Reset",
    html: `
      <h2>OTP for Password Reset: ${otp}</h2>
    
    `,
  });

  return info;
};

module.exports = sendMail;
