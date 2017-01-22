"use strict";
let DB = require("../database/main.database");

module.exports = sockets => {
    sockets.on("connection",socket => {
       socket.on("user::authorization",(data,callback) => {
            data = JSON.parse(data);
            DB.User.Auth(data)
                .then(data => {
                    socket._user = {};
                    socket._user.token = data.token;
                    socket._user.expires = data.expires;
                    callback(JSON.stringify({error:null,status:200,token:data.token}))
                })
                .then(err => callback(JSON.stringify({error:true,status:400,token:null})));
       });

    });
};
