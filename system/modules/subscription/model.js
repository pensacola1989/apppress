var mongoose = require('../../../framework/mongoose');

var Keywords = new mongoose.Schema({
    keyword: String
});
exports.Keywords = Keywords;

var Subscription = new mongoose.Schema({
    id: String,

    // from module
    code: String,
    name: String,
    title: String,

    order: String,
    status: Number,

    createTime: Date,
    updateTime: Date
});
exports.Subscription = Subscription;



