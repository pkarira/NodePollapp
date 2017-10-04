var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var MongoClient = require('mongodb').MongoClient;
var loggedIn=false;
var users = require('../app/controllers/users_controller');
var questions = require('../app/controllers/question_controller');
//sudo systemctl start mongodb
//sudo systemctl status mongodb
var url = "mongodb://127.0.0.1:27017/pulkit";
var database = require('../app/models/database');
// database.connectToServer( function( err ) {
// } );
app.listen(8081,'127.0.0.1');
app.get('/polls/home',function(request,response)
{
response.send("successful");
});
app.post('/polls/register',jsonParser,users.create);
app.post('/polls/login',jsonParser,users.login);
app.post('/polls/questions/add',jsonParser,questions.add);
app.get('/polls/questions/all',jsonParser,questions.getAll);
app.post('/polls/vote',jsonParser,questions.vote);
