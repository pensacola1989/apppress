var config = require('../../../config');
var util = require('../../../framework/util');
var mongoose = require('../../../framework/mongoose');

var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var mkdirp = require('mkdirp');

exports.upload = function(req, res){
    var scrName =  req.files.files[0].name;
    var scrFullPath =  req.files.files[0].path;

    var reg = /(\.|\/)(gif|jpe?g|png)$/i;
    if (!reg.test(scrName)) {
        console.log(scrName + ' is not a valid file type.');
        try { throw new Error("Stopping file upload."); }
        catch (e) {
            fs.unlink(scrFullPath);
            res.send({code:0});
        }
    }

    var uploadDir = config.web_root + 'upload/' + util.formatDate(new Date(),'yyyy-MM-dd');
    if(!path.existsSync(uploadDir)){
        mkdirp(uploadDir, function (err) {
            if (err) console.error(err)
            saveImg(req, res);
        });
    } else {
        saveImg(req, res);
    }
};

var saveImg = function(req, res) {
    var scrFullPath =  req.files.files[0].path;
    var distFilePath = 'upload/' + util.formatDate(new Date(),'yyyy-MM-dd') + '/' + uuid.v4() + '.png';

    var gm = require('gm');
    gm(scrFullPath)
        .resize(1000, 1000)
        .autoOrient()
        .write(config.web_root + distFilePath, function (err) {
            fs.unlink(scrFullPath);
            res.send({code: 1, filePath: distFilePath});
        });
}
