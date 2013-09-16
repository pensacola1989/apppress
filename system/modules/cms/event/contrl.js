var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var EventModel = mongoose.model('Event', require('./model').Event);

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(EventModel, req, res);
};
exports.findById = function(req, res){
    mongoose.findById(EventModel, req, res);
};

exports.save = function (req, res) {
    var mobiEvent = new EventModel({
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
    EventModel.findByIdAndUpdate(
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
    EventModel.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};