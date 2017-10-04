var url = "mongodb://127.0.0.1:27017/pulkit";
var MongoClient = require('mongodb').MongoClient;
var mongoose=require('mongoose');
console.log("in database");
var _db;

mongoose.connect(url);
mongoose.connection.once("open", function(ref) {
  console.log("Connected to mongo server.");
}).on("error", function(err) {
  console.log("Could not connect to mongo server!");
});


// module.exports = {
//   connectToServer: function( callback ) {
//     MongoClient.connect( url, function( err, db ) {
//       _db = db;
//       return callback( err );
//     } );
//   },
//   getDb: function() {
//     return _db;
//   }
// };
