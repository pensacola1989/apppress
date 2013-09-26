var util = require('../../../../framework/util');
var mongoose = require('../../../../framework/mongoose');

var CmsStore = require('./model').CmsStore;
var CmsStoreCategory = require('./model').CmsStoreCategory;
var CmsStoreProduct = require('./model').CmsStoreProduct;

var service = require('./service');

var Subscription = require('../../subscription/model').Subscription;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(CmsStore, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(CmsStore, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiStore = new CmsStore({
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
    CmsStore.findByIdAndUpdate(
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
    CmsStore.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};

exports.content = function(req, res){
    Subscription.findById(req.query.subId, function (err, sub) {
        CmsStore.findOne({_sub: sub._id}).sort('order').populate('_categories').exec(function (err, store) {
            res.send({ sub: sub, store: store});
        })
    });
};