const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    otp:{type:Number},
    cart: [{ 
        productId: { type:Number, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 },
        image: { type: String }, 
        price: { type: Number },
        title:{type:String}
    }]
})

module.exports=mongoose.model("USER",userSchema)