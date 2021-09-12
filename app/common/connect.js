var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'deimostran',
    database: 'sns_spring'
});

connection.connect(function (err) {
    if (err) console.log("mysql connection is failed")
});

module.exports = connection;