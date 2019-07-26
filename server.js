
//Dependencies 
var express = require("express");
// var exphbs = require("express-handlebars");
var routes = require("./controllers/apiRoutes.js");
var app = express();



//PORT
var PORT = process.env.PORT || 8081;


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public 
app.use(express.static("public"));

//Handlebars
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

//Routes
app.use(routes);
//Listened app
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening");
});
