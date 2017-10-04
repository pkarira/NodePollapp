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
module.exports.login = function(request,response){
  Users.find({name:request.body.name,password:request.body.password},function(err, result) {
      if (err) throw err;
      if(result.length>0)
      {
        var token = jsonWebToken.sign({name:request.body.name,password:request.body.password},"pulkit",{
          expiresIn: 144000 // expires in 24 hours
        });
        response.send(token);
      }
      else {
      response.send("invalid name or password");
      }
    });
  };
