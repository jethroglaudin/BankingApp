const express = require("express");
const router = express.Router();

// Load the User Model Schema
const User = require("../models/User");

// @route GET
// @desc Test Route 
// Access:

router.get('/test', (req, res) => {
    res.json({msg: "Route is working"});
})

module.exports = router;