var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var UserModel = mongoose.model('User', require('./model').App);

//Interface
exports.signonWithToken = function (req, res) {
    var success = false;

    return UserModel.findOne({token: req.body.token}).exec(function(err, obj){
        if(!err && obj != null){
            success = true;
        } else {
            console.log(err);
        }
        var data = {success: success, data: obj};
        return res.send(data);
    });
};

exports.signon = function (req, res) {
    return UserModel.findOne({email: req.body.email, passwd: req.body.password}).exec(function(err, obj){
        if(!err && obj != null){   // found
            var uuid = require('node-uuid');
            obj.token = uuid.v4();
            obj.updateTime = new Date();
            mongoose.save(obj, function(){
                var data = {success: true, code:"", data: obj};
                return res.send(data);
            });
        } else {
            var code = 'Not found.';
            var data = {success: false, code:code, data: null};
            return res.send(data);
        }
    });
};

exports.signup = function (req, res) {
    return UserModel.findOne({email: req.body.email}).exec(function(err, obj){
        if(!err && obj == null){   // not exist
            var user = new UserModel({
                email:  req.body.email,
                passwd: req.body.password,
                token: '',
                phone: '',
                im: '',
                status: 1,
                createTime: new Date()
            });
            mongoose.save(user, function(){
                var data = {success: true, code:"", data: obj};
                return res.send(data);
            });
        } else {
            var code = 'Email already exists.';
            var data = {success: false, code:code, data: null};
            return res.send(data);
        }

    });
};