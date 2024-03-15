const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { error } = require("console");
const User = require("../Schema/userSchema");
const mongoose = require("mongoose");
const { Types } = require("mongoose");
//order route

router.post("/orders", async (req, res) => {
  try {
    const { amount } = req.body;
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_API_SECRET,
    });

    const options = {
      amount: amount * 100, 
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    res
      .status(200)
      .json({ success: true, message: "order created", order, amount });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error order", error });
  }
});

//verify payment
router.post("/verify", async (req, res) => {
    try {
      await mongoose.connect(`${process.env.CONNECTION}`);
      console.log("db connected");
  
      
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
      const { amount, email, userOrder } = req.body;
  
      const body = `${razorpay_order_id}|${razorpay_payment_id}`;
      
     
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex");
  
     
      const isSignatureValid = expectedSignature === razorpay_signature;
  
      
      if (isSignatureValid) {
        const user = await User.findOne({ email: email });
        if (!user) {
          res.status(400).json({ message: "no user" });
        } else {
         
          const newOrder = {
            orderList: userOrder,
            payment: {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              amount,
            },
          };
  
        user.orders.push(newOrder);
  
         
          await user.save();
  
          res.status(200).json({
            success: true,
            message: "Payment verified and order placed successfully",
          });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "Error in verification of payment",
        });
      }
  
     await mongoose.disconnect();
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });



  //second
  //router.post("/verify", async (req, res) => {
    //   try {
    //       await mongoose.connect(`${process.env.CONNECTION}`);
    //       console.log("Database connected");
    
    //       const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    //       const { amount, email, userOrder } = req.body;
    
    //       const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    
    //       const expectedSignature = crypto
    //           .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    //           .update(body.toString())
    //           .digest("hex");
    
    //       const isSignatureValid = expectedSignature === razorpay_signature;
    
    //       if (isSignatureValid) {
    //           const user = await User.findOne({ email: email });
    //           if (!user) {
    //               res.status(400).json({ message: "no user" });
    //           } else {
    //               const newOrder = {
    //                   orderList: userOrder,
    //                   payment: {
    //                       razorpay_order_id,
    //                       razorpay_payment_id,
    //                       razorpay_signature,
    //                       amount,
    //                   },
    //               };
    
    //               // Create a new Order instance and push the new order
    //               const order = new Order(newOrder);
    //               user.orders.push(order);
    
    //               await user.save();
    
    //               res.status(200).json({
    //                   success: true,
    //                   message: "Payment verified and order placed successfully",
    //               });
    //           }
    //       } else {
    //           res.status(400).json({
    //               success: false,
    //               message: "Error in verification of payment",
    //           });
    //       }
    
    //       mongoose.disconnect();
    //   } catch (error) {
    //       console.error(error);
    //       res.status(500).json({
    //           success: false,
    //           message: "Internal server error",
    //       });
    //   }
    // });




  
  
  
module.exports = router;
