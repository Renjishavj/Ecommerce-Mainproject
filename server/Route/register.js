const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Schema/userSchema");
const router = express.Router();
const sentMail = require("../NodeMailer/sendMail");
const sendMail = require("../NodeMailer/sendMail");

app.use(express.json());

router.post("/register", async (req, res) => {
  try {
    //console.log(User);
    const { email, name, phone, password } = req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 11);
    const user = new User({
      email: email,
      name: name,
      phone: phone,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).json({ message: "Registration completed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });

    if (!user) {
      //console.log(user)
      return res.status(401).json({ error: "Login failed" });
    } else if (user) {
      console.log(user.name);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "confidential", {
      expiresIn: "24hr",
    });

    delete user._doc.password;
    res.status(200).json({ token: token, user: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "login failed" });
    console.log(error);
  }
});
//forgotpass

router.post("/forgotpassword", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }
    const otp = Math.floor(Math.random() * 100000);
    const updateOtp = await User.findByIdAndUpdate(
      user._id,
      { otp: otp },
      { new: true }
    );
    if (updateOtp) {
      let info = await sendMail(user.email, otp);
      console.log(info);

      res.status(200).json({ message: "OTP sent to mail" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed" });
  }
});

module.exports = router;
