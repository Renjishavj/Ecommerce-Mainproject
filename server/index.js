const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const Razorpay = require("razorpay");
const AsyncQueue = require("./queuehandler");
const queue = new AsyncQueue();
global.requestQueue = queue;

app.use(cors());
app.use(helmet());

const registerRoute = require("./Route/register");
const productRoute = require("./Route/Product");
const paymentRoute = require("./Route/paymentRoutes");

try {
  app.use(express.json());
  app.use("/route", registerRoute);
  app.use("/product", productRoute);
  app.use("/payment", paymentRoute);
} catch (er) {
  console.log(er);
}

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});

// module.exports = { instance };
