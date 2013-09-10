var mongoose = require('../../../framework/mongoose');

var User = new mongoose.Schema({
    email:String,
    passwd:String,
    token:String,
    phone:String,
    im:String,
    status:String,

    updateTime:Date

});
exports.User = User;
