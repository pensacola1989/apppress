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
            app.save(function(){
                var subs = [];
                for (var i = 0; i < objs.length; i++) {
                    subs[i] = {code: objs[i].code,  name: objs[i].name, title: objs[i].title, status: 1, order: i, createTime: new Date(), _app: app._id};
                }

                SubscriptionModel.create(subs, function (err, sub) {
                    if (err) return handleError(err);
//                        SubscriptionModel
//                            .findOne({ _id: '5236bc732d2faf5452000007' }).populate('_app').exec(function (err, sub) {
//                            console.log(sub);
//                        });
                        console.log('Init subs for app successfully!!!');
                    }
                )

                app.set('id', app.get('_id'));
                callback(app);
            });
        }
    });
};