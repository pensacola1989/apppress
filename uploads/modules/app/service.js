var mongoose = require('../../../dao/mongoose');
var App = require('./model').app;
var AppModel = mongoose.model('App', App);

exports.findAll = function (req, res) {
    return AppModel.find(function (err, apps) {
        if (!err) {
            return res.send(apps);
        } else {
            return console.log(err);
        }
    });
};
exports.findById = function(req, res){
    return AppModel.findById(req.params.id, function(err, app){
        if(!err){
            return res.send(app);
        } else {
            return console.log(err);
        }
    });
};

exports.save = function (req, res) {
    var app = new AppModel({
        title:req.body.title,
        author:req.body.author,
        releaseDate:req.body.releaseDate,
        keywords: req.body.keywords
    });
    app.save(function (err) {
        if (!err) {
            return console.log('created');
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
