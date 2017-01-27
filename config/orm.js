//import MySQL connection
var connection = require("../config/connection.js");

//Helper function for SQL syntax.
function objToSql(ob){
  var arr = [];

  for (var key in ob){
    if(Object.hasOwnProperty.call(ob.key)){
      arr.push(key + "="+ob[key]);
    }
  }
  return arr.toString();
}

//Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb){
    var queryString = "SELECT * FROM "+ tableInput + ";"; connection.query(queryString, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  }, create:function(table, cols, vals, cb){
    var queryString = "INSERT INTO" +table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
    // An example of objColVals would be {burger_name: cheese burger, devoured: true}
    update: function(table, objColVals, condition, cb){
      var queryString = "UPDATE" + table;

      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err,result){
        if (err){
          throw err;
        }
        cb(result);
      });
    }
};

//
//SELECTALL
// Export the orm object for the model (burger.js)
module.exports = orm;
