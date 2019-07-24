var connection = require("./connection.js")

var orm = {
    getAll: function (tableName, cb) {
        connection.query('SELECT * FROM ' + tableName, function (error, results, fields) {
            if (error) throw error;
            cb(results)
        });
    }
}

module.exports = orm;
