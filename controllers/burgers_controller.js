var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use it's database functions.
var burger = require("../models/burger.js");

module.exports = router;
