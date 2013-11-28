var uuid = require('node-uuid');

var util = require('../../framework/util');
var mongoose = require('../../framework/mongoose');
var service = require('./service');

var User =require('./model').User;

//Interface
exports.signonWithToken = function (req, res) {
    var code = 0;

    return User.findOne({token: req.body.token}).exec(function(err, obj){
        //console.log(obj);
        if(!err && obj != null){
            req.session.user = obj._id;
            code = 1;
        } else {
            console.log(err);
        }

        var data = {code: code, data: obj};
        res.send(data);
    });
};

exports.signon = function (req, res) {
    var vo = req.body;
    User.findOne({email: vo.email, passwd: vo.password}).exec(function(err, obj){
        if(!err && obj != null){   // found

            obj.token = uuid.v4();
            obj.updateTime = new Date();
            obj.save(function(){
                req.session.user = obj._id;

                var data = {code: 1, data: obj};
                obj.set('id', obj.get('_id'));
                res.send(data);
            });
        } else {
            var msg = 'The email or password is not valid.';
            var data = {code: 0, msg: msg};
            res.send(data);
        }
    });
};

exports.signup = function (req, res) {
    var vo = req.body;
    if (util.isEmpty(vo.email)) {
        var msg = 'Not a valid email.';
        var data = {code: 0, msg:msg};
        res.send(data);
    }
    User.findOne({email: vo.email}).exec(function(err, obj){
        if(!err && obj == null){   // not exist
            var user = new User({
                email:  vo.email,
                passwd: vo.password,
                token: uuid.v4(),
                phone: '',
                im: '',
                status: 1,
                createTime: new Date()
            });
            User.create(user, function (err, user) {
                req.session.user = user._id;
                var data = {code:1, data: user};
                res.send(data);
            });
        } else {
            var msg = 'Email already exists.';
            var data = {code: 0, msg:msg};
            res.send(data);
        }

    });
};

exports.signout = function (req, res) {
    req.session.user = null;
    var data = {code: 1};
    res.send(data);
};