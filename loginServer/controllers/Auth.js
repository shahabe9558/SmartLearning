const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
   try{
         // get data 
         const {name, email, password, role} = req.body;

         const exitingUser = await User.findOne({email});

         if(exitingUser)
         {
            return res.status(400)
            .json({
               success:false,
               message:"User already Exists",
            });
         }

            let hashedPassword;
            try{
               hashedPassword = await bcrypt.hash(password, 10);
            }
            catch(error){
               return res.status(500)
               .json({
                  success:false,
                  message:"Error in hashing password",
               });
            }
            // create entry for user if user not found in databe 
            
            const user = await User.create({
               name,email,password:hashedPassword,role

            })
            return res.status(200)
            .json({
               success:true,
               message:"User created successfully",
            });
      }
   catch(error){
     console.error(error);
     return res.status(500)
     .json({
      success:false,
      message:"User can not be registered, please try again later",
     });
   }
}


exports.login = async (req, res) => {
   try{
      // fetch email and password

      const {email, password} = req.body;
      // validation on email and pass 
      if(!email || !password)
      {
         return res.status(400)
         .json({
            success: false,
            message: "Please enter all the details to login",
         });
      }

      // cheking for register user 
      let user = await User.findOne({email});

      if(!user)
      {
         return res.status(401)
         .json({
           success: false,
           message: "User is not register",
         });
      }

      const payload = {
         email: user.email,
         id: user. _id,
         role: user.role,
      };
      // verify password and generate a jwt token

      if(await bcrypt.compare(password, user.password))
      {
         // password matched 
         let token = jwt.sign(payload, process.env.JWT_SSECRET,
            {
               expiresIn: "2h",
            });

            user = user.toObject();  // user ke andar token laane ke liye

          
            user.token = token;

            // console.log(user);
      
            user.password = undefined;

            // console.log(user);

            // cookie create arne ke liye 

            const options = {
               expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
               httpOnly: true,
            }

            res.cookie("hamarcookie", token, options).status(200).json({
               success:true,
               token,
               user,
               message:"User logged in successfully"
            });
      }
      else{
         // password do not match 
         return res.status(403)
         .json({
            success:false,
            message:"Password Incorrect",
         })
      }
   }
   catch(error){
     console.error(error);
     return res.status(500)
     .json({
       success: false,
       message:"User can not login please try again later",
     });
   }
}