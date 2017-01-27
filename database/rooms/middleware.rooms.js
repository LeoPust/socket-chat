"use strict";
let settings = require("./setting.rooms");

module.exports = {
  getUsers:getUsers
};

function getUsers(pool){
    return (token,limit,offset) => {
      return new Promise((resolve,reject) => {
          pool.query(settings.getUsers,[token,null,null],(err,rows) => {
              if(err)return reject(false);

              resolve(rows[0]);
          });
      });
    };
}
