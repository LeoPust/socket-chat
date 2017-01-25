"use strict";
let settings = require("./setting.user");

module.exports = {
    Auth:Auth,
    Reg:Reg,
    Token:Token,
    Profile:Profile
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

function Token(pool){
    return token => {
        return new Promise((resolve,reject) => {
            pool.query(settings.Token,[token],(err,rows) => {
                if(err)return reject(false);

                resolve(rows[0][0]);
            });
        });
    }
}

function Profile(pool){
    return token => {
        return new Promise((resolve,reject) => {
            pool.query(settings.Profile,[token],(err,rows) => {
                if(err)return reject(false);

                resolve(rows[0][0]);
            });
        });
    }
}