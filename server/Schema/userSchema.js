const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
  },
  razorpay_payment_id: {
    type: String,
  },
  razorpay_signature: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  otp: { type: Number },
  addresses: [
    {
      contactName: { type: String, required: true },
      mobile: { type: String, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
      zipCode: { type: String, required: true },
    },
  ],
  cart: [
    {
      productId: { type: Number, ref: "Product", required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
  orders: [
    {
      orderList: [
        {
          _id: String,
          title: String,
          description: String,
          image: String,
          price: String,
          quantity: Number,
        },
      ],
      payment: paymentSchema, 
    },
  ],
  blocked: { type: Boolean, default: false },
});

module.exports = mongoose.model("USER", userSchema);
