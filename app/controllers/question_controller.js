var Question=require("../models/questions")

module.exports.add=function(req,res)
{
  var question=new Question({
    text:req.body.text,
    choices:req.body.choices
  });
  question.save(function(err){
		if(err){
			console.log('error in forming');
		}else{
			console.log('send');
		}
	});
  res.send("saved");
}
module.exports.getAll=function(req,res)
{
Question.find({},function(err,docs)
{
  res.send(docs);
});
}
module.exports.vote=function(req,res)
{
Question.update(
      {_id: req.body.question_id, 'choices._id': req.body.choice_id},
      {'$inc': {
          'choices.$.votes': 1
      }},
      function(err, numAffected) {
        if(err)
        res.send("error");
        else
        res.send("done");//59d51979b44a715e5eb8a4be//59d51979b44a715e5eb8a4c0
      });
}
