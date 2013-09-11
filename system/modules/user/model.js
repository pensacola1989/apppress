var mongoose = require('../../../framework/mongoose');

var User = new mongoose.Schema({
    id: String,
    email:String,
    passwd:String,
    token:String,
    phone:String,
    im:String,
    status:Number,
    createTime:Date,
    updateTime:Date
});
exports.User = User;
