//import mongoose 
const mongoose = require('mongoose');
const { stringify } = require('querystring');

// define handler 

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true,
    trim:true,
   },
   email:{
    type:String,
    required:true,
    trim:true,
   },
   password:{
    type:String,
    required:true,
   },
   role:{
    type:String,
    enum:["Admin", "Student", "Visitor"]
   }
});

//module excports 

module.exports = mongoose.model('User', userSchema);