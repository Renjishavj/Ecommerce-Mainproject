const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    _id:{type:String,required:true,unique:true},
    title:{type:String,required:true},
    rating:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String},
    cartone:{type:String},
    carttwo:{type:String},
    cartthree:{type:String},
    description:{type:String}
})

module.exports=mongoose.model("PRODUCT",productSchema)