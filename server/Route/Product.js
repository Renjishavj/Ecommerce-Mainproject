const express = require("express");
const app = express();
const router = express.Router();
const dbManager = require("../connectionManager");
const mongoose = require("mongoose");

//fetch
router.get("/moreproducts", async (req, res) => {
  
 
  
  try {
    const {
      models: { keyboards },
    } = dbManager.getConnection("categories");
    const product = await keyboards.find();
    res.status(201).json({ ...product });
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to" });
  }
});

//fetchsingle
router.get("/:_id", async (req, res) => {
 
 
  try {
    parseInt;
    const {
      models: { keyboards: Keyboard },
    } = dbManager.getConnection("categories");
    console.log("db connected");
    const { _id } = req.params;
    const id = Number.parseInt(_id);
    const product = await Keyboard.findOne({ _id: id });
    res.status(200).json({ message: "product", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "failed to load product" });
  } 
});

//add product
router.post("/:_id", async (req, res) => {
 
  try {
    const {
      models: { keyboards: Keyboard },
    } = dbManager.getConnection("categories");
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
      _id: parseInt(_id),
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
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to" });
  } 
});

// Update product
router.put("/:_id", async (req, res) => {

  const { _id } = req.params;

  try {
    const {
      models: { keyboards: Keyboard },
    } = dbManager.getConnection("categories");
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

    const updateFields = {};
    if (title) updateFields.title = title;
    if (rating) updateFields.rating = rating;
    if (price) updateFields.price = price;
    if (image) updateFields.image = image;
    if (cartone) updateFields.cartone = cartone;
    if (carttwo) updateFields.carttwo = carttwo;
    if (cartthree) updateFields.cartthree = cartthree;
    if (description) updateFields.description = description;
    if (count) updateFields.count = count;
    if (category !== undefined)
      updateFields.category = categoryMapping[category];

    const updatedProduct = await Keyboard.findByIdAndUpdate(_id, updateFields, {
      new: true,
    });

    if (updatedProduct) {
      res.status(200).json({ message: "product updated", updatedProduct });
    } else {
      res.status(404).json({ error: "product not found" });
    }
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
    const {
      models: { keyboards: Keyboard },
    } = dbManager.getConnection("categories");
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
      console.log("product deleted");
    } else {
      res.status(400).json({ error: "product not found" });
      console.log("cant delete");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed to delete product" });
  } 
});

//add category
// router.post("/addcategory", async (req, res) => {
//   try {
//     await mongoose.connect(`${process.env.CONNECTION}/categories`);
//     console.log("db connected");

//     const { category, image } = req.body;

//     const newCategory = new Category({
//       category: category,
//       image: image,
//     });

//     await newCategory.save();
//     res.status(200).json({ message: "Category added" });
//     console.log(newCategory);
//     mongoose.disconnect();
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to add category" });
//   }
// });

module.exports = router;
