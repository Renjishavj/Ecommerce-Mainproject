const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Keyboard = require("./Schema/keyboardSchema");
const Category = require("./Schema/CategorySchema");
const Order = require("./Schema/OrderShema");
const user = require("./Schema/userSchema");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const Razorpay = require("razorpay");
const dbManager = require("./connectionManager");
const registerRoute = require("./Route/register");
const productRoute = require("./Route/Product");
const paymentRoute = require("./Route/paymentRoutes");


registerModels = async () => {
  let connection;
  connection = await dbManager.connect("main", process.env.CONNECTION);
  connection.model("users", user);
  connection.model("orders", Order);
  connection.model("categories", Category);

  connection = await dbManager.connect(
    "categories",
    `${process.env.CONNECTION}/categories`
  );
  connection.model("keyboards", Keyboard);
};
registerModels()
app.use(cors())
app.use(helmet());
app.use(express.json());
app.use("/route", registerRoute);
app.use("/product", productRoute);
app.use("/payment", paymentRoute);

app.listen(3300, () => {
  console.log("Server is running on port 3300");
});
