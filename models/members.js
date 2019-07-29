var orm = require("../config/orm.js");

var members = {
    all: function(cb) {
        orm.all("members", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("members", cols, vals, function(res) {
            cb(res);
        })
    }
}

module.exports = members;