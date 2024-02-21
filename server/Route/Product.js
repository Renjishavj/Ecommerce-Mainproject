const express = require("express");
const app = express();
const Product=require("../Schema/productSchema")
const router = express.Router();

router.get("/:productId", async (req, res) => {
    const productId=req.params.productId;
     const product = await Product.findById(productId);
     console.log(product);
     res.status(200).json(product);
    
   
}) 
module.exports=router