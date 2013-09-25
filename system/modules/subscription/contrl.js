var util = require('../../../framework/util');
var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var Subscription = require('./model').Subscription;

//Rest Interface
exports.findAll = function (req, res) {
    Subscription.find({_app: req.query.appId }).sort('-status order').exec(function (err, subs) {
        res.send({subscription: subs});
    })
};
exports.findById = function(req, res){
    mongoose.findById(Subscription, req.params.id, function(obj) {
        res.send({subscription: obj});
    });
};

exports.save = function (req, res) {
    service.createSub(req.body.subscription.name, req.body.subscription.descr, function(subscription) {
        var data = {subscription: subscription};
        res.send(data);
    });
};

exports.update = function(req, res){
    Subscription.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.subscription.name,
            descr: req.body.subscription.descr,
            updateDate: new Date()
        }, function(){
            res.send({});
        }
    )
};

exports.delete = function(req, res){
    Subscription.findByIdAndRemove(req.params.id, function(){
        res.send({});
    })
};

// other interfaces
exports.list = function (req, res) {
    Subscription.find({_app: req.query.appId }).sort('-status order').exec(function (err, subs) {
        res.send(subs);
    })
};
exports.changeOrder = function(req, res){
    service.changeOrder(req.query.newIds, function() {
        res.send({});
    });
};