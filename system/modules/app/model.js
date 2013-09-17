var mongoose = require('../../../framework/mongoose');

var subscriptionSchema = new mongoose.Schema({
    id: String,
    // from module
    code: String,
    name: String,
    title: String,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date,

    _app: [{ type: mongoose.Schema.Types.ObjectId, ref: 'App' }]
});
exports.Subscription = mongoose.model('Subscription', subscriptionSchema);

var appSchema = new mongoose.Schema({
    id: String,
    name:String,
    descr:String,
    status:Number,

    createTime:Date,
    updateTime:Date,

    _subs : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }]
});
exports.App = mongoose.model('App', appSchema);





