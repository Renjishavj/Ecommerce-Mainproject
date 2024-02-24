const express = require("express");
const app = express();
const Product = require("../Schema/productSchema");
const Keyboard = require("../Schema/keyboardSchema");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findById(productId);
  console.log(product);
  res.status(200).json(product);
});

//add product
router.post("/keyboard", async (req, res) => {
  try {
    await mongoose.connect(`${process.env.CONNECTION}/categories`);
    console.log("db connected");

    const {
      _id,
      title,
      rating,
      price,
      image,
      catone,
      carttwo,
      cartthree,
      description,
      count,
      category
    } = req.body;

    const categoryMapping = {
      0: "guitar",
      1: "keyboard"
    };


    const keyboard = new Keyboard({
      _id: _id,
      title: title,
      rating: rating,
      price: price,
      image: image,
      cartone: catone,
      carttwo: carttwo,
      cartthree: cartthree,
      description: description,
      count: count,
      category: categoryMapping[category]
    });
    await keyboard.save();
    res.status(200).json({ message: "product added" });
    console.log(keyboard)
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to" });
  }
});

//delete product
router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { category } = req.query;
  try {
   
    await mongoose.connect(`${process.env.CONNECTION}/categories`);
    console.log("db connected");
     const categoryMapping = {
      0: "guitar",
      1: "keyboard"
    };
    const deleteProduct = await Keyboard.findOneAndDelete({
      _id,
      category: categoryMapping[category]
    });
    if (deleteProduct) {
      res.status(200).json({ message: "product deleted" });
    } else {
      res.status(400).json({ error: "product not found" });
    }

    mongoose.disconnect();

  } catch (error) {
      console.log(error)
      res.status(500).json({ error: "failed to delete product" });
  }
});

module.exports = router;
