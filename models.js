var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_app11509609:m17jrlsal66tvhsnaun46nam93@ds031877.mongolab.com:31877/heroku_app11509609'|'mongodb://localhost/burgers');

var ingSchema = mongoose.Schema({
    name: String,
    cost: Number
});

var ordSchema = mongoose.Schema({
  customerName: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});

var Ingredient = mongoose.model('Ingredient', ingSchema);
var Order = mongoose.model('Order', ordSchema);

//module.exports = [Ingredient, Order];
exports.Ingredient = Ingredient;
exports.Order = Order;