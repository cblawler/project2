var express = require("express");
var path = require("path");
var app = express();

//PORT
var PORT = process.env.PORT || 8080;


//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public 
app.use(express.static("public"));


//Routes
var routes = require("./controllers/apiRoutes.js");
app.use(routes);

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/html/survey.html"));
});
//Listened app
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on http://localhost:"+PORT);
});
