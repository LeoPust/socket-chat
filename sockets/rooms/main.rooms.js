"use strict";
let DB = require("../../database/main.database");

module.exports = (server,socket) => {
    socket.on("room::users",(data,callback) => {
        DB.Rooms.getUsers(socket._user.token)
            .then(list => {
                for(var i in list){
                    list[i].status = 'offline';
                    for(var j in server.sockets.connected){
                        if(list[i].id == server.sockets.connected[j]._user.id){
                            list[i].status = 'online';
                        }
                    }
                }
                console.log(list);
                return callback(JSON.stringify({error:null,status:200,users:list}));
            })
            .catch(err => callback(JSON.stringify({error:true,status:400})));
    });
};
