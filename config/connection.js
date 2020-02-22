const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'burgers_db'
});

connection.connect(function(err) {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    } else {
        console.log(`connected as id ${connection.threadId}`);
    }
});

module.exports = connection;