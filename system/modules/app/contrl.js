var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var AppModel = mongoose.model('App', require('./model').App);

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(AppModel, function(objs) {res.send({app: objs})});
};
exports.findById = function(req, res){
    mongoose.findById(AppModel, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var app = service.newApp();
    app.save(function(){
        app.set('id', app.get('_id'));
        var data = {app: app};
        return res.send(data);
    });
};

exports.update = function(req, res){
    AppModel.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.app.name,
            descr: req.body.app.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    AppModel.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};