var mongoose = require('../../../framework/mongoose');

var Keywords = new mongoose.Schema({
    keyword: String
});
exports.Keywords = Keywords;

var App = new mongoose.Schema({
    id: String,
    name:String,
    descr:String,
    status:Number,

    createTime:Date,
    updateTime:Date
});
exports.App = App;



