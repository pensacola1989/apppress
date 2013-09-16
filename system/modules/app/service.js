var mongoose = require('../../../framework/mongoose');
var http = require('http');
var url = require('url');

var App = require('./model').App;
var AppModel = mongoose.model('App', App);

var Subscription = require('./model').Subscription;
var SubscriptionModel = mongoose.model('Subscription', Subscription);

var Module = require('../module/model').Module;
var ModuleModel = mongoose.model('Module', Module);

exports.createApp = function (name, descr, callback) {
    ModuleModel.find().exec(function (err, objs) {
        if (!err) {
            var app = new AppModel({
                name: name,
                descr: descr,
                createDate: new Date()
            });

            var subs = [];
            for (var i = 0; i < objs.length; i++) {
                subs[i] = {code: objs[i].code,  name: objs[i].name, title: objs[i].title, status: 1, order: i, createTime: new Date(), _app: app._id};
            }
            SubscriptionModel.create(subs, function (err, sub) {
                SubscriptionModel.find({ _app: app._id }).exec(function (err, subss) {
                    console.log(subss);
                    for (var i = 0; i < subss.length; i++) {
                        app._subs.push(subss[i]);
                    }
                    app.save(function(){
                        app.set('id', app.get('_id'));
                        callback(app);
                        console.log('Init subs for app successfully!!!');
                    });
                });
            });
        }
    });
//    SubscriptionModel.findOne({ _id: '5236c330e086bbec41000003' }).populate('_app').exec(function (err, sub) {
//        console.log('=1==');
//        console.log(sub);
//        console.log('---');
//    });
//
//    AppModel.findOne({ _id: '5236c330e086bbec41000002' }).populate('_subs').exec(function (err, app) {
//        console.log('=2==');
//        console.log(app);
//        console.log('---');
//    })
};