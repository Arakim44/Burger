// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var model = {
    selectAll: function(cb) {
        orm.selectAll("burgers",function(res) {
            cb(res);
        });
    },

    updateOne: function(burgerID, cb) {
      var condition = "id ="+ burgerID;
      orm.updateOne("burgers",{
        devoured: true
      }, condition, cb);

    },

    insertOne: function(name, cb) {
        orm.insertOne("burgers",[
          "burger_name", "devoured"
        ], [
          name, false
        ], cb);
    }
}


module.exports = model;
