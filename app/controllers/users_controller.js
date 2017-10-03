var database = require('../models/database');
module.exports.create = function(request,response){
var db = database.getDb();
db.collection("users").insert(request.body);
response.send("registered");
};
module.exports.login = function(req,res){
db.collection("users").insert(request.body);
};
