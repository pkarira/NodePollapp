var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var UserSchema = new Scheme({
  name:String,
  password:String
})
module.exports=mongoose.model('Users',UserSchema);
