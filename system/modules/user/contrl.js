var uuid = require('node-uuid');

var mongoose = require('../../../framework/mongoose');
var service = require('./service');

var User =require('./model').User;

//Interface
exports.signonWithToken = function (req, res) {
    var success = false;

    return User.findOne({token: req.body.token}).exec(function(err, obj){
        if(!err && obj != null){
            req.session.user = obj._id;
            success = true;
        } else {
            console.log(err);
        }

        var data = {success: success, data: obj};
        res.send(data);
    });
};

exports.signon = function (req, res) {
    User.findOne({email: req.body.email, passwd: req.body.password}).exec(function(err, obj){
        if(!err && obj != null){   // found

            obj.token = uuid.v4();
            obj.updateTime = new Date();
            obj.save(function(){
                req.session.user = obj._id;

                var data = {success: true, code:"", data: obj};
                obj.set('id', obj.get('_id'));
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
    User.findOne({email: req.body.email}).exec(function(err, obj){
        if(!err && obj == null){   // not exist
            var user = new User({
                email:  req.body.email,
                passwd: req.body.password,
                token: '',
                phone: '',
                im: '',
                status: 1,
                createTime: new Date()
            });
            User.create(user, function (err, user) {
                req.session.user = user._id;
                var data = {success: true, code:"", data: user};
                res.send(data);
            });
        } else {
            var code = 'Email already exists.';
            var data = {success: false, code:code, data: null};
            res.send(data);
        }

    });
};