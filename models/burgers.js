let orm = require('../config/orm');

let burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function(res) {
            cb(res);
        });
    },
    updateOne: function(condition, cb) {
        orm.updateOne('burgers', 'devoured', true, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;