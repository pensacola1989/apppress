var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var UserModel = mongoose.model('User', require('./model').App);

//Interface
exports.signonWithToken = function (req, res) {
    var success = false;

    console.log(req.body.token);
//    return UserModel.findById(req.params.id, function(err, obj){
//        if(!err){
//            success = true;
//            console.log('findById success');
//        } else {
//            console.log(err);
//        }
//        var data = jsonpMethod(req, {success: success, data: model});
//        return res.send(data);
//    });
};