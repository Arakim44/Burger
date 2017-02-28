var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use it's database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res){
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgers_data: data });
    });
});

router.post("/burgers/create", function(req, res) {
    burger.insertOne(req.body.burger_name, function(result) {

      console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/update", function(req, res) {
    burger.updateOne(req.body.burger_id, function(result) {
      console.log(result);
        res.redirect("/");
    });
});
//


//Export foutes for server.js to use
module.exports = router;
