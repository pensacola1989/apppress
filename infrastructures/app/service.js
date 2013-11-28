var mongoose = require('../../framework/mongoose');
var http = require('http');
var url = require('url');

var App = require('./model').App;
var Subscription = require('../subscription/model').Subscription;
var Component = require('../component/model').Component;

var CmsStore = require('../../components/store/model').CmsStore;
var CmsStoreCategory = require('../../components/store/model').CmsStoreCategory;
var CmsStoreProduct = require('../../components/store/model').CmsStoreProduct;

exports.createApp = function (name, descr, userId, callback) {
    Component.find().exec(function (err, objs) {

        if (!err) {
            var app = new App({
                name: name,
                descr: descr,
                createTime: new Date(),
                updateTime: new Date(),
                user: userId
            });

            var subs = [];
            for (var i = 0; i < objs.length; i++) {
                subs[i] = {code: objs[i].code,  name: objs[i].name, title: objs[i].title, status: 1, order: i, createTime: new Date(), app: app._id};
            }
            Subscription.create(subs, function (err, m1, m2, m3, m4, m5, m6) { // create subs
                app.subscriptions.push(m1,m2,m3,m4,m5,m6);

                CmsStore.create({subscription: m1._id}, function (err, store) {

                    CmsStoreCategory.create({name: 'Phone', picture: '/upload/sample/iPhone5.png', store: store._id}, function (err, category) {
                        store.categories.push(category);
                        store.save(function(){});

                        CmsStoreProduct.create({name: 'iPhone 5s', descr: '', thumb: '/upload/sample/iPhone5.png', price: 5000.00, freight: 50, flatRate: false, order: -1, status: 1, createTime: new Date(), category: category._id}, function (err, product) {
                            category.products.push(product);
                            category.save(function(){});
                        });
                    });
                });
                app.save(function(){
                    callback(app);
                    //console.log('Init subs for app successfully!!!');
                });
            });
        }
    });
//    Subscription.findOne({ _id: '5236c330e086bbec41000003' }).populate('app').exec(function (err, sub) {
//        console.log('=1==');
//        console.log(sub);
//        console.log('---');
//    });
//
//    App.findOne({ _id: '5236c330e086bbec41000002' }).populate('subscriptions').exec(function (err, app) {
//        console.log('=2==');
//        console.log(app);
//        console.log('---');
//    })
};