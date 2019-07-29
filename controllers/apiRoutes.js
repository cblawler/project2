var express = require("express");
// var app = express();
// var path = require("path");

var router = express.Router();

var gymbuddy = require("../models/gymbuddy.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {

    gymbuddy.all(function (data) {
        var hbsObject = {
            members: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/members", function (req, res) {
    member.create([
        "firstName", "lastName", "email", "password"
    ], [
            req.body.firstName, req.body.lastName, req.body.email, req.body.password
        ], function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
});

router.put("/api/members/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    member.update({
        cardio: req.body.cardio,
        strength: req.body.strength,
        yoga: req.body.yoga,
        morning: req.body.morning,
        midday: req.body.midday,
        night: req.body.night
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

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

router.delete("/api/members/:id", function (req, res) {
    var condition = "id = " + req.params.id;


    member.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

router.get("/survey", function(req, res) {
    // res.render("survey");

});
});

// Export routes for server.js to use.
module.exports = router;


// THE FOLLOWING IS PREVIOUS CODE
// router.get("/", function (req, res) {
//     gymbuddy.getAll(function (results) {
//         res.render("index", { gymbuddy: results });
//     })
//     //     connection.query('SELECT * FROM users', function (error, results, fields) {
//     //   if (error) throw error;
//     //   res.render("index",{gymbuddy:results});
//     // });
//     // res.render("index")
// });
// router.get("/contact", function (req, res) {
//     res.render("contact")
// });


// router.get("/survey", function(req, res) {
//     res.render("survey");
// });


// module.exports = router;
