var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var AppModel = mongoose.model('App', require('./model').App);

//Rest Interface
exports.findAll = function (req, res) {
    return mongoose.findAll(AppModel, req, res);
};
exports.findById = function(req, res){
    return mongoose.findById(AppModel, req, res);
};

exports.save = function (req, res) {
    var app = new AppModel({
        title:req.body.title,
        author:req.body.author,
        releaseDate:req.body.releaseDate,
        keywords: req.body.keywords
    });
    return mongoose.save(app, req, res);
};

exports.update = function(req, res){
    return AppModel.findById(req.params.id, function(err, app){
        app.title = req.body.title;
        app.author = req.body.author;
        app.releaseDate = req.body.releaseDate;
        app.keywords = req.body.keywords;
        return mongoose.update(app, req, res);
    });
};

exports.delete = function(req, res){
    return mongoose.delete(AppModel, req, res);
};