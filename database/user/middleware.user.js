"use strict";
let settings = require("./setting.user");

module.exports = {
    Auth:Auth,
    Reg:Reg
};

function Auth(pool){
    return data => {
      return new Promise((resolve,reject) => {
        pool.query(settings.Auth,[data.login,data.password],(err,rows) => {
            if(err || !rows[0][0].status)return reject(false);

            resolve(rows[0][0]);
        });
      });
    };
}

function Reg(pool){
    return data => {
        return new Promise((resolve,reject) => {
           pool.query(settings.Reg,[
               data.login,
               data.password,
               data.email,
               data.first_name,
               data.last_name
           ],(err,rows) => {
               if(err || !rows[0][0].status)return reject(false);

               resolve(true);
           });
        });
    }
}