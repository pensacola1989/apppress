var mongoose = require('../../../../framework/mongoose');
var service = require('./service');

var Store = require('./model').Store;

//Rest Interface
exports.findAll = function (req, res) {
    mongoose.findAll(Store, function(objs) {res.send({app: objs});});
};
exports.findById = function(req, res){
    mongoose.findById(Store, req.params.id, function(obj) {res.send({app: obj});});
};

exports.save = function (req, res) {
    var mobiStore = new Store({
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
    Store.findByIdAndUpdate(
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
    Store.findByIdAndRemove(req.params.id, function(){
        return res.send({});
    })
};