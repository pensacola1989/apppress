var mongoose = require('../../../framework/mongoose');

var Subscription = new mongoose.Schema({
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
exports.Subscription = Subscription;

var App = new mongoose.Schema({
    id: String,
    name:String,
    descr:String,
    status:Number,

    createTime:Date,
    updateTime:Date
});
exports.App = App;



