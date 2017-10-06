var Users=require('../models/users');
var jsonWebToken = require('jsonwebtoken');
module.exports.create = function(request,response){
var user = new Users({
  name:request.body.name,
  password:request.body.password
});
user.save();
response.send("registered");
};
module.exports.getLogin = function(request,response){
response.render("login");
};
module.exports.register = function(request,response){
response.render("signup");
};
module.exports.login = function(request,response){
  Users.find({name:request.body.name,password:request.body.password},function(err, result) {
      if (err) throw err;
      if(result.length>0)
      {
        var token = jsonWebToken.sign({name:request.body.name,password:request.body.password},"pulkit",{
          expiresIn: 144000 // expires in 24 hours
        });
        response.cookie('auth',token);
        response.send('ok');
      }
      else {
      response.send("invalid name or password");
      }
    });
  };
