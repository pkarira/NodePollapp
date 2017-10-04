var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var ChoiceSchema = new Scheme({
  text:String,
  votes:Number
})
var QuestionSchema = new Schema({
	text: String,
  choices=[ChoiceSchema]
});
module.exports=mongoose.model('Question',QuestionSchema);
