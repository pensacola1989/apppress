var util = require('../../../../framework/util');
var mongoose = require('../../../../framework/mongoose');

var CmsStore = require('./model').CmsStore;
var CmsStoreCategory = require('./model').CmsStoreCategory;
var CmsStoreProduct = require('./model').CmsStoreProduct;

var service = require('./service');

var Subscription = require('../../subscription/model').Subscription;

//Rest Interface
exports.findAll = function (req, res) {
    CmsStore.find({subscription: req.query.subscriptionId}).sort('order').exec(function (err, stores) {
        res.send({mstore:stores});
    });
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
exports.saveCategory = function (req, res) {
    var storeCategory = new CmsStoreCategory({
        name: req.body.category.name,
        mstore: req.body.category.mstore
    });

    storeCategory.save(function(){
        var data = {category: storeCategory};
        return res.send(data);
    });
};
exports.updateCategory = function(req, res){
    CmsStoreCategory.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.category.name
        }, function(){
            res.send({});
        }
    )
};
exports.deleteCategory = function(req, res){
    CmsStoreCategory.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};

exports.findProducts = function(req, res){
    CmsStoreProduct.find({category: req.query.categoryId}).sort('order').exec(function (err, products) {
        return res.send({product: products});
    })
};
exports.saveProduct = function (req, res) {
    var storeProduct = new CmsStoreProduct({
        name: req.body.product.name,
        descr: req.body.product.descr,
        price: req.body.product.price,
        freight: req.body.product.freight,
        flatRate: req.body.product.flatRate,
        status: 1,
        createTime: new Date(),
        category: req.body.product.category
    });

    storeProduct.save(function(){
        var data = {product: storeProduct};
        return res.send(data);
    });
};
exports.updateProduct = function(req, res){
    CmsStoreProduct.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.product.name,
            descr: req.body.product.descr,
            price: req.body.product.price,
            freight: req.body.product.freight,
            flatRate: req.body.product.flatRate,
            status: 1,
            createTime: new Date()
        }, function(){
            res.send({});
        }
    )
};
exports.deleteProduct = function(req, res){
    CmsStoreProduct.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};