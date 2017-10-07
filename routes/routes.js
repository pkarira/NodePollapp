var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({extended:false});
var MongoClient = require('mongodb').MongoClient;
var loggedIn=false;
var users = require('../app/controllers/users_controller');
var questions = require('../app/controllers/question_controller');
var multer = require('multer');
var upload = multer({ dest: '../uploads' });
var env = process.env.NODE_ENV || 'development';
var config = require("../config")[env];
//sudo systemctl start mongodb
//sudo systemctl status mongodb
//mongo --port 27017 -u "raman" -p "raman" --authenticationDatabase "pulkit"
var url = "mongodb://127.0.0.1:27017/pulkit";
var database = require('../app/models/database');
var cookieParser= require('cookie-parser')
app.use(cookieParser())
// database.connectToServer( function( err ) {
// } );
app.set('view engine','ejs');
app.listen(config.server.port,config.server.host);
//app.use(multer({dest:'./uploads/'}).single('photo'));
app.get('/polls/home',questions.home);
app.post('/polls/register',urlParser,users.create);
app.post('/polls/login',urlParser,users.login);
app.get('/polls/login',users.getLogin);
app.get('/polls/register',users.register);
app.post('/polls/questions/add',jsonParser,questions.add);
app.post('/polls/addimage',upload.single('image'),questions.image);
app.get('/polls/questions/all',jsonParser,questions.getAll);
app.post('/polls/vote',jsonParser,questions.vote);
