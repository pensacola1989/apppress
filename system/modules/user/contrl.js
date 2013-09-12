var uuid = require('node-uuid');

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
        res.send(data);
    });
};

exports.signon = function (req, res) {
    UserModel.findOne({email: req.body.email, passwd: req.body.password}).exec(function(err, obj){
        if(!err && obj != null){   // found

            obj.token = uuid.v4();
            obj.updateTime = new Date();
            obj.save(function(){
                var data = {success: true, code:"", data: obj};
                res.send(data);
            });
        } else {
            var code = 'Not found.';
            var data = {success: false, code:code, data: null};
            res.send(data);
        }
    });
};

exports.signup = function (req, res) {
    UserModel.findOne({email: req.body.email}).exec(function(err, obj){
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
            user.save(function(){
                var data = {success: true, code:"", data: obj};
                res.send(data);
            });
        } else {
            var code = 'Email already exists.';
            var data = {success: false, code:code, data: null};
            res.send(data);
        }

    });
};