// console.log("in controllers");
// var database = require('../models/database');
var Users=require('../models/users');
module.exports.create = function(request,response){
// var db = database.getDb();
// db.collection("users").insert(request.body);
var user = new Users({
  name:request.body.name,
  password:request.body.password,
})
user.save();
response.send("registered");
};
module.exports.login = function(request,response){
  var db = database.getDb();
  //db.collection("users").
  Users.find({name:request.body.name,password:request.body.password},function(err, result) {
      if (err) throw err;
      if(result.length>0)
      {
        loggedIn=true;
        response.send("logged in");
      }
      else {
      response.send("invalid name or password");
      }
    });
  };
