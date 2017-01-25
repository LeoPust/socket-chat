"use strict";
let Users = require("./users/main.users");

module.exports = sockets => {
    sockets.on("connection",socket => {
        Users(socket);
    });
};
