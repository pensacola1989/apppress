var mongoose = require('../../../framework/mongoose');
var http = require('http');
var url = require('url');

var App = require('./model').app;
var AppModel = mongoose.model('App', App);

exports.findAll = function (req, res) {
    return AppModel.find(function (err, apps) {
        if (!err) {
            var data = JSON.stringify(apps);
            var params = url.parse(req.url, true);
            if (params.query && params.query.callback) {
                data =  params.query.callback + '(' + data + ')';
            }
            return res.send(data);
        } else {
            return console.log(err);
        }
    });
};
exports.findById = function(req, res){
    return AppModel.findById(req.params.id, function(err, app){
        if(!err){
            var data = JSON.stringify(app);
            var params = url.parse(req.url, true);

            if (params.query && params.query.callback) {
                data =  params.query.callback + '(' + data + ')';
            }
            return res.send(data);
        } else {
            return console.log(err);
        }
    });
};

exports.save = function (req, res) {
    console.log(1111);

    var app = new AppModel({
        title:req.body.title,
        author:req.body.author,
        releaseDate:req.body.releaseDate,
        keywords: req.body.keywords
    });
    app.save(function (err) {
        if (!err) {
            var data = JSON.stringify({success: true});
            var params = url.parse(req.url, true);

            if (params.query && params.query.callback) {
                data =  params.query.callback + '(' + data + ')';
            }

            return res.send(data);
        } else {
            return console.log(err);
        }
    });
    return res.send(app);
};

exports.update = function(req, res){
    return AppModel.findById(req.params.id, function(err, app){
        app.title = req.body.title;
        app.author = req.body.author;
        app.releaseDate = req.body.releaseDate;
        app.keywords = req.body.keywords;
        return app.save(function(err){
            if(!err){
                console.log('app updated');
            } else {
                console.log(err);
            }
            return res.send(app);
        });
    });
};

exports.delete = function(req, res){
    console.log('Deleting app with id: ' + req.params.id);
    return AppModel.findById(req.params.id, function(err, app){
        return app.remove(function(err){
            if(!err){
                console.log('App removed');
                return res.send('');
            } else {
                console.log(err);
            }
        });
    });
};
