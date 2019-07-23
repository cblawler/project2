require("dotenv").config();


var mysql = require('mysql');

var config = {
    port: 3306,
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB_NAME
};
var connection;
var host;

if (process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
    host = 'JAWSDB';
} else {
    connection = mysql.createConnection(config);
    host = process.env.HOST_DB;
};

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: process.env.USER_DB,
//     password: process.env.PASS_DB,
//     database: process.env.DB_NAME
// });

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected on MYSQL');
});

module.exports = connection;