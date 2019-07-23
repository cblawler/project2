require("dotenv").config();


var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB_NAME
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected on MYSQL');
});