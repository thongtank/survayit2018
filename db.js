var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Product = new Schema({
    code: String,
    name: String,
    category: String,
    description: String,
    price: String,
    remark: String,
    __v: Number
});

var Category = new Schema({
    name: String,
    __v: Number
});

mongoose.model('Product', Product, 'Product');
mongoose.model('Category', Category, 'Category');

// Mongoose connection to MongoDB
mongoose.connect('mongodb://root:489329@ds043991.mlab.com:43991/itsurvay', function(error) {
    if (error) {
        console.log(error);
    }
});