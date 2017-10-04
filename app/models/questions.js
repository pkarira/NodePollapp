var mongoose = require('mongoose');
Schema = mongoose.Schema;
var ChoiceSchema = new Schema({
  text:String,
  votes:Number
});
var QuestionSchema = new Schema({
	text: String,
  choices:[ChoiceSchema]
});
module.exports=mongoose.model('questions',QuestionSchema);
