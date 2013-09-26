var util = require('../../../../framework/util');
var mongoose = require('../../../../framework/mongoose');

var CmsStore = require('./model').CmsStore;
var CmsStoreCategory = require('./model').CmsStoreCategory;
var CmsStoreProduct = require('./model').CmsStoreProduct;

var service = require('./service');

var Subscription = require('../../subscription/model').Subscription;

//Rest Interface
exports.findAll = function (req, res) {

    CmsStore.find({subscription: req.query.subId}).sort('order').exec(function (err, stores) {
        res.send({mstore:stores});
    });

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

};
exports.findById = function(req, res){
    mongoose.findById(CmsStore, req.params.id, function(obj) {
        res.send({mstore: obj});
    });
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

exports.findCategories = function(req, res){
    console.log(req.query);
    CmsStoreCategory.find({mstore: req.query.mstoreId}).sort('order').exec(function (err, categories) {
        return res.send({category: categories});
    })
};
exports.findProducts = function(req, res){
    console.log(req.query);
    CmsStoreProduct.find({category: req.query.categoryId}).sort('order').exec(function (err, products) {
        return res.send({product: products});
    })
};


//exports.content = function(req, res){
//    Subscription.findById(req.query.subId, function (err, sub) {
//        CmsStore.findOne({subscription: sub._id}).sort('order').populate('categories').exec(function (err, store) {
//            CmsStoreCategory.populate(store.categories, {path:'products'}, function(err, data){
//                    //console.log(store.categories[0].products[0].name);
//                    res.send({ subscription: sub, store: store});
//                }
//            );
//        })
//    });
//};