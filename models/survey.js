var survey = require("../views/html/survey.js");

// Wrote this in console on survey.html and it gave the selected values of each question
var question1 = $("#workout").val();
var question2 = $("#skill").val();
var question3 = $("#workoutTime").val();

$("#submit").on("click", function() {
    console.log(question1);
})
