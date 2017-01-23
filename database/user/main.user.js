"use strict";
let mysql = require('mysql'),
    settingsDB = require("../setting.database"),
    middleware = require("./middleware.user");

let pool = mysql.createPool({
    host            : settingsDB.host,
    user            : settingsDB.user,
    password        : settingsDB.password,
    database        : settingsDB.database
});

module.exports = {
    Auth:middleware.Auth(pool),
    Reg:middleware.Reg(pool)
};