var express = require("express");
var app = express();
var path = require("path");
var orm = require("../config/orm.js");

var router = express.Router();

var gymbuddy = require("../models/gymbuddy.js");
var members = require("../models/members.js");


// /************* ROUTE TO HOMEPAGE  ***************/
// app.get("/", function (req, res) {
//     res.send(path.join(__dirname + "/public/index.html"));
// });

// /************* ROUTE TO SURVEY  ***************/
// router.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname + "/views/html/survey.html"));
// });

// /************* ROUTE TO list of members  ***************/
// router.get("/api/members", function (req, res) {
//     // res.sendFile(path.join(__dirname + "/models/gymbuddy.js"));
//     orm.all(function (data) {
//         var memberObject = {
//             members: data
//         };
//         console.log(memberObject);
//         res.json(memberObject);
//     });
// });

// router.post("/api/newmembers", function(req, res) {
//     members.create([
//         "user_Fname", "user_Lname", "user_email", "user_password"
//     ], function(result) {
//         // Send back the ID of the new member
//         res.json({ id: result-insertId });
//     }
//     )
// })




module.exports = router;