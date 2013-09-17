var mongoose = require('../../../framework/mongoose');

var userSchema = new mongoose.Schema({
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
exports.User = mongoose.model('User', userSchema);
