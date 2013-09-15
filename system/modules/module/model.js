var mongoose = require('../../../framework/mongoose');

var Keywords = new mongoose.Schema({
    keyword: String
});
exports.Keywords = Keywords;

var Module = new mongoose.Schema({
    id: String,
    code: String,
    name: String,
    title: String,
    descr: String,
    status: Number,

    createTime: Date,
    updateTime: Date
});
exports.Module = Module;



