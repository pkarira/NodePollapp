var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var MongoClient = require('mongodb').MongoClient;
var users = require('../app/controllers/users_controller');
var loggedIn=false;
//sudo systemctl start mongodb
//sudo systemctl status mongodb
var url = "mongodb://127.0.0.1:27017/pulkit";
var database = require('../app/models/database');
database.connectToServer( function( err ) {
} );
app.listen(8081,'127.0.0.1');
app.get('/polls/home',function(request,response)
{
response.send("successful");
});
app.post('/polls/register',jsonParser,users.create);
app.post('/polls/login',jsonParser,function(request,response)
{
db.collection("users").find({name:request.body.name,password:request.body.password}).toArray(function(err, result) {
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
});
app.get('polls/questions',jsonParser,function(request,response)
{
response.send(request.body);
});
app.get('polls/add',jsonParser,function(request,response)
{
response.send(request.body);
});
app.get('polls/results',jsonParser,function(request,response)
{
response.send(request.body);
});
