var Users=require('../models/users');
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
        result[0].name="pulkit";
        result.save(function (err) {
   // embedded comment with id `my_id` removed!
});
        loggedIn=true;
        response.send("logged in");
      }
      else {
      response.send("invalid name or password");
      }
    });
  };
