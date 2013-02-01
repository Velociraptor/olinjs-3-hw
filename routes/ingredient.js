var models = require('../models');

exports.new = function(req, res){
  res.render('ingredient',{title:"Make a New Ingredient"});
};

exports.create = function(req, res){
  var params = req.body;
  var newing = new models.Ingredient(params);
  newing.save(function (err) {
    if (err) {
      return console.log("error we couldn't save your ingredient");}
    res.send("You made a new ingredient!");
	});
};