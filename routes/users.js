const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
// Load the User Model Schema
const User = require("../models/User");

// @route GET api/users/test
// @desc Test Route
// Access: Public
router.get("/test", (req, res) => {
  res.json({ msg: "Route is working" });
});


// @route POST api/users/register
// @desc Register
// Public

router.post("/register", (req, res) => {
    
  // Find User to check if it's already in Database
  User.find({ email: req.body.email }).then(user => {
    if(user){
      return res.status(400).json({"message": "User already exists" })
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save().then(user => res.json(user))
  })
})
module.exports = router;
