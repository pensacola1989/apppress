var util = require('../../framework/util');
var mongoose = require('../../framework/mongoose');
var CmmPicture = require('../../framework/picture').CmmPicture;

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
    CmsStoreCategory.find({mstore: req.query.mstoreId}).sort('order').exec(function (err, categories) {
        return res.send({category: categories});
    })
};
exports.saveCategory = function (req, res) {
    var storeCategory = new CmsStoreCategory({
        name: req.body.category.name,
        picture: req.body.category.picture,
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
            name: req.body.category.name,
            picture: req.body.category.picture
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
        var productIds = [];
        for (var i = 0; i < products.length; i++) {
            productIds[i] = products[i].id;
        }
        CmmPicture.find().where('pid').in(productIds).sort('order').exec(function (err, pictures) {
            res.send({product:products, pictures: pictures});
        });
    });
};
exports.saveProduct = function (req, res) {
    var pictureUrls = req.body.product.pictureStr.split(',');

    var storeProduct = new CmsStoreProduct({
        name: req.body.product.name,
        descr: req.body.product.descr,
        price: req.body.product.price,
        freight: req.body.product.freight,
        flatRate: req.body.product.flatRate,
        thumb: pictureUrls[0],
        status: 1,
        createTime: new Date(),
        category: req.body.product.category
    });

    var pictures = [];
    for(var i = 0; i < pictureUrls.length; i++) {
        pictures[i] = {pid: storeProduct._id, src: pictureUrls [i]};
    }

    CmmPicture.create(pictures, function (err) {
        for (var i=1; i<arguments.length; i++) {
            if (arguments[i] != null) {
                storeProduct.pictures.push(arguments[i]);
            }
        }
        storeProduct.save(function(){
            var data = {product: storeProduct};
            return res.send(data);
        });
    });
};
exports.updateProduct = function(req, res){
    var pictureUrls  = req.body.product.pictureStr.split(',');

    CmsStoreProduct.findById(req.params.id, function (err, storeProduct) {
        storeProduct.name = req.body.product.name;
        storeProduct.descr = req.body.product.descr;
        storeProduct.price = req.body.product.price;
        storeProduct.freight = req.body.product.freight;
        storeProduct.flatRate = req.body.product.flatRate;
        storeProduct.thumb = pictureUrls [0];
        storeProduct.status = 1;
        storeProduct.createTime = new Date();

        var pictures = [];
        for(var i = 0; i < pictureUrls.length; i++) {
            pictures[i] = {pid: storeProduct._id, src: pictureUrls[i]};
        }

        CmmPicture.find().where('pid', storeProduct._id).exec(function (err, docs) {
            docs.forEach( function (doc) {
                doc.remove();
            });

            CmmPicture.create(pictures, function (err) {
                storeProduct.pictures = [];
                for (var i = 1; i < arguments.length; i++) {
                    if (arguments[i] != null) {
                        storeProduct.pictures.push(arguments[i]);
                    }
                }
                storeProduct.save(function(){
                    res.send({});
                });
            });
        });
    });
};
exports.deleteProduct = function(req, res){
    CmsStoreProduct.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};