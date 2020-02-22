let connection = require('./connection');

let orm = {
    selectAll: function(tableName, cb) {
        connection.query(`select * from ${tableName};`, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(tableName, attribute, value, cb) {
        connection.query(`insert into ${tableName} (${attribute}) values ('${value}');`, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(tableName, attribute, value, condition, cb) {
        connection.query(`update ${tableName} set ${attribute} = ${value} where ${condition}`, function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
}

module.exports = orm;