const mongoose = require("mongoose");

const keyboardSchema = mongoose.Schema({
  _id: Number,
  title: { type: String, required: true },
  rating: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String },
  cartone: { type: String },
  carttwo: { type: String },
  cartthree: { type: String },
  description: { type: String },
  count: { type: String },
  category: { type: String },
});

module.exports = keyboardSchema;
