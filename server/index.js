const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const Razorpay = require("razorpay");
// const paymentRoute = require("./Route/paymentRoutes");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECfghrgfghfgfgRET,
});

app.use(cors());
app.use(helmet());
// app.use(express.urlencoded({extended:true}))
const registerRoute = require("./Route/register");
const productRoute = require("./Route/Product");

app.use(express.json());
app.use("/route", registerRoute);
app.use("/product", productRoute);
// app.use("/payment", paymentRoute);

app.post('/create-order', async (req, res) => {
  const options = {
    amount: 50000,  // amount in paise (100 paise = 1 INR)
    currency: 'INR',
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(3300, () => {
  console.log("Server is running on port 3300");
});

// module.exports = { instance };
