var mongoose = require('../../framework/mongoose');
var service = require('./service');

var Event = require('./model').Event;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Event, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Event, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiEvent = new Event({
        name: req.body.mobiEvent.name,
        descr: req.body.mobiEvent.descr,
        createDate: new Date()
    });
    mobiEvent.save(function(){
        mobiEvent.set('id', mobiEvent.get('_id'));
        var data = {mobiEvent: mobiEvent};
        return res.send(data);
    });
};

exports.update = function(req, res){
    Event.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.event.name,
            descr: req.body.event.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    Event.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};