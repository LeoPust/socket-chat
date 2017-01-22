"use strict";
let settings = require("./setting.user");

module.exports = {
  Auth:Auth
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
