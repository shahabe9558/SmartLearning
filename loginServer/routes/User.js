const express = require("express");
const router = express.Router();

const {signup, login} = require("../controllers/Auth");
//
// routes handler for middleware 
const {auth, isStudent, isAdmin} = require('../middleware/auth');

router.post("/signup",signup);

router.post('/login', login);


// asddding the middleware for testing (authentication and authorization)
router.get('/test', auth, (req, res) => {
    res.json({
         success: true,
         message: "Welcome to protected route for testing",
    });

});

// auth is used for authentication, isStudent, isAdmin is used for authorization
router.get('/student', auth, isStudent, (req, res) => {
  res.json({
     success: true,
     message:"Welcome to the protected routes for student",
  });
});

router.get('/admin', auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message:"Welcome to the protected route for admin",
  });
});

module.exports = router;