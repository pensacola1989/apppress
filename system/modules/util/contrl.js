var config = require('../../../config');
var util = require('../../../framework/util');
var mongoose = require('../../../framework/mongoose');

var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var mkdirp = require('mkdirp');

var uploadDir = config.web_root + 'upload/' + util.formatDate(new Date(),'yyyy-MM-dd') + '/';

exports.upload = function(req, res){
    req.form.on('progress',function(bytesReceived, bytesExpected){
        res.send({loaded: bytesReceived, total: bytesExpected});
    });
    req.form.on('end',function(){
        if(!path.existsSync(uploadDir)){
            mkdirp(uploadDir, function (err) {
                if (err) console.error(err)
                saveImg(req, res);
            });
        } else {
            saveImg(req, res);
        }
    });
};

var saveImg = function(req, res) {
    var scrName =  req.files.files[0].path;
    var distName = uploadDir + uuid.v4() + '.png';
    var gm = require('gm');
    gm(scrName)
        .resize(1000, 1000)
        .autoOrient()
        .write(distName, function (err) {
            fs.unlink(scrName);
            res.send({code: 1});
        });
}
