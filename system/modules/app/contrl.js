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
    console.log(req.body.app);

    var app = new AppModel({
        name: req.body.app.name,
        descr: req.body.app.descr,
        createDate: new Date()
    });
    return mongoose.save(app, function(){
        app.set('id', app.get('_id'));
        var data = {app: app};
        return res.send(data);
    });
};

exports.update = function(req, res){
    return AppModel.findById(req.params.id, function(err, app){
        console.log('===');
        console.log(app);
        console.log(req.body.app);
        console.log('---');
        app.name = req.body.app.name;
        app.descr = req.body.app.descr;
        app.updateDate = new Date();
        return mongoose.update(app, function(){
            app.set('id', app.get('_id'));
            var data = {app: app};
            return res.send(data);
        });
    });
};

exports.delete = function(req, res){
    return mongoose.delete(AppModel, req, res);
};