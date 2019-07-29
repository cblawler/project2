//Dependencies 
var express = require("express");
// var exphbs = require("express-handlebars");
var routes = require("./controllers/apiRoutes.js");
var app = express();
var orm = require("./config/orm")
var path = require("path");


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
// app.use(routes);

/////////////// EVERYTHING BELOW NEEDS TO BE TRANSFERRED TO APIROUTES.JS ////////////////////

/************* ROUTE TO HOMEPAGE  ***************/
app.get("/", function (req, res) {
    res.send(path.join(__dirname + "/public/index.html"));
});

/************* ROUTE TO SURVEY  ***************/
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/html/survey.html"));
});

/************* ROUTE TO list of members  ***************/
app.get("/api/members", function (req, res) {
    // res.sendFile(path.join(__dirname + "/models/gymbuddy.js"));
    orm.all(function (data) {
        var memberObject = {
            members: data
        };
        console.log(memberObject);
        res.json(memberObject);
    });
});

/****************** POSTING NEW MEMBER ***************/
app.post("/signup", function (req, res) {

})



//Listened app
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening");
});
