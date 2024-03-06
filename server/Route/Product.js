const express = require("express");
const app = express();
const Product = require("../Schema/productSchema");
const Keyboard = require("../Schema/keyboardSchema");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../Schema/userSchema");

//fetch
router.get("/moreproducts", async (req, res) => {
  try {
    await mongoose.connect(`${process.env.CONNECTION}/categories`);
    console.log("db connected");

    const product = await Keyboard.find();
    console.log(product);
    res.status(200).json({ ...product });
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to" });
  }
});

//fetchsingle
router.get('/:_id',async (req,res)=>{
  try {
    await mongoose.connect(`${process.env.CONNECTION}/categories`);
    console.log("db connected");

    const {_id} = req.params;
    const product = await Keyboard.findById({_id})
    res.status(200).json({ message:"product", product});
    console.log(product);
    mongoose.disconnect();

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "failed to" });
  }
} )

//add product
router.post("/:_id", async (req, res) => {
  try {
    await mongoose.connect(`${process.env.CONNECTION}/categories`);
    console.log("db connected");

    const {
      _id,
      title,
      rating,
      price,
      image,
      cartone,
      carttwo,
      cartthree,
      description,
      count,
      category,
    } = req.body;

    const categoryMapping = {
      0: "guitar",
      1: "keyboard",
    };

    const keyboard = new Keyboard({
      _id: _id,
      title: title,
      rating: rating,
      price: price,
      image: image,
      cartone: cartone,
      carttwo: carttwo,
      cartthree: cartthree,
      description: description,
      count: count,
      category: categoryMapping[category],
    });
    await keyboard.save();
    res.status(200).json({ message: "product added" });
    console.log(keyboard);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to" });
  }
});

// Update product
router.put("/:_id", async (req, res) => {
  const { _id } = req.params;

  try {
    await mongoose.connect(`${process.env.CONNECTION}/categories`);
    console.log("db connected");

    const {
      title,
      rating,
      price,
      image,
      cartone,
      carttwo,
      cartthree,
      description,
      count,
      category,
    } = req.body;

    const categoryMapping = {
      0: "guitar",
      1: "keyboard",
    };

    const updatedProduct = await Keyboard.findByIdAndUpdate(
      _id,
      {
        title,
        rating,
        price,
        image,
        cartone,
        carttwo,
        cartthree,
        description,
        count,
        category: categoryMapping[category],
      },
      { new: true }
    );

    if (updatedProduct) {
      res.status(200).json({ message: "product updated", updatedProduct });
    } else {
      res.status(404).json({ error: "product not found" });
    }

    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to update product" });
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
      1: "keyboard",
    };
    const deleteProduct = await Keyboard.findOneAndDelete({
      _id,
      category: categoryMapping[category],
    });
    if (deleteProduct) {
      res.status(200).json({ message: "product deleted" });
      console.log("product deleted")
    } else {
      res.status(400).json({ error: "product not found" });
      console.log("cant delete")
    }

    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete product" });
  }
});

module.exports = router;
