var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var Video = require('./model').Video;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Video, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Video, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiVideo = new Video({
        name: req.body.mobiVideo.name,
        descr: req.body.mobiVideo.descr,
        createDate: new Date()
    });
    mobiVideo.save(function(){
        mobiVideo.set('id', mobiVideo.get('_id'));
        var data = {mobiVideo: mobiVideo};
        return res.send(data);
    });
};

exports.update = function(req, res){
    Video.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.video.name,
            descr: req.body.video.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    Video.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};