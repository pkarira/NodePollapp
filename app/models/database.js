var url = "mongodb://127.0.0.1:27017/pulkit";
var MongoClient = require('mongodb').MongoClient;
// MongoClient.connect(url, function(err, database) {
// if (err) throw err;
// db=database;
// });
// module.exports=db;
var _db;
module.exports = {
  connectToServer: function( callback ) {
    MongoClient.connect( url, function( err, db ) {
      _db = db;
      return callback( err );
    } );
  },
  getDb: function() {
    return _db;
  }
};
