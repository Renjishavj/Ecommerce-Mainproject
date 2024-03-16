const mongoose=require("mongoose")

const categorySchema=mongoose.Schema({
   
    category:{type:String,required:true},
    image:{type:String},
    
    
})
module.exports= categorySchema