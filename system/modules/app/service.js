var mongoose = require('../../../framework/mongoose');
var http = require('http');
var url = require('url');

var App = require('./model').App;
var AppModel = mongoose.model('App', App);

exports.newApp = function () {
    var app = new AppModel({
        name: req.body.app.name,
        descr: req.body.app.descr,
        createDate: new Date()
    });
    return app;
};

