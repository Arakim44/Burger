var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use it's database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", {
            burgers: data
        })
    });
});

router.post("/create", function(req, res) {
    burger.insertOne(req.body.newBurger, function() {
        res.redirect("/");
    });
});

router.put("/update/:id", function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect("/");
    });
});
//


//Export foutes for server.js to use
module.exports = router;
