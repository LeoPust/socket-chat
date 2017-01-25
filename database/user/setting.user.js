module.exports = {
  Auth:"CALL `user::authorization`(?,?)",
  Reg:"CALL `user::registration`(?,?,?,?,?)",
  Token:"CALL `user::token`(?)",
  Profile:"CALL `user::profile`(?)"
};
