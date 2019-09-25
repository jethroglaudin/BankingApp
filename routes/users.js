const express = require("express");
const router = express.Router();

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
    
})
module.exports = router;
