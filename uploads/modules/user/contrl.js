var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var UserModel = mongoose.model('User', require('./model').App);

//Interface
exports.signonWithToken = function (req, res) {
    var success = false;

    return UserModel.findOne({token: req.body.token}, function(err, obj){
        if(!err && obj != null){
            success = true;
        } else {
            console.log(err);
        }
        console.log(obj);
        var data = {success: success, data: obj};
        return res.send(data);
    });
};

exports.signup = function (req, res) {
    var success = false;
    var code = '';

    return UserModel.findOne({email: req.body.email}, function(err, obj){
        if(!err && obj == null){   // not exist
            var user = new UserModel({
                email:  req.body.email,
                passwd: req.body.password,
                token: '',
//                phone: req.body.phone,
//                im: req.body.im,
                status: 1,

                updateTime: new Date()
            });
            mongoose.save(user, req, res);

            success = true;
        } else {
            success = false;
            code = 'Email already exists.';
        }
        var data = {success: success, code:code, data: obj};
        return res.send(data);
    });
};