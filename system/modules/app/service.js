var mongoose = require('../../../framework/mongoose');
var http = require('http');
var url = require('url');

var App = require('./model').App;
var AppModel = mongoose.model('App', App);

var Module = require('../module/model').Module;
var ModuleModel = mongoose.model('Module', Module);

exports.newApp = function () {
    var app = new AppModel({
        name: req.body.app.name,
        descr: req.body.app.descr,
        createDate: new Date()
    });

    ModuleModel.find().exec(function (err, objs) {
        if (!err) {
            for (var i = 0; i < objs.length; i++) {
                objs[i].set('id', objs[i].get('_id'));
            }
        }
    });
};

