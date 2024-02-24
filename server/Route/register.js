const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Schema/userSchema");

const nodeMailer = require("nodemailer");
const sentMail = require("../NodeMailer/sendMail");
const sendMail = require("../NodeMailer/sendMail");
const router = express.Router();

app.use(express.json());

router.post("/register", async (req, res) => {
  try {
    await mongoose.connect(`${process.env.CONNECTION}`);
    console.log("db connected");
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

    await mongoose.connect(`${process.env.CONNECTION}`);
    console.log("db connected");

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
    await mongoose.connect(`${process.env.CONNECTION}`);
    console.log("db connected");
    const otp = Math.floor(Math.random() * 100000);
    const { email } = req.body;
    const user = await User.findOneAndUpdate(
      { email: email },
      { otp: otp },
      { upsert: true }
    );
    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }
    let info = await sendMail(user.email, otp);
    if (info.accepted.length >= 1) {
      res.status(200).json({ message: "OTP sent to mail" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed" });
  }
});

//reset

router.post("/validateotp", async (req, res) => {
  try {
    await mongoose.connect(`${process.env.CONNECTION}`);
    console.log("db connected");
    const { email, otp } = req.body;
   // console.log("Password:", email);
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }
    console.log(user.otp, otp)
    if (parseInt(otp) === parseInt(user.otp)) {
      return res.status(200).json({ message: "reset Verified" });
    } else {
      return res.status(404).json({ message: "Wrong pin" });
    }
  } catch (error) {}
});

//updatepassword

router.post("/updatePassword", async (req, res) => {
  console.log("running");
  try {
    await mongoose.connect(`${process.env.CONNECTION}`);
    console.log("db connected");
    const { email, password } = req.body;
        
          const updatepassword = await bcrypt.hash(password, 10);
          console.log("Hashed Password:", updatepassword);
         const user = await User.findOneAndUpdate({ email: email }, { password: updatepassword });
         console.log(user)
  if (user) {
      res.status(200).json({ message: "Password updated successfully" });
    }
  else {
      res.status(401).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Something went wrong" });
  }
})





module.exports = router;
