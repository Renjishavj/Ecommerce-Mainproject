const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    phone:{type:String,required:true},
    password:{type:String,required:true},
    otp:{type:Number}
})

module.exports=mongoose.model("USER",userSchema)