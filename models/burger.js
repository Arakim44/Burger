// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var model = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        })
    },

    updateOne: function(burgerID, cb) {
        orm.updateOne(burgerID, function(res) {
            cb(res);
        })
    },

    insertOne: function(newBurger, cb) {
        orm.insertOne(newBurger, function(res) {
            cb(res);
        })
    }
}


module.exports = model;
