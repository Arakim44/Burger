//import MySQL connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    updateOne: function(burgerID, cb) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function(newBurger, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, data) {
            if (err) throw err;
            cb(data);
        });
    }

}



// Export the orm object for the model (burger.js)
module.exports = orm;
