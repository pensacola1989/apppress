var util = require('../../../../framework/util');
var mongoose = require('../../../../framework/mongoose');

var Store = require('./model').Store;
var service = require('./service');

var Subscription = require('../../subscription/model').Subscription;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Store, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Store, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiStore = new Store({
        name: req.body.mobiStore.name,
        descr: req.body.mobiStore.descr,
        createDate: new Date()
    });
    mobiStore.save(function(){
        mobiStore.set('id', mobiStore.get('_id'));
        var data = {mobiStore: mobiStore};
        return res.send(data);
    });
};

exports.update = function(req, res){
    Store.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.store.name,
            descr: req.body.store.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    Store.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};

exports.content = function(req, res){
    Subscription.findById(req.query.subId, function (err, sub) {
        util.addId([sub]);
        Store.findOne({_sub: sub._id}).sort('order').populate('_products').exec(function (err, store) {
            util.addId([store]);
            util.addId(store._products);
            res.send({ sub: sub, store: store});
            console.log(store);
        })
    });
};