//import MySQL connection
var connection = require("./connection.js");

function printQuestionMarks(num){
  var arr = [];

  for (var i = 0; i < num; i ++){
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob){
  var arr = [];
  for (var key in ob){
    arr.push(key + "="+ ob[key]);
  }
}

var orm = {
    selectAll: function(tableInput,cb) {
        connection.query("SELECT * FROM"+tableInput+";", function(err, result) {
            if (err){
               throw err;
             }
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE" + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      consol.log(queryString);
      connection.query(queryString, function(err, result){
        if (err){
          throw err;
        }
        cb(result)
      });
        // connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [burgerID], function(err, data) {
        //     if (err) throw err;
        //     cb(data);
        // });
    },

    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO" + table;

      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString +=") ";

      console.log(queryString);

      connection.query(queryString, vals, function(err, result){
        if (err){
          throw err;
        }
        cb(result);
      });

        // connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurger], function(err, data) {
        //     if (err) throw err;
        //     cb(data);
        // });
    }

};



// Export the orm object for the model (burger.js)
module.exports = orm;
