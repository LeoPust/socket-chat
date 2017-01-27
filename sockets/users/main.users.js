"use strict";
let DB = require("../../database/main.database");

module.exports = socket => {
    socket.on("user::authorization",(data,callback) => {
        data = JSON.parse(data);

        DB.User.Auth(data)
            .then(result => {
                socket._user = {};
                socket._user.id = result.id;
                socket._user.token = result.token;
                socket._user.expires = result.expires;
                callback(JSON.stringify({error:null,status:200,token:result.token}))
            })
            .catch(err => callback(JSON.stringify({error:true,status:401,token:null})));
    });

    socket.on("user::registration",(data,callback) => {
        data = JSON.parse(data);

        DB.User.Reg(data)
            .then(result => callback(JSON.stringify({error:null,status:200})))
            .catch(err => callback(JSON.stringify({error:true,status:400})));
    });

    socket.on("user::token",(data,callback) => {
       data = JSON.parse(data);

        DB.User.Token(data.token)
            .then(result => {
                socket._user = {};
                socket._user.id = result.id;
                socket._user.token = result.token;
                socket._user.expires = result.expires;
                callback(JSON.stringify({error:null,status:200}))
            })
            .catch(err => {
                console.log(err);
                callback(JSON.stringify({error:true,status:401}))
            });
    });

    socket.on("user::profile",(data,callback) => {
        DB.User.Profile(socket._user.token)
            .then(result => callback(JSON.stringify({error:null,status:200,profile:result})))
            .catch(err => callback(JSON.stringify({error:true,status:400})));
    })
};
