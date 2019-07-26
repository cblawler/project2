var orm = require("../config/orm.js")

var gymbuddy = {
    getAll: function (cb) {
        orm.getAll("members", function (results) {
            cb(results)
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("members", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("members", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("members", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller apiRoutes.js
module.exports = gymbuddy;
