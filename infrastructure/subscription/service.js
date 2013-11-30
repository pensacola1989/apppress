var mongoose = require('../../framework/mongoose');
var http = require('http');
var url = require('url');

var App = require('./model').App;
var Subscription = require('./model').Subscription;
var Module = require('../component/model').Module;

exports.createSub = function (name, descr, callback) {
//    Module.find().exec(function (err, objs) {
//        if (!err) {
//            var app = new App({
//                name: name,
//                descr: descr,
//                createDate: new Date()
//            });
//
//            var subs = [];
//            for (var i = 0; i < objs.length; i++) {
//                subs[i] = {code: objs[i].code,  name: objs[i].name, title: objs[i].title, status: 1, order: i, createTime: new Date(), app: app._id};
//            }
//            Subscription.create(subs, function (err, sub) {
//                Subscription.find({ app: app._id }).exec(function (err, subss) {
//                    console.log(subss);
//                    for (var i = 0; i < subss.length; i++) {
//                        app.subscriptions.push(subss[i]);
//                    }
//                    app.save(function(){
//                        app.set('id', app.get('_id'));
//                        callback(app);
//                        console.log('Init subs for app successfully!!!');
//                    });
//                });
//            });
//        }
//    });
};
exports.changeOrder = function (newIds, callback) {
    console.log(newIds);
    var arr = newIds.split(',');
    for(var i = 0; i< arr.length; i++){
        var id = arr[i];
        Subscription.update({ _id: id }, { order: i }).exec();
    }

    callback();
};