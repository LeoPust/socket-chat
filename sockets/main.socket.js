"use strict";
let Users = require("./users/main.users"),
    Rooms = require("./rooms/main.rooms");

module.exports = sockets => {
    sockets.on("connection",socket => {
        Users(socket);
        Rooms(sockets,socket);
    });
};
