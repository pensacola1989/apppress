var config = require('../../../config');
var mongoose = require('../../../framework/mongoose');

var appSchema = new mongoose.Schema({
    name:String,
    descr:String,
    status:Number,

    createTime:Date,
    updateTime:Date,

    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _subs : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }]
}, config.schemaOptions);
appSchema.virtual('id').get(function() {
    return this._id;
});
exports.App = mongoose.model('app', appSchema);





