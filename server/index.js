const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
// const Razorpay = require("razorpay");
// const paymentRoute = require("./Route/paymentRoutes");

// const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_API_SECRET,
// });

app.use(cors());
app.use(helmet());
// app.use(express.urlencoded({extended:true}))
const registerRoute = require("./Route/register");
const productRoute = require("./Route/Product");

app.use(express.json());
app.use("/route", registerRoute);
app.use("/product", productRoute);
// app.use("/payment", paymentRoute);

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});

// module.exports = { instance };
