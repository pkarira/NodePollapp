var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
app.listen(8080,'127.0.0.1');
app.get('/home',function(request,response)
{
response.send("successful");
});
app.post('polls/register',jsonParser,function(request,response)
{
response.send(request.body);
});
app.post('polls/login',jsonParser,function(request,response)
{
response.send(request.body);
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
