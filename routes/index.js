/*
 * GET example page.
 */

var mongoose = require('mongoose');

var Product = mongoose.model('Product');
var Category = mongoose.model('Category');

exports.index = function(req, res) {
    Product.find(function(err, products) {
        if (!err) {
            Category.find(function(err, categories) {
                if (!err) {
                    res.render('index', {
                        title: 'Clean Code Lab with Mongoose and Node',
                        year: new Date().getFullYear(),
                        products: products,
                        categories: categories
                    });
                } else {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
};

exports.edit = function(req, res) {
    Product.findById(req.body.productId, function(err, product) {
        console.log('body: ' + JSON.stringify(product));
        res.send(JSON.stringify(product));
    });
};

exports.update = function(req, res, next) {
    var productId = req.body.hddProductId;

    Product.findById(productId, function(err, product) {
        if (product == undefined) {
            product = new Product();
        }

        product.code = req.body.txtCode;
        product.name = req.body.txtName;
        product.category = req.body.ddlCategory;
        product.description = req.body.txtDesc;
        product.price = req.body.txtPrice;
        product.remark = req.body.txtRemark;

        product.save(function(err, product, count) {
            if (err) return next(err);
            res.redirect('/');
        });
    });
};

exports.delete = function(req, res) {
    Product.findById(req.body.productId, function(err, product) {
        product.remove(function(err, product) {
            res.send('The data saved successfully.');
        });
    });
};