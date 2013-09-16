var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var ModuleModel = mongoose.model('Module', require('./model').Module);

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(ModuleModel, req, res);
};
exports.findById = function(req, res){
    mongoose.findById(ModuleModel, req, res);
};

exports.save = function (req, res) {
    var module = new ModuleModel({
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
    ModuleModel.findByIdAndUpdate(
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
    ModuleModel.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};