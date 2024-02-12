const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require('cors');

app.use(cors());


const registerRoute = require("./Route/register"); 

mongoose.connect(process.env.CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log("db not connected")
    console.log(err) 
})

app.use(express.json()); 
app.use("/route", registerRoute);

app.listen(3300,()=>{
    console.log("Server is running on port 3300")
});