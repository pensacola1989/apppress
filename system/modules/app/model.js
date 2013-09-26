var config = require('../../../config');
var mongoose = require('../../../framework/mongoose');

var appSchema = new mongoose.Schema({
    name:String,
    descr:String,
    status:Number,

    createTime:Date,
    updateTime:Date,

    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'system_user' },
    _subs : [{ type: mongoose.Schema.Types.ObjectId, ref: 'app_subscription' }]
}, config.schemaOptions);
appSchema.virtual('id').get(function() {
    return this._id;
});
exports.App = mongoose.model('app', appSchema);





