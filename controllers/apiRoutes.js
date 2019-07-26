var express = require("express");
var app = express();
var path = require("path");

var router = express.Router();

var gymbuddy = require("../models/gymbuddy.js");


router.get("/", function (req, res) {
    gymbuddy.getAll(function (results) {
        // res.render("index", { gymbuddy: results });
    })
    //     connection.query('SELECT * FROM users', function (error, results, fields) {
    //   if (error) throw error;
    //   res.render("index",{gymbuddy:results});
    // });
    // res.render("index")
});
router.get("/contact", function (req, res) {
    // res.render("contact")
});


router.get("/survey", function(req, res) {
    // res.render("survey");
});


module.exports = router;