var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var Module = require('./model').Module;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Module, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Module, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var module = new Module({
        name: req.body.module.name,
        descr: req.body.module.descr,
        createDate: new Date()
    });
    module.save(function(){
        module.set('id', module.get('_id'));
        var data = {module: module};
        return res.send(data);
    });
};

exports.update = function(req, res){
    Module.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.module.name,
            descr: req.body.module.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    Module.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};