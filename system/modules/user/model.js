var config = require('../../../config');
var mongoose = require('../../../framework/mongoose');

var userSchema = new mongoose.Schema({
    email:String,
    passwd:String,
    token:String,
    phone:String,
    im:String,
    status:Number,
    createTime:Date,
    updateTime:Date
});
userSchema.virtual('id').get(function() {
    return this._id;
});
exports.User = mongoose.model('system_user', userSchema);
