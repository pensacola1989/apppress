var url = require('url');

var config = require('../config');

var mongoose = require('mongoose');
mongoose.connect(config.db);
exports = module.exports = mongoose;

var jsonpMethod = function (req, data) {
    var params = url.parse(req.url, true);
    if (params.query && params.query.callback) {
        data =  params.query.callback + '(' + JSON.stringify(data) + ')';
    }
    return data;
};

exports.findAll = function (model, req, res) {
    return model.find(function (err, objs) {
        if (!err) {
            console.log('findAll success');
        } else {
            console.log('findAll fail');
            console.log(err);
        }

        for (var i = 0; i < objs.length; i++) {
            objs[i].set('id', objs[i].get('_id'));
        }
        return res.send({app: objs});
    });
};

exports.findById = function(model, req, res){
    var success = false;
    return model.findById(req.params.id, function(err, obj){
        if(!err){
            success = true;
            console.log('findById success');
        } else {
            console.log('findById fail');
            console.log(err);
        }
        obj.set('id', obj.get('_id'));
        return res.send({app: obj});
    });
};