const jwt = require('jsonwebtoken');
require('dotenv').config();



exports.auth = (req, res, next) => {
    try{

    //   const token = req.cookies.token
      const token = req.body.token;
      if(!token)
      {
        return res.status(401).json({
          success:false,
          message: "Missing token",
        });
      }
    //   verify the token 
        try{
            const decode = jwt.verify(token, process.env.JWT_SSECRET);
            // console.log(decode);
            req.user = decode;

        } catch(error){
            return res.status(401).json({
                 success:false,
                 message:"Token is not valid",
            });
        }
        next();

    } catch(error){
      return res.status(401).json({
           success:false,
           message:"Somthing wrnt wrong while verifying the token",
      });
    }
}

exports.isStudent = (req, res, next) => {
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
              success: false,
              message:"This is the protected routes for student",
            });
        }

    } catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching",
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(401).json({
              success: false,
              message:"This is the protected routes for Admin",
            });
        }

    } catch(error){
        return res.status(500).json({
            success:false,
            message:"User role is not matching",
        })
    }
}