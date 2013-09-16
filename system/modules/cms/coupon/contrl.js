var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var CouponModel = mongoose.model('Coupon', require('./model').App);

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(CouponModel, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(CouponModel, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var coupon = new CouponModel({
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
    CouponModel.findByIdAndUpdate(
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
    CouponModel.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};