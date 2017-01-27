"use strict";
let mysql = require('mysql'),
    settingsDB = require("../setting.database"),
    middleware = require("./middleware.rooms");

let pool = mysql.createPool({
    host            : settingsDB.host,
    user            : settingsDB.user,
    password        : settingsDB.password,
    database        : settingsDB.database
});

module.exports = {
  getUsers:middleware.getUsers(pool)
};