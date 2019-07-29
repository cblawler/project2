var connection = require("./connection.js");


function printQuestionMarks(num) {
    var arr =[];

    for (var i=0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};



var orm = {
    all: function (cb) {
        connection.query("SELECT * FROM members", function (error, results) {
            if (error) throw error;
            cb(results);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};




module.exports = orm;
