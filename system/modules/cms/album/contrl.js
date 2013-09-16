var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var AlbumModel = mongoose.model('Album', require('./model').Album);

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(AlbumModel, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(AlbumModel, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiAlbum = new AlbumModel({
        name: req.body.mobiAlbum.name,
        descr: req.body.mobiAlbum.descr,
        createDate: new Date()
    });
    mobiAlbum.save(function(){
        mobiAlbum.set('id', mobiAlbum.get('_id'));
        var data = {mobiAlbum: mobiAlbum};
        return res.send(data);
    });
};

exports.update = function(req, res){
    AlbumModel.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.album.name,
            descr: req.body.album.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    AlbumModel.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};