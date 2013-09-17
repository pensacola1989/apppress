var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var Coupon = require('./model').Coupon;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Coupon, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Coupon, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var coupon = new Coupon({
        name: req.body.coupon.name,
        descr: req.body.coupon.descr,
        createDate: new Date()
    });
    coupon.save(function(){
        coupon.set('id', coupon.get('_id'));
        var data = {coupon: coupon};
        return res.send(data);
    });
};

exports.update = function(req, res){
    Coupon.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.coupon.name,
            descr: req.body.coupon.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    Coupon.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};