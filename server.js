var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3000;

var app = express();

//Serve static content for the app from the "public" directory in the application directory.

app.use(express.static(__dirname +"/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

//Override with Post having ?_mehode=DELETE
app.use(methodOverride("_method"));

//Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
