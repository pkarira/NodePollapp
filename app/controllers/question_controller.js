var Question=require("../models/question")

module.exports.add=function(req,res)
{
  var question=new Question({
    text:req.body.text;
    choices=req.body.choices;
  });
  question.save();
  res.send("saved");
}
module.exports.getAll=function(req,res)
{
Question.find({},function(err,docs)
{
  res.send("saved");
});
}
module.exports.votes=function(req,res)
{
Question.findOne({_id:req.body.id}).populate('').exec(function(err,question)
{

});
}
