var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var MongoClient = require('mongodb').MongoClient;
var loggedIn=false;
var users = require('../app/controllers/users_controller');
var questions = require('../app/controllers/question_controller');
var multer = require('multer');
var upload = multer({ dest: '../uploads' });
//sudo systemctl start mongodb
//sudo systemctl status mongodb
var url = "mongodb://127.0.0.1:27017/pulkit";
var database = require('../app/models/database');
// database.connectToServer( function( err ) {
// } );
app.set('view engine','ejs');
app.listen(8081,'127.0.0.1');
//app.use(multer({dest:'./uploads/'}).single('photo'));
app.get('/polls/home',questions.home);
app.post('/polls/register',jsonParser,users.create);
app.post('/polls/login',jsonParser,users.login);
app.get('/polls/login',jsonParser,users.getLogin);
app.post('/polls/questions/add',jsonParser,questions.add);
app.post('/polls/addimage',upload.single('image'),questions.image);
app.get('/polls/questions/all',jsonParser,questions.getAll);
app.post('/polls/vote',jsonParser,questions.vote);
