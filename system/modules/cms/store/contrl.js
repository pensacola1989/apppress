var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var StoreModel = mongoose.model('Store', require('./model').Store);

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(StoreModel, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(StoreModel, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiStore = new StoreModel({
        name: req.body.mobiStore.name,
        descr: req.body.mobiStore.descr,
        createDate: new Date()
    });
    mobiStore.save(function(){
        mobiStore.set('id', mobiStore.get('_id'));
        var data = {mobiStore: mobiStore};
        return res.send(data);
    });
};

exports.update = function(req, res){
    StoreModel.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.store.name,
            descr: req.body.store.descr,
            updateDate: new Date()
        }, function(){
            return res.send({});
        }
    )
};

exports.delete = function(req, res){
    StoreModel.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};