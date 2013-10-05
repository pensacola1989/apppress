var util = require('../../../framework/util');
var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var App = require('./model').App;

//            // Example of retrieve nested data
//            CmsStoreCategory.find({mstore: stores[0].id}).sort('order').exec(function (err, categories) {
//                var categoryIds = [];
//                for (var i = 0; i < categories.length; i++) {
//                    categoryIds[i] = mongoose.Types.ObjectId(categories[i].id);
//                }
//                CmsStoreProduct.find().where('category').in(categoryIds).sort('order').exec(function (err, products) {
//                    res.send({mstore:stores, categories: categories, products: products});
//                });
//            });

//Rest Interface
exports.findAll = function (req, res) {
    App.find({user: req.session.user }).exec(function (err, apps) {
        res.send({app: apps});
    })
};
exports.findById = function(req, res){
    mongoose.findById(App, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    service.createApp(req.body.app.name, req.body.app.descr, req.session.user, function(app) {
        var data = {app: app};
        res.send(data);
    });
};

exports.update = function(req, res){
    App.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.app.name,
            descr: req.body.app.descr,
            updateDate: new Date()
        }, function(){
            res.send({});
        }
    )
};

exports.delete = function(req, res){
    App.findByIdAndRemove(req.params.id, function(){
        res.send({});
    })
};