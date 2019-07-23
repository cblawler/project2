var orm = require("../config/orm.js")

var gymbuddy = {
    getAll: function (cb) {
        orm.getAll("users", function (results) {
            cb(results)
        })
    }
}
module.exports = gymbuddy;