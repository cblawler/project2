var connection = require("./connection.js")

var orm = {
    // getAll: function (tableName, cb) {
    //     connection.query('SELECT * FROM ' + tableName, function (error, results, fields) {
    //         if (error) throw error;
    //         cb(results);
    //     });
    // },
    getAll: function(tableName) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += 
    }
};




module.exports = orm;
