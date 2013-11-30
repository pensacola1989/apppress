var mongoose = require('../../framework/mongoose');
var service = require('./service');

var Component = require('./model').Component;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Component, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Component, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var component = new Component({
        name: req.body.component.name,
        descr: req.body.component.descr,
        createDate: new Date()
    });
    component.save(function(){
        component.set('id', component.get('_id'));
        var data = {component: component};
        return res.send(data);
    });
};

exports.update = function(req, res){
    Component.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.component.name,
            descr: req.body.component.descr,
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