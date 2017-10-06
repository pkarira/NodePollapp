var Question=require("../models/questions");
var Image=require("../models/imageupload");
var jsonWebToken = require('jsonwebtoken');
var fs = require('fs');

function tokenVerification(token)
{
  var s;
  if (token) {
    jsonWebToken.verify(token, "pulkit", function(err, decoded) {
      if (err) {
        s= "Error in Authentication";
      } else {
        s= "Authenticated";
      }
    });
  } else {
    s= "No Auth Token";
  }
  return s;
}
module.exports.add=function(req,res)
{
  verification=tokenVerification(req.headers['x-access-token'])
  if(verification==="Authenticated")
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
}else
res.send(verification)
}
module.exports.image=function(req,res)
{
  verification=tokenVerification(req.headers['x-access-token'])
  if(verification==="Authenticated")
  {
    console.log(req.file.path);
    var image=new Image({
    data : fs.readFileSync(req.file.path),
    contentType : 'image/png'
  });
    image.save(function(err){
      if(err){
        console.log('error in image upload');
      }else{
        console.log('send');
      }
    });
    res.send("saved");
}else
res.send(verification)
}
module.exports.getAll=function(req,res)
{
  verification=tokenVerification(req.cookies.auth)
  console.log(verification)
  if(verification==="Authenticated")
  {
Question.find({},function(err,docs)
{
  res.render('question',{questions:docs});
  // res.send(docs);
});
}
else
res.send(verification)
}
module.exports.vote=function(req,res)
{
  verification=tokenVerification(req.headers['x-access-token'])
  if(verification==="Authenticated")
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
}else
res.send(verification)
}
module.exports.home=function(req,res)
{
  res.render('question');
}
