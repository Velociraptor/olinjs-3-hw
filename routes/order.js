var models = require('../models');
//var Order = models.Order;
//var Ingredient = models.Ingredient;

exports.new = function(req, res){
  var ingobjs = models.Ingredient.find({}).exec(function (err, ingobjs) {
  var ings = [];
  ingobjs.forEach(function (ingobj) {
        ings.push(ingobj.name);
        });
  res.render('order',{title:"Place Your Order", ings:ingobjs});
  });
};

exports.create = function(req, res){
  var stuff = req.body;
  var neword = new models.Order(stuff);
  //console.log(neword);
  neword.save(function (err) {
    if (err) {
      return console.log("error we couldn't save your order");}
    //res.send("You have successfully ordered!");
	});
};

exports.list = function(req, res){
  orders = models.Order.find({}).populate('ingredients').exec(function (err, orders) {
  //console.log(orders);
  res.render('orders', {title:"Pending Orders", orders:orders});
  });
};

exports.completed = function(req, res){
  comporder = req.body;
  console.log(req.body);
  console.log(req.body[1]);
  models.Order.remove({'_id':comporder[1]}).exec(function (err, orders) {
  //console.log(orders);
  res.send('okay');
  });
};