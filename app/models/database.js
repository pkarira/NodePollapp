var url = "mongodb://127.0.0.1:27017/pulkit";
var mongoose=require('mongoose');

mongoose.connect(url);
mongoose.connection.once("open", function(ref) {
  console.log("Connected to mongo server.");
}).on("error", function(err) {
  console.log("Could not connect to mongo server!");
});
