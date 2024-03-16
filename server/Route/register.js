const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Schema/userSchema");
const Keyboard = require("../Schema/keyboardSchema");
const dbManager = require('../connectionManager')
const nodeMailer = require("nodemailer");
const sendMail = require("../NodeMailer/sendMail");
const router = express.Router();
const Order=require("../Schema/OrderShema")

app.use(express.json());

try {
  router.post("/register", async (req, res) => {
    try {
      // const connection = dbManager.getConnection('main')
      const {models:{users:User}}=dbManager.getConnection('main')
      console.log("db connected");
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
      const connection = dbManager.getConnection('main')
      console.log("db connected");

      const { email, password } = req.body;
      let user = await connection.model('users').findOne({ email: email });

      if (!user) {
        //console.log(user)
        return res.status(401).json({ error: "Login failed" });
      } else if (user.blocked) {
        return res.status(401).json({ error: "This account is blocked" });
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
      const connection = dbManager.getConnection('main')
      console.log("db connected");
      const otp = Math.floor(Math.random() * 100000);
      const { email } = req.body;
      const user = await connection.model('users').findOneAndUpdate(
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
     // const connection = dbManager.getConnection('main')
     const {models:{users:User}}=dbManager.getConnection('main')
      console.log("db connected");
      const { email, otp } = req.body;
      // console.log("Password:", email);
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ error: "user not found" });
      }
      console.log(user.otp, otp);
      if (parseInt(otp) === parseInt(user.otp)) {
        return res.status(200).json({ message: "reset Verified" });
      }
    } catch (error) {}
  });

  //updatepassword

  router.post("/updatePassword", async (req, res) => {
    console.log("running");
    try {
      const connection = dbManager.getConnection('main')
      console.log("db connected");
      const { email, password } = req.body;

      const updatepassword = await bcrypt.hash(password, 10);
      console.log("Hashed Password:", updatepassword);
      const user = await connection.model('users').findOneAndUpdate(
        { email: email },
        { password: updatepassword }
      );
      console.log(user);
      if (user) {
        res.status(200).json({ message: "Password updated successfully" });
      } else {
        res.status(401).json({ error: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Something went wrong" });
    }
  });

  //add to cart
  router.post("/cart", async (req, res) => {
    
    try {
      let connection = dbManager.getConnection('main')
      console.log("db connected");
      const { email, _id, quantity } = req.body;
      const user = await connection.model('users').findOne({ email: email })
      console.log(user);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const existingCartItem = user.cart.find((item) => item._id.equals(_id));
      if (existingCartItem) {
        existingCartItem.quantity += quantity || 1;
      } else {
        user.cart.push({
          productId: _id,
          quantity: quantity || 1,
        });
      }
      await user.save();
      res
        .status(200)
        .json({ message: "Product added to cart successfully", user: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
      console.log(error);
    } 
  });

  //cartpage
  router.get("/:email/cart", async (req, res) => {
  
    try {
      let connection = await dbManager.getConnection('main')
      console.log("Db connectedfor cart ");
      const { email } = req.params;
      const user = await connection.model('users').findOne({ email: email });
      if (!user) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }
      console.log("User found");
      const { arrayToFind, quantityArray } = await getUserProducts(user.cart);
     connection = dbManager.getConnection('categories')
      let product = await connection.model('keyboards').find({ _id: { $in: arrayToFind } });
      const p = product.map((val, index) => {
        return { ...val._doc, quantity: quantityArray[index] };
      });
      res.status(200).json(p);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Something went wrong", details: error.message });
    }
  });

  //delete from cart
  router.delete("/:productId/cart/delete", async (req, res) => {
   
    try {
      const connection = dbManager.getConnection('main')
      console.log("Database connected");

      const { productId } = req.params;
      const { email } = req.body;
      console.log(email, productId);
      const user = await connection.model('users').findOne({ email });

      if (!user) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }
      const indexToRemove = user.cart.findIndex(
        (item) => item.productId == productId
      );

      if (indexToRemove === -1) {
        console.log(indexToRemove);
        console.log("Product not found in the cart");
        return res
          .status(404)
          .json({ error: "Product not found in the cart??" });
      }
      user.cart.splice(indexToRemove, 1);

      await user.save();
      console.log("Product removed from cart");
      res.status(200).json({
        message: "Product removed from cart successfully",
        user: user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    } 
  });

  // add address
  router.post("/addaddress", async (req, res) => {
   
    try {
      let connection = dbManager.getConnection('main')
      console.log("db connected");

      const { email, contactName, mobile, street, city, zipCode } = req.body;
      const user = await connection.model('users').findOne({ email: email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const address = {
        contactName,
        mobile,
        street,
        city,
        zipCode,
      };
      user.addresses.push(address);
      await user.save();

      res
        .status(200)
        .json({ message: "Address added successfully", user: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });

  //fetch address
  router.get("/fetchaddress/:email", async (req, res) => {
   
    try {
      let connection = dbManager.getConnection('main')
      console.log("DB connected");

      const { email } = req.params;
      const user = await connection.model('users').findOne({ email: email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const addresses = user.addresses;
      res.status(200).json({ addresses: addresses });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  //fetch all users

  router.get("/allusers", async (req, res) => {
   
    try {
      // let connection = dbManager.getConnection('main')
      const {models:{users:User}}=dbManager.getConnection('main')
      console.log("DB connected");

      // const users = await connection.models('users').find();
      const users = await User.find();
      if (!users || users.length === 0) {
        return res.status(404).json({ error: "No users found" });
      }

      res.status(200).json({ users: users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    } 
  });

  //delete user

  router.delete("/deleteuser/:email", async (req, res) => {
    
    try {
      let connection = dbManager.getConnection('main')
      console.log("Database connected");

      const { email } = req.params;
      const user = await connection.model('users').findOneAndDelete({ email: email });

      if (!user) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }

      console.log("User deleted successfully");
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    } 
  });

  // Block user
  router.put("/blockuser/:email", async (req, res) => {
   
    try {
      const connection = dbManager.getConnection('main')
      console.log("Database connected");

      const { email } = req.params;
      const user = await connection.model('users').findOneAndUpdate(
        { email: email },
        { blocked: true }
      );

      if (!user) {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }

      console.log("User blocked successfully");
      res.status(200).json({ message: "User blocked successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    } 
  });

  // Get user details by email
  router.get("/user/:email", async (req, res) => {
   
    try {
      const connection = dbManager.getConnection('main')
      console.log("DB connected");

      const { email } = req.params;
      const user = await connection.model('users').findOne({ email: email });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({ user: user });

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  });

  //fetch orders
  router.get("/orders", async (req, res) => {
   
    try {
      const {models:{orders:Order}}=dbManager.getConnection('main')
      console.log("DB connected");
      
      const orders = await Order.find();
      res.status(200).json({ orders: orders });
      //console.log(orders)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
   
  });

  const getUserProducts = async (arrayToMap) => {
    let arrayToFind = [];
    let quantityArray = [];
    Object.values(arrayToMap).forEach(({ productId, quantity }) => {
      arrayToFind.push(parseInt(productId));
      quantityArray.push(quantity);
    });
    return { arrayToFind: arrayToFind, quantityArray: quantityArray };
  };
} catch (er) {
  console.log("error in register Route", er);
}

module.exports = router;
