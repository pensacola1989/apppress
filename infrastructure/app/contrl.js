var config = require('../../config');
var util = require('../../framework/util');
var mongoose = require('../../framework/mongoose');
var service = require('./service');

var App = require('./model').App;
var Subscription = require('../subscription/model').Subscription;

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
    //App.find({user: req.session.user }).exec(function (err, apps) {
    App.find().sort({'updateTime': -1}).exec(function (err, apps) {
        res.send({code: 1, data: apps});
    })
};
exports.findById = function(req, res){
    mongoose.findById(App, req.params.id, function(obj) {
        Subscription.find({app: obj.id}).sort('order').exec(function (err, subs) {
            res.send({code: 1, data: {app: obj, subs: subs}});
        });
    });
};

exports.save = function (req, res) {
    service.createApp(req.body.name, req.body.descr, req.session.user, function(app) {
        var data = {app: app};
        res.send(data);
    });
};

exports.update = function(req, res){
    App.findByIdAndUpdate(
        req.body.id,
        {
            name: req.body.name,
            descr: req.body.descr,
            updateTime: new Date()
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