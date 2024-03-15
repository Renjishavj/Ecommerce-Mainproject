const mongoose=require("mongoose")

const orderSchema=mongoose.Schema({
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
         
        },
      ],
})

module.exports=mongoose.model("order",orderSchema)