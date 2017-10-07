//var url = "mongodb://127.0.0.1:27017/pulkit";
var options = { server: { socketOptions: { keepAlive: 1 } } };
var env = process.env.NODE_ENV || 'development';
var config = require("../../config")[env];
var url = config.database.url;
var mongoose=require('mongoose');
// var options = {
//   user: 'pulkit',
//   pass: 'pulkit'
// }
mongoose.connect(url,options);
mongoose.connection.once("open", function(ref) {
  console.log("Connected to mongo server.");
}).on("error", function(err) {
  console.log("Could not connect to mongo server!");
});
